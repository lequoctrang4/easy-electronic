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
    return 'sucesss';
}
let editPhoneById = async (id_old, body) => {
    try{
        let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
            hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
             weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, 
            chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong} = body;
        await pool.execute(`update product set id = ?, name = ?, cpu = ?, ram = ?, rom = ?, color = ?, hang_sx = ?,
         description = ?, price = ?, discount_percent = ?, hdh = ?, type_hdh = ?, size_screen = ?, do_phan_giai = ?,
          tech_screen = ?, tan_so_quet = ?, kich_thuoc_tb = ?,weight = ?, dung_luong_pin = ?, cong_suat_sac = ?,
           bluetooth = ?, wifi = ?, bao_hanh = ? where id = ?;`, [id, name, cpu, ram, rom, color, hang_sx, description,
             price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb, weight,
              dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, id_old]);
        id_old = id;
        await pool.execute(`update phone set chat_lieu = ?, camera_truoc = ?, camera_sau = ?, sim = ?, mang_di_dong = ?
         where id = ?`, [chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong, id_old]);
        // update picture
        

        return 'sucesss';
    }
    catch(error){
        return error.sqlMessage;
    }
}
let deletePhoneById = async (id) => {
    try {
        await pool.execute(`delete from product where id = ?`, [id]);
        
    } catch (error) {
        return error.sqlMessage;
    }
    return 'sucesss';
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