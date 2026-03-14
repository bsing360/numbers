Numbers Bible React App

Overview

Numbers Bible is a React + TypeScript web application that displays numbers and their significance in the Bible. Users can:

Browse a grid of numbers with images and descriptions

Search and filter numbers in real-time

Click on a number card to view a detailed page

Enjoy a responsive layout that works on mobile, tablet, and desktop

This project demonstrates modern frontend skills suitable for a Junior Frontend Developer portfolio.

Features

React + TypeScript: Component-based architecture with type safety

Responsive Grid Layout: Cards automatically adjust to viewport size

Dynamic Rendering: Number cards generated from a structured data file

Search & Filter: Real-time filtering of numbers by value or text

Routing: SPA navigation with React Router (/ → grid, /number/:id → detail page)

Public Assets: All images stored in the public folder for proper routing

Hover Effects: Cards animate on hover with lift and shadow

Tech Stack

Frontend: React, TypeScript, Vite

Routing: React Router

Styling: CSS (responsive grid, hover effects)

Deployment: Ready for Vercel / Netlify

Project Structure
numbers-bible-react/
├─ public/
│  ├─ images/       # All static images
├─ src/
│  ├─ components/
│  │  ├─ Header.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Main.tsx
│  │  ├─ NumberCard.tsx
│  │  └─ NumberDetails.tsx
│  ├─ data/
│  │  └─ numbers.ts
│  ├─ types/
│  │  └─ NumberEntry.ts
│  ├─ styles/
│  │  ├─ general.css
│  │  └─ numbers.css
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ package.json
└─ README.md
Installation

Clone the repository:

git clone https://github.com/yourusername/numbers-bible-react.git
cd numbers-bible-react

Install dependencies:

npm install

Run the development server:

npm run dev

Open in your browser:

http://localhost:5173
Usage

Browse the numbers on the main page

Type in the search bar to filter numbers

Click any number card to see its detailed page

Use the back link to return to the grid

Deployment

This app is ready to deploy on Vercel or Netlify. Simply point the hosting platform to your repository and the app will build automatically.

Future Improvements

Add highlighted search matches for better UX

Add animations/transitions for page navigation

Fetch numbers from an API instead of a static data file

Implement pagination or infinite scroll for large datasets

License

This project is open-source under the MIT License.