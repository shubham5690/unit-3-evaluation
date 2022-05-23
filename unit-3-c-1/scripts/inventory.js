let arr=JSON.parse(localStorage.getItem('products'))  || [];

arr.forEach(function(ele,index){
    let box=document.createElement('div');

    let image=document.createElement('img')
    image.src=ele.image;

    let type=document.createElement('h3')
    type.innerText=ele.type;

    let desc=document.createElement('p')
    desc.innerText=ele.desc;

    let price=document.createElement('p')
    price.innerText=ele.price

    let btn=document.createElement('button')
    btn.innerText='Remove'
    btn.setAttribute=('id','remove_product')
    btn.addEventListener('click',function(){
        removeProduct(ele,index);
    })

    box.append(image,type,desc,price,btn)
    document.getElementById('all_products').append(box)

})

function removeProduct(ele,index){
    arr.splice(index,1)
    localStorage.setItem('products',JSON.stringify(arr))
    window.location.reload()
}