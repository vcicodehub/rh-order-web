# Repair Harmoniztion - POC
# Angular Client
FROM nginx
COPY ./dist/rh-web/. /usr/share/nginx/html/.
    