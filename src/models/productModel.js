import pool from '../configs/connectDB'



let getProductByCategory = async (cate) => {
    try {
        let [product] = await pool.execute(`select product.id, name, color, sale_percent, price, manufacturer, html, image from product inner JOIN category ON product.category_id = category.id where title = ?;`, [cate]);
        return product;
    } catch (error) {
        return error;
    }
}
let getProductByCode = async (code)=>{
    let [product] = await pool.execute(`select * from product where code = ?`, [code]);
    return product;
};
let getProductByDevAndCate = async (cate, dev) => {
    try {
        let [product] = await pool.execute(`select product.id, name, color, sale_percent, price, manufacturer, html from product inner JOIN category ON product.category_id = category.id where title = ? and manufacturer = ?;`, [cate, dev]);
        return product;
    } catch (error) {
        return error;
    }
}
let getProductByDev = async (dev) => {
    try {
        let [product] = await pool.execute(`select * from product where manufacturer = ?;`, [dev]);
        return product;
    } catch (error) {
        return error;
    }
};
let getProductById = async (id) => {
    try {
        let [product] = await pool.execute(`select * from product where id = ?;`, [id]);
        return product;
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

let addProduct = async (code, name, category_id, color, sale_percent, price, manufacturer, html, image,  key, value) => {
    try {
        await pool.execute(`insert into product (code, category_id, name, color, sale_percent, price, manufacturer, html, image) VALUES (?,?,?,?,?,?,?,?,?)`,
         [code, category_id, name, color, sale_percent, price, manufacturer, html, image]);
        let id = (await getProductByCode(code))[0].id;
        for (let i = 0; i < key.length; i++) {
            await pool.execute(`insert into attribute_value (attribute_id, value, product_id) VALUES (?,?,?)`, [key[i], value[i], id]);
        }
        return "success";
    } catch (error) {
        return error;
    }
};
let getAttribute_ValueById = async (id) => {
    try {
        let [image] = await pool.execute(`select attribute_value.id, attribute.id as attribute_id, attribute.group, name, value from attribute_value INNER JOIN attribute ON attribute_id = attribute.id where product_id = ?;`, [id]);
        return image;
    } catch (error) {
        return error;
    }
};
let deleteAttribute_ValueById = async (id) => {
    try {
        await pool.execute(`delete from attribute_value where product_id = ?;`, [id]);
        return 'success';
    } catch (error) {
        return error;
    }
};

let detailProduct = async (id) =>{
    try {
        let product = (await getProductById(id))[0];
        let detail = await getAttribute_ValueById(id);
        return {product, detail};
    } catch (error) {
        return error;
    }
};
let editProduct = async (code, name, category_id, color, sale_percent, price, manufacturer, html, image,  key, value, id) => {
    try {
        await pool.execute(`update product set code = ?, category_id = ?, name = ?, color = ?, sale_percent = ?, price = ?, manufacturer = ?, html = ?, image = ? where id = ?`,
         [code, category_id, name, color, sale_percent, price, manufacturer, html, image, id]);        
        await deleteAttribute_ValueById(id);
         for (let i = 0; i < key.length; i++) {
            await pool.execute(`insert into attribute_value (attribute_id, value, product_id) VALUES (?,?,?)`, [key[i], value[i], id]);
        }
        return "success";
    } catch (error) {
        return error;
    }
};
let deleteProduct = async (id) => {
    try {
        await pool.execute(`delete from product where id = ?`, [id]);
        return "success";
    } catch (error) {
        return error;
    }
};
module.exports = {
    getProductByCategory, getProductByDev, getAttribute_ValueById, getProductByDevAndCate,
    searchItem, addProduct, detailProduct, getProductById, editProduct, deleteProduct, getProductByCode

}