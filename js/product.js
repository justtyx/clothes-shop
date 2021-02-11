const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
//const id = 1163;
console.log(id);
const url = 'https://kea-alt-del.dk/t7/api/products/' + id;

//fetch the data
fetch(url)
    .then(res=>res.json())
    .then(data=>showProduct(data));

//populate the page
function showProduct(product) { 
    console.log(product);
    //make breadcrumbs based on where it comes from
    document.querySelector('.text-material h1').textContent = product.productdisplayname;
    document.querySelector('.price').textContent = `${product.price} DKK`;
    document.querySelector('.brand').textContent = product.brandname;
    document.querySelector('.colour').textContent = product.basecolour;
    document.querySelector('.description').innerHTML = product.description;
    document.querySelector('.product-image').src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector('.product-image').alt = product.productdisplayname;
 }