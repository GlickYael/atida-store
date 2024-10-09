const getProduct = (product)=>{
    return `
    <div class="product">
        <h2 class="prod-title">${product.title}</h2>
        <img src=${product.image}>
        <p> מחיר: ${product.price}₪</p>
        <button>הוספה לסל</button>
    </div>
    `;
}

const renderProducts = (products) => {
    let productsStr = ``;
    for(const product of products){
        productsStr += getProduct(product);
    }
    document.getElementById('prod-area').innerHTML = productsStr;
}
function renderFakeProducts(category){
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=10`)
            .then(res=>res.json())
            .then((products)=>{
                console.log(products);
                renderProducts(products);
            })
}