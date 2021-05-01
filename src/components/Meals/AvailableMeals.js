import React from 'react';
import classes from './AvailableMeals.module.css';
import { Card} from '../UI/Card';
import { MealItem} from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Mutton Biryani',
      description: 'Goat meat, fried onions, basmati rice, , spices',
      price: 250.00,
    },
    {
      id: 'm2',
      name: 'Chicken Biryani',
      description: 'Chicken meat, fried onions, basmati rice, , spices',
      price: 170.00,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 350.50,
    },
    {
      id: 'm4',
      name: 'Fish Biryani',
      description: 'Seer fish, fried onions, basmati rice, , spices.',
      price: 210.00,
    },
  ];

export const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
      key ={meal.id} 
      name={meal.name}
      description={meal.description}
      price={meal.price} />)
    return <section className={classes.meals}>
      <Card>
      <ul>
        {mealsList}
      </ul>
      </Card >
    </section>
}

export default AvailableMeals
