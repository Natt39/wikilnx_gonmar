import MarkdownPage from './MarkdownPage'
import content from '../../docs_gonmar/07_prompts_gonmar.md?raw'

export default function Prompts() {
  return <MarkdownPage content={content} badge="Bitácora de uso de IA" />
}
