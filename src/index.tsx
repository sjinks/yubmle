import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Items } from './context';

const items: Items = {
  items: {
    Main: [
      { id: 1, name: 'Jack Links Sweet Barbecue Chicken Tender Bites' },
      { id: 2, name: 'Bridgford Pepperoni & Cheese Pizza' },
      { id: 3, name: '7Days Peanut Butter & Jelly Croissant' },
      { id: 4, name: 'Fillos Walking Tamales Bean Salsa Verde' },
      { id: 5, name: 'Bumble Bee Chicken Salad Kit with Crackers' },
      { id: 6, name: "Bobo's Peanut Butter & Berry Jam Stuff'd Oat Bar" },
      { id: 7, name: "Annie's Real Aged Cheddar Microwave Mac and Cheese Cup" },
      { id: 8, name: 'Honey Nut Cheerios Cup' },
      { id: 9, name: 'Veggicopia Creamy Original Hummus' },
      { id: 10, name: 'Jack Links Beef & Cheese Sticks' },
      { id: 11, name: 'Bumble Bee Tuna Snack Kit with Crackers' },
      { id: 12, name: 'Veggicopia Creamy Black Bean Dip' },
      { id: 13, name: 'SunButter Creamy Sunflower Butter' },
    ],
    'Veggie Inspired Side': [
      { id: 14, name: 'Mt. Olive Kosher Dill Pickle Petites' },
      { id: 15, name: 'Ricks Picks Zesty Carrot Sticks' },
      { id: 16, name: 'Sensible Portions Sea Salt Garden Veggie Straws' },
      { id: 17, name: 'Harvest Snaps Green Pea Lightly Salted Snack Crisps' },
      { id: 18, name: 'Sour Cherry Berry Blast Off Cosmic Carrot Chews' },
    ],
    Fruit: [
      { id: 19, name: 'Brothers Strawberry Banana Freeze Dried Fruit Crisps' },
      { id: 20, name: 'Brothers Strawberry Freeze Dried Fruit Crisps' },
      { id: 21, name: 'GoGo Squeez Apple Cinnamon Applesauce' },
      { id: 22, name: 'Sun-Maid Sour Blue Raspberry Golden Raisins' },
      { id: 23, name: 'That’s It. Apple Blueberry Fruit Bar' },
      { id: 24, name: 'Brothers Fuji Apple Freeze Dried Fruit Crisps' },
      { id: 25, name: 'Sun-Maid Sour Strawberry Golden Raisins' },
    ],
    Snack: [
      { id: 26, name: 'Pillsbury Soft Baked Mini Chocolate Chip Cookies' },
      { id: 27, name: 'Larabar Kids Chocolate Brownie' },
      { id: 28, name: 'Strawberry Creme Simply Chex Snack Mix' },
      { id: 29, name: "Annie's Organic Cheddar Bunnies" },
    ],
  },
  addons: [
    { id: 100, name: 'Pillsbury Soft Baked Mini Chocolate', description: 'Chip Cookies - 5 Pack' },
    { id: 101, name: 'Larabar Kids Chocolate Brownie', description: 'Chocolate Brownie - 5 Pack' },
    { id: 102, name: "Annie's Organic Cheddar Bunnies", description: 'Cheddar Bunnies - 5 Pack' },
    { id: 103, name: 'Cheerios', description: '12 oz box' },
    { id: 104, name: 'Honey Nut Cheerios', description: '' },
    { id: 105, name: 'Nature Valley Granola Bar', description: 'Variety Pack – 30 ct.' },
    { id: 106, name: 'Chex Mix', description: '' },
    { id: 107, name: 'Old El Paso Tortillas', description: '' },
  ]
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>
);
