import axios from 'axios';

export const getAllPhone = async() => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getallphone`,
    });
    return res.data;
};

export const getAllLaptop = async() => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getalllaptop`,
    });
    return res.data;
};
export const getAllTablet = async() => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getalltablet`,
    });
    return res.data;
};

export const getAllWatch = async() => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getallwatch`,
    });
    return res.data;
};

export const getAllPhoneById = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getphone/id/${id}`,
    });
    return res.data;
};

export const getAllLaptopById = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getlaptop/id/${id}`,
    });
    return res.data;
};

export const getAllTabletById = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/gettablet/id/${id}`,
    });
    return res.data;
};
export const getAllWatchById = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getwatch/id/${id}`,
    });
    return res.data;
};

export const getPhoneByDeveloper = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getphone/dev/${id}`,
    });
    return res.data;
};
export const getLaptopByDeveloper = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/getlaptop/dev/${id}`,
    });
    return res.data;
};
export const getTabletByDeveloper = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/gettablet/dev/${id}`,
    });
    return res.data;
};
export const getWatchByDeveloper = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/gettablet/dev/${id}`,
    });
    return res.data;
};

export const searchItem = async(id) => {
    const res = await axios({
    method: "get",
    url: `http://localhost:3001/product/searchItem/param/${id}`,
    });
    return res.data;
};
