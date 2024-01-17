FROM nginx:1.21.6
COPY dist/swarm-browser /usr/share/nginx/html
