# 3.1.4 — nginx y despliegue del sitio

## 1. Instalación de nginx

```bash
sudo apt install -y nginx
```

Al abrir `http://localhost:8080` se ve la página por defecto **"Welcome to nginx!"**, confirmando que
el servicio está activo y escuchando en el puerto 80 de la VM (mapeado al 8080 del host).

> Captura: `![Welcome to nginx](img_gonmar/06_nginx_welcome.png)`

## 2. Construcción del sitio

```bash
sudo apt install -y nodejs npm git
git clone https://github.com/<usuario>/wikilnx_gonmar.git
cd wikilnx_gonmar
npm install
npm run build
```

`npm run build` compila el proyecto React (Vite) y genera la carpeta `dist/` con los archivos finales
ya optimizados (HTML, CSS y JS listos para producción). **Solo el contenido de `dist/` se publica**,
nunca el código fuente completo del proyecto.

## 3. Copia del sitio a la carpeta de nginx

```bash
sudo mkdir -p /var/www/wiki
sudo cp -r dist/* /var/www/wiki/
sudo chown -R www-data:www-data /var/www/wiki
```

`www-data` es el usuario bajo el cual se ejecuta el proceso de nginx en Ubuntu; al hacerlo dueño de la
carpeta se asegura que el servidor web tenga los permisos correctos para leer y servir esos archivos.

## 4. Archivo de configuración del sitio

```bash
sudo nano /etc/nginx/sites-available/wiki
```

```nginx
server {
    listen 80 default_server;
    root /var/www/wiki;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}
```

Esta configuración le indica a nginx que atienda en el puerto 80 y que sirva los archivos desde
`/var/www/wiki`; la directiva `try_files` permite que las rutas internas de la aplicación React
(SPA) funcionen correctamente al recargar la página.

## 5. Activación y recarga

```bash
sudo ln -s /etc/nginx/sites-available/wiki /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

`nginx -t` valida la sintaxis de la configuración antes de aplicarla (debe responder *"syntax is ok /
test is successful"*); `systemctl reload nginx` aplica los cambios sin cortar el servicio.

> Captura: `![nginx -t exitoso](img_gonmar/06_nginx_t.png)`

## 6. Comprobación — evidencia clave

Al recargar `http://localhost:8080` se ve el sitio servido **desde el propio servidor Linux**, ya no
la página por defecto de nginx. Esta captura es la evidencia central del criterio 3.1.4.

> Captura: `![Sitio funcionando servido desde srv-wiki](img_gonmar/06_sitio_en_linux.png)`

## Permisos y raíz del sitio

La raíz configurada en nginx (`/var/www/wiki`) coincide con la carpeta donde se copió `dist/`, y su
propietario es `www-data:www-data` — el mismo usuario que ejecuta el proceso `nginx`, garantizando
que el servidor puede leer los archivos sin errores de permisos (`403 Forbidden`).
