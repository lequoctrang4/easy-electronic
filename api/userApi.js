require("dotenv").config({ path: require("find-config")(".env") });

import axios from "axios";

export const searchItem = async (input) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/searchItem/${input}`,
  });
  return res.data;
};

export const getProductById = async (ID) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getProductById/${ID}`,
  });
  return res.data;
};
export const getProductByDev = async (Dev) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getProductByDev/${Dev}`,
  });
  return res.data;
};
export const getProductByCode = async (Code) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getProductById/${Code}`,
  });
  return res.data;
};
export const getProductByCategory = async (Category) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getProductByCategory/${Category}`,
  });
  return res.data;
};
export const getProductByDevAndCate = async (Dev, Category) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getProductByCategory/${Category}/${Dev}`,
  });
  return res.data;
};

export const detailProduct = async (id) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/detailProduct/${id}`,
  });
  return res.data;
};

export const getAllCategory = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getAllCategory`,
  });
  return res.data;
};

export const getAllAttribute = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getAllAttribute`,
  });
  return res.data;
};

export const signIn = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/signIn`,
    data: formValue,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const signUp = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/signUp`,
    data: formValue,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};

export const getProfile = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/getProfile`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const editProfile = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/editProfile`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};
export const setAvatar = async (token, formValue) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/setAvatar`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getAvatar = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/getAvatar`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const changePassword = async (token, formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/changePassword`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const forgetPassword = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:${process.env.PORT_BACKEND}/user/forgetPassword`,
    data: formValue,
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  return res.data;
};
