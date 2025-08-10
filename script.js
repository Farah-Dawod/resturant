
  let nav= document.querySelector(".nav")
  
let lastScrolltop =0
window.addEventListener("scroll",()=>{
    let scrollTop =window.scrollY
    if( scrollTop>lastScrolltop){
        nav.style.top="-100px"

    }else{
        nav.style.top="0"
    }
lastScrolltop=scrollTop
})
let sliderData ={
    appetizer:['img/Crispy Golden Falafel.webp','img/Mini Cheese Sambousek.webp','img/Stuffed Vine Leaves.webp','img/Roasted Beet Carpaccio.webp','img/Spicy Hummus Platter.webp'],
    main:['img/Grilled Lamb Chops.webp','img/Stuffed Chicken Breast.webp','img/Creamy Mushroom Risotto.webp','img/Seafood Tagine.webp','img/Spiced Beef Kofta Skewers.webp'],
    dessert:['img/Pistachio Kunafa Roll.webp','img/Molten Chocolate Cake.webp','img/Rose Milk Pudding.webp','img/Date & Walnut Tart.webp','img/Vanilla Ice Cream Baklava.webp'],
    drink:['img/Saffron Lemonade.webp','img/Mint Iced Tea.webp','img/Cardamom Coffee Shot.webp','img/Berry Yogurt Smoothie.webp','img/Pomegranate Sparkle.webp']

}
let currentIndex ={
    appetizer:0,
    main:0,
    dessert:0,
    drink:0,
}
function nextSlide(section) {
  currentIndex[section] = (currentIndex[section] + 1) % sliderData[section].length;
  document.getElementById(`${section}-img`).src = sliderData[section][currentIndex[section]];
}

function prevSlide(section) {
  currentIndex[section] = (currentIndex[section] - 1 + sliderData[section].length) % sliderData[section].length;
  document.getElementById(`${section}-img`).src = sliderData[section][currentIndex[section]];
}
