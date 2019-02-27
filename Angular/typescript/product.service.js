"use strict";
exports.__esModule = true;
var store_1 = require("./store");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.add = function (p) {
        store_1.products.push(p);
        return true;
    };
    ProductService.prototype.findAll = function () {
        console.log(store_1.products);
        return store_1.products;
    };
    ProductService.prototype.findByCode = function (code) {
        store_1.products.map(function (n) {
            //console.log(n)
            if (n.getCode() == code) {
                console.log(n);
                return n;
            }
        });
        return null;
    };
    ProductService.prototype.remove = function (code) {
        store_1.products.map(function (n) {
            if (n.getCode() == code) {
                return n;
            }
        });
        return null;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
var obj = new ProductService();
obj.findAll();
obj.findByCode("1");
