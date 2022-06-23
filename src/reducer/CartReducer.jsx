const CART_TYPES = {
  addProduct: "ADD_PRODUCT",
  superviseCart: "SUPERVISE_CART",
};

const CART_ACTIONS = {
  addProduct(payload) {
    return {
      type: CART_TYPES.addProduct,
      payload,
    };
  },
  superviseCart(payload) {
    return {
      type: CART_TYPES.superviseCart,
      payload,
    };
  },
};

function cartReducer(state, action) {
  switch (action.type) {
    case CART_TYPES.addProduct:
      const { product, color } = action.payload;
      const idWithColor = product.id + color;

      let tempCart;
      let { quantity } = action.payload;
      let tempProduct = state.cart.find(
        (product) => product.idWithColor === idWithColor
      );

      let productSameID = Object.entries(state.eachProductTotal)
        .find((entry) => {
          return entry[0] === product.id;
        })
        ?.at(1);

      if (productSameID) {
        if (quantity > product.stock - productSameID)
          quantity = product.stock - productSameID;
      }

      if (tempProduct) {
        tempCart = state.cart.map((product) => {
          if (product.idWithColor !== tempProduct.idWithColor) return product;

          const newQuantity = product.quantity + quantity;

          return {
            ...product,
            quantity: newQuantity,
          };
        });
      }

      if (!tempProduct) {
        if (quantity) {
          tempProduct = {
            id: product.id,
            idWithColor,
            color: color,
            quantity,
            name: product.name,
            image: product.images[0].thumbnails.large.url,
            price: product.price,
            max: product.stock,
          };
          tempCart = [...state.cart, tempProduct];
        } else {
          tempCart = [...state.cart];
        }
      }

      return {
        ...state,
        cart: tempCart,
      };
    case CART_TYPES.superviseCart:
      const eachProductTotal = {};

      action.payload.forEach((product) => {
        if (!eachProductTotal[product.id])
          eachProductTotal[product.id] = product.quantity;
        else eachProductTotal[product.id] += product.quantity;
      });

      return {
        ...state,
        eachProductTotal,
      };
    default:
      throw new Error("[Cart]: Invalid action!");
  }
}

export { CART_TYPES, CART_ACTIONS };
export default cartReducer;
