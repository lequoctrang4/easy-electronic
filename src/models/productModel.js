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
    let [product] = await pool.execute(`select * from product inner JOIN phone ON product.id = phone.id where product.hang_sx = ?;`, [name]);
    return product;
}
let addPhone = async (body, files) => {
    let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
        hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
         weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, 
        chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong} = body;
    try{
        await pool.execute(`insert into product values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [id, name, cpu, ram, rom, color, hang_sx, 
            description, price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year]);
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
        let find = await getPhoneById(id_old);
        if (!Object.keys(find).length) return 'Not found';
        let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
            hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
             weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year,
            chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong} = body;
        await pool.execute(`update product set id = ?, name = ?, cpu = ?, ram = ?, rom = ?, color = ?, hang_sx = ?,
         description = ?, price = ?, discount_percent = ?, hdh = ?, type_hdh = ?, size_screen = ?, do_phan_giai = ?,
          tech_screen = ?, tan_so_quet = ?, kich_thuoc_tb = ?,weight = ?, dung_luong_pin = ?, cong_suat_sac = ?,
           bluetooth = ?, wifi = ?, bao_hanh = ?, year =? where id = ?;`, [id, name, cpu, ram, rom, color, hang_sx, description,
             price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb, weight,
              dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, id_old]);
        id_old = id;
        await pool.execute(`update phone set chat_lieu = ?, camera_truoc = ?, camera_sau = ?, sim = ?, mang_di_dong = ?
         where id = ?`, [chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong, id_old]);
        // update picture!!!!!
        

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

let getAllLaptop = async () =>{
    let [product] = await pool.execute(`select * from product inner JOIN laptop ON product.id = laptop.id;`);
    return product;
}

let getLaptopById = async (id) => {
    let [product] = await pool.execute(`select * from product inner JOIN laptop ON product.id = laptop.id where product.id = ?;`, [id]);
    return product;
}
let getLaptopByDeveloper  = async (name) => {
    let [product] = await pool.execute(`select * from product inner JOIN laptop ON product.id = laptop.id where product.hang_sx = ?;`, [name]);
    return product;
}
let addLaptop  = async (body, files) => {
    let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
        hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
         weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year,
        chat_lieu, card, bo_nho_dem, cong_giao_tiep, camera} = body;
    try{
        await pool.execute(`insert into product values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [id, name, cpu, ram, rom, color, hang_sx, 
            description, price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year]);
        await pool.execute(`insert into laptop values(?,?,?,?,?,?)`, [id, chat_lieu, card, bo_nho_dem, cong_giao_tiep, camera]);
        for (let i = 0; i < files.length; i++){
            let path = files[i].filename;
            await pool.execute(`insert into product_image values(?,?)`, [id, path]);   
        }
    }
    catch(error){
        return error.sqlMessage;
    }
    return 'sucesss';
}
let editLaptopById = async (id_old, body) => {
    try{
        let find = await getLaptopById(id_old);
        if (!Object.keys(find).length) return 'Not found';
        let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
            hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
             weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, 
            chat_lieu, card, bo_nho_dem, cong_giao_tiep, camera} = body;
        await pool.execute(`update product set id = ?, name = ?, cpu = ?, ram = ?, rom = ?, color = ?, hang_sx = ?,
         description = ?, price = ?, discount_percent = ?, hdh = ?, type_hdh = ?, size_screen = ?, do_phan_giai = ?,
          tech_screen = ?, tan_so_quet = ?, kich_thuoc_tb = ?,weight = ?, dung_luong_pin = ?, cong_suat_sac = ?,
           bluetooth = ?, wifi = ?, bao_hanh = ?, year = ? where id = ?;`, [id, name, cpu, ram, rom, color, hang_sx, description,
             price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb, weight,
              dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, id_old]);
        id_old = id;
        await pool.execute(`update laptop set chat_lieu = ?, card = ?, bo_nho_dem = ?, cong_giao_tiep = ?, camera = ?
         where id = ?`, [chat_lieu, card, bo_nho_dem, cong_giao_tiep, camera, id_old]);
        // update picture!!!!!
        

        return 'sucesss';
    }
    catch(error){
        return error.sqlMessage;
    }
}
let deleteLaptopById = async (id) => {
    try {
        await pool.execute(`delete from product where id = ?`, [id]);
    } catch (error) {
        return error.sqlMessage;
    }
    return 'sucesss';
}

let getAllTablet = async () =>{
    let [product] = await pool.execute(`select * from product inner JOIN tablet ON product.id = tablet.id;`);
    return product;
}

let getTabletById = async (id) => {
    let [product] = await pool.execute(`select * from product inner JOIN tablet ON product.id = tablet.id where product.id = ?;`, [id]);
    return product;
}
let getTabletByDeveloper  = async (name) => {
    let [product] = await pool.execute(`select * from product inner JOIN tablet ON product.id = tablet.id where product.hang_sx = ?;`, [name]);
    return product;
}
let addTablet  = async (body, files) => {
    let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
        hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
         weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year,
        chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong} = body;
    try{
        await pool.execute(`insert into product values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [id, name, cpu, ram, rom, color, hang_sx, 
            description, price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year]);
        await pool.execute(`insert into tablet values(?,?,?,?,?,?)`, [id, chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong]);
        for (let i = 0; i < files.length; i++){
            let path = files[i].filename;
            await pool.execute(`insert into product_image values(?,?)`, [id, path]);   
        }
    }
    catch(error){
        return error.sqlMessage;
    }
    return 'sucesss';
}
let editTabletById = async (id_old, body) => {
    try{
        let find = await getTabletById(id_old);
        if (!Object.keys(find).length) return 'Not found';
        let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
            hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
             weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, 
        chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong} = body;
        await pool.execute(`update product set id = ?, name = ?, cpu = ?, ram = ?, rom = ?, color = ?, hang_sx = ?,
         description = ?, price = ?, discount_percent = ?, hdh = ?, type_hdh = ?, size_screen = ?, do_phan_giai = ?,
          tech_screen = ?, tan_so_quet = ?, kich_thuoc_tb = ?,weight = ?, dung_luong_pin = ?, cong_suat_sac = ?,
           bluetooth = ?, wifi = ?, bao_hanh = ?, year = ? where id = ?;`, [id, name, cpu, ram, rom, color, hang_sx, description,
             price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb, weight,
              dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, id_old]);
        id_old = id;
        await pool.execute(`update tablet set chat_lieu = ?, camera_truoc = ?, camera_sau = ?, sim = ?, mang_di_dong = ?
         where id = ?`, [chat_lieu, camera_truoc, camera_sau, sim, mang_di_dong, id_old]);
        // update picture!!!!!

        return 'sucesss';
    }
    catch(error){
        return error.sqlMessage;
    }
}
let deleteTabletById = async (id) => {
    try {
        await pool.execute(`delete from product where id = ?`, [id]);
    } catch (error) {
        return error.sqlMessage;
    }
    return 'sucesss';
}
let getAllWatch = async () =>{
    let [product] = await pool.execute(`select * from product inner JOIN watch ON product.id = watch.id;`);
    return product;
}

let getWatchById = async (id) => {
    let [product] = await pool.execute(`select * from product inner JOIN watch ON product.id = watch.id where product.id = ?;`, [id]);
    return product;
}
let getWatchByDeveloper  = async (name) => {
    let [product] = await pool.execute(`select * from product inner JOIN watch ON product.id = watch.id where product.hang_sx = ?;`, [name]);
    return product;
}
let addWatch  = async (body, files) => {
    let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
        hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
         weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year,
        sim, camera, cam_bien, tien_ich, mang_di_dong, chat_lieu_day, chat_lieu_dh} = body;
    try{
        await pool.execute(`insert into product values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [id, name, cpu, ram, rom, color, hang_sx, 
            description, price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year]);
        await pool.execute(`insert into watch values(?,?,?,?,?,?,?,?)`, [id, sim, camera, cam_bien, tien_ich, mang_di_dong, chat_lieu_day, chat_lieu_dh]);
        for (let i = 0; i < files.length; i++){
            let path = files[i].filename;
            await pool.execute(`insert into product_image values(?,?)`, [id, path]);   
        }
    }
    catch(error){
        return error.sqlMessage;
    }
    return 'sucesss';
}
let editWatchById = async (id_old, body) => {
    try{
        let find = await getWatchById(id_old);
        if (!Object.keys(find).length) return 'Not found';
        let {id, name, cpu, ram, rom, color, hang_sx, description, price, discount_percent, 
            hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb,
             weight, dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, 
        sim, camera, cam_bien, tien_ich, mang_di_dong, chat_lieu_day, chat_lieu_dh} = body;
        await pool.execute(`update product set id = ?, name = ?, cpu = ?, ram = ?, rom = ?, color = ?, hang_sx = ?,
         description = ?, price = ?, discount_percent = ?, hdh = ?, type_hdh = ?, size_screen = ?, do_phan_giai = ?,
          tech_screen = ?, tan_so_quet = ?, kich_thuoc_tb = ?,weight = ?, dung_luong_pin = ?, cong_suat_sac = ?,
           bluetooth = ?, wifi = ?, bao_hanh = ?, year = ? where id = ?;`, [id, name, cpu, ram, rom, color, hang_sx, description,
             price, discount_percent, hdh, type_hdh, size_screen, do_phan_giai, tech_screen, tan_so_quet, kich_thuoc_tb, weight,
              dung_luong_pin, cong_suat_sac, bluetooth, wifi, bao_hanh, year, id_old]);
        id_old = id;
        await pool.execute(`update watch set sim = ?, camera = ?, cam_bien = ?, tien_ich = ?, mang_di_dong = ?, chat_lieu_day = ?, chat_lieu_dh = ?
         where id = ?`, [sim, camera, cam_bien, tien_ich, mang_di_dong, chat_lieu_day, chat_lieu_dh, id_old]);
        // update picture!!!!!

        return 'sucesss';
    }
    catch(error){
        return error.sqlMessage;
    }
}
let deleteWatchById = async (id) => {
    try {
        await pool.execute(`delete from watch where id = ?`, [id]);
    } catch (error) {
        return error.sqlMessage;
    }
    return 'sucesss';
}

let searchItem = async (param) => {
    if(param.toLowerCase() === "laptop") return await getAllLaptop();
    if(param.toLowerCase() === "tablet") return await getAllTablet();
    if(param.toLowerCase() === "phone") return await getAllPhone();
    if(param.toLowerCase() === "watch") return await getAllWatch();
    let [product] = await pool.execute(`select * from product where id = ? or name = ? or hang_sx = ?`, [param, param, param]);
    return product; 
};
module.exports = {
    getAllPhone, getPhoneById, getPhoneByDeveloper, addPhone, editPhoneById, deletePhoneById,
    getAllLaptop, getLaptopById, getLaptopByDeveloper, addLaptop, editLaptopById, deleteLaptopById,
    getAllTablet, getTabletById, getTabletByDeveloper, addTablet, editTabletById, deleteTabletById,
    getAllWatch, getWatchById, getWatchByDeveloper, addWatch, editWatchById, deleteWatchById
    ,searchItem
}