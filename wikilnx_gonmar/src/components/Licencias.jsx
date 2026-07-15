import MarkdownPage from './MarkdownPage'
import content from '../../docs_gonmar/02_licencias_gonmar.md?raw'

export default function Licencias() {
  return <MarkdownPage content={content} badge="3.1.1 · Software libre y licencias" />
}
