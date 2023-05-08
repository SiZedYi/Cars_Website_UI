function countTotalCart(cart) {
    const totalPrice = 0;
    totalPrice += cart.forEach(element =>
        element.total);
        console.log(totalPrice);
    }

function removeFromCart(index) {
        var cart = JSON.parse(localStorage.getItem("cartItems"));
        cart.splice(index, 1); // Xóa item trong cart
        localStorage.setItem("cartItems", JSON.stringify(cart)); // Cập nhật giỏ hàng vào local storage
        // getCart(); // Re-render lại cart
    getCart('dropdown','/html/orderDetail.html');
    getCart('order-detail','/')
}


function getCart(selector,  link) {
    var cart = []
    cart = JSON.parse(localStorage.getItem('cartItems'))
    const selectorContainer = document.getElementsByClassName(selector +'-container')[0]
    const listContainer = selectorContainer.getElementsByClassName(selector + '-list')[0]
    const totalContainer =  selectorContainer.getElementsByClassName(selector + '-total')[0]
    if (selector ==='dropdown') {
        const cartCount = document.getElementsByClassName('cart-count')[0]
        cartCount.innerHTML = cart.length
    }
    let cartTotal = 0
    console.log(totalContainer)
    listContainer.innerHTML = cart?.map(
        (item, index) => {
            cartTotal += item.total;
            return `
            <img src="${item.img}" alt="${item.title}" class="dropdown-img">
            <div class="dropdown-content">
                <span class="dropdown-title">${item.title}</span>
                <span class="dropdown-quantity"><span style="color:#000;">Số lượng: </span>x${item.quantity}
                    <span style="margin-left:220px; font-size:17px; cursor:pointer;" onclick="removeFromCart(${index})">
                        <i class="lni lni-trash-can"></i>
                    </span>
                </span>
                <span class="dropdown-price"><span style="color:#000;">Thành tiền: </span>${item.total.toLocaleString()} VND</span>
            </div>
            <br>
        `
        }).join("")
    totalContainer.innerHTML = `
        <span style="color:#000; font-weight: bold;">Tổng cộng: </span>${cartTotal.toLocaleString()} đ
        <a href=${link} role="button" class="btn btn-outline-dark" style="float:right">Thanh Toán</a>
    `
}

