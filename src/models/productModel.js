import pool from '../configs/connectDB'

let getAllPhone = async () => {
    let [product] = await pool.execute(`select * from product inner JOIN phone ON product.id = phone.id;`);
    return product;
}
let getPhoneById = async (id) => {
    let [product] = await pool.execute(`select * from product inner JOIN phone ON product.id = phone.id where product.id = ?;`, [id]);
    return product;
}
let getPhoneByDeveloper = async (name) => {
    let [product] = await pool.execute(`select * from product inner JOIN phone ON product.id = phone.id where product.hang_san_xuat = ?;`, [name]);
    return product;
}
let addPhone = async (body, files) => {
    let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
        hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
         weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, 
        chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong} = body;
        try{
        await pool.execute(`insert into product values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [id, name, cpu, ram, rom, color, hang_sx, 
            description, price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh]);
        await pool.execute(`insert into phone values(?,?,?,?,?,?)`, [id, chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong]);
        for (let i = 0; i < files.length; i++){
            let path = files[i].destination + files[i].filename;
            await pool.execute(`insert into product_image values(?,?)`, [id, path]);   
        }
    }
    catch(error){
        return error.sqlMessage;
        return false;
    }
    return true;
}
module.exports= {
    getAllPhone, getPhoneById, getPhoneByDeveloper, addPhone
}