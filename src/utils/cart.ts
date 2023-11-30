export const getCartQuantity = (cart: CartItem[]) =>
  cart.reduce((acc, curr) => acc + curr.quantity, 0)

export const getCartTotal = (cart: CartItem[]) =>
  cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
