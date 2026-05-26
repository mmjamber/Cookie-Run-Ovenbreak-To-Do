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
    name: "Agar Agar Cookie",
    image: "/images/cookies/epic/194-agar-agar-cookie.webp",
    framed: true,
    itemType: "cookie",
  },
  {
    name: "Agarlotl",
    image: "/images/cookies/epic/194-agarlotl.webp",
    framed: true,
    itemType: "pet",
  },
  {
    name: "Dread Grasp of Darkness",
    image: "/images/treasures/legendary/8-dread-grasp-of-darkness.png",
    framed: false,
  },
];
const recentItems = [
  {
    name: "Red Velvet Cookie",
    image: "/images/cookies/epic/195-red-velvet.png",
    framed: true,
    itemType: "cookie",
  },
  {
    name: "Chonky Cake Wolf",
    image: "/images/cookies/epic/195-chonky-cake-wolf.png",
    framed: true,
    itemType: "pet",
  },
  {
    name: "Angel Chiffon Cookie",
    image: "/images/cookies/epic/192-angel-chiffon-cookie.webp",
    framed: true,
    itemType: "cookie",
  },
  {
    name: "Bread Fairy",
    image: "/images/cookies/epic/192-bread-fairy.webp",
    framed: true,
    itemType: "pet",
    fit: "compact",
  },
  {
    name: "Doughy Rolling Pin",
    image: "/images/treasures/epic/112-doughy-rolling-pin.png",
    framed: false,
  },
  {
    name: "Entremet Cookie",
    image: "/images/cookies/epic/193-entremet-cookie.webp",
    framed: true,
    itemType: "cookie",
  },
  {
    name: "Meowsuring Cup",
    image: "/images/cookies/epic/193-meowsuring-cup.webp",
    framed: true,
    itemType: "pet",
    fit: "compact",
  },
  {
    name: "Dark Fondue Cookie",
    image: "/images/cookies/epic/190-dark-fondue-cookie.webp",
    framed: true,
    itemType: "cookie",
  },
  {
    name: "Stick-E Cheese",
    image: "/images/cookies/epic/190-stick-e-cheese.webp",
    framed: true,
    itemType: "pet",
    fit: "compact",
  },
  {
    name: "Twirling Timepiece",
    image: "/images/treasures/epic/111-twirling-timepiece.png",
    framed: false,
  },
];

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
        <div className="item-grid">
          {newItems.map((item) =>
            item.framed ? (
              <div className="new-item-card framed-new-item" key={item.name}>
                <div
                  className={`item-frame epic standard-item ${item.itemType}-frame`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={136}
                    height={136}
                    unoptimized
                  />
                </div>
                <p className="new-item-name">{item.name}</p>
              </div>
            ) : (
              <div
                className="new-item-card treasure-new-item"
                key={item.name}
              >
                <Image
                  className="treasure-item"
                  src={item.image}
                  alt={item.name}
                  width={136}
                  height={136}
                  unoptimized
                />
                <p className="new-item-name">{item.name}</p>
              </div>
            ),
          )}
        </div>
      </section>

      <div className="thin-divider" />

      <section className="mint-title">
        <h2>Recent additions</h2>
      </section>

      <section className="catalog-section">
        <div className="catalog-board">
          <div className="catalog-grid">
            {recentItems.map((item) =>
              item.framed ? (
                <div className="new-item-card framed-new-item" key={item.name}>
                  <div
                    className={`item-frame epic standard-item ${item.itemType}-frame ${item.fit ? `${item.fit}-fit` : ""}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={136}
                      height={136}
                      unoptimized
                    />
                  </div>
                  <p className="new-item-name">{item.name}</p>
                </div>
              ) : (
                <div
                  className="new-item-card treasure-new-item"
                  key={item.name}
                >
                  <Image
                    className="treasure-item"
                    src={item.image}
                    alt={item.name}
                    width={136}
                    height={136}
                    unoptimized
                  />
                  <p className="new-item-name">{item.name}</p>
                </div>
              ),
            )}
          </div>
          <p className="catalog-label">
            <span className="see-more-icon" aria-hidden="true">
              &gt;
            </span>
            see all
          </p>
        </div>
      </section>
    </main>
  );
}
