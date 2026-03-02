export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};
// Herencia
export type CartItem = Guitar & {
  quantity: number;
};

/*
// Pick | permite elegir ciertos elementos de otros types
export type CartItemP = Pick<Guitar, "id" | "name"> & {
  quantity: number;
};

// Omit | permite omitir ciertos elementos
export type CartItemO = Omit<Guitar, "id" | "name"> & {
  quantity: number;
};
*/
