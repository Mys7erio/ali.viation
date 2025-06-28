pipeline {
    agent {
        label 'default'
    }
    
    environment {
        ENV = ''
        PATH = "/home/ubuntu/.nvm/versions/node/v22.16.0/bin:${env.PATH}"
    }
    
    stages {
        // stage('Get Environment Info') {
        //     steps {
        //         sh 'echo $PATH'
        //         sh 'which node || echo "node not found"'
        //         sh 'which npm || echo "npm not found"'
        //         sh 'which pnpm || echo "pnpm not found"'
        //     }
        // }
        
        stage('Clone repo') {
            steps {
                checkout scmGit(
                    branches: [[name: '*/main']],
                    extensions: [perBuildTag()],
                    userRemoteConfigs: [[url: 'https://github.com/Mys7erio/ali.viation']]
                )
            }
        }
        
        stage('Install Dependencies and Build Project') {
            steps {
                withCredentials([string(credentialsId: 'VITE_GRAFANA_FARO_API_KEY', variable: 'API_KEY')]) {
                    sh 'pnpm install'
                    sh 'VITE_GRAFANA_FARO_API_KEY=$API_KEY pnpm run build'
                }
            }
        }
        
        stage('Archive') {
            steps {
                // Create tar for source code
                sh 'tar czvf source.tar.gz dist'
                archiveArtifacts artifacts: 'source.tar.gz', allowEmptyArchive: false
            }
        }

        stage('Create Docker Image - Multi Arch') {
            steps {
                script {
                    def commithash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                    env.TAG = commithash
                }
                sh "echo 'Tagging latest image with tag: ${env.TAG}'"
                
                withCredentials(
                    [usernamePassword(
                        credentialsId: 'dockerhub-creds-271122',
                        passwordVariable: 'PASS',
                        usernameVariable: 'USER')]
                ) {
                    // Dockerhub login
                    echo "Logging in to Dockerhub using credentials for $USER"
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    
                    sh "docker buildx bake ci-pipeline --push"
                    sh 'docker image ls'
                    
                    // Logout from Dockerhub
                    sh "docker logout"
                    echo "Dockerhub logout successful"
                }
            }
        }

        // This step triggers another Jenkins pipeline named ali.viation-manifests 
        // which is in-charge of updating the manifests and pushing to github.
        stage('Update manifests') {
            steps {
                build wait: false,
                propagate: false,
                job: 'ali.viation-manifests',
                parameters: [string(name: 'TAG', value: env.TAG)]
            }
        }
        
    } // stages
} // pipeline
