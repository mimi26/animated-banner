const product = document.getElementById("product");
const banners = document.getElementById("banners");
const hashtagSuper = document.getElementById("super");

TweenMax.from(product, 2, {left: 100, top: 300});
TweenMax.to(product, 2, {left: 0, top: -100, scale: 1.5});
TweenMax.to(product, 2, {right: 10, top: -300, scale: .95, delay: 2})
TweenMax.to(product, 2, {left: 400, delay: 4});
TweenMax.to(product, 2, {top: -100, left: 400, scale: .5, delay: 7});

TweenMax.to(banners, 2, {opacity: 1, delay: 5});
TweenMax.to(banners, 2, {opacity: 0, delay: 7});

TweenMax.to(hashtagSuper, 2, {opacity: 1, delay: 7});
TweenMax.to(hashtagSuper, 2, {left: 400, delay: 8});