import new_car from "../data/new_car.json" assert { type: "json" };

const carSpotlightElement = document.querySelector("#nav-tabContent")

window.showCar = () => {
const carElement = carSpotlightElement.querySelector(".active")
const carType = carElement.getAttribute("id").split("nav-")[1]
const carContainer = carElement.querySelector(".spotlight-container")
const moreCar = carElement.querySelector("a")
// console.log(moreCar);
if (carElement) {
    if(carType =='suv') {
        var listProduct =new_car.suv?.slice(0, 8);
    } else if(carType=='sedan') {
        var listProduct =new_car.sedan?.slice(0, 8);
    } else if(carType=='mpv') {
        var listProduct =new_car.mpv?.slice(0, 8);
    } else if(carType=='cuv') {
        var listProduct =new_car.cuv?.slice(0, 8);
    } else if(carType=='pickup') {
        var listProduct =new_car.pickup?.slice(0, 8);
    } else {
        var listProduct =new_car.hatchback?.slice(0, 8);
    }
    // console.log(listProduct);
    carContainer.innerHTML = listProduct
    ?.map(
        (item, index) => `
            <div class="spotlight-item" style="animation: flyIn ${item.id *0.7}s;">
                <a href='${item.link}'
                    class="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div  style="height:130px">
                        <img src=${item.img} alt="item-${item.id}">
                    </div>
                    <div class="item-info">
                        <h4 class="name">${item.brand}</h4>
                        <span>${item.name}</span>
                    </div>
                </a>
            </div>
        `
    )
    .join("");
}
}
showCar()