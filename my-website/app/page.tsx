import Image from "next/image";
import type { CSSProperties } from "react";

const featureCards = [
  {
    name: "Trophy Race",
    card: "/images/game-modes/trophy-race-card.png",
    horizontal: "/images/game-modes/trophy-race-card-horizontal.png",
  },
  {
    name: "Guild Run",
    card: "/images/game-modes/guild-run-card.png",
    horizontal: "/images/game-modes/guild-run-card-horizontal.png",
  },
  {
    name: "Champions League",
    card: "/images/game-modes/champions-league-card.png",
    horizontal: "/images/game-modes/champions-league-card-horizontal.png",
  },
  {
    name: "Breakout",
    card: "/images/game-modes/breakout-card.jpg",
    horizontal: "/images/game-modes/breakout-card-horizontal.png",
  },
];
const newItems = [
  {
    name: "Red Velvet Cookie",
    image: "/images/cookies/epic/195-red-velvet.png",
    framed: true,
  },
  {
    name: "Chonky Cake Wolf",
    image: "/images/cookies/epic/195-chonky-cake-wolf.png",
    framed: true,
  },
  {
    name: "Twirling Timepiece",
    image: "/images/treasures/epic/111-twirling-timepiece.png",
    framed: false,
  },
];
const gridCards = Array.from({ length: 14 });

type FeatureCardStyle = CSSProperties & {
  "--card-image": string;
  "--wide-card-image": string;
};

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
          <button type="button">cookies</button>
        </nav>
      </section>

      <div className="sky-divider" />

      <section className="pink-title">
        <h1>My Lists</h1>
      </section>

      <section className="showcase-section">
        <div className="feature-grid">
          {featureCards.map((card) => (
            <div
              aria-label={card.name}
              className="feature-card"
              key={card.name}
              role="img"
              style={{
                "--card-image": `url("${card.card}")`,
                "--wide-card-image": `url("${card.horizontal}")`,
              } as FeatureCardStyle}
            >
              <span className="feature-card-title">{card.name}</span>
            </div>
          ))}
        </div>
        <p className="section-note">
          <span className="see-more-icon" aria-hidden="true">
            &gt;
          </span>
          see more
        </p>
      </section>

      <section className="gold-section">
        <h2>New:</h2>
        <div className="mini-grid">
          {newItems.map((item) => (
            <div
              className={
                item.framed
                  ? "item-frame epic mini-item"
                  : "treasure-mini"
              }
              key={item.name}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={136}
                height={136}
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      <div className="thin-divider" />

      <section className="mint-title">
        <h2>Recent additions</h2>
      </section>

      <section className="catalog-section">
        <div className="catalog-board">
          <div className="catalog-grid">
            {gridCards.map((_, index) => (
              <div className="placeholder tile" key={index} />
            ))}
          </div>
          <p className="catalog-label">
            <span className="see-more-icon" aria-hidden="true">
              &gt;
            </span>
            see more
          </p>
        </div>
      </section>
    </main>
  );
}
