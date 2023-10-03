const menu = document.querySelectorAll('.menu');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const sliderImg = document.querySelector('.imageOne img');
const cart = document.querySelector('#cart');
const checkOutContainer = document.querySelector('.checkOutContainerEmpty');
const minus = document.querySelector('#minus')
const errorMessage = document.querySelector('.errorMessage')
let defaultQuantity = document.querySelector('.defaultQuantity')
const plus = document.querySelector('#plus')
const addToCart = document.querySelector('#addToCart');
const inputDisplay = document.querySelector('.inputDisplay');
const checkOutContainerFilled = document.querySelector('.checkOutContainerFilled');
const checkOut = document.querySelector('#checkOut')
const deleteItem = document.querySelector('#deleteItem');
const productPrice = document.querySelector('#productPrice');
const multiplier = document.querySelector('multiplier')
const quantity= document.querySelector('#quantity');
const totalPrice = document.querySelector('#totalPrice')
totalPrice.innerHTML =`$ ${125 * quantity.innerHTML}`;
quantity.innerHTML =inputDisplay.innerHTML;

function toggler() {
  for (let menus of menu) {
    menus.addEventListener('click', () => {
      document.querySelector('.menuList').classList.toggle('hide');
      document.querySelector('.menu').classList.toggle('hide');
    });
  }
}

toggler();

let arrayOfImages = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

let i = 0;


previous.addEventListener('click', () => {
  if (i <= 0) {
    i = arrayOfImages.length;
  }
  i--;
  return setimg();
});

next.addEventListener('click', () => {
  if (i >= arrayOfImages.length - 1) {
    i = -1;
  }
  i++;
  return setimg();
});

function setimg() {
  return sliderImg.setAttribute('src', 'images/' + arrayOfImages[i]);
}
cart.addEventListener('click', ()=>{
  if(inputDisplay.innerHTML >=1){
    next.classList.toggle('hide');
    previous.classList.toggle('hide')
     checkOutContainerFilled.classList.toggle('hide')
     checkOutContainer.classList.add('hide')
     

  }
  else{
  next.classList.toggle('hide');
    previous.classList.toggle('hide')
     checkOutContainerFilled.classList.add('hide')
     checkOutContainer.classList.toggle('hide')
  
  }
  
});
  plus.addEventListener('click', ()=>{
    defaultQuantity.innerHTML =Number(defaultQuantity.innerHTML) + 1;
  })
minus.addEventListener('click', ()=>{
  if(defaultQuantity.innerHTML <=0){
      defaultQuantity.innerHTML = 0;
  }else{
    defaultQuantity.innerHTML =Number(defaultQuantity.innerHTML) -1;
    
    }
  })
  addToCart.addEventListener('click', ()=>{
    quantity.innerHTML =defaultQuantity.innerHTML;
    inputDisplay.innerHTML = Number(defaultQuantity.innerHTML)
    inputDisplay.classList.remove('hide');
    if(defaultQuantity.innerHTML >=1){
    checkOutContainerFilled.classList.toggle('hide');
    checkOutContainer.classList.toggle('hide')
    next.classList.add('hide');
    previous.classList.add('hide');
        totalPrice.innerHTML =`$ ${125 * quantity.innerHTML}`;
        errorMessage.classList.add('hide')
        addToCart.style.backgroundColor='hsl(26, 100%, 55%)';
        defaultQuantity.innerHTML=0;
    }
    else{
      errorMessage.classList.remove('hide')
      addToCart.style.backgroundColor='red';
      inputDisplay.classList.add('hide');
      checkOutContainerFilled.classList.add('hide');
      checkOutContainer.classList.add('hide')
      
    }
  });
  
  deleteItem.addEventListener('click', ()=>{
    
  checkOutContainer.classList.remove('hide')
  checkOutContainerFilled.classList.add('hide')
  next.classList.add('hide');
  previous.classList.add('hide');
  inputDisplay.innerHTML=0;

  })
  checkOut.addEventListener('click', ()=>{
      checkOutContainerFilled.innerHTML='*Payment method is currently unavailable';
      checkOutContainerFilled.style.paddingTop="30%"
      checkOutContainerFilled.style.color="red"
 setTimeout(function(){
location.reload();
    }, 4000)
  })





