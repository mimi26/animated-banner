const product = document.getElementById("product");
TweenMax.from(product, 2, {left: 100, top: 300});
TweenMax.to(product, 2, {left: 0, top: -100, scale: 1.5});
TweenMax.to(product, 2, {right: 10, top: -300, scale: .95, delay: 2})
TweenMax.to(product, 2, {left: 400, delay: 4});
//TweenMax.to(product, 2, {top: 200});

var tl = new TimelineLite();
//tl.to(product, 1, {left: 100})

// tl.to( product , 3 , {top: -2, left: -10, ease:Sine.easeInOut } )
// 	.to( product, .25, {top: 0, left: -390, ease:Sine.easeInOut } )
// 	.to( product, 3, {top: -5, left: -395, ease:Sine.easeInOut } )
// 	.to( product, .25, {top: -300, left: 0, ease:Sine.easeInOut } )
// 	.to( product, 3, {top: -303, left: -10, ease:Sine.easeInOut } )
// 	.to( product, .25, {top: -300, left: -390, ease:Sine.easeInOut } )
// 	.to( product, 3, {top: -304, left: -394, ease:Sine.easeInOut } )
// ;
