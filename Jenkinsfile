pipeline {
  agent none
  options { timeout(time: 30, unit: 'MINUTES') }
  stages {
    stage('Qualidade') {
      agent { docker { image 'node:22-alpine' } }
      steps {
        sh 'npm ci'
        sh 'npm run lint'
        sh 'npm test'
      }
    }
    stage('Scan de segredos') {
      agent { docker { image 'zricethezav/gitleaks:v8.28.0' } }
      steps { sh 'gitleaks git --no-banner --redact --exit-code 1' }
    }
    stage('Avaliação do prompt') {
      when {
        anyOf {
          changeset 'prompts/**'
          changeset 'eval/**'
          branch 'main'
        }
      }
      agent { docker { image 'node:22-alpine' } }
      environment {
        EVAL_PROVIDER = 'fixture'
        EVAL_MIN = '0.90'
      }
      steps {
        sh 'npm ci'
        sh 'npm run eval'
      }
    }
  }
  post {
    success { echo 'Quality gate aprovado.' }
    failure { echo 'Quality gate reprovado: revise prompt, código ou conjunto dourado.' }
  }
}
