pipeline {
    agent {
        label 'default'
    }
    
    environment {
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
                sh 'rm -rf ali.viation/'
                sh 'git clone https://github.com/Mys7erio/ali.viation'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use full path to the pnpm binary since we're using NVM for installing and managing node,
                // and it doesn't put pnpm to path
                sh 'cd ali.viation && pnpm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'cd ali.viation && pnpm run build'
            }
        }

        stage('Archive') {
            steps {
                // Create tar for source code
                sh 'tar czvf source.tar.gz ali.viation/dist'
                archiveArtifacts artifacts: 'source.tar.gz', allowEmptyArchive: false
            }
        }
        
    }
}
