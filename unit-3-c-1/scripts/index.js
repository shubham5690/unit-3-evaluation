//store the products array in localstorage as "products"
let arr=JSON.parse(localStorage.getItem('products'))  || []
function products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function addProduct(){
    event.preventDefault();

    let form=document.getElementById('products');

    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    
    // console.log(type,desc,price,image)

    let p= new products(type,desc,price,image)
    // console.log(p)
    arr.push(p)
    console.log(arr)

    localStorage.setItem('products',JSON.stringify(arr))
    location.reload(true)
    
}
