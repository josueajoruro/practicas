import { useState, useEffect, useMemo } from "react";
import { db } from "../data/db"; // Trae las guitarras y sus datos

const useCart = () => {
  // Método que devuelve los productos almacenados en localStorage o un array vacio si no existe
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);
  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Metodo para añadir
  function addToCart(item) {
    // busca si la guitarra ya existe, devuelve -1 si no existe
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);
    // itemExists obtiene la posicion del elemento del array
    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      const updatedCart = [...cart]; // toma una copia del cart
      updatedCart[itemExists].quantity++; //incrementa la cantidad
      setCart(updatedCart); // actualiza el estado
    } else {
      item.quantity = 1;
      console.log("No existe... Agregando...");
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }
  // Método que incrementa la catidad de productos
  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart); // Actualiza el cart con la catidad
  }
  // Método que disminuye la cantidad de productos
  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        // Retorna todos los datos con la cantidad disminuida
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }
  // Método para borrar todos los pedidos
  function clearCart() {
    setCart([]);
  }

  // state derivado porque ocupa el state de cart
  const isEmpty = useMemo(() => cart.length === 0, [cart]); // ejecuta el codigo cuando cambie el cart
  // Realiza el calculo del coste cada que se actualiza la cart
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart],
  );
  // Retorna los datos y metodos
  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};

export default useCart;
