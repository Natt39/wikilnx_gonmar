import MarkdownPage from './MarkdownPage'
import content from '../../docs_gonmar/03_instalacion_gonmar.md?raw'

export default function Instalacion() {
  return <MarkdownPage content={content} badge="3.1.2 · Instalación y configuración básica" />
}
