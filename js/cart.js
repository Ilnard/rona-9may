let cart = JSON.parse(localStorage.getItem('cart'))
const cartInner = document.querySelector('.cart__inner')
console.log(cart)
cart.forEach((cartItem) => {
    cartInner.innerHTML += 
    `
    <div class="cart-item">
        <div class="cart-item__cover">
            <img src="${cartItem.img}" alt="" class="cart-item__picture">
        </div>
        <div class="cart-item__body">
            <div class="cart-item__content">
                <h2 class="cart-item__title">${cartItem.title}</h2>
            </div>
            <div class="cart-item__actions">
                <form class="cart-actions" action="">
                    <input type="hidden" class="product-viewer" id="product-id" value="${cartItem.id}">
                    <div class="cart-count cart-item__cart-count">
                        <button class="btn cart-count__minus">-</button>
                        <div class="cart-count__counter">${cartItem.count}</div>
                        <button class="btn cart-count__plus">+</button>
                    </div>
                </form>
                <div class="cart-item__prices">
                    <p class="cart-item__price">Цена за 1 ед.: <span class="red">${cartItem.price} руб</span></p>
                    <p class="cart-item__total-price">Итого: <span class="red">${Number(cartItem.price) * Number(cartItem.count)} руб</span></p>
                </div>
            </div>
        </div>
    </div>
    `
})
function refreshTotalPrice() {
    let totalPrice = 0
    cart = JSON.parse(localStorage.getItem('cart'))
    cart.forEach(cartItem => {
        totalPrice += Number(cartItem.count) * Number(cartItem.price)
    })
    const headerTotalPrice = document.querySelector('.header-total-price')
    const totalPriceEl = document.querySelector('.total-price')
    headerTotalPrice.innerHTML = `Итоговая цена <span class="red fw700">${totalPrice} руб</span>`
    totalPriceEl.innerHTML = `Итоговая цена <span class="red fw700">${totalPrice} руб</span>`
}
refreshTotalPrice()
cartIndicatorProcess()

const cartItemsActions = document.querySelectorAll('.cart-item__actions')
cartItemsActions.forEach(cartItemsActions => {
    const cartActions = cartItemsActions.querySelector('.cart-actions')
    const productId = cartActions.querySelector('#product-id').value
    const plusBtn = cartActions.querySelector('.cart-count__plus')
    const minusBtn = cartActions.querySelector('.cart-count__minus')
    const cartItemTotalPrice = cartItemsActions.querySelector('.cart-item__total-price')

    minusBtn.addEventListener('click', e => {
        e.preventDefault()
        cartActionsProcess(cartActions, 'minus')
        cartIndicatorProcess()
        cart = JSON.parse(localStorage.getItem('cart'))
        const productIndex = cart.findIndex(product => product.id == productId)
        cartItemTotalPrice.innerHTML = `Итого: <span class="red">${Number(cart[productIndex].count) * Number(cart[productIndex].price)} руб</span>`
        refreshTotalPrice()
    })
    plusBtn.addEventListener('click', e => {
        e.preventDefault()
        cartActionsProcess(cartActions, 'plus')
        cartIndicatorProcess()
        cart = JSON.parse(localStorage.getItem('cart'))
        const productIndex = cart.findIndex(product => product.id == productId)
        cartItemTotalPrice.innerHTML = `Итого: <span class="red">${Number(cart[productIndex].count) * Number(cart[productIndex].price)} руб</span>`
        refreshTotalPrice()
    })
})
// Форма заказа
const modalWrapper = document.querySelector('.modal-wrapper')
const modal = modalWrapper.querySelector('.modal')
const modalCloseBtn = modalWrapper.querySelector('.modal-close-btn')
const modalOpenBtn = document.querySelector('.submit-btn')

// Закрытие/открытие модалки
modalOpenBtn.addEventListener('click', e => {
    e.preventDefault()
    modalWrapper.classList.add('modal-wrapper_active')
})
modalCloseBtn.addEventListener('click', () => {
    modalWrapper.classList.remove('modal-wrapper_active')
})
modalWrapper.addEventListener('click', e => {
    if (e.target == modalWrapper) modalWrapper.classList.remove('modal-wrapper_active')
})
// 