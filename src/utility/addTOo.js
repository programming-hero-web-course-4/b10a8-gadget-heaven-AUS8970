import { toast } from "react-toastify";

const getCartList = () => {
  const storedListStr = localStorage.getItem('cart-list');
  if(storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
}

const addToCartList = (id) => {
  const storedList = getCartList();
  if(storedList.includes(id)){
    toast('This product already exists in cart list.');
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('cart-list', storedListStr);
    toast('This product is added to your cart list');
  }
}

const getWishList = () => {
  const storedWishStr = localStorage.getItem('wish-list');
  if(storedWishStr) {
    const storedWish = JSON.parse(storedWishStr);
    return storedWish;
  } else {
    return [];
  }
}

const addToWishList = (id) => {
  const storedWish = getWishList();
  if(storedWish.includes(id)){
    toast('This product already exists in wish list.');
  } else {
    storedWish.push(id);
    const storedWishStr = JSON.stringify(storedWish);
    localStorage.setItem('wish-list', storedWishStr);
    toast('This product is added to your wish list');
  }
}

export { getCartList, addToCartList, getWishList, addToWishList };