"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(code, name, price) {
        this.code = code;
        this.name = name;
        this.price = price;
    }
    Product.prototype.show = function () {
        console.log('code : ' + this.code + ' name ' + ':' + this.name + ' price : ' + this.price);
    };
    Product.prototype.getCode = function () {
        return this.code;
    };
    return Product;
}());
exports.Product = Product;
// var s:Product = new Product('xyz','tuv',123)
// s.show()
