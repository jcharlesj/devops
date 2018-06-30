#!groovy
// These classes need to be authorized using jenkins script approval
// http://your.jenkins.host/scriptApproval/
import groovy.io.FileType
import groovy.json.JsonOutput
import java.nio.file.Files
import jenkins.model.Jenkins

// vim: tabstop=2 shiftwidth=2 softtabstop=2 expandtab cc=80 ft=groovy
def nodeLabel = 'localhost'
def githubCredentials = 'charles'
def results_dir = ''

// Remove slashes from branch name (feature, hotfix...)
buildContainerName = buildContainerName.replaceAll("/", "_");
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

node(nodeLabel) {//start node
  timestamps {//start timestamps
    ansiColor('xterm') {//start ansicolor
      // some tools could fail if no TERM is defined
      env.TERM = env.TERM ?: 'xterm-color'
      try {
/*---------------------------------------------------------- STAGE CHECKOUT --*/
        stage("Checkout") { //start stage
          echo "testing 1 2 3"
          }
      }
  }
}
