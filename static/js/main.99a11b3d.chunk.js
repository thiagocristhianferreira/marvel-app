(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){},48:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(32),r=c.n(s),j=c(25),i=(c(42),c(43),c(9)),l=c(56),o=c(57),b=c(58),d=c(59),O=c(60),p=c(33),u=Object(a.createContext)(),h=(c(44),c(5));var x=function(){return Object(h.jsx)("section",{children:Object(h.jsxs)(l.a,{className:"login-form",children:[Object(h.jsx)("h1",{className:"text-center",children:"Login"}),Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b.a,{children:"Email"}),Object(h.jsx)(d.a,{type:"email",placeholder:"e-mail"})]}),Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b.a,{children:"Password"}),Object(h.jsx)(d.a,{type:"password",placeholder:"password"})]}),Object(h.jsx)(O.a,{className:"btn-lg btn-dark btn-block",children:"Log in"}),Object(h.jsx)("div",{className:"text-center pt-3",children:"Or continue with your social account"}),Object(h.jsx)(p.FacebookLoginButton,{className:"mt-3 mb-3"}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("a",{href:"/sign-up",children:"Sign up"}),Object(h.jsx)("span",{className:"p-2",children:"|"}),Object(h.jsx)("a",{href:"/sing-up",children:"Forgot Password"})]})]})})};c(48);var m=function(){return Object(h.jsx)("section",{children:Object(h.jsxs)(l.a,{className:"login-form",children:[Object(h.jsx)("h1",{className:"text-center",children:"Sign-up"}),Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b.a,{children:"Email"}),Object(h.jsx)(d.a,{type:"email",placeholder:"e-mail"})]}),Object(h.jsxs)(o.a,{children:[Object(h.jsx)(b.a,{children:"Password"}),Object(h.jsx)(d.a,{type:"password",placeholder:"password"})]}),Object(h.jsx)(O.a,{className:"btn-lg btn-dark btn-block",children:"Sign-up"})]})})},f=c(22),g=c(36),v=c(20),N=c(35),w=(c(51),c(52),N.a.initializeApp({apiKey:"AIzaSyCLF_894F_otzEap4ktre7NzruPvgbC8jQ",authDomain:"marvel-app-93881.firebaseapp.com",databaseURL:"https://marvel-app-93881-default-rtdb.firebaseio.com/",projectId:"marvel-app-93881",storageBucket:"marvel-app-93881.appspot.com",messagingSenderId:"587401231154",appId:"1:587401231154:web:b56999d8306ae1e832f52b",measurementId:"G-BXCCN53RD7"})),C=(w.database().ref(),Object(a.createContext)()),S=function(e){var t=e.children,c=Object(a.useState)(null),s=Object(v.a)(c,2),r=s[0],j=s[1],i=Object(a.useState)(!0),l=Object(v.a)(i,2),o=l[0],b=l[1];return Object(a.useEffect)((function(){w.auth().onAuthStateChanged((function(e){j(e),b(!1)}))}),[]),o?Object(h.jsx)(n.a.Fragment,{children:"Loading..."}):Object(h.jsx)(C.Provider,{value:{user:r},children:t})},k=function(e){var t=e.component,c=Object(g.a)(e,["component"]),n=Object(a.useContext)(C).user;return Object(h.jsx)(i.b,Object(f.a)(Object(f.a)({},c),{},{render:function(e){return n?Object(h.jsx)(t,Object(f.a)({},e)):Object(h.jsx)(i.a,{to:"/"})}}))};var y=function(){return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Lista de Contatos"}),Object(h.jsx)("ul",{className:"list-group list-group-flush",children:Object(h.jsx)("li",{className:"list-group-item",children:"An item"})})]})};var L=function(){return Object(h.jsxs)(i.d,{children:[Object(h.jsx)(k,{path:"/contatos",component:y}),Object(h.jsx)(i.b,{path:"/sign-up",component:m}),Object(h.jsx)(i.b,{path:"/tester",component:m}),Object(h.jsx)(i.b,{exact:!0,path:"/",component:x})]})};var I=function(e){var t=e.children,c=Object(a.useState)(""),n=Object(v.a)(c,2),s=n[0],r=n[1],j=Object(a.useState)([]),i=Object(v.a)(j,2),l=i[0],o=i[1];return Object(h.jsx)(u.Provider,{value:{title:s,setTitle:r,characters:l,setCharacters:o},children:t})};var P=function(){return Object(h.jsx)(S,{children:Object(h.jsx)(I,{children:Object(h.jsx)(L,{})})})};r.a.render(Object(h.jsx)(j.a,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.99a11b3d.chunk.js.map