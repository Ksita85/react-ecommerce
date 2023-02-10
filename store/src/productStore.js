const productsArray = [
    {
        id: "price_1MZyDMEYm9YjNCrgVzgZZlRp",
        title: "Coffee",
        price: "3.99",
        img: "coffee"
    },
    {
        id: "price_1MZyF9EYm9YjNCrg6KCDL73Z",
        title: "Apple Pie",
        price: "6.99",
        img: "apple"
    },
    {
        id: "price_1MZyFaEYm9YjNCrgEhuufrW8",
        title: "Muffin",
        price: "4.99",
        img: "muffin"
    },
    {
        id: "price_1MZyG0EYm9YjNCrggrJBLmCi",
        title: "Cocoa Cake",
        price: "9.99",
        img: "choco"
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    if (productData === undefined) {
        console.log('Product data does not exist for ID:' + id);
        return undefined;
    }
    return productData;
}

export {productsArray, getProductData }