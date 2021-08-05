### Repair Materials Management (RMM) - POC

## STAGE 1
FROM node as node
LABEL author="Dan Overholt"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

## STAGE 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/rmm-web /usr/share/nginx/html
COPY config/nginx.conf /etc/ngnix/conf.d/default.conf
    