import axios from "axios";

export const getAllUser = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/admin/getAllUser`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const getAllStaff = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/admin/getAllStaff`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const getUser = async (id, token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/admin/getUser/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const deleteUser = async (id, token) => {
  const res = await axios({
    method: "delete",
    url: `http://localhost:3001/admin/deleteUser/${id}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return res.data;
};
export const addStaff = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:3001/admin/addStaff`,
    data: formValue,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'text/plain'
    },
  });
  return res.data;
};
export const getAllAttribute = async (token) => {
  const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getAllAttribute`,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


export const addAttribute = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:3001/product/addAttribute`,
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
    url: `http://localhost:3001/product/deleteAttribute/${id}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return res.data;
};
export const editAttribute = async (id, formValue, token) => {
  const res = await axios({
    method: "patch",
    url: `http://localhost:3001/product/editAttribute/${id}`,
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
    url: `http://localhost:3001/product/addProduct`,
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
    url: `http://localhost:3001/product/editProduct/${id}`,
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
    url: `http://localhost:3001/product/deleteProduct/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const addCategory = async (formValue, token) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:3001/product/addCategory`,
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
    url: `http://localhost:3001/product/editCategory/${id}`,
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
    url: `http://localhost:3001/product/deleteCategory/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};




