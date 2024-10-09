function main(){
    renderProducts(gNotebooks);
    document.getElementById('craft').addEventListener('click', ()=>{renderProducts(gCraft)});
    document.getElementById('notebooks').addEventListener('click', ()=>{renderProducts(gNotebooks)});
    document.getElementById('jewelery').addEventListener('click', ()=>{renderFakeProducts('jewelery')});
    document.getElementById('electronics').addEventListener('click', ()=>{renderFakeProducts('electronics')});
    document.getElementById('womens-clothing').addEventListener('click', ()=>{renderFakeProducts("women's clothing")});
    document.getElementById('mens-clothing').addEventListener('click', ()=>{renderFakeProducts("men's clothing")});
}
main();
