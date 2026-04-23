# Warmsides — Design System

## Brand
Warm, friendly web & mobile studio. Human, approachable, confident — not corporate.

## Palette
- `--ws-cream`: #FDF6EE — page background
- `--ws-beige`: #F0E6D3 — section alternates, cards
- `--ws-terracotta`: #C9603A — primary CTA, accents
- `--ws-terracotta-dark`: #A84D2C — hover state
- `--ws-orange-soft`: #E8895A — highlights, icons
- `--ws-brown`: #4A2E1A — headings
- `--ws-text`: #5C3D2E — body text
- `--ws-muted`: #9E7A65 — captions, labels
- `--ws-white`: #FFFAF5 — card surfaces, nav bg

## Typography
- Display / Headings: **Raleway** (700, 800) — Google Fonts
- Body: **Nunito** (400, 500, 600) — Google Fonts
- Large hero: 4–6rem, bold
- Section titles: 2–3rem
- Body: 1rem / 1.75 line-height

## Spacing
- Section vertical padding: 6–8rem
- Container max-width: 1200px, centered
- Card gap: 2rem
- Border radius: 1rem (cards), 0.5rem (buttons)

## Motion
- Staggered fade-up on scroll via IntersectionObserver
- Button hover: scale(1.03) + darken bg, 200ms ease
- Nav links: underline slide-in on hover
- Cards: soft lift (translateY -4px + shadow increase)

## Layout
- Nav: sticky top, warm white bg, logo left, links right
- Hero: large centered text, asymmetric with decorative blob/shape
- Section alternation: cream → beige → cream
- Footer: dark brown bg, warm white text

## Anti-patterns avoided
- No purple gradients
- No Inter/Roboto
- No cold blue-grey
- No generic card grid without personality
