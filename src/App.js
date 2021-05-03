import React, { useState} from 'react';

import { Meals} from './components/Meals/Meals';
import { Cart} from './components/Cart/Cart';

import { Header} from './components/Layout/Header'
import {cartProvider}  from './store/cart-provider';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <cartProvider>
      {cartIsShown && <Cart onClose= {hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </cartProvider>
    
  );
}

export default App;
