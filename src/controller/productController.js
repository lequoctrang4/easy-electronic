import productModel from '../models/productModel'

let getAllPhone = async (req, res) =>{
    let rs = await productModel.getAllPhone();
    return res.status(200).json({data: rs})
}

let getPhoneById = async (req, res) => {
    let rs = await productModel.getPhoneById(req.params.id);
    return res.status(200).json({data: rs})
}
let getPhoneByDeveloper  = async (req, res) => {
    let rs = await productModel.getPhoneByDeveloper(req.params.dev);
    return res.status(200).json({data: rs});
}
let addPhone  = async (req, res) => {
    if(req.fileValidationError)
      return res.status(400).json({data: req.fileValidationError});
    else if(!req.files.length)
      return res.status(400).json({data: "No files selected"});
    let files = req.files;
    let rs= await productModel.addPhone(req.body, files);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let editPhoneById = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let rs = await productModel.editPhoneById(id, body);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let deletePhoneById = async (req, res) => {
    let rs = await productModel.deletePhoneById(req.params.id);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}

let getAllLaptop = async (req, res) =>{
    let rs = await productModel.getAllLaptop();
    return res.status(200).json({data: rs})
}

let getLaptopById = async (req, res) => {
    let rs = await productModel.getLaptopById(req.params.id);
    return res.status(200).json({data: rs})
}
let getLaptopByDeveloper  = async (req, res) => {
    let rs = await productModel.getLaptopByDeveloper(req.params.dev);
    return res.status(200).json({data: rs});
}
let addLaptop  = async (req, res) => {
    if(req.fileValidationError)
      return res.status(400).json({data: req.fileValidationError});
    else if(!req.files.length)
      return res.status(400).json(   {data: "No files selected"});
    let files = req.files;
    let rs= await productModel.addLaptop(req.body, files);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let editLaptopById = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let rs = await productModel.editLaptopById(id, body);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let deleteLaptopById = async (req, res) => {
    let rs = await productModel.deleteLaptopById(req.params.id);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}

let getAllTablet = async (req, res) =>{
    let rs = await productModel.getAllTablet();
    return res.status(200).json({data: rs})
}

let getTabletById = async (req, res) => {
    let rs = await productModel.getTabletById(req.params.id);
    return res.status(200).json({data: rs})
}
let getTabletByDeveloper  = async (req, res) => {
    let rs = await productModel.getTabletByDeveloper(req.params.dev);
    return res.status(200).json({data: rs});
}
let addTablet  = async (req, res) => {
    if(req.fileValidationError)
      return res.status(400).json({data: req.fileValidationError});
    else if(!req.files.length)
      return res.status(400).json(   {data: "No files selected"});
    let files = req.files;
    let rs= await productModel.addTablet(req.body, files);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let editTabletById = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let rs = await productModel.editTabletById(id, body);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let deleteTabletById = async (req, res) => {
    let rs = await productModel.deleteTabletById(req.params.id);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let getAllWatch = async (req, res) =>{
    let rs = await productModel.getAllWatch();
    return res.status(200).json({data: rs})
}

let getWatchById = async (req, res) => {
    let rs = await productModel.getWatchById(req.params.id);
    return res.status(200).json({data: rs})
}
let getWatchByDeveloper  = async (req, res) => {
    let rs = await productModel.getWatchByDeveloper(req.params.dev);
    return res.status(200).json({data: rs});
}
let addWatch  = async (req, res) => {
    if(req.fileValidationError)
      return res.status(400).json({data: req.fileValidationError});
    else if(!req.files.length)
      return res.status(400).json(   {data: "No files selected"});
    let files = req.files;
    let rs= await productModel.addWatch(req.body, files);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let editWatchById = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let rs = await productModel.editWatchById(id, body);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}
let deleteWatchById = async (req, res) => {
    let rs = await productModel.deleteWatchById(req.params.id);
    if (rs !== "success") return res.status(400).json({data:rs});
    return res.status(200).json({data: rs});
}

let searchItem = async (req, res) => {
    let param = req.params.param;
    let rs = await productModel.searchItem(param);
    return res.status(400).json({data:rs});
};

module.exports = {
    getAllPhone, getPhoneById, getPhoneByDeveloper, addPhone, editPhoneById, deletePhoneById,
    getAllLaptop, getLaptopById, getLaptopByDeveloper, addLaptop, editLaptopById, deleteLaptopById,
    getAllTablet, getTabletById, getTabletByDeveloper, addTablet, editTabletById, deleteTabletById,
    getAllWatch, getWatchById, getWatchByDeveloper, addWatch, editWatchById, deleteWatchById
    ,searchItem
}