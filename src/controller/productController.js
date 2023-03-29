import productModel from '../models/productModel'

let getProductByCategory = async (req, res) =>{
    let category = req.params.category;
    let rs = await productModel.getProductByCategory(category);
    return res.status(200).json({data: rs});
}
let getProductByDev = async (req, res) =>{
    let dev = req.params.dev;
    let rs = await productModel.getProductByDev(dev);
    return res.status(200).json({data: rs});
}
let getProductByDevAndCate = async (req, res) =>{
    let dev = req.params.dev;
    let cate = req.params.cate;
    let rs = await productModel.getProductByDevAndCate(cate, dev);
    return res.status(200).json({data: rs});
}

let addProduct =async (req, res) =>{
    let rs = "success";
    console.log(req.body.name);
    return res.status(200).json({data: rs});
    
};

let searchItem = async (req, res) => {
    let param = req.params.param;
    let rs = await productModel.searchItem(param);
    return res.status(400).json({data:rs});
};

module.exports = {
    getProductByCategory, addProduct, getProductByDev, getProductByDevAndCate,
    searchItem
}