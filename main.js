const product = document.getElementById("product");
const banners = document.getElementById("banners");
const hashTagSuper = document.getElementById("super");
const fresh = document.getElementById("fresh");
const cta = document.getElementById("cta");

// TweenMax.from(product, 2, {left: 500, top: 300});
// TweenMax.to(product, 2, {left: 400, top: -250, scale: 1.5, delay: 2});
TweenMax.fromTo(product, 2, {left: 500, top: 300}, {left: 400, top: -250, scale: 1.5, delay: 1});
TweenMax.to(product, 2, {left: 300, top: -300, scale: .95, delay: 4})
TweenMax.to(product, 2, {left: 500, top: -350, delay: 6});
TweenMax.to(product, 2, {top: -150, left: 400, scale: .4, delay: 10});

TweenMax.to(banners, 2, {opacity: 1, delay: 7});
TweenMax.to(banners, 2, {opacity: 0, delay: 10});

TweenMax.to(hashTagSuper, 2, {opacity: 1, delay: 10});
TweenMax.to(hashTagSuper, 2, {left: 400, delay: 11});

TweenMax.to(fresh, 2, {opacity: 1, delay: 12.5});

TweenMax.to(cta, 2, {opacity: 1, delay: 13});