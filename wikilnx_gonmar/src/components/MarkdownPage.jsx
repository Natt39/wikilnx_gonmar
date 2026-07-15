import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Reemplaza rutas relativas img_gonmar/archivo.png -> /img_gonmar/archivo.png
// para que las imágenes se resuelvan desde la carpeta pública en producción (Vercel).
function fixImagePath(src = '') {
  if (src.startsWith('http') || src.startsWith('/')) return src
  const clean = src.replace(/^img_gonmar\//, '')
  return `/img_gonmar/${clean}`
}

export default function MarkdownPage({ content, badge }) {
  return (
    <div className="animate-fadein max-w-3xl">
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-xs font-mono text-[var(--color-accent)]">
          {badge}
        </div>
      )}
      <div className="md-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ node, ...props }) => (
              <img {...props} src={fixImagePath(props.src)} alt={props.alt || ''} loading="lazy" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}
