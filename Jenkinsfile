#!groovy
// These classes need to be authorized using jenkins script approval
// http://your.jenkins.host/scriptApproval/
import groovy.io.FileType
import groovy.json.JsonOutput
import java.nio.file.Files
import jenkins.model.Jenkins

// vim: tabstop=2 shiftwidth=2 softtabstop=2 expandtab cc=80 ft=groovy
def nodeLabel = 'local'
def githubCredentials = 'charles'
def results_dir = ''

// Remove slashes from branch name (feature, hotfix...)
/*---------------------------------------------------------- JOB PROPERTIES --*/
/* Only keep the 5 most recent builds. */
properties([
  buildDiscarder(
    logRotator(
      artifactDaysToKeepStr: '',
      artifactNumToKeepStr: '', ,
      daysToKeepStr: '5',
      numToKeepStr: '5'),
    ),
])
try {
node(nodeLabel) {//start node
  timestamps {//start timestamps
    ansiColor('xterm') {//start ansicolor
      echo "Testing 1 2 3"
      stage(Sourcecode_Checkout) {
        echo "code checkout"
      }       
      stage(Build) {
        echo "code is in build stage"
        echo "make build"
      }
      stage(unittest) {
        echo "code is in unittest stage"
        echo "make test"
        step(coverity) {
          echo "cov-analysis.sh"
        }      
      }
      stage(sonaranalysis) {
        echo "Load sonar.properties"
      }      
    }
  }
}
}
catch (e) {
  echo "Error caught"
}
finally {
 echo "cleanup is in process" 
}
