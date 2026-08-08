## Project structure
```bash
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Home page (product listing)
│   ├── globals.css             # Global styles (Tailwind import)
│   ├── cart/
│   │   └── page.tsx            # Cart page
│   └── product/
│       └── [id]/
│           └── page.tsx        # Product detail page
├── components/
│   ├── Header.tsx               # Navbar with search & cart icon
│   ├── Footer.tsx                # Site footer
│   ├── HomeContent.tsx          # Home page logic (filters, search)
│   ├── Sidebar.tsx               # Category & price filters
│   ├── ProductCard.tsx           # Product card with hover expand
│   └── ProductDetailClient.tsx   # Product detail interactions
├── data/
│   └── products.ts               # Static product data
├── store/
│   └── cartStore.ts               # Zustand cart store
└── next.config.ts                 # Image remote patterns config
```
### Live Link
https://assignment-ecommerce-chi.vercel.app/