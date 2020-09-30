---
path: "/circleci"
date: "2020-09-30"
title: "CircleCI"
tags: ['CircleCI']
excerpt: "Notes on CircleCI"
---

CircleCI is a very interesting topic!

It is a platform / product for [Continuous Integration and Continuous Delivery](ci_cd).

It integrates with Github (and Github Enterprise) and Bitbucket. (i.e. Not compatible with [Gitlab](gitlab), which has its own workflow)

# Setup

2 Steps:

1. Presence of `.circleci/config.yml` file in Github repo 
1. "Set Up Project" for that repo on [app.circleci.com](https://app.circleci.com/)

# Config.yml File

Varies depending on complexity of application

[Configuration Reference](https://circleci.com/docs/2.0/configuration-reference/)

Generally a good structure to list out 'jobs' (tasks) at the top and workflows (jobs to perform) below

```yml
version: 2.1
jobs:
    build-and-push-docker-image:
        docker:
            - image: cimg/base:stable-18.04
        steps:
            - checkout
            - setup_remote_docker
            - run:
                name: Build Docker Image
                command: |
                    ls -lah ./
                    echo '^^^ ls current working directory ^^^'
                    docker build -t docker-repository/image-name .
            - run:
                name: Push To Dockerhub
                command: |
                    docker build -t docker-repository/image-name .
                    echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USERNAME --password-stdin
                    docker push docker-repository/image-name
workflows:
    update-docker-image:
        jobs:
            - build-and-push-docker-image
```

## Isolating Git Branches

**Use Cases:** 
- Deploying to a production environment, staging environment, and testing environment based on git branch
- Not wasting resources trying to test / deploy branches that are for development / breaking changes

In `config.yml`, add `filters:` property to jobs that should only run when code is committed to specific branches

```yml
workflows:
    update-docker-image:
        jobs:
            - build-and-push-docker-image:
                filters:
                    branches:
                        only: main
    update-production-docker-image:
        jobs:
            - build-and-push-docker-image:
                filters:
                    branches:
                        only: production
```

# Prevent Typo Hell

Requires [CircleCI Local CLI](https://circleci.com/docs/2.0/local-cli/#installation)

Use `circleci config validate` from the project root directory to validate config file before pushing to version control.

*NOTE* Install Local CLI (sudo to install to /usr/local/bin): `curl -fLSs https://raw.githubusercontent.com/CircleCI-Public/circleci-cli/master/install.sh | sudo bash`
