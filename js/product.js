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
    document.querySelector('.brand').textContent = product.brandname;
    document.querySelector('.colour').textContent = product.basecolour;
    document.querySelector('.product-list-bread').textContent = product.category;
    document.querySelector('.product-list-bread').href = `productlist.html?category=${product.category}`;
    document.querySelector('.item-name').textContent = product.productdisplayname;
    document.querySelector('.description').innerHTML = product.description;
    document.querySelector('.product-image').src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector('.product-image').src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector('title').textContent = product.productdisplayname;
    document.querySelector('.brandandtype').textContent = `${product.brandname} | ${product.articletype}`;
    
    if (product.discount) {
        console.log('discount');
    document.querySelector('.price').textContent = Math.floor(product.price / 100 * product.discount * 100) / 100 + ' DKK';
    document.querySelector('.previous').classList.remove('hidden');
    document.querySelector('.previous').classList.add('previous-style');
    document.querySelector('.previous').textContent = `${product.price} DKK`;
    } else {
        document.querySelector('.price').textContent = `${product.price} DKK`;
        document.querySelector('.previous').classList.add('hidden');
    }

    if (product.materialcaredesc) {
        document.querySelector('.materials').classList.remove('hidden');
        document.querySelector('.materials dd').innerHTML = product.materialcaredesc;
    }

    if (product.soldout){  
        document.querySelector('.soldout').classList.remove('hidden');
       }
 }