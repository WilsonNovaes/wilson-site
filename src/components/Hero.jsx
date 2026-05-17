import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="avatar-wrap">
        <div className="avatar" aria-label="Avatar de Wilson">
          W
        </div>
        <span className="available-badge">● Disponível para contato</span>
      </div>

      <div className="hero-text">
        <p className="hero-eyebrow">Olá, eu sou</p>
        <h1 className="hero-name">Wilson Novaes de Souza Junior</h1>
        <h2 className="hero-role">
          Engenheiro de Software
          <span className="hero-company"> @ Serasa Experian</span>
        </h2>
        <p className="hero-bio">
          Construo sistemas robustos e escaláveis, com foco em qualidade de
          código e experiência do desenvolvedor. Apaixonado por tecnologia,
          boas práticas e aprendizado contínuo.
        </p>
      </div>

      <div className="hero-tags">
        {['Backend', 'Arquitetura', 'APIs REST', 'Cloud', 'Open Source'].map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </section>
  )
}
