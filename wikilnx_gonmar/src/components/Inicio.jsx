import MarkdownPage from './MarkdownPage'
import content from '../../docs_gonmar/01_inicio_gonmar.md?raw'

export default function Inicio() {
  return <MarkdownPage content={content} badge="Portada" />
}
