function able() {
  var text = [
    "Animi Dolor Pariatur",
    "Art Deco",
    "Artificial potted plant",
    "Dark Green Jug",
    "Drinking Glesses",
    "Helen Chair",
    "High Quality Glass Bottle",
    "Living Room & Lights",
    "Nancy Chair",
    "Simple Chair",
    "Smooth Disk",
    "Table Black",
    "Table Wood Pine",
    "Teapot with black tea",
    "Unique Decoration",
    "Vase Of Flowers",
    "Wood Eggs",
    "Wooden Box",
    "Wooden Cups",
  ];
  let row = document.querySelector("#box-2");
  for (let i = 1; i <= 19; i++) {
    let random = Math.floor(Math.random() * 100) + 20;
    let item = document.createElement("div");
    item.className = "col-lg-3 col-6";
    item.innerHTML = `
    <div class=bg${i}>
      <div>
      <ul>
      <li><span class="fa fa-shopping-bag" id="bagIcon" onclick="countShopping()"></span></li>
      <li><span class="fa fa-heart" id="heart" onclick="countlike()"></span></li>
          <li><a href="#"><span class="fab fa-facebook-square" id="facebook"></span></a></li>
          <li><a href="#"><span class="fab fa-instagram" id="instagram"></span></a></li>
          <li><a href="#"><span class="fab fa-whatsapp" id="whatsapp"></span></a></li>
       </ul>
      </div>
  </div>
  <a href="#">${text[i - 1]}</a>
  <p>$${random}</p>`;
    row.appendChild(item);
    let bg_i = document.querySelector(`.bg${i}`);
    bg_i.style.backgroundImage = `url(images/product-${i}.jpg)`;
  }
}
var count1 = 0;
var count2 = 0;
var shop = document.querySelector("#countershopping");
var bag = document.querySelector("#bagIcon");
var likes = document.querySelector("#counter_like");
var heart = document.querySelector("#heart");
alert(bag.textContent);
function countShopping() {
  count1++;
  shop.textContent = count1;
}
function countlike() {
  count2++;
  likes.textContent = count2;
}
