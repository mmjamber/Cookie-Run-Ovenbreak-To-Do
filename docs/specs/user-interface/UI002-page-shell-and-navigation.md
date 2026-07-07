# UI Spec: Page Shell And Navigation

## Core Layout

- Use the shared page shell, hero banner, navigation buttons, and footer on every page.
- Use a persistent top navigation inside the shared hero banner with homepage, to-do, cookies, pets, and treasures as the site grows.
- The first screen should expose homepage `My Lists`, which mirrors the first four cards from the To-do page order.
- List detail pages should prioritize the user's upgrade targets over decorative content.
- Mobile layouts should keep add/edit actions reachable and avoid wide tables.
- Account controls should support sign-up, sign-in, sign-out, current account display, and admin entry visibility for authorized accounts.

## Shared Page Shell

Every page must use the same outer shell as the current homepage unless a page spec explicitly says otherwise.

- Body background: `#f7bfdc` with the two-layer white polka-dot pattern: `radial-gradient(circle, #ffffff 5px, transparent 5.5px)` at `0 0` and `22px 22px`, with `44px 44px` background size.
- Main website panel: centered, `width: min(930px, 100%)`, `min-height: 100vh`, background `#cff5ff`.
- On mobile, the main panel remains `width: 100%`.

## Shared Hero Banner

Every page must start with the homepage hero banner unless a page spec explicitly says otherwise.

- Hero container: `position: relative`, `height: 330px`, `overflow: hidden`, background fallback `#bdeefa`.
- Mobile hero height at `max-width: 760px`: `250px`.
- Hero background image: `/images/homepage-banner-current.png`.
- Hero background display: fill the hero, `object-fit: cover`, `object-position: center top`.
- Title image: `/images/title.png`.
- Title image placement: absolute center, `left: 50%`, `top: 50%`, `transform: translate(-50%, -50%)`, `z-index: 1`, `height: auto`, `object-fit: contain`.
- Title image size: desktop `width: min(460px, 72%)`; mobile at `max-width: 760px` `width: min(420px, 78%)`.
- Hero title alt text should be `CookieRun OvenBreak`.

## Shared Hero Navigation

The hero navigation buttons must keep the same position, size, typography, and colors across pages.

- Nav position: absolute inside the hero, `right: 10px`, `bottom: 8px`, `z-index: 2`.
- Nav layout: flex row with `gap: 10px`.
- Mobile nav at `max-width: 760px`: `left: 12px`, `right: 12px`, centered with `justify-content: center`.
- Button size: desktop `min-width: 92px`, `height: 28px`; mobile `min-width: 78px`, `height: 28px`.
- Button shape: `border-radius: 999px`.
- Button border: `2px dashed rgb(255 255 255 / 0.86)`.
- Button text: CookieRun regular `400`, white `#ffffff`, no letter spacing changes.
- Buttons are aesthetic navigation controls first; inactive or placeholder buttons may use `cursor: default` until routes exist.
- Current homepage button colors:
  - first button: background `#e95dac`, text-shadow `0 1px 0 #a83f7f`
  - second button: background `#89d5e9`, text-shadow `0 1px 0 rgb(58 73 141 / 0.4)`
  - third button: background `#ffc233`, text-shadow `0 1px 0 #c7831e`

## Account Controls

Every page should include account controls in the right corner of the screen:

- Signed-out users should have sign-up/sign-in entry points.
- Signed-in users should see current account display and sign-out access.
- New account setup requires a display name.
- Signed-out users may continue as guests with temporary browser-local lists.
- Admin-only entry points should appear only after a signed-in account is authorized as admin.
- Button style: both buttons use the same size, border, border radius, typography, and white text treatment as the shared hero navigation buttons.
- `sign in` uses the same pink background and text shadow as the `home` button.
- `log in` uses the same blue background and text shadow as the `to-do` button.
- The two account buttons should stay visually grouped together and should not replace the main navigation buttons.

## Shared Footer

Every page must include the same footer message and panel at the bottom.

- Footer container: `min-height: 172px`, display grid, centered content, padding `36px 48px`, background `#82d8eb`.
- Mobile footer padding at `max-width: 760px`: `28px 20px`.
- Footer text: max width `720px`, margin `0`, color `#ffffff`, CookieRun regular `400`, font size `14px`, line-height `1.45`, centered.
- Footer message:
  `Textual content is available under Creative Commons Attribution-ShareAlike unless otherwise noted. Â© 2019-2026 CookieRun. CookieRun is a trademark of DEVSISTERS.`

## Related Specs

- `UI001-global-visual-style.md` for shared palette and typography.
- `UI003-homepage-and-list-cards.md` for first-screen card layout.
