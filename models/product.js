const fs = require('fs');
const path = require('path');

module.exports = class Product {
    //constructor =object built
    constructor(title, imageUrl, price, description) {
        // this =Product
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    // function save
    save() {
        // products.push(this);
        // process = every file can call onlinsh->data->pro.json
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');
        //callback function (err) or ar
        fs.readFile(p, (err, fileContent) => {
            // local variable =let
            let products = [];
            if (!err) {
                //data change to json
                products = JSON.parse(fileContent);
            }
            console.log(products);
            // this= form title
            products.push(this);
            console.log(products);
            //writefile product
            // json format to product.json
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err);
                }


            })
        })
    }
    // retrieve fetchall
    //cb is function name =all data insert
    static fetchAll(cb) {
        // products.push(this);
        // process = every file can call onlinsh->data->pro.json
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                //call the function cb()
                cb([]);
            }
            // json to origin

            cb(JSON.parse(fileContent));
        })

    }

};
