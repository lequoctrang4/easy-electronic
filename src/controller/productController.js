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
    return res.status(200).json({data: rs});
}
let editPhoneById = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let rs = await productModel.editPhoneById(id, body);
    return res.status(200).json({data: rs});
}
let deletePhoneById = async (req, res) => {
    let rs = await productModel.deletePhoneById(req.params.id);
    return res.status(200).json({data: rs});
}

let getAllLaptop = async (req, res) =>{

}

let getLaptopById = async (req, res) => {

}
let getLaptopByDeveloper  = async (req, res) => {

}
let addLaptop  = async (req, res) => {

}
let editLaptopById = async (req, res) => {

}
let deleteLaptopById = async (req, res) => {
    
}

let getAllTablet = async (req, res) =>{

}

let getTabletById = async (req, res) => {

}
let getTabletByDeveloper  = async (req, res) => {

}
let addTablet  = async (req, res) => {

}
let editTabletById = async (req, res) => {

}
let deleteTabletById = async (req, res) => {
    
}
let getAllWatch = async (req, res) =>{

}

let getWatchById = async (req, res) => {

}
let getWatchByDeveloper  = async (req, res) => {

}
let addWatch  = async (req, res) => {

}
let editWatchById = async (req, res) => {

}
let deleteWatchById = async (req, res) => {
    
}
module.exports = {
    getAllPhone, getPhoneById, getPhoneByDeveloper, addPhone, editPhoneById, deletePhoneById,
    getAllLaptop, getLaptopById, getLaptopByDeveloper, addLaptop, editPhoneById, deleteLaptopById,
    getAllTablet, getTabletById, getTabletByDeveloper, addTablet, editTabletById, deleteTabletById,
    getAllWatch, getWatchById, getWatchByDeveloper, addWatch, editWatchById, deleteWatchById

}