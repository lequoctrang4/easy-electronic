import { group } from 'console';
import productModel from '../models/productModel'
const fs = require('fs');
let getProductByCode = async (req, res) =>{
    let rs = await productModel.getProductByCode(req.params.code);
    if (rs.length === 0) return res.status(404).json({message: 'Not Found!'});
    return res.status(200).json({message: rs});
};
let getProductById = async (req, res) =>{
    let rs = await productModel.getProductById(req.params.id);
    if (rs.length === 0) return res.status(404).json({message: 'Not Found!'});
    return res.status(200).json({message: rs});
};
let getProductByCategory = async (req, res) =>{
    let category = req.params.category;
    let rs = await productModel.getProductByCategory(category);
    if (rs.length === 0) return res.status(404).json({message: 'Not Found!'});
    return res.status(200).json({data: rs});
}
let getProductByDev = async (req, res) =>{
    let dev = req.params.dev;
    let rs = await productModel.getProductByDev(dev);
    if (rs.length === 0) return res.status(404).json({message: 'Not Found!'});
    return res.status(200).json({data: rs});
}
let getProductByDevAndCate = async (req, res) =>{
    let dev = req.params.dev;
    let cate = req.params.cate;
    let rs = await productModel.getProductByDevAndCate(cate, dev);
    if (rs.length === 0) return res.status(404).json({message: 'Not Found!'});
    return res.status(200).json({data: rs});
}

let addProduct =async (req, res) =>{
    const {code, name, category_id, color, sale_percent, price, manufacturer, image, key, value} = req.body;
    if(req.fileValidationError)
      return res.status(400).json({message: req.fileValidationError});
    let check = await productModel.getProductByCode(code);
    if (check.length === 1)
        return res.status(400).json({msg: "Product has existing code!"});
    let rs = await productModel.addProduct(code, name, category_id, color, sale_percent, price, manufacturer, req.file.filename, image, key, value);
    if (rs !== 'success') res.status(400).json({data: rs});
    return res.status(200).json({data: rs});
};


let editProduct =async (req, res) =>{
    const id = req.params.id;
    let rs = await productModel.getProductById(id);
    if (rs.length === 0) return res.status(404).json({message: 'Not Found!'});
    const {code, name, category_id, color, sale_percent, price, manufacturer, image, key, value} = req.body;
    if(req.fileValidationError)
      return res.status(400).json({message: req.fileValidationError});
    rs = await productModel.editProduct(code, name, category_id, color, sale_percent, price, manufacturer, req.file.filename, image, key, value, id);
    if (rs !== 'success') res.status(400).json({message: rs});
    return res.status(200).json({message: rs});
};

let detailProduct = async (req, res) =>{
    const id = req.params.id;
    const pro = await productModel.getProductById(id);
    if (pro.length == 0) return res.status(404).json({message: "Not Found!"});
    const {product, detail} = await productModel.detailProduct(id);
    const contents =  fs.readFileSync('./src/public/html/' + product.html, {encoding:'utf8'});
    product.html = contents;
    return res.status(200).json({product, detail});
};

let deleteProduct = async (req, res) => {
    const id = req.params.id;
    const rs = await productModel.deleteProduct(id);
    if (rs !== 'success') res.status(400).json({message: rs});
    return res.status(200).json({message: rs});
};


let searchItem = async (req, res) => {
    let param = req.params.param;
    let rs;
    if(param.toLowerCase() === "laptop") rs = await productModel.getProductByCategory('laptop');
    if(param.toLowerCase() === "tablet") rs = await productModel.getProductByCategory('tablet');
    if(param.toLowerCase() === "cellphone") rs = await productModel.getProductByCategory('cellphone');
    if(param.toLowerCase() === "watch") rs = await productModel.getProductByCategory('watch');
    // let rs = await productModel.searchItem(param);
    return res.status(200).json({data: rs});
};
let getAllCategory = async (req, res) => {
    let rs = await productModel.getAllCategory();
    return res.status(200).json({data:rs});
};
let addCategory = async (req, res) => {
    const {id, title} = req.body;
    let rs = await productModel.addCategory(title);
    if (rs !== 'success') return res.status(400).json({message:rs});
    return res.status(200).json({data:rs});
};
let editCategory = async (req, res) => {
    const {id, title} = req.params;
    let rs = await productModel.editCategory(id, title);
    if (rs !== 'success') return res.status(400).json({message:rs});
    return res.status(200).json({data:rs});
};
let getAllAttribute = async (req, res) => {
    let rs = await productModel.getAllAttribute();
    return res.status(200).json({data:rs});
};
let addAttribute = async (req, res) => {
    const {name, group} = req.body;
    let rs = await productModel.addAttribute(name, group);
    if (rs !== 'success') return res.status(400).json({message:rs});
    return res.status(200).json({data:rs});
};
let editAttribute = async (req, res) => {
    const {id, name, group} = req.body;
    let rs = await productModel.editAttribute(name, group, id, req.params.id);
    if (rs !== 'success') return res.status(400).json({message: rs});
    return res.status(200).json({data:rs});
};
let deleteAttribute = async (req, res) => {
    let rs = await productModel.deleteAttribute(req.params.id);
    if (rs !== 'success') return res.status(400).json({message: rs});
    return res.status(200).json({data:rs});
};
module.exports = {
    getProductByCategory, addProduct, getProductByDev, getProductByDevAndCate,
    searchItem, editProduct, detailProduct, deleteProduct, getProductByCode,
    getProductById, getAllCategory, addCategory, editCategory, getAllAttribute,
    addAttribute, editAttribute, deleteAttribute
}