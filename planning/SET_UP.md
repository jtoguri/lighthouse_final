# Work in progress instructions

## Instructions to set up a local version of project for development

1. Clone the repo locally `git clone git@github.com:jtoguri/lighthouse_final.git`

1. Change into the lighthouse_final directory `cd lighthouse_final`

1. Install the dependencies `npm i`

1. Run the server and client in seperate terminal windows

## Instructions to set up a local database

1. Create the psql user

1. Create the psql database with the user as the owner

1. Copy .env.example to a local .env, make necessary changes

1. Run the dbreset.js file to seed the database

## Instructions for creating merge requests

1. git add

1. git commit 

1. git push -u origin <branch>

1. create PR on Github

1. PR is approved and merged

1. git checkout main

1. git pull

## Instructions for creating a new branch

1. git checkout -b <branch_name>, try to maintain branch naming
convention we agree on

1. this could just be follow merge instructions

1. git push -u origin <branch_name>

## Instructions for creating a local version of a remote branch
