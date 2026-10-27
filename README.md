# Medical-Temp — Deependrx local business website template

A polished, responsive, static website designed as a reusable starting point for local-business prospect demos. Built with plain HTML, CSS and JavaScript; no build step or framework required.

## Preview

Open `index.html` locally, or deploy the repository to a static host such as Cloudflare Pages or GitHub Pages.

## Personalise for each prospect

Edit the `BUSINESS` object near the top of `script.js`:

- `name`: business or clinic name
- `category`: business type and city
- `eyebrow`: short positioning line
- `phoneDisplay`: phone number text shown in the contact section
- `phone`: reserved for adding a click-to-call link
- `email`: email used by the enquiry form
- `address`: address shown in the contact section
- `mapUrl`: reserved for adding a map link

Then update the services, about copy, imagery, contact details, and any industry-specific content in `index.html`. Update the page title and description if you change the business type.

## Important before sending a client-specific preview

- Replace every generic statement with verified details for the business.
- Replace stock photography with licensed images or images supplied/approved by the business.
- Do not invent reviews, star ratings, credentials, opening hours, prices, results, or customer claims. The current page intentionally uses service principles rather than fabricated testimonials.
- Add a real booking, phone, map, or WhatsApp link only after verifying the destination.
- The enquiry form is demo-only unless `email` is configured. It opens the visitor's email app and does not store submissions. It is not a backend form.
- The page is a prospect concept, not an official business website, until the business approves it.
- Check mobile layout, keyboard navigation, links, and content before sharing.

## Files

- `index.html` — page content and sections
- `styles.css` — responsive layout and visual design
- `script.js` — editable business configuration, mobile menu, and demo form behaviour
- `favicon.svg` — simple brand mark

## Deployment

For Cloudflare Pages, connect this GitHub repository and use the root directory. This is a static site and requires no build command; the output directory is `/` or the repository root depending on the host's settings.
