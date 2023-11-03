
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'phone',
  password: "12341234",
  database: 'phone_store',
  port: 3306
});

export default pool;