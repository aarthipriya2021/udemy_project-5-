import React, { Fragment} from 'react';

import mealsImage from '../../assets/foods.jpg';
import { HeaderCartButton} from './HeaderCartButton'
import classes from './Header.module.css';

export const Header = (props) =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>YummyEats</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Meals in table"/>
        </div>
    </Fragment>
}

export default Header
