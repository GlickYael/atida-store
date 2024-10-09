const getProduct = (product)=>{
    return `
    <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="תמונת המוצר">
        <p>${product.price}</p>
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
