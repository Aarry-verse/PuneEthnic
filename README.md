# Pune Ethnic website

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion. Deploy on Vercel.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build

## Deploy
Push to GitHub, import the repo in Vercel. Set `NEXT_PUBLIC_SITE_URL` to the live domain.

## Update content (all in `src/data/site.ts`)
- **Business details**: `business` (address, hours, Instagram, announcement). Empty values are hidden.
- **Collections**: `collections`. Add `image: "/images/collections/sherwanis.jpg"`.
- **Products**: add an object to `products`; delete `placeholder: true` once real. `price` and `sizes` show only if set.
  Images: put files in `public/images/products/` and list them in `images: ["/images/products/x.jpg"]`.
- **Gallery**: edit `gallery` with `src: "/images/gallery/x.jpg"`.
- **Hero, wedding banner, about photo**: set paths in `images`.
- **About text**: `src/app/about/page.tsx`.
Use JPG/WebP, about 1600px on the long side; Next.js optimises them.

## Notes
- The contact form has no server: valid submissions open WhatsApp with the message pre-filled.
- Verify the full address, hours and Google Maps link before launch.
