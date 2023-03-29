import pool from '../configs/connectDB'

let getProductByCategory = async (cate) => {
    try {
        let [product] = await pool.execute(`select product.id, name, color, sale_percent, price, manufacturer, html from product inner JOIN category ON product.category_id = category.id where title = ?;`, [cate]);
        for(let i = 0; i < product.length; i++){
            let image = await getImageById(product[i].id);
            if (image.length == 0) product[i].image = null;
            else product[i].image = image[0].value;
        }
        return product;
    } catch (error) {
        return error;
    }
}
let getProductByDevAndCate = async (cate, dev) => {
    try {
        let [product] = await pool.execute(`select product.id, name, color, sale_percent, price, manufacturer, html from product inner JOIN category ON product.category_id = category.id where title = ? and manufacturer = ?;`, [cate, dev]);
        for(let i = 0; i < product.length; i++){
            let image = await getImageById(product[i].id);
            if (image.length == 0) product[i].image = null;
            else product[i].image = image[0].value;
        }
        return product;
    } catch (error) {
        return error;
    }
}
let getProductByDev = async (dev) => {
    try {
        let [product] = await pool.execute(`select * from product where manufacturer = ?;`, [dev]);
        for(let i = 0; i < product.length; i++){
            let image = await getImageById(product[i].id);
            if (image.length == 0) product[i].image = null;
            else product[i].image = image[0].value;
        }
        return product;
    } catch (error) {
        return error;
    }
};
let getImageById = async (id) => {
    try {
        let [image] = await pool.execute(`select * from attribute_value where product_id = ?;`, [id]);
        return image;
    } catch (error) {
        return error;
    }
};

let searchItem = async (param) => {
    if(param.toLowerCase() === "laptop") return await getAllLaptop();
    if(param.toLowerCase() === "tablet") return await getAllTablet();
    if(param.toLowerCase() === "phone") return await getAllPhone();
    if(param.toLowerCase() === "watch") return await getAllWatch();
    let [product] = await pool.execute(`select * from product where id = ? or name = ? or hang_sx = ?`, [param, param, param]);
    return product; 
};

module.exports = {
    getProductByCategory, getProductByDev, getImageById, getProductByDevAndCate,
    searchItem
}