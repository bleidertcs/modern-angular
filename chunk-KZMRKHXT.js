import{B as G,C as J,L as K,M as N,q as E,r as b,s as _,t as H,u as F,v as D,w as $}from"./chunk-S3HHWY23.js";import{Dc as k,Gc as A,Hc as U,Ic as q,Ka as y,Kb as I,Kc as T,Lc as R,Mc as L,Nc as Q,Oa as g,Oc as z,Pa as h,Pc as C,Qa as x,Ra as e,Sa as i,Ta as d,Xa as P,Z as v,_ as p,ab as B,bb as j,jb as r,kb as M,lb as s,nb as l,pb as u,qa as O,rb as f,sa as m}from"./chunk-4462D4DP.js";var V=(()=>{let t=class t{constructor(){this.cartService=v(C)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart-total-summary"]],standalone:!0,features:[l],decls:27,vars:12,consts:[[1,"text-xl"],[1,"sub-total"],[1,"total"],[1,"checkout"],["mat-raised-button","","color","primary"]],template:function(a,o){a&1&&(e(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title",0),r(3,"CART TOTAL DOLAR USDT:"),i()(),e(4,"mat-card-content")(5,"div")(6,"div",1)(7,"span"),r(8,"Subtotal Price:"),i(),e(9,"span"),r(10),u(11,"currency"),i()(),e(12,"div",1)(13,"span"),r(14,"Tax"),i(),e(15,"span"),r(16),u(17,"currency"),i()(),e(18,"div",1)(19,"span",2),r(20,"Total:"),i(),e(21,"span",2),r(22),u(23,"currency"),i()()()(),e(24,"mat-card-actions",3)(25,"button",4),r(26," Checkout "),i()()()),a&2&&(m(10),s("",f(11,3,o.cartService.cartSubTotal(),"USD"),":"),m(6),s("",f(17,6,o.cartService.cartTax(),"USD"),":"),m(6),M(f(23,9,o.cartService.cartTotal(),"USD")))},dependencies:[D,E,H,_,F,b,T,U,I],styles:[".sub-total[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;align-content:center;margin-top:10px;margin-bottom:5px}.total[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em}.checkout[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;align-content:center}"]});let n=t;return n})();function it(n,t){if(n&1&&(e(0,"mat-option",6),r(1),i()),n&2){let S=t.$implicit;y("value",S),m(),M(S)}}var W=(()=>{let t=class t{constructor(){this.quantityOptions=[1,2,3,4,5],this.cartService=v(C)}onQuantityChange(c,a){a.quantity=c,this.cartService.updateCartQuantity(a)}onRemove(){this.cartService.removeProduct(this.cartItem.product)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart-item"]],inputs:{cartItem:[0,"item","cartItem"]},standalone:!0,features:[l],decls:27,vars:14,consts:[[1,"parent"],[1,"product-details"],["height","100px",3,"src","alt"],[1,"ma-0"],[1,"ma-0","pa-0","text-md",2,"padding-top","5px"],[3,"selectionChange","value"],[3,"value"],[1,"ma-0",2,"font-weight","bold"],["mat-mini-fab","","aria-label","Remove Product From Cart","color","warn",3,"click"]],template:function(a,o){a&1&&(e(0,"div",0)(1,"div",1),d(2,"img",2),e(3,"div")(4,"p",3),r(5),i(),e(6,"p",4),r(7),i()()(),e(8,"div")(9,"mat-form-field")(10,"mat-label"),r(11,"Quantity"),i(),e(12,"mat-select",5),P("selectionChange",function(Z){return o.onQuantityChange(Z.value,o.cartItem)}),h(13,it,2,2,"mat-option",6,g),i()()(),e(15,"div")(16,"div")(17,"p",7),r(18),u(19,"currency"),i(),e(20,"p",4),r(21),u(22,"currency"),i()()(),e(23,"div")(24,"button",8),P("click",function(){return o.onRemove()}),e(25,"mat-icon"),r(26,"delete"),i()()()()),a&2&&(m(2),j("src","assets/images/",o.cartItem.product.image,".jpg",O),B("alt",o.cartItem.product.name),m(3),M(o.cartItem.product.name),m(2),s(" ",o.cartItem.product.description," "),m(5),y("value",o.cartItem.quantity),m(),x(o.quantityOptions),m(5),s(" ",f(19,8,o.cartItem.product.price*o.cartItem.quantity,"USD")," "),m(3),s(" ",f(22,11,o.cartItem.product.price,"USD")," each "))},dependencies:[J,G,$,N,K,k,A,T,q,L,R,I],styles:[".parent[_ngcontent-%COMP%]{width:80%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.product-details[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]});let n=t;return n})();function nt(n,t){if(n&1&&(e(0,"div"),d(1,"app-cart-item",1),i()),n&2){let S=t.$implicit;m(),y("item",S)}}var X=(()=>{let t=class t{constructor(){this.cartService=v(C),this.cartItems=this.cartService.cartItems}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart-list"]],standalone:!0,features:[l],decls:7,vars:0,consts:[[1,"text-xl"],[3,"item"]],template:function(a,o){a&1&&(e(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title",0),r(3,"CART ITEMS"),i()(),e(4,"mat-card-content"),h(5,nt,2,1,"div",null,g),i()()),a&2&&(m(5),x(o.cartItems()))},dependencies:[D,E,_,F,b,W]});let n=t;return n})();var Ut=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart"]],standalone:!0,features:[l],decls:8,vars:0,consts:[[1,"cart-summary"],[1,"cart-items"],[1,"cart-total"]],template:function(a,o){a&1&&(e(0,"mat-toolbar")(1,"span"),r(2,"Shopping Cart"),i()(),e(3,"div",0)(4,"div",1),d(5,"app-cart-list"),i(),e(6,"div",2),d(7,"app-cart-total-summary"),i()())},dependencies:[z,Q,X,V],styles:[".cart-summary[_ngcontent-%COMP%]{display:flex;flex-direction:row}.cart-items[_ngcontent-%COMP%]{width:70%;text-align:center;margin:50px}.cart-total[_ngcontent-%COMP%]{width:30%;padding:30px;height:100vh;margin:50px}"]});let n=t;return n})();export{Ut as CartComponent};
