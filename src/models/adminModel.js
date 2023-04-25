import pool from "../configs/connectDB";


let getAllUser = async (admin) => {
    let [user] = await pool.execute(`SELECT * FROM User where isAdmin = ?`, [admin]);
    return user;
};
let deleteUser = async (id) => {
    try {
    await pool.execute(`Delete from user where id = ?`, [id]);
    } catch (error) {
        return error;
    }
};
let addStaff = async (name, email, phone, password, address) => {
    try {
      await pool.execute(
        `insert into user (name, email, phone, password, passwordChangedAt, registryAt, address, isAdmin) 
        VALUES (?,?,?,?, CURRENT_TIME, CURRENT_TIME, ?, 1)`,
        [name, email, phone, password, address]
      );
      return "success";
    } catch (error) {
      return error;
    }
}; 





module.exports ={
    getAllUser,
    deleteUser,
    addStaff
}





