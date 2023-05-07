import brandData  from '../data/brands.json' assert { type: "json" }

    const brand = document.querySelector('.brand-container')
    brand.innerHTML = brandData.map((item , index )  =>
    `
    <div  class="brand-item">
        <a href="${item.link}">
            <img src="${item.logo}"/>
            <p>${item.name}</p>
        </a>
    </div>
    `
    ).join("")
