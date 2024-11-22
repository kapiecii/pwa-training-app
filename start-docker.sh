docker container run -it --name pwa-training --mount type=bind,source="$(pwd)"/src/,target=/mnt  -p 3000:3000 --rm node:23-bullseye-slim bash
