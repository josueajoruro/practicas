import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id); // devuelve true si encuentra el id
    // Verifica la existencia para no duplicar y solamente aumentar la cantidad
    if (itemExists) {
      //map | retorna un nuevo arreglo con el resultado
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id // identifica el elemento
          ? { ...orderItem, quantity: orderItem.quantity + 1 } // actualiza la cantidad del elemento
          : orderItem,
      );
      setOrder(updatedOrder); // actualiza la orden
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]); // actualiza la orden
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id)); // devuelve todos los elementos menos el eliminado
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
