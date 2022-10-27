import axiosInstance from "../axios/axios";

export const listNewPhotos = () => {
  return axiosInstance.get(
    "photos?&client_id=GSUewR4idPGYZJ3limTOE3HzFA4wSk0LQo8EPmXESd4"
  );
};
