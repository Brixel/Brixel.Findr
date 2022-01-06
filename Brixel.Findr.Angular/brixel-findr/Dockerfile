### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:lts-alpine as builder

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

RUN npm ci && mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder

RUN npm run ng build -- --prod --output-path=dist
RUN apk add dos2unix --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted
RUN dos2unix entrypoint.sh
RUN ["chmod", "+x", "entrypoint.sh"]


### STAGE 2: Setup ###

FROM nginx:alpine

## Copy our default nginx config
COPY nginx.default.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/entrypoint.sh entrypoint.sh

## Copy our default nginx config
COPY --from=builder /app/nginx.default.conf /etc/nginx/nginx.conf

CMD ["./entrypoint.sh"]
