const product = document.getElementsByClassName("cup");
const banners = document.getElementsByClassName("craft");
const hashTagSuper = document.getElementById("super");
const fresh = document.getElementById("fresh");
const cta = document.getElementById("cta");

TweenMax.to(product, 2, {left: -115, top: -245, scale: 1.1, delay: 2});
TweenMax.to(product, 2, {left: -150, top: -300, scale: .7, delay: 5})
TweenMax.to(product, 2, {left: 0, top: -310, delay: 6});
TweenMax.to(product, 2, {top: -200, left: -100, scale: .25, delay: 11});

TweenMax.to(banners, 2, {opacity: 1, delay: 8});
TweenMax.to(banners, 2, {opacity: 0, delay: 10});

TweenMax.to(hashTagSuper, 2, {opacity: 1, delay: 12.5});
TweenMax.to(hashTagSuper, 2, {left: 0, delay: 13});

TweenMax.to(fresh, 2, {opacity: 1, delay: 14.5});

TweenMax.to(cta, 2, {opacity: 1, delay: 15});