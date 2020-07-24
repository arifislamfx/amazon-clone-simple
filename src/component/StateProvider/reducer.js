export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "Add_to_basket":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "Remove_from_basket":
      // old style by sunny
      //Logic for removing item from basket

      //we cloned the basket
      // let newBasket = [...state.basket];

      // const index = state.basket.findIndex(
      //   (basketItem) => basketItem.id === action.id
      // );
      // if (index >= 0) {
      //item exists in the basket, remove it....
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(
      //     `cant remove product (id: ${action.id}) as its not as a basket`
      //   );
      // }
      // return { ...state, basket: newBasket };

      //this new style from youtube clever programmer channel comments
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
export default reducer;
