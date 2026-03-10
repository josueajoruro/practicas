import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};
export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  // Calcula el subtotal sin propina
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order],
  );
  // Calcula cuanto seria la propina
  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]); // realiza el calculo cuando cambia el porcentaje o la orden
  // Calcula el total a pagar más la propina
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount],
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="bg-black text-white p-3 w-full uppercase font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0} onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
