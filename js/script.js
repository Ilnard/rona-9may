if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]))
function cartActionsProcess(catalogProductInfo, action) {
    const productId = catalogProductInfo.querySelector('#product-id').value
    const toCartBtn = catalogProductInfo.querySelector('.to-cart-btn')
    const cartActions = catalogProductInfo.querySelector('.cart-count')
    const counter = cartActions.querySelector('.cart-count__counter')
    let count = null

    const cart = JSON.parse(localStorage.getItem('cart'))
    const productIndex = cart.findIndex(product => product.id == productId)

    if (count = cart[productIndex].count) {
        if (toCartBtn && !toCartBtn.classList.contains('to-cart-btn_removed')) {
            toCartBtn.classList.add('to-cart-btn_removed')
            cartActions.classList.remove('cart-count_removed')
        }
    }
    switch (action) {
        case 'plus': {
            cart[productIndex].count++
            counter.innerHTML = cart[productIndex].count
            break
        }
        case 'minus': {
            if (count <= 1) {
                toCartBtn.classList.remove('to-cart-btn_removed')
                cartActions.classList.add('cart-count_removed')
                cart.splice(productIndex, 1)
                break
            }
            cart[productIndex].count--
            counter.innerHTML = cart[productIndex].count
            break
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}
function cartIndicatorProcess() {
    const indicator = document.querySelector('.header-nav-item__indicator')
    indicator.innerHTML = 0
    const cart = JSON.parse(localStorage.getItem('cart'))
    let indicatorCounter = 0
    cart.forEach(cartItem => {
        indicatorCounter += cartItem.count
    })
    indicator.innerHTML = indicatorCounter
}
const burger = document.querySelector('.burger-icon')
const headerMain = document.querySelector('.header__main')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-icon_close')
    headerMain.classList.toggle('header__main_active')
})