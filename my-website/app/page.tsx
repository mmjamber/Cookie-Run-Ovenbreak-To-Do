import Image from "next/image";

const featureCards = Array.from({ length: 4 });
const miniCards = Array.from({ length: 3 });
const gridCards = Array.from({ length: 14 });

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero">
        <Image
          className="hero-background"
          src="/images/homepage-banner-current.png"
          alt="CookieRun OvenBreak"
          fill
          priority
          unoptimized
          sizes="930px"
        />
        <Image
          className="hero-title"
          src="/images/title.png"
          alt="CookieRun OvenBreak"
          width={1200}
          height={645}
          priority
          unoptimized
        />
        <nav className="hero-nav" aria-label="Main navigation">
          <button type="button">home</button>
          <button type="button">to-do</button>
          <button type="button">catalog</button>
        </nav>
      </section>

      <div className="sky-divider" />

      <section className="pink-title">
        <h1>Trophy race</h1>
      </section>

      <section className="showcase-section">
        <div className="feature-grid">
          {featureCards.map((_, index) => (
            <div className="placeholder tall" key={index} />
          ))}
        </div>
        <p className="section-note">Trophy race</p>
      </section>

      <section className="gold-section">
        <h2>Trophy race</h2>
        <div className="mini-grid">
          {miniCards.map((_, index) => (
            <div className="placeholder small" key={index} />
          ))}
        </div>
      </section>

      <div className="thin-divider" />

      <section className="mint-title">
        <h2>Trophy race</h2>
      </section>

      <section className="catalog-section">
        <div className="catalog-board">
          <div className="catalog-grid">
            {gridCards.map((_, index) => (
              <div className="placeholder tile" key={index} />
            ))}
          </div>
          <p className="catalog-label">Trophy race</p>
        </div>
      </section>
    </main>
  );
}
