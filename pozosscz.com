server {
    listen 80;
    server_name www.pozosscz.com pozosscz.com;

    root /home/gonzalo/Astro/pozosscz;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
