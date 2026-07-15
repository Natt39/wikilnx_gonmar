import MarkdownPage from './MarkdownPage'
import content from '../../docs_gonmar/04_permisos_gonmar.md?raw'

export default function Permisos() {
  return <MarkdownPage content={content} badge="3.1.3 · Permisos por CLI" />
}
