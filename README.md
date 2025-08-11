# E-Commerce Store App

A modern, responsive e-commerce web application built with React and Tailwind CSS. This project demonstrates a complete online shopping experience, including product browsing, category filtering, shopping cart management, and a contact form.

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Product Catalog:** Browse products fetched from a public API.
- **Category Filtering:** Filter products by category.
- **Shopping Cart:** Add, remove, and view items in your cart.
- **Modern UI:** Clean, attractive interface using Tailwind CSS.
- **Contact Form:** Users can send messages via a styled contact page.
- **Routing:** Seamless navigation using React Router.
- **Add to Cart:** Functionality To add products to cart also total price and total quantity and increase or decrease quantity

## Technologies Used

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)
- [DummyJSON API](https://dummyjson.com/) (for product data)
- [Framer Motion] (https://motion.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/e-commerce-store-app.git
   cd e-commerce-store-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Folder Structure

```
src/
  components/      # Reusable UI components (Header, HeroSection, etc.)
  context/         # React Context for shop and cart state
  pages/           # Main pages (Home, About, ContactUs, etc.)
  assets/          # Images and static files
  App.jsx          # Main app component
  main.jsx         # Entry point
```

## Customization

- **API:** You can change the API endpoints in `src/context/ShopContext.jsx` to use your own backend.
- **Styling:** Modify Tailwind classes in components for your brand colors and style.

---

**Made with ❤️ using React &