'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  Database,
  Download,
  Gamepad2,
  GitBranch,
  Globe2,
  Languages,
  Mail,
  Menu,
  MessageCircle,
  PenLine,
  Server,
  Sparkles,
  X,
} from 'lucide-react'

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.12 3.05.73.8 1.17 1.83 1.17 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  )
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

const contact = {
  email: 'are3380@gmail.com',
  github: 'https://github.com/ariel0972',
  linkedin: 'https://www.linkedin.com/in/eduardo-ariel',
  cv: '/cv-eduardo-ariel.pdf',
}

const projects = [
  {
    id: 'home-idiomas',
    number: '01',
    title: 'Gestor da Home Idiomas',
    category: 'Produto full stack',
    status: 'Em desenvolvimento',
    repo: 'https://github.com/ariel0972/Home-Idiomas-Frontend',
    accent: 'green',
    image: '/projects/favicon.svg',
    imageAlt: 'Logo da Home Idiomas',
    summary: 'Uma ferramenta para reunir alunos, turmas, aulas e presença em um único fluxo de trabalho para a escola.',
    context: 'A rotina da escola envolve informações espalhadas e tarefas repetitivas. O projeto nasceu da observação direta desses processos enquanto trabalho na Home Idiomas.',
    role: 'Concepção dos fluxos, modelagem dos dados e desenvolvimento do backend e do frontend.',
    solution: 'API modular em NestJS conectada a uma interface React, com autenticação e acessos diferentes para administração, professores e alunos.',
    evidence: 'Já existem fluxos para alunos e turmas, diário de aula, registro de presença manual ou por QR Code e geração de contratos. Ainda não há métricas de uso publicadas.',
    tags: ['NestJS', 'TypeScript', 'React', 'MongoDB', 'JWT'],
  },
  {
    id: 'ztcg',
    number: '02',
    title: 'Arena de Thumos',
    category: 'Jogo + sistema web',
    status: 'Projeto autoral',
    repo: 'https://github.com/ariel0972/ZTCG',
    accent: 'blue',
    image: '/projects/arena-de-thumos.png',
    imageAlt: 'Logo azul de Zacórnia usada no projeto Arena de Thumos',
    summary: 'Um jogo de cartas digital que transforma o universo de Zacórnia em regras, baralhos e partidas.',
    context: 'Eu queria testar como as regras de um universo narrativo poderiam funcionar como um sistema jogável e persistente na web.',
    role: 'Criação do universo, game design, modelagem das cartas e desenvolvimento da aplicação.',
    solution: 'Backend com Express e MongoDB para usuários e baralhos, além de uma interface em JavaScript para montar decks e experimentar o fluxo de batalha.',
    evidence: 'O projeto já permite autenticação, criação e edição de decks, exportação e uma lógica inicial de turnos, compra, tropas, feitiços e oponente automatizado.',
    tags: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Game design'],
  },
  {
    id: 'libry-bot',
    number: '03',
    title: 'Libry Bot',
    category: 'Bot + integração',
    status: 'Projeto pessoal',
    repo: 'https://github.com/ariel0972/Libry-Bot',
    accent: 'blue',
    summary: 'Um bot para usar recursos do Habitica dentro do Discord e aproximar produtividade da vida em comunidade.',
    context: 'Alternar entre plataformas criava atrito para quem queria acompanhar tarefas e hábitos enquanto participava de uma comunidade no Discord.',
    role: 'Desenvolvimento do bot, integração com a API externa e persistência dos vínculos entre contas.',
    solution: 'Comandos no Discord para consultar o perfil e executar ações do Habitica sem sair do servidor.',
    evidence: 'Foram implementadas operações relacionadas a hábitos, tarefas, recompensas e consulta de perfil. O repositório e métricas de uso ainda serão publicados.',
    tags: ['Node.js', 'Discord.js', 'MongoDB', 'API REST'],
  },
]

const skills = [
  { title: 'Backend', description: 'Onde concentro meus estudos e projetos mais completos.', icon: Server, items: ['Node.js', 'TypeScript', 'NestJS', 'Express', 'APIs REST', 'JWT'] },
  { title: 'Dados', description: 'Modelagem e persistência para aplicações e integrações.', icon: Database, items: ['MongoDB', 'Mongoose', 'PostgreSQL'] },
  { title: 'Interfaces', description: 'O necessário para levar os fluxos até quem usa o produto.', icon: Braces, items: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Ferramentas', description: 'Recursos que uso para construir, integrar e evoluir projetos.', icon: GitBranch, items: ['Git', 'GitHub', 'Docker', 'Discord.js', 'APIs externas'] },
]

const navItems = [
  ['sobre', 'Sobre'],
  ['projetos', 'Projetos'],
  ['habilidades', 'Habilidades'],
  ['trajetoria', 'Trajetória'],
  ['contato', 'Contato'],
]

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-lede">{text}</p>}
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('sobre')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (entry.target.id) setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -55%', threshold: 0 },
    )

    document.querySelectorAll('.reveal, section[id]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#sobre" aria-label="Eduardo Ariel, início" onClick={closeMenu}>
          <span className="brand-mark">EA</span><span>Eduardo Ariel</span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegação principal">
          {navItems.map(([id, label]) => (
            <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href={`mailto:${contact.email}`} onClick={closeMenu}>Fale comigo <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <section className="hero" id="sobre">
        <div className="hero-copy reveal is-visible">
          <p className="availability"><span /> Disponível para oportunidades e projetos</p>
          <p className="hero-kicker">Olá, eu sou Eduardo Ariel.</p>
          <h1>Transformo rotinas e ideias em <em>sistemas que podem ser usados.</em></h1>
          <p className="hero-text">Desenvolvedor backend com foco em Node.js, TypeScript e NestJS. Crio APIs, integrações e aplicações web — da regra de negócio até a experiência de quem usa.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Conheça meus projetos <ArrowDown size={16} aria-hidden="true" /></a>
            <a className="button button-ghost" href={contact.cv} download>Baixar currículo <Download size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-stack" aria-label="Tecnologias principais"><span>Node.js</span><i>•</i><span>TypeScript</span><i>•</i><span>NestJS</span><i>•</i><span>MongoDB</span></div>
        </div>

        <div className="hero-identity reveal is-visible" aria-label="Identidade profissional de Eduardo Ariel">
          <div className="identity-orbit orbit-one" /><div className="identity-orbit orbit-two" />
          <div className="identity-card">
            <div className="identity-code"><Code2 size={22} /><span>backend developer</span></div>
            <p>Eu gosto de entender as regras de um problema e dar uma estrutura clara a elas.</p>
            <div className="identity-path"><span>código</span><ArrowUpRight size={14} /><span>sistemas</span><ArrowUpRight size={14} /><span>mundos</span></div>
          </div>
          <span className="identity-note note-jp">日本語</span>
          <span className="identity-note note-rpg"><Sparkles size={13} /> side quests</span>
        </div>
      </section>

      <section className="about section-shell" aria-labelledby="about-title">
        <div className="about-quote reveal"><span className="section-number">01</span><p>Programar é uma forma de dar estrutura ao que ainda não existe.</p></div>
        <div className="about-content reveal">
          <p className="eyebrow">Sobre mim</p>
          <h2 id="about-title">Lógica para construir. Curiosidade para explorar.</h2>
          <p>Sou bacharel em Ciência da Computação e venho construindo minha trajetória em desenvolvimento backend. Gosto de partir do problema, entender seus fluxos e transformar regras em software organizado.</p>
          <p>Minha experiência como professor de inglês também faz parte desse trabalho: aprendi a ouvir, adaptar explicações e acompanhar pessoas com necessidades diferentes. Levo essa atenção para a forma como penso produtos e colaboro em equipe.</p>
          <p>Fora do código, escrevo, desenho, estudo japonês, jogo RPG e desenvolvo Zacórnia, um universo de fantasia autoral. Esses interesses aparecem aqui porque explicam algo importante sobre mim: gosto de sistemas em que regras, pessoas e histórias precisam funcionar juntas.</p>
          <div className="interest-list" aria-label="Interesses pessoais">
            <span><Gamepad2 size={15} /> RPG e games</span><span><PenLine size={15} /> Escrita e desenho</span><span><Languages size={15} /> Japonês</span><span><Globe2 size={15} /> Worldbuilding</span>
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <SectionHeading eyebrow="02 / Trabalhos em destaque" title="Projetos com problemas reais e regras próprias." text="Três projetos que mostram como penso backend, produto e integrações. Todos estão em evolução; por isso, separo o que já foi implementado do que ainda falta validar." />
        <div className="project-list">
          {projects.map(project => (
            <article className={`project-case ${project.accent} reveal`} key={project.id}>
              <div className="project-visual">
                <div className="project-visual-top"><span>{project.number}</span><span>{project.status}</span></div>
                {project.image ? <img src={project.image} alt={project.imageAlt} /> : <div className="project-symbol" aria-hidden="true"><MessageCircle size={52} strokeWidth={1.25} /><span>/habitica</span></div>}
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
                <dl className="project-details">
                  <div><dt>Contexto</dt><dd>{project.context}</dd></div><div><dt>Meu papel</dt><dd>{project.role}</dd></div><div><dt>Como construí</dt><dd>{project.solution}</dd></div><div><dt>Estado atual</dt><dd>{project.evidence}</dd></div>
                </dl>
                <div className="project-footer">
                  <div className="tag-list" aria-label={`Tecnologias usadas em ${project.title}`}>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  {/* <a className="project-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Ver código de ${project.title} no GitHub`}>
                    <GitBranch size={16} aria-hidden="true" /> Ver código <ArrowUpRight size={15} aria-hidden="true" />
                  </a> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section-shell" id="habilidades">
        <SectionHeading eyebrow="03 / Repertório técnico" title="Ferramentas ligadas ao que já construí." text="As tecnologias organizadas pelo papel que fazem nos projetos que desenvolvo." />
        <div className="skills-grid">
          {skills.map(group => { const Icon = group.icon; return <article className="skill-card reveal" key={group.title}><Icon size={22} aria-hidden="true" /><div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div></article> })}
        </div>
      </section>

      <section className="experience section-shell" id="trajetoria">
        <div className="experience-main reveal">
          <SectionHeading eyebrow="04 / Trajetória" title="Experiência que conecta tecnologia e pessoas." />
          <div className="timeline">
            <article><span className="timeline-marker" /><p className="timeline-date">Fev/2026 — atual</p><h3>Professor de Inglês</h3><p className="timeline-place">Home Idiomas</p><p>Planejo aulas para diferentes níveis, acompanho alunos e adapto o conteúdo às necessidades de cada pessoa. Foi dentro dessa rotina que identifiquei oportunidades para o sistema de gestão da escola.</p></article>
            <article><span className="timeline-marker" /><p className="timeline-date">Fev/2023 — dez/2023</p><h3>Jovem Aprendiz Fiscal</h3><p className="timeline-place">Jandaia</p><p>Trabalhei com sistemas internos, validação de dados, organização e registro de notas fiscais em uma rotina que exigia atenção, prazos e colaboração.</p></article>
            <article><span className="timeline-marker" /><p className="timeline-date">2022 — 2025</p><h3>Bacharelado em Ciência da Computação</h3><p className="timeline-place">Universidade Nove de Julho — UNINOVE</p><p>Formação concluída com foco em fundamentos de computação e resolução estruturada de problemas.</p></article>
          </div>
        </div>
        <aside className="principles reveal">
          <p className="eyebrow">Como trabalho</p><h3>Três princípios que orientam minhas decisões</h3>
          <ol><li><span>01</span><div><strong>Entender antes de abstrair</strong><p>Primeiro mapeio o problema, os usuários e as regras.</p></div></li><li><span>02</span><div><strong>Conectar as partes</strong><p>Dados, interface e operação precisam sustentar o mesmo fluxo.</p></div></li><li><span>03</span><div><strong>Construir para aprender</strong><p>Entrego uma etapa utilizável, observo e evoluo a solução.</p></div></li></ol>
        </aside>
      </section>

      <section className="inventory section-shell" aria-labelledby="inventory-title">
        <div className="inventory-card reveal">
          <div className="inventory-heading"><p className="eyebrow">Ariel&apos;s inventory</p><h2 id="inventory-title">Minha ficha,<br /><em>por completo.</em></h2></div>
          <div className="inventory-grid"><div><span>Classe</span><strong>Desenvolvedor backend</strong></div><div><span>Stack principal</span><strong>Node.js + TypeScript</strong></div><div><span>Idiomas</span><strong>Português nativo · Inglês B1</strong></div><div><span>Side quests</span><strong>Japonês, game dev e escrita</strong></div><div className="quest"><BookOpen size={18} /><span>Missão atual</span><strong>Transformar necessidades reais em software claro, útil e possível de evoluir.</strong></div></div>
        </div>
      </section>

      <section className="contact section-shell" id="contato">
        <div className="contact-copy reveal">
          <p className="eyebrow">05 / Contato</p><h2>Tem uma vaga, um site ou uma ideia de produto?</h2><p>Estou aberto a oportunidades como desenvolvedor backend ou full stack e a conversas sobre sites, SaaS e ferramentas sob medida. Conte o contexto; eu respondo com os próximos passos.</p>
          <div className="contact-actions"><a className="button button-primary" href={`mailto:${contact.email}?subject=Contato pelo portfólio`}>Enviar um e-mail <Mail size={16} aria-hidden="true" /></a><a className="button button-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">Conversar no LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a></div>
          <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div className="contact-card reveal">
          <p className="eyebrow">Onde me encontrar</p>
          <a href={contact.github} target="_blank" rel="noreferrer"><GitHubLogo /><span><strong>GitHub</strong><small>github.com/ariel0972</small></span><ArrowUpRight size={16} /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer"><LinkedInLogo /><span><strong>LinkedIn</strong><small>linkedin.com/in/eduardo-ariel</small></span><ArrowUpRight size={16} /></a>
          <a href={contact.cv} download><Download size={19} /><span><strong>Currículo</strong><small>PDF atualizado</small></span><ArrowDown size={16} /></a>
        </div>
      </section>

      <footer className="site-footer"><a className="brand" href="#sobre"><span className="brand-mark">EA</span><span>Eduardo Ariel</span></a><p>Código, sistemas, histórias e mundos.</p><span>© {new Date().getFullYear()} Eduardo Ariel</span></footer>
    </main>
  )
}
