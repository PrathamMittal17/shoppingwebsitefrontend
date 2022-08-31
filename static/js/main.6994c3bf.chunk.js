(this.webpackJsonpgrocerywebsite=this.webpackJsonpgrocerywebsite||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),s=n.n(r),i=(n(74),n(7)),o=(n(75),n(122)),l=n(126),d=n(127),j=n(128),u=n(125),b=n(22),p=n(12),h=n(21),O=Object(h.b)({name:"routeChange",initialState:{route:"loggedout"},reducers:{changeRoute:function(e,t){e.route=t.payload}}}),m=O.actions.changeRoute,x=O.reducer,f=Object(h.b)({name:"loadUser",initialState:{user:{}},reducers:{loadUserAccount:function(e,t){return Object.assign({},e,{user:t.payload})}}}),g=f.actions.loadUserAccount,y=f.reducer,v=Object(h.b)({name:"changeDisplay",initialState:{display:" "},reducers:{changeDisplay:function(e,t){e.display=t.payload}}}),C=v.actions.changeDisplay,S=v.reducer,I=n(32),k=n(33),N=(n(84),n(1)),w=a.a.forwardRef((function(e,t){var n=e.children,c=e.onClick;return Object(N.jsxs)("a",{href:"/dropdown",ref:t,onClick:function(e){e.preventDefault(),c(e)},style:{color:"white"},children:[Object(N.jsx)(I.a,{icon:k.e,style:{fontSize:"1.75rem"},className:"hover-border"}),n]})})),T=function(e){var t=e.cartItems,n=Object(p.b)(),c=Object(p.c)((function(e){return e.routeChange.route}));return Object(N.jsx)(d.a,{style:{backgroundColor:"#131921"},variant:"dark",sticky:"top",expand:"sm",children:Object(N.jsxs)(o.a,{children:[Object(N.jsx)(d.a.Brand,{as:b.b,to:"/",children:Object(N.jsxs)("span",{className:"brand-name h4",children:["Thrifty",Object(N.jsx)("span",{className:"box-text",children:"Box"})]})}),Object(N.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:"loggedin"===c?Object(N.jsxs)(j.a,{className:"ms-auto",style:{gap:"30px",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(N.jsxs)("div",{style:{display:"flex"},className:"cart",children:[Object(N.jsx)(j.a.Link,{as:b.b,to:"/cart",style:{color:"white"},className:"hover-border",children:Object(N.jsx)(I.a,{icon:k.c,style:{fontSize:"1.75rem"}})}),Object(N.jsx)("span",{style:{fontWeight:"bold",color:"#F08804",marginLeft:"2.5px"},children:t})]}),Object(N.jsxs)(u.a,{children:[Object(N.jsx)(u.a.Toggle,{as:w,id:"dropdown-custom-components"}),Object(N.jsxs)(u.a.Menu,{style:{textAlign:"center",margin:"15px -100px"},children:[Object(N.jsx)(u.a.Item,{children:Object(N.jsx)(j.a.Link,{as:b.b,to:"/profile",style:{color:"black"},children:"My Profile"})}),Object(N.jsx)(u.a.Item,{children:Object(N.jsx)(j.a.Link,{onClick:function(){n(g(" ")),n(m("loggedout")),localStorage.removeItem("user"),localStorage.removeItem("id")},style:{color:"black"},children:"Sign Out"})})]})]})]}):Object(N.jsxs)(j.a,{className:"ms-auto",style:{gap:"10px"},children:[Object(N.jsx)(j.a.Item,{style:{cursor:"pointer"},onClick:function(){return n(C("register"))},children:Object(N.jsx)("h5",{className:"black",children:"Register"})}),Object(N.jsx)(j.a.Item,{style:{cursor:"pointer"},onClick:function(){return n(C("signin"))},children:Object(N.jsx)("h5",{className:"black",children:"Sign In"})})]})})]})})},E=n(9),F=n(123),_=n(130),q=n(129),R=n(65),J=Object(h.b)({name:"changeCartTotal",initialState:{total:null},reducers:{IncreaseTotal:function(e){e.total+=1},DecreaseTotal:function(e){e.total-=1},SetTotal:function(e,t){e.total=t.payload}}}),L=J.actions,A=L.IncreaseTotal,D=L.DecreaseTotal,P=L.SetTotal,z=J.reducer,B=function(e){var t=e.id,n=void 0===t?0:t,a=e.image,r=e.brandName,s=e.productName,o=e.price,l=e.userId,d=void 0===l?0:l,j=e.status,u=Object(c.useState)("Add To Cart"),b=Object(i.a)(u,2),h=b[0],O=b[1],m=Object(c.useState)(!1),x=Object(i.a)(m,2),f=x[0],g=x[1],y=Object(c.useState)("primary"),v=Object(i.a)(y,2),C=v[0],S=v[1],I=Object(p.b)();Object(c.useEffect)((function(){if(j)for(var e=0;e<j.length;e++)j[e].product_id===n&&"T"===j[e].cart_status&&(O("Item In Cart"),g(!0),S("dark"))}),[j,n]);return Object(N.jsxs)(q.a,{style:{width:"18rem",margin:"20px",borderRadius:"15px"},children:[Object(N.jsx)(q.a.Img,{style:{width:"100%",height:"30vh",objectFit:"scale-down",padding:"10px"},variant:"top",src:a}),Object(N.jsxs)(q.a.Body,{children:[Object(N.jsx)(q.a.Subtitle,{children:r}),Object(N.jsx)(q.a.Title,{children:s}),Object(N.jsxs)(q.a.Text,{children:["Rs.",o]}),Object(N.jsx)(R.a,{disabled:f,variant:C,onClick:function(){O("Item In Cart"),g(!0),S("dark"),d&&(fetch("https://shopping-website-backend.adaptable.app/cart",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:n,customerId:d,status:"T"})}),fetch("https://shopping-website-backend.adaptable.app/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:d,operation:"I"})}).then((function(e){return e.json()})).then(I(A())))},children:h})]})]})},G=(n(92),function(e){var t=e.products,n=e.userId,a=void 0===n?0:n,r=Object(c.useState)([]),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){fetch("https://shopping-website-backend.adaptable.app/getitemcartstatus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:a})}).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log("Request Failed")}))}),[a]),a?t&&o?Object(N.jsx)("div",{className:"ProductCardList",children:t.map((function(e,n){return Object(N.jsx)(B,{id:t[n].product_id,image:t[n].img,brandName:t[n].brand_name,productName:t[n].product_name,price:t[n].price,userId:a,status:o},t[n].product_id)}))}):Object(N.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(N.jsx)(F.a,{animation:"border",role:"status",children:Object(N.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(N.jsx)(_.a,{variant:"primary",style:{textAlign:"center"},children:"Please Sign In/Register First"})}),Q=n(56),U=n.n(Q),X=n(66),Y=function(e){var t=e.index,n=e.id,a=e.productName,r=e.price,s=e.img,o=e.quantity,l=e.custId,d=Object(c.useContext)(Z),j=Object(i.a)(d,2)[1],u=Object(c.useContext)(H),b=Object(i.a)(u,2),h=b[0],O=b[1],m=Object(p.b)(),x=Object(c.useState)(o),f=Object(i.a)(x,2),g=f[0],y=f[1];Object(c.useEffect)((function(){fetch("https://shopping-website-backend.adaptable.app/updatecartitemqty",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartItemId:n,qty:g})}).catch((function(e){return console.log("Request Failed")}))}),[g,n]);return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(N.jsx)("img",{src:s,alt:"item",style:{margin:"5px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-all"},children:[Object(N.jsx)("h3",{style:{margin:"5px"},children:a}),Object(N.jsxs)("h3",{style:{margin:"5px"},children:["Rs.",r*g]})]})]}),Object(N.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[Object(N.jsx)(R.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){g<4&&(y(g+1),j((function(e){return e+Number(r)})))},children:Object(N.jsx)(I.a,{size:"lg",style:{fontSize:"1rem"},icon:k.b})}),Object(N.jsx)("h4",{children:g}),Object(N.jsx)(R.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){g>1&&(y(g-1),j((function(e){return e-Number(r)})))},children:Object(N.jsx)(I.a,{size:"lg",style:{fontSize:"1rem"},icon:k.a})}),Object(N.jsx)(R.a,{size:"md",variant:"outline-danger",style:{margin:"10px"},onClick:function(){h.splice(t,1),O(h),j((function(e){return e-Number(r)*g})),fetch("https://shopping-website-backend.adaptable.app/removecartitem",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})}),fetch("https://shopping-website-backend.adaptable.app/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:l,operation:"D"})}).then((function(e){return e.json()})).then(m(D()))},children:Object(N.jsx)(I.a,{size:"lg",style:{fontSize:"1rem"},icon:k.d})})]})]})},K=n(67),W=n(124),Z=Object(c.createContext)(),H=Object(c.createContext)(),M=function(e){var t=e.customerId,n=void 0===t?0:t,a=Object(c.useState)(null),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(0),j=Object(i.a)(l,2),u=j[0],b=j[1];return Object(c.useEffect)((function(){var e=!0;return fetch("https://shopping-website-backend.adaptable.app/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:n})}).then((function(e){return e.json()})).then((function(t){e&&o(t)})).catch((function(e){return console.log("Request Failed")})),function(){e=!1}}),[n]),s?s.length>0?Object(N.jsxs)("div",{children:[Object(N.jsxs)(d.a,{sticky:"top",expand:"lg",style:{display:"flex",justifyContent:"center",backgroundColor:"#131921",padding:"10px"},children:[Object(N.jsxs)("h3",{id:"totalPrice",style:{color:"white"},children:["Total: Rs.",u]}),Object(N.jsx)(R.a,{type:"submit",style:{marginLeft:"10px"},onClick:function(){fetch("https://shopping-website-backend.adaptable.app/create-checkout-session",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*u})}).then((function(e){return e.json()})).then(function(){var e=Object(X.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)("pk_test_51JmIXVSBM1qtXmvlx74yuerGEmGuKSxOQ7Ej0XDdZrpZQFasZ4XObY9hCWjeQEXA5GDH1QBgPShHtdlKKJBBYCE400KZp54zhq");case 2:e.sent.redirectToCheckout({sessionId:t.id});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Checkout"})]}),Object(N.jsx)(W.a,{style:{padding:"5px"},children:s.map((function(e,t){return 0===u&&b((function(e){return e+s[t].price*s[t].qty})),Object(N.jsx)(W.a.Item,{style:{borderRadius:"15px"},children:Object(N.jsx)(Z.Provider,{value:[u,b],children:Object(N.jsx)(H.Provider,{value:[s,o],children:Object(N.jsx)(Y,{index:t,id:s[t].cart_item_id,productName:s[t].product_name,price:s[t].price,img:s[t].img,quantity:s[t].qty,custId:n},s[t].cart_item_id)})})},t)}))})]}):0===s.length?Object(N.jsx)("h1",{style:{textAlign:"center"},children:"Cart is empty"}):void 0:Object(N.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(N.jsx)(F.a,{animation:"border",role:"status",children:Object(N.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},V=n(68),$=function(e){var t=e.product_name,n=e.qty,c=e.img,a=e.price,r=e.date;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h3",{children:["Purchased on : ",r.slice(0,10)]}),Object(N.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(N.jsx)("img",{src:c,alt:"item",style:{margin:"10px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-word"},children:[Object(N.jsx)("h3",{children:t}),Object(N.jsxs)("h3",{children:["Qty:",n]}),Object(N.jsxs)("h3",{children:["Rs.",a]})]})]})]})},ee=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=!0,t=localStorage.getItem("user"),n=JSON.parse(t).id;return fetch("https://shopping-website-backend.adaptable.app/gettingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:n})}).then((function(e){return e.json()})).then((function(t){e&&a(t)})).catch((function(e){return console.log("Request Failed")})),function(){e=!1}}),[]),n?0===n.length?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h3",{children:"You Have No Orders!"}),Object(N.jsx)(b.b,{to:"/",children:Object(N.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h3",{children:"Your Orders:"}),Object(N.jsx)(W.a,{children:n.map((function(e,t){return Object(N.jsx)(V.a,{style:{borderRadius:"15px"},children:Object(N.jsx)($,{id:n[t].order_id,product_name:n[t].product_name,img:n[t].img,price:n[t].price,qty:n[t].qty,date:n[t].date},n[t].order_id)},n[t].order_id)}))})]}):Object(N.jsx)(F.a,{animation:"border",role:"status",children:Object(N.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},te=function(e){var t=e.Name,n=e.Email;return Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[Object(N.jsxs)("h3",{children:["Name: ",t]}),Object(N.jsxs)("h3",{style:{wordBreak:"break-word"},children:["Email: ",n]}),Object(N.jsx)(ee,{})]})},ne=(n(57),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],d=s[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],y=x[1],v=Object(p.b)();return Object(N.jsxs)(l.a,{children:[Object(N.jsxs)(l.a.Group,{className:"mb-3",controlId:"fname",children:[Object(N.jsx)(l.a.Label,{children:"First Name"}),Object(N.jsx)(l.a.Control,{type:"text",placeholder:"Enter First Name:",onChange:function(e){d(e.target.value)}})]}),Object(N.jsxs)(l.a.Group,{className:"mb-3",controlId:"lname",children:[Object(N.jsx)(l.a.Label,{children:"Last Name"}),Object(N.jsx)(l.a.Control,{type:"text",placeholder:"Enter Last Name:",onChange:function(e){h(e.target.value)}})]}),Object(N.jsxs)(l.a.Group,{className:"mb-3",controlId:"email",children:[Object(N.jsx)(l.a.Label,{children:"Email Address:"}),Object(N.jsx)(l.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){a(e.target.value)}})]}),Object(N.jsxs)(l.a.Group,{className:"mb-3",controlId:"password",children:[Object(N.jsx)(l.a.Label,{children:"Password:"}),Object(N.jsx)(l.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){y(e.target.value)}})]}),Object(N.jsx)(R.a,{variant:"primary",onClick:function(){fetch("https://shopping-website-backend.adaptable.app/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:o,lname:b,email:n,password:f})}).then((function(e){return e.json()})).then((function(e){e.id&&(v(m("loggedin")),v(C(" ")),v(g(e)))})).catch((function(e){return console.log("Request Failed")}))},children:"Register"})]})}),ce=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),o=s[0],d=s[1],j=Object(p.b)();return Object(N.jsxs)(l.a,{children:[Object(N.jsxs)(l.a.Group,{className:"mb-3",controlId:"email",children:[Object(N.jsx)(l.a.Label,{children:"Email Address:"}),Object(N.jsx)(l.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){a(e.target.value)}})]}),Object(N.jsxs)(l.a.Group,{className:"mb-3",controlId:"password",children:[Object(N.jsx)(l.a.Label,{children:"Password:"}),Object(N.jsx)(l.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){d(e.target.value)}})]}),Object(N.jsx)(R.a,{variant:"primary",onClick:function(){fetch("https://shopping-website-backend.adaptable.app/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})}).then((function(e){return e.json()})).then((function(e){e.id&&(j(m("loggedout")),j(C(" ")),j(g(e)))})).catch((function(e){return console.log("Request Failed")}))},children:"Sign In"})]})},ae=function(e){var t=e.userId;return Object(c.useEffect)((function(){var e={};fetch("https://shopping-website-backend.adaptable.app/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:t})}).then((function(e){return e.json()})).then((function(n){Object.assign(e,n),Object.keys(e).map((function(n){return fetch("https://shopping-website-backend.adaptable.app/creatingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:t,productName:e[n].product_name,qty:e[n].qty,price:e[n].price*e[n].qty,img:e[n].img})})}))})).catch((function(e){return console.log("Request Failed")}))}),[t]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{style:{textAlign:"center"},children:"Your Order Is successful"}),Object(N.jsx)(b.b,{to:"/",children:Object(N.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]})},re=function(){var e=Object(p.c)((function(e){return e.changeDisplay.display})),t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(p.c)((function(e){return e.changeCartTotal.total})),d=Object(p.c)((function(e){return e.loadUser.user})),j=Object(c.useState)(" "),u=Object(i.a)(j,2),h=u[0],O=u[1],x=Object(p.b)();Object(c.useEffect)((function(){null!=localStorage.getItem("user")&&x(g(JSON.parse(localStorage.getItem("user")))),fetch("https://shopping-website-backend.adaptable.app/products").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log("Request Failed")}))}),[x]),Object(c.useEffect)((function(){d.id&&(x(m("loggedin")),x(C(" ")),localStorage.setItem("user",JSON.stringify({id:d.id,email:d.email,name:d.name})),fetch("https://shopping-website-backend.adaptable.app/getCartTotalItems",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:d.id})}).then((function(e){return e.json()})).then((function(e){return x(P(e.cart_items))})).catch((function(e){return console.log("Request Failed")})))}),[d,x]);var f="";"register"===e?f=Object(N.jsx)(ne,{}):"signin"===e&&(f=Object(N.jsx)(ce,{}));var y=null===a||void 0===a?void 0:a.filter((function(e){return(e.brand_name+" "+e.product_name).toLowerCase().includes(h.toLowerCase())}));return Object(N.jsx)(b.a,{children:Object(N.jsxs)(E.c,{children:[Object(N.jsxs)(E.a,{exact:!0,path:"/",children:[Object(N.jsx)(T,{cartItems:s}),f,d.id?Object(N.jsx)("div",{style:{position:"fixed",width:"100%",zIndex:"10"},children:Object(N.jsx)(o.a,{children:Object(N.jsx)(l.a,{className:"d-flex",children:Object(N.jsx)(l.a.Control,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",style:{backgroundColor:"#131921",color:"white"},onChange:function(e){return O(e.target.value)}})})})}):"",Object(N.jsx)(G,{products:y,userId:d.id})]}),Object(N.jsx)(E.a,{path:"/cart",children:Object(N.jsx)(M,{customerId:d.id})}),Object(N.jsx)(E.a,{path:"/profile",children:Object(N.jsx)(te,{Name:d.name,Email:d.email})}),Object(N.jsx)(E.a,{path:"/orderdone",children:Object(N.jsx)(ae,{userId:d.id})})]})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},ie=(n(94),n(116),Object(h.a)({reducer:{loadUser:y,routeChange:x,changeDisplay:S,changeCartTotal:z}}));s.a.render(Object(N.jsx)(p.a,{store:ie,children:Object(N.jsx)(re,{})}),document.getElementById("root")),se()},57:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){},92:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.6994c3bf.chunk.js.map