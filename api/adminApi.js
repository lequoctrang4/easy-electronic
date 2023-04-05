require("dotenv").config({ path: require("find-config")(".env") });
import axios from "axios";

export const getAllAttribute = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/getAllAttribute`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const addAttribute = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/addAttribute`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const deleteAttribute = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/deleteAttribute/${id}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return res.data;
};
export const editAttribute = async (id, formValue, token) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/editAttribute/${id}`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const addProduct = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/addProduct`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
  return res.data;
};

export const editProduct = async (id, formValue, token) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/editProduct/${id}`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteProduct = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/deleteProduct/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const addCategory = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/addCategory`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const editCategory = async (id, formValue, token) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/editCategory/${id}`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  return res.data;
};

export const deleteCategory = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://localhost:${process.env.PORT_BACKEND}/product/deleteCategory/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};




