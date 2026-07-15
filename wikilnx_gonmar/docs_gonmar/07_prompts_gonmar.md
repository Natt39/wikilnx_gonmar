# Bitácora de uso de Inteligencia Artificial

## Herramientas utilizadas

| Herramienta | Tipo | Para qué se usó |
|---|---|---|
| Claude (Anthropic) y Gemini IA como Chatbot conversacional, en modo guía paso a paso | me ayudo a entender como estructurar y generar la aplicación React de la wiki, redactar el contenido teórico de los bloques A-E, y resolver dudas puntuales durante la ejecución del laboratorio en la VM |

## Registro de prompts y decisiones

### 1. Estructuración inicial del proyecto (App React + documentación)
- **Prompt:** Pedí ayuda para hacer el proyecto completo paso a paso, siguiendo la pauta de cotejo y la guía de trabajo del docente, buscando la nota máxima.

### 2. Duda sobre configuración de red durante la instalación de Ubuntu Server (momento: instalación de la VM)
- **Prompt:** Consulté porque en la pantalla de "Network configuration" del instalador no aparecía la palabra NAT explícita y pensé que la red no estaba asociada — el mismo problema que había tenido en el proyecto anterior.
- **Qué se aceptó:** La explicación de que `DHCPv4 10.0.2.15/24` en `enp0s3` sí confirma que el adaptador está correctamente en modo NAT, ya que ese rango de IP es el que asigna el DHCP interno de VirtualBox.
- **Qué se corrigió:** No fue necesario cambiar nada en la configuración; se verificó con `ip a` y `ping -c2 8.8.8.8` que la red y la salida a internet funcionaban antes de continuar, evitando modificar algo que no estaba roto.

### 3. Orden de comandos en la configuración del firewall (Bloque B)
- **Prompt:** Seguí la guía para ejecutar `ufw allow OpenSSH`, `ufw allow 80/tcp` y `ufw enable`.
- **Qué se aceptó:** La advertencia de respetar el orden exacto (permitir OpenSSH **antes** de activar el firewall), para no perder la conexión SSH a la VM.
- **Qué se corrigió:** Ninguna corrección necesaria — se ejecutó en el orden indicado y `ufw status verbose` confirmó las reglas activas para los puertos 22 y 80.

### 4. Decisión sobre el repositorio de GitHub (antes del Bloque E)
- **Prompt:** Pregunté cómo eliminar un repositorio de GitHub porque quería empezar el proyecto `wikilnx_gonmar` desde cero.
- **Qué se aceptó:** Los pasos para eliminar un repositorio desde Settings → Danger Zone.
- **Qué se corrigió:** Se optó por crear/subir el repositorio `wikilnx_gonmar` limpio con `git push` del proyecto completo, en vez de eliminar el anterior, para no arriesgar una entrega ya calificada.

## Uso como chatbot

En este trabajo usé Claude y Gemini AI como **chatbot conversacional**: fui ejecutando cada bloque del laboratorio manualmente en mi propia VM, y consultaba en cada paso para verificar comandos, entender resultados inesperados (como la pantalla de red) y generar el contenido de la wiki. No usé un agente con acceso directo al proyecto (como GitHub Copilot en VS Code); todo el código generado lo copié e integré yo misma al proyecto.

## Reflexión final

"Este laboratorio fue un verdadero desafío de aprendizaje de principio a fin. Al comenzar, le tenía bastante respeto (y un poco de miedo, para ser honesta) a la idea de administrar un servidor completo puramente a través de la línea de comandos, sin la comodidad de una interfaz visual.

Uno de los momentos que más me costó resolver fue la configuración inicial de red; no ver la palabra 'NAT' de manera explícita en el instalador de Ubuntu Server me hizo dudar muchísimo de si iba por buen camino, pero verificar la conectividad manualmente me devolvió la confianza. Además, el proceso me enseñó a lidiar con las típicas frustraciones del desarrollo real, como resolver problemas de versiones de Node.js incompatibles con Vite o aprender a ordenar y limpiar el repositorio para que Git no se rompiera al subir los cambios. La IA fue un excelente soporte para estructurar la documentación y guiarme en las dudas rápidas, pero ejecutar cada comando, configurar el firewall, los permisos y levantar Nginx directamente en mi máquina virtual fue un trabajo completamente mío que me deja con la seguridad de que puedo enfrentar entornos de servidores reales sin miedo."