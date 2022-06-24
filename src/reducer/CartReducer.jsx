const CART_TYPES = {
  addProduct: "ADD_PRODUCT",
  superviseCart: "SUPERVISE_CART",
  totalItemsAndAmount: "TOTAL_ITEMS_AND_AMOUNT",
  changeQuantity: "CHANGE_QUANTITY",
  deleteProduct: "DELETE_PRODUCT",
  clearCart: "CLEAR_CART",
  shippingFee: "SHIPPING_FEE",
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
  deleteProduct(payload) {
    return {
      type: CART_TYPES.deleteProduct,
      payload,
    };
  },
  clearCart() {
    return {
      type: CART_TYPES.clearCart,
    };
  },
  shippingFee(payload) {
    return {
      type: CART_TYPES.shippingFee,
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
      const { id, idWithColor: idColor, max, side } = action.payload;
      const sameProductID = state.eachProductTotal[id];

      let newCart;

      if (side === "up") {
        newCart = state.cart.map((product) => {
          if (product.idWithColor !== idColor) return product;

          // sameProductID includes product
          // product plus 1 means sameProductID + 1
          let newQuantity =
            sameProductID + 1 > max ? product.quantity : product.quantity + 1;

          return {
            ...product,
            quantity: newQuantity,
          };
        });
      }

      if (side === "down") {
        newCart = state.cart.map((product) => {
          if (product.idWithColor !== idColor) return product;

          // sameProductID includes product
          // product minus 1 means sameProductID - 1
          let newQuantity =
            product.quantity - 1 <= 0 ? product.quantity : product.quantity - 1;

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
    case CART_TYPES.deleteProduct:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.idWithColor !== action.payload
        ),
      };
    case CART_TYPES.clearCart:
      return {
        ...state,
        cart: [],
      };
    case CART_TYPES.shippingFee:
      // Price <= 150000: Free 500
      // Price > 150000: Free 1000
      const idProducts = [];
      const shippingFee = action.payload.reduce((acc, cur) => {
        if (!idProducts.includes(cur.id)) {
          let fee;

          if (cur.price > 150000) fee = 1000;
          else fee = 500;

          idProducts.push(cur.id);

          return acc + fee;
        }

        return acc;
      }, 0);

      return {
        ...state,
        shippingFee,
      };
    default:
      throw new Error("[Cart]: Invalid action!");
  }
}

export { CART_TYPES, CART_ACTIONS };
export default cartReducer;
