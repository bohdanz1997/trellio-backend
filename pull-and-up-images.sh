#!/usr/bin/env bash
set -e

# Up project
docker-compose pull
docker-compose down
docker-compose up -d

docker system prune --volumes -f

sleep 10
