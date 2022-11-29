// large cheesecake  price_1M9Xq4A0zgGYE8hKjaEdjfu0
// small cheesecake price_1M9Xr4A0zgGYE8hK80wPnIya
// strawberry cheesecake price_1M9XsCA0zgGYE8hKq6tJKx6T
// carrot cake price_1M9XtRA0zgGYE8hK4ko4s0VO
// cookies price_1M9XuNA0zgGYE8hKdKyBhMEZ
// coffee price_1M9XvJA0zgGYE8hKsRPAOjWn


// this will be converted to models
const productArray = [
    {
        id: 'price_1M9Xq4A0zgGYE8hKjaEdjfu0',
        name: 'Large Cheesecake',
        price: 54.99
    },
    {
        id: 'price_1M9Xr4A0zgGYE8hK80wPnIya',
        name: 'Small Cheesecake',
        price: 29.99
    },
    {
        id: 'price_1M9XsCA0zgGYE8hKq6tJKx6T',
        name: 'Strawberry Cheesecake',
        price: 59.99
    },
    {
        id: 'price_1M9XtRA0zgGYE8hK4ko4s0VO',
        name: 'Carrot Cake',
        price: 34.99
    },
    {
        id: 'price_1M9XuNA0zgGYE8hKdKyBhMEZ',
        name: 'Chocolate Chip Cookies',
        price: 6.99
    },
    {
        id: 'price_1M9XvJA0zgGYE8hKsRPAOjWn',
        name: 'Coffee',
        price: 4.99
    }
];

function getProductData (id) {
    let productData = productArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product not found for id: ' + id);
        return undefined;
    }

    return productData;
};

export { productArray, getProductData };