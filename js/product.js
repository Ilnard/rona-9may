var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

const productId = document.querySelector('#product-id').value
const productTitle = document.querySelector('#product-title').value
const productPrice = document.querySelector('#product-price').value
const productImg = document.querySelector('#product-img').value
const toCartBtn = document.querySelector('.to-cart-btn')
const cartActions = document.querySelector('.product-viewer-actions__cart-count')
const counter = document.querySelector('.cart-count__counter')
const productActions = document.querySelector('.product-viewer-actions')
const minusBtn = document.querySelector('.cart-count__minus')
const plusBtn = document.querySelector('.cart-count__plus')

let cart = JSON.parse(localStorage.getItem('cart'))
const productIndex = cart.findIndex(product => product.id == productId)

// Достоверная установка 
if (productIndex != -1) {
    toCartBtn.classList.add('to-cart-btn_removed')
    cartActions.classList.remove('cart-count_removed')
    counter.innerHTML = cart[productIndex].count
}
cartIndicatorProcess()

// Добавление в корзину
toCartBtn.addEventListener('click', e => {
    e.preventDefault()
    const productData = {
        id: productId,
        title: productTitle,
        count: 1,
        price: productPrice,
        img: productImg
    }
    if (toCartBtn.classList.contains('to-cart-btn_removed')) return
    cart = JSON.parse(localStorage.getItem('cart'))
    cart.push(productData)
    localStorage.setItem('cart', JSON.stringify(cart))
    toCartBtn.classList.add('to-cart-btn_removed')
    cartActions.classList.remove('cart-count_removed')
    cartIndicatorProcess()
})
minusBtn.addEventListener('click', e => {
    e.preventDefault()
    cartActionsProcess(productActions, 'minus')
    cartIndicatorProcess()
})
plusBtn.addEventListener('click', e => {
    e.preventDefault()
    cartActionsProcess(productActions, 'plus')
    cartIndicatorProcess()
})