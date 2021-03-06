export const ADD_ITEM = "ADD_ITEM";
export const CHECK_ITEM = "CHECK_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

let itemID = 0;

export const addItem = item => {
  return {
    type: ADD_ITEM,
    todo: { todo: item, complete: false, id: itemID++ }
  };
};

export const checkItem = id => {
  return {
    type: CHECK_ITEM,
    id: id
  };
};

export const removeItem = ids => {
  return {
    type: REMOVE_ITEM
  };
};
