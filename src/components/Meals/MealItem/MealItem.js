import React from 'react';

import classes from './MealItem.module.css';
import { MealItemForm} from './MealItemForm';

export const MealItem = (props) =>{

    const price = `	\u20B9${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>           
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem
