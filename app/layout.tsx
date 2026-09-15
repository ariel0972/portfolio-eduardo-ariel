import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eduardo Ariel | Desenvolvedor Backend',
  description: 'Portfólio de Eduardo Ariel, desenvolvedor backend focado em Node.js, TypeScript, NestJS, APIs e aplicações web.',
  openGraph: {
    title: 'Eduardo Ariel | Desenvolvedor Backend',
    description: 'Projetos, trajetória e repertório técnico de Eduardo Ariel.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08110f',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
