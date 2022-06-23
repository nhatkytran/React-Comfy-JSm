const CART_TYPES = {
  addProduct: "ADD_PRODUCT",
  superviseCart: "SUPERVISE_CART",
  totalItemsAndAmount: "TOTAL_ITEMS_AND_AMOUNT",
  changeQuantity: "CHANGE_QUANTITY",
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
  setTotalItemsAndAmount(payload) {
    return {
      type: CART_TYPES.totalItemsAndAmount,
      payload,
    };
  },
  changeQuantity(payload) {
    return {
      type: CART_TYPES.changeQuantity,
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
      let productSameID = state.eachProductTotal[product.id];
      let tempProduct = state.cart.find(
        (product) => product.idWithColor === idWithColor
      );

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
    case CART_TYPES.totalItemsAndAmount:
      const { totalItems, totalAmount } = action.payload.reduce(
        (acc, cur) => {
          acc.totalItems += cur.quantity;
          acc.totalAmount += cur.price * cur.quantity;

          return acc;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );

      return {
        ...state,
        totalItems,
        totalAmount,
      };
    case CART_TYPES.changeQuantity:
      console.log(123);
      const { id, idWithColor: idColor, max, side } = action.payload;
      const sameProductID = state.eachProductTotal[id];
      let newCart;

      if (side === "up") {
        newCart = state.cart.map((product) => {
          if (product.idWithColor !== idColor) return product;

          let newQuantity = product.quantity + 1;

          if (newQuantity + sameProductID > max)
            newQuantity = max - sameProductID;

          return {
            ...product,
            quantity: newQuantity,
          };
        });
      }

      return {
        ...state,
        cart: newCart,
      };
    default:
      throw new Error("[Cart]: Invalid action!");
  }
}

export { CART_TYPES, CART_ACTIONS };
export default cartReducer;
