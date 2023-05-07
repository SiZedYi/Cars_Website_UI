import news from '../data/news.json' assert  {type: "json"}

const newContainer = document.querySelector(".news-container")
const listProduct = news.data.slice(0,6)
newContainer.innerHTML=  listProduct?.map(
    (item,index) => `
    <div class="col-3 new-content" style="
        background: url(${item.img})
        center/cover;">
        <div><a href="../html/newsCarDetail.html?brand=${item.brand}">${item.title}</a></div>
    </div>
    `
).join("")