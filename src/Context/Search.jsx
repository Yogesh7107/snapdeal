
import { createContext, useState } from "react";

export const Authcontext = createContext();

export function Authcontextproviderfunction({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  const searchvaluefunction = (value) => {
    setSearchQuery(value);
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Authcontext.Provider value={{ searchQuery, searchvaluefunction, cart, addToCart, removeFromCart, updateQuantity, totalQuantity }}>
      {children}
    </Authcontext.Provider>
  );
}
