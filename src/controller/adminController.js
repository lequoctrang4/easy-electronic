import adminModel from '../models/adminModel'
const { hash, compare } = require("bcryptjs");

let getAllUser = async (req, res) =>{
    let User = await adminModel.getAllUser(0);
    return res.status(200).json(User);
}

let deleteUser = async (req, res) =>{
    const id = req.params.id;
    if (!id) return res.status(400).json({message: "Invalid"});
    await adminModel.deleteUser(id);
    return res.status(200).json({message: "Delete user successfully!"});
}

let getAllStaff = async (req, res) => {
  let User = await adminModel.getAllUser(1);
  return res.status(200).json(User);
};

let addStaff = async (req, res) => {
    const {name, email, phone, password, address} = req.body;
    const hashedPw = await hash(password, 12);
    let rs = await adminModel.addStaff(name, email, phone, hashedPw, address);
    if (rs === true) return res.status(200).json({message: "Add Staff successfully!"})
    return res.status(400).json({message: rs});
};


module.exports = {
  getAllUser,
  deleteUser,
  addStaff,
  getAllStaff,
};