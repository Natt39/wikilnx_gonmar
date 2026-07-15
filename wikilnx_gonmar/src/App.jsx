import { useState } from 'react'
import { FileText, Terminal, GitBranch as Github, ExternalLink } from 'lucide-react'
import Inicio from './components/Inicio'
import Licencias from './components/Licencias'
import Instalacion from './components/Instalacion'
import Permisos from './components/Permisos'
import Paquetes from './components/Paquetes'
import Nginx from './components/Nginx'
import Prompts from './components/Prompts'

const NAV = [
  { id: 'inicio', file: '01_inicio_gonmar.md', label: 'Inicio', Component: Inicio },
  { id: 'licencias', file: '02_licencias_gonmar.md', label: 'Licencias', Component: Licencias },
  { id: 'instalacion', file: '03_instalacion_gonmar.md', label: 'Instalación', Component: Instalacion },
  { id: 'permisos', file: '04_permisos_gonmar.md', label: 'Permisos', Component: Permisos },
  { id: 'paquetes', file: '05_paquetes_gonmar.md', label: 'Paquetes', Component: Paquetes },
  { id: 'nginx', file: '06_nginx_gonmar.md', label: 'Nginx', Component: Nginx },
  { id: 'prompts', file: '07_prompts_gonmar.md', label: 'Prompts (IA)', Component: Prompts },
]

// Reemplaza este enlace por el real al momento de entregar.
const REPO_URL = 'https://github.com/tu-usuario/wikilnx_gonmar'

export default function App() {
  const [active, setActive] = useState('inicio')
  const current = NAV.find((n) => n.id === active)
  const Current = current.Component

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col">
        <div className="px-5 py-5 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2 text-[var(--color-accent)]">
            <Terminal size={18} />
            <span className="font-mono font-bold text-sm tracking-tight">srv-wiki</span>
          </div>
          <p className="mt-1 font-mono text-[11px] text-[var(--color-muted)]">
            inacap@srv-wiki<span className="text-[var(--color-accent)]">:~$</span> ls docs_gonmar/
            <span className="cursor-blink">▊</span>
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          {NAV.map((item) => {
            const isActive = item.id === active
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full flex items-center gap-2.5 px-5 py-2.5 text-left font-mono text-[13px] transition-colors border-l-2 ${
                  isActive
                    ? 'border-[var(--color-accent)] bg-[var(--color-surface-2)] text-[var(--color-text)]'
                    : 'border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]/50'
                }`}
              >
                <FileText size={14} className={isActive ? 'text-[var(--color-accent)]' : 'opacity-60'} />
                <span className="truncate">{item.file}</span>
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-[var(--color-border)] space-y-2">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[12px] font-mono text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            <Github size={14} /> repositorio <ExternalLink size={11} className="ml-auto" />
          </a>
          <p className="text-[11px] font-mono text-[var(--color-muted)]">TI3V35 · Unidad 3</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <div className="px-8 md:px-14 py-10 md:py-14">
          <Current />
        </div>
      </main>
    </div>
  )
}
