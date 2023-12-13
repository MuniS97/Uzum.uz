import axios from "axios";
const base_url = import.meta.env.VITE_BASE_URL;

export const getData = async (resource) => {
  try {
    const res = await axios.get(base_url + resource);

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const postData = async (resource, body) => {
  try {
    const res = await axios.post(base_url + resource, body);

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const editData = async (resource, body) => {
  try {
    const res = await axios.patch(base_url + resource, body);

    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
