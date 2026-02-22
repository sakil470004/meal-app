# Meal App

A React Native meal recipe application built with Expo. Browse meal categories, view detailed recipes with ingredients and cooking steps, and save your favorite meals.

## Features

- Browse 10 meal categories (Italian, Asian, German, French, etc.)
- View meals filtered by category
- Detailed recipe view with:
  - Meal image
  - Cooking duration
  - Complexity level (simple/challenging/hard)
  - Affordability (affordable/pricey/luxurious)
  - Ingredients list
  - Step-by-step cooking instructions
  - Dietary info (Gluten-Free, Vegan, Vegetarian, Lactose-Free)
- Add/remove meals to favorites
- Drawer navigation for easy access to Categories and Favorites

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React Native | 0.76.3 | Core framework |
| Expo | 52.0.16 | Development platform |
| React Navigation | 7.x | Drawer + Stack navigation |
| Redux Toolkit | 2.6.1 | State management (favorites) |
| React Redux | 9.2.0 | Redux bindings |

## Project Structure

```
meal-app/
├── App.js                      # Main app entry with navigation setup
├── app.json                    # Expo configuration
├── babel.config.js             # Babel configuration
├── package.json                # Dependencies and scripts
│
├── components/
│   ├── CategoryGridTile.js     # Category card component
│   ├── IconButton.js           # Reusable icon button (favorite star)
│   ├── MealDetails.js          # Meal info display (duration, complexity, etc.)
│   └── MealsList/
│       ├── MealItem.js         # Single meal card component
│       └── MealsList.js        # FlatList of meals
│
├── data/
│   └── dummy-data.js           # Static meal & category data (10 categories, 10 meals)
│
├── models/
│   ├── category.js             # Category class model
│   └── meal.js                 # Meal class model
│
├── screens/
│   ├── CategoriesScreen.js     # Grid of meal categories
│   ├── FavoritesScreen.js      # List of favorited meals
│   ├── MealDetailsScreen.js    # Full recipe details with favorite toggle
│   └── MealsOverviewScreen.js  # Meals filtered by selected category
│
└── store/
    ├── context/
    │   └── favorites-context.js  # Context API implementation (commented out)
    └── redux/
        ├── favorites.js          # Redux slice for favorites
        └── store.js              # Redux store configuration
```

## Navigation Flow

```
Drawer Navigator
├── Categories Screen (Grid of 10 food categories)
│   └── [Select Category] → Meals Overview Screen
│       └── [Select Meal] → Meal Details Screen (with ⭐ favorite toggle)
│
└── Favorites Screen (List of saved meals)
    └── [Select Meal] → Meal Details Screen
```

## Data Models

**Category**
- `id` - Unique identifier
- `title` - Category name
- `color` - Background color

**Meal**
- `id` - Unique identifier
- `categoryIds` - Array of category IDs
- `title` - Meal name
- `affordability` - affordable | pricey | luxurious
- `complexity` - simple | challenging | hard
- `imageUrl` - Image URL
- `duration` - Cooking time in minutes
- `ingredients` - Array of ingredients
- `steps` - Array of cooking steps
- `isGlutenFree` - Boolean
- `isVegan` - Boolean
- `isVegetarian` - Boolean
- `isLactoseFree` - Boolean

## Sample Data

### Categories
Italian, Quick & Easy, Hamburgers, German, Light & Lovely, Exotic, Breakfast, Asian, French, Summer

### Meals
1. Spaghetti with Tomato Sauce (Italian, Quick & Easy)
2. Toast Hawaii (Quick & Easy)
3. Classic Hamburger (Hamburgers)
4. Wiener Schnitzel (German)
5. Salad with Smoked Salmon (Quick & Easy, Light & Lovely, Summer)
6. Delicious Orange Mousse (Exotic, Summer)
7. Pancakes (Breakfast)
8. Creamy Indian Chicken Curry (Asian)
9. Chocolate Souffle (French)
10. Asparagus Salad with Cherry Tomatoes (Quick & Easy, Light & Lovely, Summer)

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Expo Go app (for mobile testing)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

### Running the App

```bash
# Start Expo
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web
```

Scan the QR code with Expo Go app to run on your physical device.

## State Management

This project demonstrates **two approaches** for state management:

1. **Redux Toolkit** (Currently Active) - Used for managing favorite meals
2. **Context API** (Commented out) - Alternative implementation available in `store/context/`

## Course Info

This project is from **Academind's React Native Course - Section 6**
