(this.webpackJsonpgrocerywebsite=this.webpackJsonpgrocerywebsite||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(21),a=n.n(r),s=(n(63),n(7)),i=(n(64),n(111)),o=n(106),l=n(112),j=n(14),d=(n(65),n(1)),u=function(){var e=Object(c.useContext)(G),t=Object(s.a)(e,2)[1],n=Object(c.useContext)(D),r=Object(s.a)(n,1)[0],a=Object(c.useContext)(R),u=Object(s.a)(a,2)[1],b=Object(c.useContext)(z),h=Object(s.a)(b,2),p=h[0],O=h[1];return Object(d.jsx)(i.a,{expand:"sm",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a.Brand,{as:j.b,to:"/",children:Object(d.jsxs)("span",{className:"brand-name h4",children:["Thrifty",Object(d.jsx)("span",{className:"box-text",children:"Box"})]})}),Object(d.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:"loggedin"===p?Object(d.jsxs)(l.a,{className:"ms-auto",style:{gap:"10px"},children:[Object(d.jsxs)("div",{style:{display:"flex"},className:"cart",children:[Object(d.jsx)(l.a.Link,{as:j.b,to:"/cart",children:Object(d.jsx)("h5",{className:"black",children:"Cart"})}),Object(d.jsx)("span",{style:{fontWeight:"bold",color:"#ec1c24"},children:r})]}),Object(d.jsx)(l.a.Link,{as:j.b,to:"/profile",children:Object(d.jsx)("h5",{className:"black",children:"Profile"})}),Object(d.jsx)(l.a.Link,{onClick:function(){u(""),O("loggedout"),localStorage.removeItem("user"),localStorage.removeItem("id")},children:Object(d.jsx)("h5",{className:"black",children:"Sign Out"})})]}):Object(d.jsxs)(l.a,{className:"ms-auto",style:{gap:"10px"},children:[Object(d.jsx)(l.a.Item,{style:{cursor:"pointer"},onClick:function(){return t("register")},children:Object(d.jsx)("h5",{className:"black",children:"Register"})}),Object(d.jsx)(l.a.Item,{style:{cursor:"pointer"},onClick:function(){return t("signin")},children:Object(d.jsx)("h5",{className:"black",children:"Sign In"})})]})})]})})},b=n(9),h=n(108),p=n(114),O=n(113),m=n(107),x=function(e){var t=e.id,n=void 0===t?0:t,r=e.image,a=e.brandName,i=e.productName,o=e.price,l=e.userId,j=void 0===l?0:l,u=e.cartTotal,b=e.status,h=Object(c.useState)("Add To Cart"),p=Object(s.a)(h,2),x=p[0],f=p[1],g=Object(c.useState)(!1),y=Object(s.a)(g,2),v=y[0],C=y[1],I=Object(c.useState)("primary"),N=Object(s.a)(I,2),S=N[0],k=N[1];Object(c.useEffect)((function(){if(b)for(var e=0;e<b.length;e++)b[e].product_id===n&&"T"===b[e].cart_status&&(f("Item In Cart"),C(!0),k("dark"))}),[b,n]);return Object(d.jsxs)(O.a,{style:{width:"18rem",margin:"20px"},children:[Object(d.jsx)(O.a.Img,{style:{width:"100%",height:"30vh",objectFit:"scale-down",padding:"10px"},variant:"top",src:r}),Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(O.a.Subtitle,{children:a}),Object(d.jsx)(O.a.Title,{children:i}),Object(d.jsxs)(O.a.Text,{children:["Rs.",o]}),Object(d.jsx)(m.a,{disabled:v,variant:S,onClick:function(){f("Item In Cart"),C(!0),k("dark"),j&&(fetch("https://young-refuge-95269.herokuapp.com/cart",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:n,customerId:j,status:"T"})}),fetch("https://young-refuge-95269.herokuapp.com/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:j,operation:"I"})}).then((function(e){return e.json()})).then((function(e){return u[1](e)})))},children:x})]})]})},f=(n(76),function(e){var t=e.products,n=e.userId,r=void 0===n?0:n,a=Object(c.useContext)(D),i=Object(s.a)(a,2),o=i[0],l=i[1],j=Object(c.useState)(null),u=Object(s.a)(j,2),b=u[0],O=u[1];return Object(c.useEffect)((function(){fetch("https://young-refuge-95269.herokuapp.com/getitemcartstatus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:r})}).then((function(e){return e.json()})).then((function(e){return O(e)}))}),[r]),r?t&&b?Object(d.jsx)("div",{className:"ProductCardList",children:t.map((function(e,n){return Object(d.jsx)(x,{id:t[n].product_id,image:t[n].img,brandName:t[n].brand_name,productName:t[n].product_name,price:t[n].price,userId:r,cartTotal:[o,l],status:b},t[n].product_id)}))}):Object(d.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(d.jsx)(h.a,{animation:"border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(d.jsx)(p.a,{variant:"primary",style:{textAlign:"center"},children:"Please Sign In/Register First"})}),g=n(47),y=n.n(g),v=n(56),C=n(39),I=n(40),N=function(e){var t=e.index,n=e.id,r=e.productName,a=e.price,i=e.img,o=e.quantity,l=e.custId,j=e.cartTotalItems,u=Object(c.useContext)(w),b=Object(s.a)(u,2)[1],h=Object(c.useContext)(T),p=Object(s.a)(h,2),O=p[0],x=p[1],f=Object(c.useState)(o),g=Object(s.a)(f,2),y=g[0],v=g[1];Object(c.useEffect)((function(){fetch("https://young-refuge-95269.herokuapp.com/updatecartitemqty",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartItemId:n,qty:y})})}),[y,n]);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(d.jsx)("img",{src:i,alt:"item",style:{margin:"5px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-all"},children:[Object(d.jsx)("h3",{style:{margin:"5px"},children:r}),Object(d.jsxs)("h3",{style:{margin:"5px"},children:["Rs.",a*y]})]})]}),Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[Object(d.jsx)(m.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){y<4&&(v(y+1),b((function(e){return e+Number(a)})))},children:Object(d.jsx)(C.a,{size:"lg",style:{fontSize:"1rem"},icon:I.b})}),Object(d.jsx)("h4",{children:y}),Object(d.jsx)(m.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){y>1&&(v(y-1),b((function(e){return e-Number(a)})))},children:Object(d.jsx)(C.a,{size:"lg",style:{fontSize:"1rem"},icon:I.a})}),Object(d.jsx)(m.a,{size:"md",variant:"outline-danger",style:{margin:"10px"},onClick:function(){O.splice(t,1),x(O),b((function(e){return e-Number(a)*y})),fetch("https://young-refuge-95269.herokuapp.com/removecartitem",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})}),fetch("https://young-refuge-95269.herokuapp.com/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:l,operation:"D"})}).then((function(e){return e.json()})).then((function(e){return j[1](e)}))},children:Object(d.jsx)(C.a,{size:"lg",style:{fontSize:"1rem"},icon:I.c})})]})]})},S=n(57),k=n(109),w=Object(c.createContext)(),T=Object(c.createContext)(),E=function(e){var t=e.customerId,n=void 0===t?0:t,r=Object(c.useState)(null),a=Object(s.a)(r,2),i=a[0],o=a[1],l=Object(c.useState)(0),j=Object(s.a)(l,2),u=j[0],b=j[1],p=Object(c.useContext)(D),O=Object(s.a)(p,2),x=O[0],f=O[1];return Object(c.useEffect)((function(){var e=!0;return fetch("https://young-refuge-95269.herokuapp.com/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:n})}).then((function(e){return e.json()})).then((function(t){e&&o(t)})).catch((function(e){return console.log("Request Failed")})),function(){e=!1}}),[n]),i?i.length>0?Object(d.jsxs)(k.a,{style:{padding:"5px"},children:[i.map((function(e,t){return 0===u&&b((function(e){return e+i[t].price*i[t].qty})),Object(d.jsx)(k.a.Item,{children:Object(d.jsx)(w.Provider,{value:[u,b],children:Object(d.jsx)(T.Provider,{value:[i,o],children:Object(d.jsx)(N,{index:t,id:i[t].cart_item_id,productName:i[t].product_name,price:i[t].price,img:i[t].img,quantity:i[t].qty,custId:n,cartTotalItems:[x,f]},i[t].cart_item_id)})})},t)})),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsxs)("h3",{id:"totalPrice",children:["Total:Rs.",u]}),Object(d.jsx)(m.a,{type:"submit",onClick:function(){fetch("https://young-refuge-95269.herokuapp.com/create-checkout-session",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*u})}).then((function(e){return e.json()})).then(function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)("pk_test_51JmIXVSBM1qtXmvlx74yuerGEmGuKSxOQ7Ej0XDdZrpZQFasZ4XObY9hCWjeQEXA5GDH1QBgPShHtdlKKJBBYCE400KZp54zhq");case 2:e.sent.redirectToCheckout({sessionId:t.id});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Checkout"})]})]}):0===i.length?Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Cart is empty"}):void 0:Object(d.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(d.jsx)(h.a,{animation:"border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},P=n(58),_=function(e){var t=e.product_name,n=e.qty,c=e.img,r=e.price,a=e.date;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h3",{children:["Purchased on : ",a.slice(0,10)]}),Object(d.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(d.jsx)("img",{src:c,alt:"item",style:{margin:"10px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-word"},children:[Object(d.jsx)("h3",{children:t}),Object(d.jsxs)("h3",{children:["Qty:",n]}),Object(d.jsxs)("h3",{children:["Rs.",r]})]})]})]})},J=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=!0,t=localStorage.getItem("user"),n=JSON.parse(t).id;return fetch("https://young-refuge-95269.herokuapp.com/gettingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:n})}).then((function(e){return e.json()})).then((function(t){e&&r(t)})),function(){e=!1}}),[]),n?0===n.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"You Have No Orders!"}),Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Your Orders:"}),Object(d.jsx)(k.a,{children:n.map((function(e,t){return Object(d.jsx)(P.a,{children:Object(d.jsx)(_,{id:n[t].order_id,product_name:n[t].product_name,img:n[t].img,price:n[t].price,qty:n[t].qty,date:n[t].date},n[t].order_id)},n[t].order_id)}))})]}):Object(d.jsx)(h.a,{animation:"border",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},F=function(e){var t=e.Name,n=e.Email;return Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[Object(d.jsxs)("h3",{children:["Name:",t]}),Object(d.jsxs)("h3",{style:{wordBreak:"break-word"},children:["Email:",n]}),Object(d.jsx)(J,{})]})},L=n(110),q=(n(48),function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],l=i[1],j=Object(c.useState)(""),u=Object(s.a)(j,2),b=u[0],h=u[1],p=Object(c.useState)(""),O=Object(s.a)(p,2),x=O[0],f=O[1],g=Object(c.useContext)(z),y=Object(s.a)(g,2),v=(y[0],y[1]),C=Object(c.useContext)(G),I=Object(s.a)(C,2),N=(I[0],I[1]),S=Object(c.useContext)(R),k=Object(s.a)(S,2),w=(k[0],k[1]);return Object(d.jsxs)(L.a,{children:[Object(d.jsxs)(L.a.Group,{className:"mb-3",controlId:"fname",children:[Object(d.jsx)(L.a.Label,{children:"First Name"}),Object(d.jsx)(L.a.Control,{type:"text",placeholder:"Enter First Name:",onChange:function(e){l(e.target.value)}})]}),Object(d.jsxs)(L.a.Group,{className:"mb-3",controlId:"lname",children:[Object(d.jsx)(L.a.Label,{children:"Last Name"}),Object(d.jsx)(L.a.Control,{type:"text",placeholder:"Enter Last Name:",onChange:function(e){h(e.target.value)}})]}),Object(d.jsxs)(L.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(L.a.Label,{children:"Email Address:"}),Object(d.jsx)(L.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){r(e.target.value)}})]}),Object(d.jsxs)(L.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(L.a.Label,{children:"Password:"}),Object(d.jsx)(L.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){f(e.target.value)}})]}),Object(d.jsx)(m.a,{variant:"primary",onClick:function(){fetch("https://young-refuge-95269.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:o,lname:b,email:n,password:x})}).then((function(e){return e.json()})).then((function(e){e.id&&(v("loggedin"),N(""),w(e))}))},children:"Register"})]})}),A=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],l=i[1],j=Object(c.useContext)(z),u=Object(s.a)(j,2),b=(u[0],u[1]),h=Object(c.useContext)(G),p=Object(s.a)(h,2),O=(p[0],p[1]),x=Object(c.useContext)(R),f=Object(s.a)(x,2),g=(f[0],f[1]);return Object(d.jsxs)(L.a,{children:[Object(d.jsxs)(L.a.Group,{className:"mb-3",controlId:"email",children:[Object(d.jsx)(L.a.Label,{children:"Email Address:"}),Object(d.jsx)(L.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){r(e.target.value)}})]}),Object(d.jsxs)(L.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(L.a.Label,{children:"Password:"}),Object(d.jsx)(L.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){l(e.target.value)}})]}),Object(d.jsx)(m.a,{variant:"primary",onClick:function(){fetch("https://young-refuge-95269.herokuapp.com/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})}).then((function(e){return e.json()})).then((function(e){e.id&&(b("loggedin"),O(""),g(e))}))},children:"Sign In"})]})},B=function(e){var t=e.userId;return Object(c.useEffect)((function(){var e={};fetch("https://young-refuge-95269.herokuapp.com/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:t})}).then((function(e){return e.json()})).then((function(n){Object.assign(e,n),Object.keys(e).map((function(n){return fetch("https://young-refuge-95269.herokuapp.com/creatingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:t,productName:e[n].product_name,qty:e[n].qty,price:e[n].price*e[n].qty,img:e[n].img})})}))}))}),[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Your Order Is successful"}),Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]})},z=Object(c.createContext)(),G=Object(c.createContext)(),R=Object(c.createContext)(),D=Object(c.createContext)(),Q=function(){var e=Object(c.useState)("loggedout"),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],l=i[1],h=Object(c.useState)({}),p=Object(s.a)(h,2),O=p[0],m=p[1],x=Object(c.useState)(null),g=Object(s.a)(x,2),y=g[0],v=g[1],C=Object(c.useState)(0),I=Object(s.a)(C,2),N=I[0],S=I[1];Object(c.useEffect)((function(){null!=localStorage.getItem("user")&&m(JSON.parse(localStorage.getItem("user"))),fetch("https://young-refuge-95269.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return v(e)})).catch((function(e){return console.log("Request Failed",e)}))}),[]),Object(c.useEffect)((function(){O.id&&(r("loggedin"),l(""),localStorage.setItem("user",JSON.stringify({id:O.id,email:O.email,name:O.name})),fetch("https://young-refuge-95269.herokuapp.com/getCartTotalItems",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:O.id})}).then((function(e){return e.json()})).then((function(e){return S(e.cart_items)})))}),[O]);var k="";return"register"===o?k=Object(d.jsx)(q,{}):"signin"===o&&(k=Object(d.jsx)(A,{})),Object(d.jsx)(j.a,{children:Object(d.jsxs)(b.c,{children:[Object(d.jsxs)(b.a,{exact:!0,path:"/",children:[Object(d.jsx)(z.Provider,{value:[n,r],children:Object(d.jsxs)(G.Provider,{value:[o,l],children:[Object(d.jsx)(D.Provider,{value:[N,S],children:Object(d.jsx)(R.Provider,{value:[O,m],children:Object(d.jsx)(u,{})})}),Object(d.jsx)(R.Provider,{value:[O,m],children:k})]})}),Object(d.jsx)(R.Provider,{value:[O,m],children:Object(d.jsx)(D.Provider,{value:[N,S],children:Object(d.jsx)(f,{products:y,userId:O.id})})})]}),Object(d.jsx)(b.a,{path:"/cart",children:Object(d.jsx)(D.Provider,{value:[N,S],children:Object(d.jsx)(E,{customerId:O.id})})}),Object(d.jsx)(b.a,{path:"/profile",children:Object(d.jsx)(F,{Name:O.name,Email:O.email})}),Object(d.jsx)(b.a,{path:"/orderdone",children:Object(d.jsx)(B,{userId:O.id})})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(81),n(103);a.a.render(Object(d.jsx)(Q,{}),document.getElementById("root")),X()},48:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},76:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.0ddfd2b5.chunk.js.map