import { SET_PHOTOS } from "./action";

const initialState = {
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default photosReducer;
