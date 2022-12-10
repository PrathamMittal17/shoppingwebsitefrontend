(this.webpackJsonpgrocerywebsite=this.webpackJsonpgrocerywebsite||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},126:function(e,t,n){},133:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(25),i=n.n(s),r=(n(116),n(9)),o=(n(117),n(253)),l=n(245),d=n(250),j=n(104),b=n(251),u=n(19),p=n(14),h=n(28),O=Object(h.b)({name:"routeChange",initialState:{route:"loggedout"},reducers:{changeRoute:function(e,t){e.route=t.payload}}}),m=O.actions.changeRoute,x=O.reducer,f=Object(h.b)({name:"loadUser",initialState:{user:{}},reducers:{loadUserAccount:function(e,t){return Object.assign({},e,{user:t.payload})}}}),g=f.actions.loadUserAccount,y=f.reducer,v=n(40),C=n(41),S=(n(126),n(1)),N=a.a.forwardRef((function(e,t){var n=e.children,c=e.onClick;return Object(S.jsxs)("a",{href:"/dropdown",ref:t,onClick:function(e){e.preventDefault(),c(e)},style:{color:"white"},children:[Object(S.jsx)(v.a,{icon:C.e,style:{fontSize:"1.75rem"},className:"hover-border"}),n]})})),k=function(e){var t=e.cartItems,n=Object(p.b)(),c=Object(p.c)((function(e){return e.routeChange.route}));return Object(S.jsx)(o.a,{style:{backgroundColor:"#131921"},variant:"dark",expand:"sm",children:Object(S.jsxs)(l.a,{children:[Object(S.jsx)(o.a.Brand,{as:u.b,to:"/",children:Object(S.jsxs)("span",{className:"brand-name h4",children:["Thrifty",Object(S.jsx)("span",{className:"box-text",children:"Box"})]})}),Object(S.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(S.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:"loggedin"===c?Object(S.jsxs)(j.a,{className:"ms-auto",style:{gap:"30px",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(S.jsxs)("div",{style:{display:"flex"},className:"cart",children:[Object(S.jsx)(j.a.Link,{as:u.b,to:"/cart",style:{color:"white"},className:"hover-border",children:Object(S.jsx)(v.a,{icon:C.c,style:{fontSize:"1.75rem"}})}),Object(S.jsx)("span",{style:{fontWeight:"bold",color:"#F08804",marginLeft:"2.5px"},children:t})]}),Object(S.jsxs)(b.a,{children:[Object(S.jsx)(b.a.Toggle,{as:N,id:"dropdown-custom-components"}),Object(S.jsxs)(b.a.Menu,{style:{textAlign:"center",margin:"15px -100px"},children:[Object(S.jsx)(b.a.Item,{as:u.b,to:"/profile",style:{color:"black",fontSize:"18px",padding:"10px"},children:"My Profile"}),Object(S.jsx)(b.a.Item,{as:u.b,style:{color:"black",fontSize:"18px",padding:"10px"},to:"",onClick:function(){n(g(" ")),n(m("loggedout")),localStorage.removeItem("user"),localStorage.removeItem("id")},children:"Sign Out"})]})]})]}):""})]})})},w=n(13),I=n(246),E=n(255),L=n(254),T=function(e){var t=e.id,n=void 0===t?0:t,a=e.image,s=e.productName,i=e.price,r=Object(w.f)(),o=Object(c.useCallback)((function(){r.push("/products/".concat(n))}),[r,n]);return Object(S.jsxs)(L.a,{onClick:function(){return o()},style:{width:"18rem",margin:"20px",borderRadius:"15px",cursor:"pointer"},children:[Object(S.jsx)(L.a.Img,{style:{width:"100%",height:"30vh",objectFit:"scale-down",padding:"10px"},variant:"top",src:a}),Object(S.jsxs)(L.a.Body,{children:[Object(S.jsx)(L.a.Title,{children:s}),Object(S.jsxs)(L.a.Subtitle,{children:["Rs.",i]})]})]})},F=Object(h.b)({name:"changeDisplay",initialState:{display:" "},reducers:{changeDisplay:function(e,t){e.display=t.payload}}}),P=F.actions.changeDisplay,A=F.reducer,J=(n(133),n(105)),_=(n(85),n(20)),D=n.n(_),R=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(""),b=Object(r.a)(j,2),u=b[0],h=b[1],O=Object(c.useState)(""),x=Object(r.a)(O,2),f=x[0],y=x[1],v=Object(c.useState)(null),C=Object(r.a)(v,2),N=C[0],k=C[1],w=Object(c.useState)(null),I=Object(r.a)(w,2),E=I[0],L=I[1],T=Object(c.useState)(null),F=Object(r.a)(T,2),A=F[0],_=F[1],R=Object(c.useState)(null),q=Object(r.a)(R,2),B=q[0],z=q[1],M=Object(c.useState)("Email can't be empty"),G=Object(r.a)(M,2),U=G[0],K=G[1],H=Object(c.useState)("Password can't be empty"),Q=Object(r.a)(H,2),W=Q[0],X=Q[1],Y=Object(p.b)(),Z=Object(c.useState)(null),V=Object(r.a)(Z,2),$=V[0],ee=V[1];return Object(S.jsxs)(d.a,{children:[$?Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:"User already exists please Sign In"})}):"",Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("h4",{children:"Register"})}),Object(S.jsxs)(d.a.Group,{className:"mb-3",controlId:"fname",children:[Object(S.jsx)(d.a.Label,{children:"First Name"}),Object(S.jsx)(d.a.Control,{type:"text",placeholder:"Enter First Name:",onChange:function(e){k(!1),l(e.target.value),ee(!1)}})]}),N?Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:"First Name can't be empty"})}):"",Object(S.jsxs)(d.a.Group,{className:"mb-3",controlId:"lname",children:[Object(S.jsx)(d.a.Label,{children:"Last Name"}),Object(S.jsx)(d.a.Control,{type:"text",placeholder:"Enter Last Name:",onChange:function(e){L(!1),h(e.target.value),ee(!1)}})]}),E?Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:"Last Name can't be empty"})}):"",Object(S.jsxs)(d.a.Group,{className:"mb-3",controlId:"email",children:[Object(S.jsx)(d.a.Label,{children:"Email Address:"}),Object(S.jsx)(d.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){_(!1),a(e.target.value),ee(!1)}})]}),A?Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:U})}):"",Object(S.jsxs)(d.a.Group,{className:"mb-3",controlId:"password",children:[Object(S.jsx)(d.a.Label,{children:"Password:"}),Object(S.jsx)(d.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){z(!1),y(e.target.value),ee(!1)}})]}),B?Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:W})}):"",Object(S.jsx)(d.a.Label,{children:"\u2022 Minimum 6 letters"}),Object(S.jsx)(d.a.Label,{children:"\u2022 Minium 1 Capital Letter "}),Object(S.jsx)(d.a.Label,{children:"\u2022 Minium 1 Symbol"}),Object(S.jsx)(d.a.Label,{children:"\u2022 Minium 1 Number"}),Object(S.jsx)(J.a,{variant:"primary",onClick:function(){D.a.isEmpty(o)&&k(!0),D.a.isEmpty(u)&&L(!0),D.a.isEmpty(n)?(_(!0),K("Email can't be empty")):D.a.isEmail(n)||(_(!0),K("Invalid Email")),D.a.isEmpty(f)?(z(!0),X("Password can't be empty")):D.a.isStrongPassword(f,{minLength:6,minLowercase:1,minNumbers:1,minSymbols:1,minUppercase:1})?N||A||!D.a.isEmail(n)||E||B||!D.a.isStrongPassword(f,{minLength:6,minLowercase:1,minNumbers:1,minSymbols:1,minUppercase:1})||fetch("https://shopping-website-backend.adaptable.app/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:o,lname:u,email:n,password:f})}).then((function(e){return e.json()})).then((function(e){e.id?(Y(m("loggedin")),Y(P(" ")),Y(g(e))):"Unable to register"===e&&ee(!0)})).catch((function(e){return console.log(e)})):(z(!0),X("Invalid Password"))},children:"Register"}),Object(S.jsx)("br",{})]})},q=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(!0),b=Object(r.a)(j,2),u=b[0],h=b[1],O=Object(c.useState)(!0),x=Object(r.a)(O,2),f=x[0],y=x[1],v=Object(c.useState)(""),C=Object(r.a)(v,2),N=C[0],k=C[1],w=Object(c.useState)(""),I=Object(r.a)(w,2),E=I[0],L=I[1],T=Object(c.useState)(!0),F=Object(r.a)(T,2),A=F[0],_=F[1],R=Object(p.b)();return Object(S.jsxs)(d.a,{children:[Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("h4",{children:"Sign In"})}),Object(S.jsxs)(d.a.Group,{className:"mb-3",controlId:"email",children:[Object(S.jsx)(d.a.Label,{children:"Email Address:"}),Object(S.jsx)(d.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){h(!1),a(e.target.value),_(!0)}})]}),u?Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:N})}):"",Object(S.jsxs)(d.a.Group,{className:"mb-3",controlId:"password",children:[Object(S.jsx)(d.a.Label,{children:"Password:"}),Object(S.jsx)(d.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){y(!1),l(e.target.value),_(!0)}})]}),f?Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:E})}):"",Object(S.jsx)(J.a,{variant:"primary",onClick:function(){D.a.isEmpty(n)?(h(!0),k("Email can't be empty")):D.a.isEmail(n)||(h(!0),k("Invalid Email")),D.a.isEmpty(o)&&(y(!0),L("Password can't be empty")),u||!D.a.isEmail(n)||D.a.isEmpty(o)||fetch("https://shopping-website-backend.adaptable.app/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})}).then((function(e){return e.json()})).then((function(e){e.id?(R(m("loggedout")),R(P(" ")),R(g(e))):"wrong credentials"===e&&_(!1)})).catch((function(e){return console.log("Request Failed")}))},children:"Sign In"}),Object(S.jsx)("br",{}),A?"":Object(S.jsx)(d.a.Label,{children:Object(S.jsx)("b",{children:"Invalid Login Details"})})]})},B=function(e){var t=e.products,n=e.userId,c=void 0===n?0:n,a=Object(p.c)((function(e){return e.changeDisplay.display})),s=Object(p.b)(),i=Object(S.jsx)(q,{});return"register"===a?(console.log(a),i=Object(S.jsx)(R,{})):"signin"===a&&(i=Object(S.jsx)(q,{})),c?t?0===t.length?Object(S.jsx)(l.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(S.jsx)("h1",{children:"No Products Found"})}):Object(S.jsx)("div",{className:"ProductCardList",children:t.map((function(e,n){return Object(S.jsx)(T,{id:t[n].product_id,image:t[n].img,productName:t[n].product_name,price:t[n].price},t[n].product_id)}))}):Object(S.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(S.jsx)(I.a,{animation:"border",role:"status",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(S.jsxs)("div",{children:[Object(S.jsxs)(E.a,{variant:"primary",style:{textAlign:"center"},children:["Please\u2002",Object(S.jsx)(E.a.Link,{onClick:function(){return s(P("signin"))},children:"Sign In"}),Object(S.jsx)("b",{children:"/"}),Object(S.jsx)(E.a.Link,{onClick:function(){return s(P("register"))},children:"Register"}),"\u2002First"]}),i]})},z=n(84),M=n.n(z),G=n(106),U=Object(h.b)({name:"changeCartTotal",initialState:{total:null},reducers:{IncreaseTotal:function(e){e.total+=1},DecreaseTotal:function(e){e.total-=1},SetTotal:function(e,t){e.total=t.payload}}}),K=U.actions,H=K.IncreaseTotal,Q=K.DecreaseTotal,W=K.SetTotal,X=U.reducer,Y=function(e){var t=e.index,n=e.id,a=e.productName,s=e.price,i=e.img,o=e.quantity,l=e.custId,d=Object(c.useContext)($),j=Object(r.a)(d,2)[1],b=Object(c.useContext)(ee),u=Object(r.a)(b,2),h=u[0],O=u[1],m=Object(p.b)(),x=Object(c.useState)(o),f=Object(r.a)(x,2),g=f[0],y=f[1];Object(c.useEffect)((function(){fetch("https://shopping-website-backend.adaptable.app/updatecartitemqty",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartItemId:n,qty:g})}).catch((function(e){return console.log("Request Failed")}))}),[g,n]);return Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(S.jsx)("img",{src:i,alt:"item",style:{margin:"5px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-all"},children:[Object(S.jsx)("h3",{style:{margin:"5px"},children:a}),Object(S.jsxs)("h3",{style:{margin:"5px"},children:["Rs.",s*g]})]})]}),Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[Object(S.jsx)(J.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){g<4&&(y(g+1),j((function(e){return e+Number(s)})))},children:Object(S.jsx)(v.a,{size:"lg",style:{fontSize:"1rem"},icon:C.b})}),Object(S.jsx)("h4",{children:g}),Object(S.jsx)(J.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){g>1&&(y(g-1),j((function(e){return e-Number(s)})))},children:Object(S.jsx)(v.a,{size:"lg",style:{fontSize:"1rem"},icon:C.a})}),Object(S.jsx)(J.a,{size:"md",variant:"outline-danger",style:{margin:"10px"},onClick:function(){h.splice(t,1),O(h),j((function(e){return e-Number(s)*g})),fetch("https://shopping-website-backend.adaptable.app/removecartitem",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})}),fetch("https://shopping-website-backend.adaptable.app/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:l,operation:"D"})}).then((function(e){return e.json()})).then(m(Q()))},children:Object(S.jsx)(v.a,{size:"lg",style:{fontSize:"1rem"},icon:C.d})})]})]})},Z=n(107),V=n(247),$=Object(c.createContext)(),ee=Object(c.createContext)(),te=function(e){var t=e.customerId,n=void 0===t?0:t,a=Object(c.useState)(null),s=Object(r.a)(a,2),i=s[0],l=s[1],d=Object(c.useState)(0),j=Object(r.a)(d,2),b=j[0],u=j[1];return Object(c.useEffect)((function(){var e=!0;return fetch("https://shopping-website-backend.adaptable.app/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:n})}).then((function(e){return e.json()})).then((function(t){e&&l(t)})).catch((function(e){return console.log("Request Failed")})),function(){e=!1}}),[n]),i?i.length>0?Object(S.jsxs)("div",{children:[Object(S.jsxs)(o.a,{sticky:"top",expand:"lg",style:{display:"flex",justifyContent:"center",backgroundColor:"#131921",padding:"10px"},children:[Object(S.jsxs)("h3",{id:"totalPrice",style:{color:"white"},children:["Total: Rs.",b]}),Object(S.jsx)(J.a,{type:"submit",style:{marginLeft:"10px"},onClick:function(){fetch("https://shopping-website-backend.adaptable.app/create-checkout-session",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*b})}).then((function(e){return e.json()})).then(function(){var e=Object(G.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)("pk_test_51JmIXVSBM1qtXmvlx74yuerGEmGuKSxOQ7Ej0XDdZrpZQFasZ4XObY9hCWjeQEXA5GDH1QBgPShHtdlKKJBBYCE400KZp54zhq");case 2:e.sent.redirectToCheckout({sessionId:t.id});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Checkout"})]}),Object(S.jsx)(V.a,{style:{padding:"5px"},children:i.map((function(e,t){return 0===b&&u((function(e){return e+i[t].price*i[t].qty})),Object(S.jsx)(V.a.Item,{style:{borderRadius:"15px"},children:Object(S.jsx)($.Provider,{value:[b,u],children:Object(S.jsx)(ee.Provider,{value:[i,l],children:Object(S.jsx)(Y,{index:t,id:i[t].cart_item_id,productName:i[t].product_name,price:i[t].price,img:i[t].img,quantity:i[t].qty,custId:n},i[t].cart_item_id)})})},t)}))})]}):0===i.length?Object(S.jsx)("h1",{style:{textAlign:"center"},children:"Cart is empty"}):void 0:Object(S.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(S.jsx)(I.a,{animation:"border",role:"status",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},ne=n(108),ce=function(e){var t=e.id,n=e.product_name,c=e.qty,a=e.img,s=e.price,i=e.date;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h3",{children:["Order ID: ",t]}),Object(S.jsxs)("h3",{children:["Purchased on : ",i.slice(0,10)]}),Object(S.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(S.jsx)("img",{src:a,alt:"item",style:{margin:"10px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-word"},children:[Object(S.jsx)("h3",{children:n}),Object(S.jsxs)("h3",{children:["Qty:",c]}),Object(S.jsxs)("h3",{children:["Rs.",s]})]})]})]})},ae=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=!0,t=localStorage.getItem("user"),n=JSON.parse(t).id;return fetch("https://shopping-website-backend.adaptable.app/gettingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:n})}).then((function(e){return e.json()})).then((function(t){e&&a(t)})).catch((function(e){return console.log("Request Failed")})),function(){e=!1}}),[]),n?0===n.length?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h3",{children:"You Have No Orders!"}),Object(S.jsx)(u.b,{to:"/",children:Object(S.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h3",{children:"Your Orders:"}),Object(S.jsx)(V.a,{children:n.map((function(e,t){return Object(S.jsx)(ne.a,{style:{borderRadius:"15px"},children:Object(S.jsx)(ce,{id:n[t].order_id,product_name:n[t].product_name,img:n[t].img,price:n[t].price,qty:n[t].qty,date:n[t].date},n[t].order_id)},n[t].order_id)}))})]}):Object(S.jsx)(I.a,{animation:"border",role:"status",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},se=function(e){var t=e.Name,n=e.Email;return Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[Object(S.jsxs)("h3",{children:["Name: ",t]}),Object(S.jsxs)("h3",{style:{wordBreak:"break-word"},children:["Email: ",n]}),Object(S.jsx)(ae,{})]})},ie=function(e){var t=e.userId,n=void 0===t?0:t;return Object(c.useEffect)((function(){var e={};fetch("https://shopping-website-backend.adaptable.app/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:n})}).then((function(e){return e.json()})).then((function(t){Object.assign(e,t),Object.keys(e).map((function(t){return fetch("https://shopping-website-backend.adaptable.app/creatingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:n,productName:e[t].product_name,qty:e[t].qty,price:e[t].price*e[t].qty,img:e[t].img})})}))})).catch((function(e){return console.log("Request Failed")}))}),[n]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{style:{textAlign:"center"},children:"Your Order Is successful"}),Object(S.jsx)(u.b,{to:"/",children:Object(S.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]})},re=n(71),oe=n(248),le=n(256),de=n(249),je=(n(215),function(e){var t=e.userId,n=Object(w.g)().id,a=Object(c.useState)(null),s=Object(r.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(!1),d=Object(r.a)(l,2),j=d[0],b=d[1],u=Object(c.useState)([]),h=Object(r.a)(u,2),O=h[0],m=h[1],x=Object(c.useState)(!0),f=Object(r.a)(x,2),g=f[0],y=f[1],v=Object(c.useState)(!1),C=Object(r.a)(v,2),N=C[0],k=C[1],E=Object(p.b)();Object(c.useEffect)((function(){return window.scrollTo(0,0),fetch("https://shopping-website-backend.adaptable.app/getitemcartstatus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:t,productId:n})}).then((function(e){return e.json()})).then((function(e){"T"===e.cart_status?y(!0):y(!1),k(!0)})),fetch("https://shopping-website-backend.adaptable.app/getProductDetailsFull",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:n})}).then((function(e){return e.json()})).then((function(e){return o(e)})),fetch("https://shopping-website-backend.adaptable.app/recommend",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:n})}).then((function(e){return e.json()})).then((function(e){return Object.values(e).forEach((function(e){fetch("https://shopping-website-backend.adaptable.app/getProductDetailsHalf",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:e})}).then((function(e){return e.json()})).then((function(e){return m((function(t){return[].concat(Object(re.a)(t),[e])}))}))}))})),function(){m([]),o(""),b(!1),k(!1)}}),[n,t]),Object(c.useEffect)((function(){5===O.length&&i&&N&&b(!0)}),[O.length,i,N]);return j?Object(S.jsx)("div",{style:{padding:"20px"},children:Object(S.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(S.jsx)("p",{className:"name",children:i.product_name}),Object(S.jsx)(oe.a,{width:"230px",src:i.img,fluid:!0,alt:"Product Image"}),Object(S.jsxs)("div",{className:"buttons",children:[Object(S.jsxs)("p",{className:"price",children:["Price: Rs.",i.price]}),g?Object(S.jsx)(J.a,{disabled:!0,variant:"dark",children:"Item in Cart"}):Object(S.jsx)(J.a,{disabled:!1,variant:"primary",onClick:function(){y(!0),t&&(fetch("https://shopping-website-backend.adaptable.app/cart",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:n,customerId:t,status:"T"})}),fetch("https://shopping-website-backend.adaptable.app/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:t,operation:"I"})}).then((function(e){return e.json()})).then(E(H())))},children:"Add to Cart"})]}),Object(S.jsxs)(le.a,{defaultActiveKey:"about",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(S.jsx)(de.a,{eventKey:"about",title:"About ",children:Object(S.jsx)("p",{className:"about",children:i.about})}),Object(S.jsx)(de.a,{eventKey:"recommended",title:"More Like This",children:Object(S.jsx)("div",{className:"RecommendedList",children:O.map((function(e){return Object(S.jsx)(T,{id:e.product_id,image:e.img,productName:e.product_name,price:e.price},e.product_id)}))})})]})]})}):Object(S.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(S.jsx)(I.a,{animation:"border",role:"status",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),be=n(252),ue=n(110),pe=(n(216),function(){var e=Object(w.f)(),t=Object(c.useState)(""),n=Object(r.a)(t,2),a=(n[0],n[1],Object(c.useCallback)((function(t){e.push("/category/".concat(t))}),[e]));return Object(S.jsx)("div",{style:{backgroundColor:"#232F3E",color:"white"},children:Object(S.jsx)(l.a,{children:Object(S.jsxs)("div",{className:"cat-list",children:[Object(S.jsx)("span",{className:"cat-select",onClick:function(){return a("audio")},children:"Audio Devices"}),Object(S.jsx)("span",{className:"cat-select",onClick:function(){return a("computeraccessories")},children:"Computer Accessories"}),Object(S.jsx)("span",{className:"cat-select",onClick:function(){return a("furniture")},children:"Furniture"}),Object(S.jsx)("span",{className:"cat-select",onClick:function(){return a("mobilephones")},children:"Mobile Phones"}),Object(S.jsx)("span",{className:"cat-select",onClick:function(){return a("stationery")},children:"Stationery"}),Object(S.jsx)(be.a,{trigger:"click",placement:"right",className:"test",overlay:Object(S.jsxs)(ue.a,{id:"popover-positioned-bottom",children:[Object(S.jsx)(ue.a.Header,{as:"h3",children:"All Categories"}),Object(S.jsx)(ue.a.Body,{className:"list-item",onClick:function(){return a("audio")},children:Object(S.jsx)("h6",{children:"Audio Devices"})}),Object(S.jsx)(ue.a.Body,{className:"list-item",onClick:function(){return a("computeraccessories")},children:Object(S.jsx)("h6",{children:"Computer Accessories"})}),Object(S.jsx)(ue.a.Body,{className:"list-item",onClick:function(){return a("furniture")},children:Object(S.jsx)("h6",{children:"Furniture"})}),Object(S.jsx)(ue.a.Body,{className:"list-item",onClick:function(){return a("mobilephones")},children:Object(S.jsx)("h6",{children:"Mobile Phones"})}),Object(S.jsx)(ue.a.Body,{className:"list-item",onClick:function(){return a("smartwearables")},children:Object(S.jsx)("h6",{children:"Smart Wearables"})}),Object(S.jsx)(ue.a.Body,{className:"list-item",onClick:function(){return a("stationery")},children:Object(S.jsx)("h6",{children:"Stationery"})}),Object(S.jsx)(ue.a.Body,{className:"list-item",onClick:function(){return a("televisions")},children:Object(S.jsx)("h6",{children:"Televisions"})})]}),children:Object(S.jsx)("span",{className:"cat-select",children:Object(S.jsx)("b",{children:"Explore All Categories"})})},"bottom")]})})})}),he=function(){var e=Object(c.useContext)(Oe),t=Object(r.a)(e,2)[1],n=Object(c.useContext)(me),a=Object(r.a)(n,2)[1],s=Object(w.g)().category;return Object(c.useEffect)((function(){return s&&s.length>0?fetch("https://shopping-website-backend.adaptable.app/productscategorywise",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({category:s.toLowerCase()})}).then((function(e){return e.json()})).then((function(e){var n;t(e),a(null===(n=e[0])||void 0===n?void 0:n.category)})):fetch("https://shopping-website-backend.adaptable.app/products").then((function(e){return e.json()})).then((function(e){return t(e)})).then(a(!0)).catch((function(e){return console.log("Request Failed")})),function(){a(!1),t(null)}}),[s,t,a]),Object(S.jsx)(S.Fragment,{})},Oe=Object(c.createContext)(),me=Object(c.createContext)(),xe=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(p.c)((function(e){return e.changeCartTotal.total})),i=Object(p.c)((function(e){return e.loadUser.user})),j=Object(c.useState)(""),b=Object(r.a)(j,2),h=b[0],O=b[1],x=Object(c.useState)(""),f=Object(r.a)(x,2),y=f[0],v=f[1],C=Object(p.b)();Object(c.useEffect)((function(){null!=localStorage.getItem("user")&&C(g(JSON.parse(localStorage.getItem("user"))))}),[C]),Object(c.useEffect)((function(){i.id&&(C(m("loggedin")),C(P(" ")),localStorage.setItem("user",JSON.stringify({id:i.id,email:i.email,name:i.name})),fetch("https://shopping-website-backend.adaptable.app/getCartTotalItems",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:i.id})}).then((function(e){return e.json()})).then((function(e){return C(W(e.cart_items))})).catch((function(e){return console.log("Request Failed")})))}),[i,C]);var N=null===n||void 0===n?void 0:n.filter((function(e){return e.product_name.toLowerCase().includes(null===h||void 0===h?void 0:h.toLowerCase())}));return Object(S.jsx)(u.a,{children:Object(S.jsxs)(w.c,{children:[Object(S.jsxs)(w.a,{exact:!0,path:["/category/:category","/"],children:[Object(S.jsx)(k,{cartItems:s}),i.id?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(pe,{}),Object(S.jsx)(o.a,{sticky:"top",style:{zIndex:"10"},children:Object(S.jsx)(l.a,{children:Object(S.jsx)(d.a,{className:"d-flex",style:{width:"100%"},children:Object(S.jsx)(d.a.Control,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",style:{backgroundColor:"#131921",color:"white"},onChange:function(e){return O(e.target.value)},value:h})})})}),Object(S.jsx)(Oe.Provider,{value:[n,a],children:Object(S.jsx)(me.Provider,{value:[y,v],children:Object(S.jsx)(he,{})})})]}):"",Object(S.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textTransform:"Capitalize"},children:Object(S.jsx)("h1",{children:y})}),Object(S.jsx)(B,{products:N,userId:i.id})]}),Object(S.jsx)(w.a,{path:"/cart",children:Object(S.jsx)(te,{customerId:i.id})}),Object(S.jsx)(w.a,{path:"/profile",children:Object(S.jsx)(se,{Name:i.name,Email:i.email})}),Object(S.jsx)(w.a,{path:"/orderdone",children:Object(S.jsx)(ie,{userId:i.id})}),i.id?Object(S.jsxs)(w.a,{path:"/products/:id",exact:!0,children:[Object(S.jsx)(k,{cartItems:s}),Object(S.jsx)(je,{userId:i.id})]}):""]})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,257)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},ge=(n(217),n(239),Object(h.a)({reducer:{loadUser:y,routeChange:x,changeDisplay:A,changeCartTotal:X}}));i.a.render(Object(S.jsx)(p.a,{store:ge,children:Object(S.jsx)(xe,{})}),document.getElementById("root")),fe()},85:function(e,t,n){}},[[240,1,2]]]);
//# sourceMappingURL=main.454d82c5.chunk.js.map