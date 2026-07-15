# wikilnx_gonmar

Wiki en React (Vite + Tailwind) para la Evaluación Sumativa N°3 de TI3V35 — Sistemas Operativos
(Unidad 3, Laboratorio Linux Server). El contenido vive en Markdown dentro de `docs_gonmar/` y la
aplicación lo presenta como wiki navegable.

## Antes de nada: reemplaza los placeholders

Este proyecto viene con el **texto conceptual ya redactado** (licencias, permisos, teoría de apt,
etc.), pero **todavía te faltan tus datos reales**:

1. Reemplaza cada bloque `> Captura: ...` en `docs_gonmar/*.md` por la imagen real, y copia esa
   imagen a `public/img_gonmar/` con el mismo nombre de archivo.
2. Completa `docs_gonmar/07_prompts_gonmar.md` con tus prompts, decisiones y reflexión reales.
3. Reemplaza `REPO_URL` en `src/App.jsx` por tu URL real de GitHub.
4. Revisa `03_instalacion_gonmar.md` y ajusta cualquier valor (IP, hostname) por el resultado real
   que te haya dado tu VM si difiere del ejemplo.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build   # genera dist/
npm run preview # previsualiza el build localmente
```

## Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub llamado **wikilnx_gonmar** (público).
2. En vercel.com → **New Project** → importa el repositorio.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. La URL pública quedará como `https://wikilnx-gonmar.vercel.app` (o similar).

## Estructura

```
wikilnx_gonmar/
├── docs_gonmar/           # Contenido en Markdown (fuente de verdad)
│   ├── 01_inicio_gonmar.md
│   ├── 02_licencias_gonmar.md
│   ├── 03_instalacion_gonmar.md
│   ├── 04_permisos_gonmar.md
│   ├── 05_paquetes_gonmar.md
│   ├── 06_nginx_gonmar.md
│   └── 07_prompts_gonmar.md
├── public/img_gonmar/     # Capturas (deben coincidir en nombre con las referenciadas en los .md)
├── src/
│   ├── components/        # Un componente React por archivo .md
│   └── App.jsx            # Navegación tipo árbol de archivos
└── vercel.json
```
