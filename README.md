# Supply Order Management - Web Application

This web application will run as a Web Component (Angular Element)

The app is wrapped in a Docker container running Nginx with a virtual host of /om
and uses the following to avoid 404 errors within the Angular app:

```
 /conf/nginx.conf
 location / {
            # First attempt to serve request as file, then
            # as directory, then redirect to index(angular) if no file found.
            try_files $uri $uri/ /index.html;
 }
```
