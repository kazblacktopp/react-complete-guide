import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function openCartHandler() {
    setCartIsOpen(true);
  }

  function closeCartHandler() {
    setCartIsOpen(false);
  }

  return (
    <CartProvider>
      {cartIsOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
