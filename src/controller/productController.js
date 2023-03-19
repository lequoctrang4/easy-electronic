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

module.exports = {
    getAllPhone, getPhoneById, getPhoneByDeveloper, addPhone
}