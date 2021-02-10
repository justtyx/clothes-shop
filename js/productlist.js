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
    clone.querySelector('.item-title').textContent = product.productdisplayname;
    clone.querySelector('.price').textContent = `${product.price} DKK`;

clone.querySelector('a').href = `product.html?id=${product.id}`;

     if (product.soldout){
         clone.querySelector('p.soldOut').classList.remove('hide');
         clone.querySelector('p.soldOut').classList.add('inline-block');
     }

     if(product.discount){
        clone.querySelector('article').classList.add('onSale');
        clone.querySelector('.percent').classList.add('circle');
        clone.querySelector('.price').classList.add('line-through');
        clone.querySelector('.discounted').classList.add('bolder');
        clone.querySelector('.onSale .discounted').textContent = Math.floor(product.price / 100 * product.discount * 100) / 100 + ' DKK';
        clone.querySelector('.onSale .percent').textContent = `-${product.discount}%`;
     }
     //grab parent
    const parent = document.querySelector('main section');
     //append
     parent.appendChild(clone);
 }  