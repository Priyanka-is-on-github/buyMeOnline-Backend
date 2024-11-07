const pool = require("../config/db");

(async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                id BIGSERIAL NOT NULL PRIMARY KEY,
                product_id VARCHAR(200) NOT NULL,
                price FLOAT,
                title VARCHAR(200) NOT NULL
            );
        `);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS userInfo (
                id BIGSERIAL NOT NULL PRIMARY KEY,
                name VARCHAR(200) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(200) NOT NULL
            );
        `);

        console.log("Tables created successfully");
    } catch (error) {
        console.error("Error creating tables:", error);
    } 
})();
