const productAdd = document.querySelectorAll('.product__add');
const productQuantityControls = document.querySelectorAll('.product__quantity-controls');
const cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener('click', function () {
        const product = this.closest('.product');
        const id = product.dataset.id;
        for (let i = 0; i < cartProducts.children.length; i++) {
            if (cartProducts.children[i].dataset.id === id) {
                let cartProductCount = cartProducts.children[i].querySelector('.cart__product-count');
                cartProductCount.innerText = Number(cartProductCount.innerText) + Number(product.querySelector('.product__quantity-value').innerText);
                return false;
            }
        }
        cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${id}">
                                                          <img class="cart__product-image" src="${product.querySelector('.product__image').src}">
                                                          <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerText}</div>
                                                      </div>`);
    });
}

for (let i = 0; i < productQuantityControls.length; i++) {
    productQuantityControls[i].addEventListener('click', function () {
        let productQuantityValue = Number(this.querySelector('.product__quantity-value').innerText);
        if (event.target.classList.contains('product__quantity-control_dec')) {
            if (productQuantityValue > 1) {
                  productQuantityValue -= 1;
            } else {
                  productQuantityValue = 1;
            }
        }
        else {
            productQuantityValue += 1;
        }
        this.querySelector('.product__quantity-value').innerText = productQuantityValue;
    });
}