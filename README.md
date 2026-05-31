# Lebanon Hotels Booking - React Web Project

A modern React website for discovering and booking hotels across Lebanon. This project demonstrates React concepts, React Router for navigation, Tailwind CSS styling, and interactive components like carousel sliders.

## Project Structure

```
project-try/
├── public/
│   ├── index.html          # Main HTML file
│   └── hotel-img/          # Hotel images
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation menu component
│   │   ├── Footer.js       # Footer component
│   │   └── FeaturedHotelsSlider.js  # Featured hotels carousel
│   ├── pages/
│   │   ├── Home.js         # Home page with featured hotels slider
│   │   ├── Hotels.js       # Hotels listing page
│   │   ├── Rooms.js        # Room details page
│   │   ├── About.js        # About page
│   │   └── Booking.js      # Booking page
│   ├── App.js              # Main app component with routing
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind CSS configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config (Tailwind + Autoprefixer)
├── package.json            # Dependencies and scripts
└── .gitignore             # Git ignore file
```

## Installation & Running the Project

### Step 1: Install Node.js

First, download and install Node.js from https://nodejs.org (LTS version recommended)

### Step 2: Navigate to Project Folder

Open Command Prompt and navigate to your project folder:

```
cd C:\Users\Admin\Desktop\project-try
```

### Step 3: Install Dependencies

Run the following command to install all required packages:

```
npm install
```

This will install React, React Router, Tailwind CSS, and other dependencies.

### Step 4: Start Development Server

Run the following command to start the development server:

```
npm start
```

The project will automatically open in your browser at http://localhost:3000

### Step 5: Build for Production

When ready to deploy, create an optimized production build:

```
npm run build
```

This creates a `build` folder with optimized production-ready files.

---

## Pages Overview

### 1. Home Page

- Hero section with welcome message
- **Featured Hotels Slider** - Interactive carousel showcasing 3 premium hotels
  - Auto-play carousel that cycles every 5 seconds
  - Previous/Next navigation buttons
  - Dot indicators to jump to specific hotels
  - Large images with hover zoom effect
  - Price badges and call-to-action buttons
- Statistics section (120+ hotels, 25+ cities, 50k+ guests, 4.7★ rating)
- Features overview (Seaside & City Locations, Best Deals & Offers, 24/7 Customer Support)

### 2. Hotels Page

- Displays all available hotels across Lebanon
- Hotel cards with images, details, and pricing
- Filter and search functionality
- Quick booking options for each hotel

### 3. Rooms Page

- Room details and availability information
- Room types and amenities
- Pricing for different seasons
- Room booking form

### 4. About Page

- Information about the hotel booking platform
- Company mission and values
- Information about Lebanon's tourism

### 5. Booking Page

- Complete hotel/room booking form
- Guest information fields (name, email, phone)
- Check-in/check-out date selection
- Guest count selection
- Room type selection
- Special requests field
- Booking confirmation

---

## How React Router Works

This project uses React Router to navigate between pages without reloading the entire application.

### Key Concepts:

1. **BrowserRouter** (in App.js)
   - Wraps the entire application to enable routing

2. **Routes** (in App.js)
   - Defines all available routes and their corresponding components

3. **Route** (in App.js)
   - Maps a URL path to a component
   - Example: `<Route path="/about" element={<About />} />`

4. **Link** (in Navbar.js)
   - Creates navigation links without page reloads
   - Example: `<Link to="/services">Services</Link>`

### Navigation Flow:

- When a user clicks a link in the Navbar, React Router changes the URL
- The matching Route renders the corresponding component
- No server round-trip needed - everything happpage component
- No full page reload - navigation happens instantly in the browser

### URL Routes:

- `/` → Home page
- `/hotels` → Hotels listing
- `/rooms` → Room details
- `/about` → About page
- `/booking` → Booking form

---

## Styling & CSS

This project uses **Tailwind CSS** for modern, utility-first styling:

- Responsive grid and flexbox layouts
- Smooth transitions and hover effects
- Beautiful gradient backgrounds
- Shadow effects for depth
- Mobile-responsive design
- Dark mode support ready

### Key Features:

- Blue and green color scheme for travel/hospitality theme
- Card-based layouts with hover animations
- Interactive buttons with smooth transitions
- Fully responsive on mobile, tablet, and desktop
- Clean, modern design suitable for professional use

---

## Features

✅ React functional components & hooks
✅ React Router for smooth navigation
✅ **Interactive carousel slider** (Featured Hotels)
✅ Tailwind CSS for modern styling
✅ Form handling with state management
✅ Reusable components (Navbar, Footer, FeaturedHotelsSlider)
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations and transitions
✅ Hotel image galleries
✅ Price display and booking options
✅ Auto-play carousel with manual controls

---

## Technologies Used

with hooks

- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool
- **Autoprefixer** - Cross-browser CSS compatibility
- **CSS3** - Styling and responsive design
- **Create React App** - Project setup and build tools

---

booking form currently displays submitted data in alerts and stores it in component state

- All data is temporary and will be lost on page refresh (no backend database)
- Images should be placed in the `public/hotel-img/` folder
- The carousel slider automatically plays and can be paused by user interaction
- The design uses modern best practices with Tailwind CSS utilitieshe submitted data.
- All data is stored in component state and will be lost on page refresh.
- The design is intentionally simple to look like a university project.
- No external UI libraries are used (no Bootstrap, Tailwind, or Material UI).

---

Carousel slider not auto-playing\*\*

- Check browser console for JavaScript errors
- Ensure `FeaturedHotelsSlider.js` is properly imported in Home.js
- Verify that `useEffect` hooks are working (React DevTools can help)

**Issue: Tailwind CSS styles not appearing**

- Make sure `npm install` completed successfully
- Restart the development server: Stop it (Ctrl+C) and run `npm start` again
- Check that `index.css` contains the Tailwind directives (@tailwind base, components, utilities)

**Issue: Images not loading**

- Verify images are in `public/hotel-img/` folder
- Check image paths in components match the file names exactly (case-sensitivein browser\*\*

- Check the browser console for errors
- Hard refresh the pLebanon hotels booking platform! 🏨✈️

---

Good luck with your hospital website project! 🏥
