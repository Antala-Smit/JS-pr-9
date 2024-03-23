let product = [{
        id: 1,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2022/10/17/202210170238521880327804.JPG?w=500",
        name: "Chain",
        price: 687800,
        qty: 1,
    },
    {
        id: 2,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/05/16/20230516114158771166035.jpg?w=500",
        name: "Kada",
        price: 155400,
        qty: 1,
    },
    {
        id: 3,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/05/16/20230516013638128563454.jpg?w=500",
        name: "Mangalsutra",
        price: 148000,
        qty: 1,
    },
    {
        id: 4,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/09/27/20230927035152138378066.JPG?w=500",
        name: "Necklace Set",
        price: 192800,
        qty: 1,
    },
    {
        id: 5,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/05/17/20230517115642323630869.jpg?w=500",
        name: "Pendant Set",
        price: 585900,
        qty: 1,
    },
    {
        id: 6,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/04/11/202304111111211457735397.jpg?w=500",
        name: "Ring",
        price: 168700,
        qty: 1,
    },
    {
        id: 7,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2021/02/23/202102230421402028583201.jpg?w=500",
        name: "Mala",
        price: 107400,
        qty: 1,
    },
    {
        id: 8,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/09/20/20230920010602264521004.jpg?w=500",
        name: "Earring",
        price: 157200,
        qty: 1,
    },
    {
        id: 9,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/07/05/202307050230092109211794.jpg?w=500",
        name: "Tanmaniya",
        price: 51900,
        qty: 1,
    },
    {
        id: 10,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/12/02/20231202112626174695684.JPG?w=500",
        name: "Nose Pin",
        price: 4500,
        qty: 1,
    },
    {
        id: 11,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2022/08/17/202208170552551518732918.JPG?w=500",
        name: "Cufflink",
        price: 104800,
        qty: 1,
    },
    {
        id: 12,
        img: "https://i0.wp.com/cdn.satvagold.com/admin/uploads/2023/09/27/202309270444081286592623.JPG?w=500",
        name: "Nose Pin",
        price: 606500,
        qty: 1,
    },
]

function viweProduct() {
    let tbl = "";
    product.forEach((val) => {
        tbl += `
                    <div class="card" style="width: 18rem; margin: 15px; background-color: #353530; color:white; width:250px;height:380px">
                        <img src=${val.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" style="padding-bottom: 10px">${val.name}</h5>
                        <p class="card-text" style="padding-bottom: 10px">${val.price}</p>
                        <a onclick ="addtocart(${val.id})" class="btn btn-primary">Add To Cart</a>
                    </div>
                    </div>
                `;
    });
    document.getElementById('product').innerHTML = tbl
};
viweProduct();

let cart = [];

function addtocart(id) {
    let allcart = JSON.parse(localStorage.getItem("cart")) || [];
    let found = false;
    for (var i = 0; i < allcart.length; i++) {
        if (allcart[i].id == id) {
            allcart[i].qty++
                found = true;
            break;
        }
    }

    if (!found) {
        let productToadd = product.find(item => item.id === id);
        if (productToadd) {
            productToadd.qty = 1;
            allcart.push(productToadd);
        } else {
            console.error("Product not found..!");
        }
    }
    localStorage.setItem('cart', JSON.stringify(allcart));

    alert("Added to cart")
}