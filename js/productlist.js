const url = 'https://kea-alt-del.dk/t7/api/products';

fetch(url)
    .then(res=>res.json())
    .then(data=>handleProductList(data));

function handleProductList(data) { 
    //console.log(data);

    data.forEach(showProduct);
 }

 function showProduct(product) {
     console.log(product);
     //grab the template
    const template = document.querySelector('template').content;
     //clone it 
    const clone = template.cloneNode(true);
     //change content
     clone.querySelector('.image-container img').src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
     clone.querySelector('.image-container img').alt = product.productdisplayname;

     if (product.soldout){
         clone.querySelector('article').classList.add('soldOut');
     }

     if(product.discount){
         clone.querySelector('article').classList.add('onSale');
     }
     //grab parent
    const parent = document.querySelector('main');
     //append
     parent.appendChild(clone);
 }  