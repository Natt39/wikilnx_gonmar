import MarkdownPage from './MarkdownPage'
import content from '../../docs_gonmar/05_paquetes_gonmar.md?raw'

export default function Paquetes() {
  return <MarkdownPage content={content} badge="3.1.4 · Gestores de paquetes (apt)" />
}
