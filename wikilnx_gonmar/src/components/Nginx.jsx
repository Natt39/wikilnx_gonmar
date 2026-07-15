import MarkdownPage from './MarkdownPage'
import content from '../../docs_gonmar/06_nginx_gonmar.md?raw'

export default function Nginx() {
  return <MarkdownPage content={content} badge="3.1.4 · nginx y despliegue" />
}
