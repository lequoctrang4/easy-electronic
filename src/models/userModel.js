import pool from "../configs/connectDB";
let getUserByPhone = async (phone) => {
    let [result] = await pool.execute(`select * from user where phone = ?`, [phone]);
    return result;
};
let getUserByEmail = async (email) => {
    let [result] = await pool.execute(`select * from user where email = ?`, [email]);
    return result;
};

let getUserById = async (id) => {
    let [result] = await pool.execute(`select * from user where id = ?`, [id]);
    return result;
};
let createUser = async (phone, password, email, name) => {
    try {
        await pool.execute(`insert into user (name, email, phone, password, passwordChangedAt, registryAt) 
        VALUES (?,?,?,?, CURRENT_TIME, CURRENT_TIME)`, [name, email, phone, password ]);
        return "success";
    } catch (error) {
        return error;
    }
}
let setAvatar = async (avatar, id) =>{
    try {
        await pool.execute(`update user SET avatar =? where id = ?`, [avatar, id]);
        return "success";
    } catch (error) {
        return error;
    }
};
let editProfile = async (name, phone, email, address, id) =>{
    try {
        await pool.execute(`update user set name = ?, phone =?, email = ?, address = ? where id = ?`,
            [name, phone, email, address, id]);
        return "success";
    } catch (error) {
        return error;
    }
};
let changePassword = async (password, id) => {
    try {
        await pool.execute(`update user set password = ? where id = ?`,[password, id]);
        return "success";
    } catch (error) {
        return error;
    }
};

let setLastLogin = async (id) => {
    try {
        await pool.execute(`update user set last_login = CURRENT_TIME where id = ?`,[id]);
        return "success";
    } catch (error) {
        return error;
    }
};
module.exports ={
    getUserByPhone, createUser, setAvatar, getUserById, editProfile, changePassword,
    getUserByEmail, setLastLogin
}