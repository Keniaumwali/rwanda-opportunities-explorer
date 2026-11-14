# Rwanda Opportunities Explorer

## 1. Project Overview

Rwanda Opportunities Explorer is a responsive React web application that helps users discover, search, filter, sort, and save opportunities available across different cities in Rwanda.

The application provides information about technology events, business activities, career development programs, and community initiatives.

## 2. Main Features

- **Browse Opportunities:** View a collection of opportunities across Rwanda.
- **Live Search:** Search opportunities by title or city.
- **Category Filtering:** Filter opportunities by Technology, Business, Community, and Career.
- **Availability Filtering:** Display only opportunities with available places.
- **Saved Opportunities:** Save and unsave opportunities for easier access.
- **Sorting:** Sort opportunities by date, title, or available places.
- **Add New Opportunities:** Use a controlled form to add new opportunities.
- **Form Validation:** Validate required fields and numerical values before submission.
- **Opportunity Information:** View descriptions, dates, locations, prices, and available places.
- **Featured and Status Labels:** Identify featured, free, and fully booked opportunities.
- **Loading and Error States:** Demonstrate loading, error, and retry functionality.
- **Responsive Design:** Display the application across different screen sizes.

## 3. Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS v4
- HTML5
- CSS3

## 4. Project Structure

```text
rwanda-opportunities-explorer/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddOpportunityForm.jsx
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── OpportunityCard.jsx
│   │   ├── OpportunityFilters.jsx
│   │   └── OpportunityList.jsx
│   │
│   ├── data/
│   │   └── seedOpportunities.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 5. Installation and Setup

### Prerequisites

- Node.js
- npm
- Visual Studio Code or another code editor

### Step 1: Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate into the project folder

```bash
cd rwanda-opportunities-explorer
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

### Step 5: Build for production

```bash
npm run build
```

## 6. Sample Data

The application includes sample opportunities from different cities in Rwanda, including:

- Kigali
- Musanze
- Huye
- Rubavu

The sample data is stored in `src/data/seedOpportunities.js`.

Each opportunity includes information such as its title, category, city, date, description, capacity, available places, price, and featured status.

## 7. Learning Objectives

This project demonstrates practical use of:

- React functional components.
- Reusable components and props.
- React state management with `useState`.
- Derived data and `useMemo`.
- Rendering lists using `.map()` and unique keys.
- Conditional rendering.
- Controlled form inputs and validation.
- Search, filtering, and sorting.
- Responsive user interface development with Tailwind CSS.

## 8. Author

**Umwali Keza Kenia**

Frontend Development Student

Kigali, Rwanda
