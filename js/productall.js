function createProductHTML(product) {
  return `
      <li class="product">
        <a href="${product.link}">
          <img src="${product.image}" alt="${product.name}" />
          <div class="like-icon">
            <i class="fas fa-heart"></i>
          </div>
          <div class="product-name">${product.name}</div>
          <div class="price-detail">
            <span class="price">￥${product.price}</span>
            <span class="history-price">￥${product.historyPrice}</span>
          </div>
        </a>
      </li>
    `;
}

var products = [
  {
    image: "images/product/p1_3.jpeg",
    name: "智能导盲杖",
    price: "1000.00",
    historyPrice: "1200.00",
    link: 'page/cn/1/product_cn.html'
  },
  {
    image: "images/product/p3_1.jpeg",
    name: "智能导盲杖",
    price: "600.00",
    historyPrice: "1000.00",
    link: 'page/cn/3/product_cn.html'
  },
];

var productHTML = products.map(createProductHTML).join("");

document.getElementsByClassName("product-list")[0].innerHTML = productHTML;
