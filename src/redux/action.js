import { listNewPhotos } from "../api/listNewPhotos/listNewPhotos";

export const SET_PHOTOS = "SET_PHOTOS";

export const setPhotos = (photos) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export const fetchPhoto = () => async (dispatch, getState) => {
  try {
    const answer = await listNewPhotos();
    dispatch(setPhotos(answer.data));
  } catch (e) {
    console.log("e", e);
  }
};
