#!/usr/bin/env bash
set -e

#apk add --no-cache --update openssh
#pip3 install awscli
#aws configure set aws_access_key_id "$AWS_ACCESS_KEY_ID"
#aws configure set aws_secret_access_key "$AWS_SECRET_ACCESS_KEY"
#
## Build docker image
#docker login -u "$DOCKERHUB_USER" -p "$DOCKERHUB_PASSWORD"
#
#docker pull "$NODE_APP_IMAGE":"$APP_VERSION_TAG" || true
#docker build -t "$NODE_APP_IMAGE":"$APP_VERSION_TAG" .
#docker push "$NODE_APP_IMAGE":"$APP_VERSION_TAG"

# Pull docker image to the server
# Uncomment to fix ssh connection issue in circleci
echo $SSH_USER
echo $SSH_SERVER

ssh "$SSH_USER"@"$SSH_SERVER" "cd /home/ubuntu/app; AWS_ACCESS_KEY_ID='$AWS_ACCESS_KEY_ID' AWS_SECRET_ACCESS_KEY='$AWS_SECRET_ACCESS_KEY' ./pull-and-up-images.sh"
