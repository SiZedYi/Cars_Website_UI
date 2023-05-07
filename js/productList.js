import honda from '../data/honda.json' assert  {type: "json"}
import toyota from '../data/toyota.json' assert  {type: "json"}
import hyundai from '../data/hyundai.json' assert  {type: "json"}
import kia from '../data/kia.json' assert  {type: "json"}
import ford from '../data/ford.json' assert  {type: "json"}
import mazda from '../data/mazda.json' assert  {type: "json"}
import mercedes from '../data/mercedes.json' assert  {type: "json"}
import lexus from '../data/lexus.json' assert  {type: "json"}
import bmw from '../data/bmw.json' assert  {type: "json"}


import spotlight from '../data/spotlight.json' assert  {type: "json"}

//map dữ liệu vào trang product list
const productList = document.getElementById('product-list')
const params = new URLSearchParams(window.location.search);
const typeQuery = params.get('brand')
console.log(typeQuery);
switch (typeQuery) {
  case 'honda':
    var carData = honda.Honda.old.slice(0,12)
    break;
  case 'toyota':
    var carData = toyota.Toyota.old.slice(0,12)
    break;
  case 'hyundai':
    var carData = hyundai.Hyundai.old.slice(0,12)
    break;
  case 'kia':
    var carData = kia.Kia.old.slice(0,12)
    break;
  case 'ford':
    var carData = ford.Ford.old.slice(0,12)
    break;
  case 'mazda':
    var carData = mazda.Mazda.old.slice(0,12)
    break;
  case 'mercedes':
    var carData = mercedes.Mercedes.old.slice(0,12)
    break;
  case 'lexus':
    var carData = lexus.Lexus.old.slice(0,12)
    break;
  case 'bmw':
    var carData = bmw.BMW.old.slice(0,12)
    break;
  default:
    // mặc định sẽ là spoltlight car
    var carData = spotlight.data.slice(0,12)
    break;
}

productList.innerHTML = carData?.map(
    (item,  index) =>
        `
    <div class= "product-item" data-bs-toggle="modal" data-bs-target="#productModal${index}">
        <img src="${item.img}" alt="${item.title}">
        <div class="product-item-content container">
            <h6 class="product-item-title">${item.nam_sx} - ${item.title}</h6>
            <p class="product-item-price">${item.price.toLocaleString()} VND</p>
            <div class="row">
                <div class="row">
                    <div class="col-6">
                        <span>${item.nam_sx}</span>
                    </div>
                    <div class="col-6">
                        <span>${item.hop_so}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <span>${item.xuat_xu}</span>
                    </div>
                    <div class="col-6">
                        <span>${item.nhien_lieu}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
  <div class="modal fade" id="productModal${index}" tabindex="${index}" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body product-detail" style="padding: 0;">
          <h4 class="modal-title product-detail-title" id="productModalLabel">${item.title}</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
           aria-label="Close"></button>
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <img src="${item.img}"
               alt="program-image" width="100%">
            </div>
            <div class="col-12 col-md-12 col-lg-6" style="display: flex; align-items: center; flex-direction: column;">
              <div class="row product-detail-subtitle">
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/calendar.svg" alt="calendar">
                    Năm SX
                  </span>
                  <span>${item.nam_sx}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/steering.svg" alt="steering">
                    Tình trạng</span>
                  <span>${item.tinh_trang}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/odo.svg" alt="odo">
                    Odo
                  </span>
                  <span>${item.km}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/location.svg" alt="location">
                    Tỉnh thành
                  </span>
                  <span>${item.tinh_thanh}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/gear.svg" alt="gear">
                    Hộp số
                  </span>
                  <span>${item.hop_so}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/gas.svg" alt="gas">
                    Nhiên liệu
                  </span>
                  <span>${item.nhien_lieu}</span>
                </p>
              </div>
              <h2 class="product-detail-price">${item.price.toLocaleString()} VND</h2>
                <button type="button" class="btn btn-secondary"
                              style="--bs-btn-border-radius: 0; --bs-btn-padding-y: .5rem;
                              --bs-btn-padding-x: 1.25rem; --bs-btn-font-size: 1rem; display: flex; justify-content: center; margin-left: -30px;"
                              onclick="addToCart(${index})" data-bs-dismiss="modal"
                              aria-label="Close">
                              ĐẶT HÀNG
                          </button>
            </div>
          </div>
        </div>
        <div class="product-detail-desc">
          <h5>MÔ TẢ</h5>
          <p>
            ${item.desc}
          </p>
            </div>
        </div>
        </div>
    </div>
    `
    )
    .join("")

// Thực hiện các thao tác cần thiết với phần tử được click

// Tạo một mảng để lưu các sản phẩm trong giỏ hàng
let cartItems = [];

// Lấy danh sách sản phẩm trong giỏ hàng từ Local Storage
const storedCartItems = localStorage.getItem("cartItems");
if (storedCartItems) {
  cartItems = JSON.parse(storedCartItems);
}

/// Đếm thành tiền
function countTotalProduct(price, quantity) {
  return (price* quantity)
}
//Thêm sản phẩm vào giỏ hàng
window.addToCart= (index) => {
  const selectedItem = carData[index];
  var product = {
    // id: selectedItem.id,
    title: selectedItem.title,
    price: selectedItem.price,
    img: selectedItem.img,
    total: selectedItem.price,
    quantity: 1
  };
  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  const existingProductIndex = cartItems.findIndex(item => item.title === product.title);
  // if(cartItems.length <6) {
    if (existingProductIndex >= 0) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
    // cartItems[existingProductIndex].quantity++;
    alert("Sản phẩm đã tồn tại trong giỏ hàng")
    cartItems[existingProductIndex].total = countTotalProduct(cartItems[existingProductIndex].price, cartItems[existingProductIndex].quantity)
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào mảng cartItems
      cartItems.push(product);
    }
    // Lưu danh sách sản phẩm trong giỏ hàng vào Local Storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Đưa lên cart
    getCart('dropdown','/html/orderDetail.html');
    console.log(localStorage.cartItems);
  // }
  // else {
  //   alert("Bạn chỉ được thêm vào giỏ hàng 6 sản phẩm cùng lúc")
  // }
};