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
        
        stage('Install Dependencies') {
            steps {
                // Use full path to the pnpm binary since we're using NVM for installing and managing node,
                // and it doesn't put pnpm to path
                sh 'pnpm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'pnpm run build'
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
        
    }
}
