(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,i){},58:function(e,t,i){},59:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),o=i(16),s=i.n(o),a=i(25),l=(i(43),i(62)),r=i(63),d=i.p+"static/media/a47-symbolmark.653f973a.svg",j=i(0),m=function(e){function t(e,t){var i,n=t,c=(null===(i=document.querySelector(n))||void 0===i?void 0:i.offsetTop)-150;e.target.classList.add("active"),window.scroll({top:c,behavior:"smooth"})}return Object(j.jsx)("div",{className:"navbar-container",children:Object(j.jsxs)(l.a,{expand:"lg",bg:"light",fixed:"top",children:[Object(j.jsx)(l.a.Brand,{onClick:function(e){return t(e,"#Top")},children:Object(j.jsx)("img",{src:d,className:"navbar-logo",alt:"Atomic47 Logo"})}),Object(j.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsxs)(l.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav",children:[Object(j.jsx)(r.a,{children:["Who We Are","What We Do","What Were Doing","Blog"].map((function(e){return"Blog"!==e?Object(j.jsx)(r.a.Link,{onClick:function(i){return t(i,"#".concat(e.replaceAll(" ","-")))},href:window.location.href.includes("blog")?"/atomic47-website#".concat(e.replaceAll(" ","-")):"",id:"".concat(e.replaceAll(" ","-"),"-link"),children:e}):Object(j.jsx)(r.a.Link,{onClick:function(e){},href:"/atomic47-website/blog",id:"blog-link",children:e})}))}),Object(j.jsx)("button",{className:"header-button",onClick:function(e){return t(e,"#Contact")},children:"Contact"})]})]})})},b=i.p+"static/media/hero_satellite.b711457c.svg",h=function(e){return Object(j.jsxs)("div",{className:"hero-section",children:[Object(j.jsx)("div",{id:"stars"}),Object(j.jsx)("div",{id:"stars2"}),Object(j.jsx)("div",{id:"stars3"}),Object(j.jsxs)("div",{className:"hero-text",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Scaling Your Buisiness Starts Here"})}),Object(j.jsxs)("div",{className:"hero-body",children:[Object(j.jsx)("h2",{children:"Think of Atomic47 Labs as your launching pad, finding your path towards sustainable growth."}),Object(j.jsx)("h2",{children:"Deriving value from your organization\u2019s data and people. Bringing your ideas to life."})]}),Object(j.jsx)("div",{className:"hero-button-section",children:Object(j.jsx)("button",{className:"hero-button",style:{width:"100%"},onClick:function(e){return function(e,t){var i;console.log("scrolling to",t);var n=t,c=(null===(i=document.querySelector(n))||void 0===i?void 0:i.offsetTop)-150;window.scroll({top:c,behavior:"smooth"})}(0,"#Contact")},children:"Ready to Skyrocket?"})})]}),Object(j.jsx)("img",{className:"hero-image",src:b,alt:"satelite-image"})]})},u=function(e){var t=e.title,i=e.mainText,n=e.mainText2,c=e.quoteBody,o=e.quoteAuthor,s=e.subText,a=e.id;return Object(j.jsx)("div",{id:a,className:"text-section",children:Object(j.jsxs)("div",{className:"textSection-text",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:t})}),i&&Object(j.jsxs)("div",{className:"main-text",children:[Object(j.jsx)("h2",{className:"subheader-text",children:i}),n&&Object(j.jsx)("h2",{className:"subheader-text",children:n})]}),c&&Object(j.jsxs)("div",{className:"quotation",children:[Object(j.jsx)("h2",{className:"quoteBody",children:c}),Object(j.jsx)("h2",{className:"quoteAuthor",children:o})]}),s&&Object(j.jsx)("div",{className:"sub-text",children:Object(j.jsx)("h2",{className:"subheader-text",children:s})})]})})};var p=function(e){var t=["Leadership","Marketing","Design","Development","Strategy"],i=Object(n.useState)("Leadership"),c=Object(a.a)(i,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){s(t[t.indexOf(o)===t.length-1?0:t.indexOf(o)])}),[]),Object(n.useEffect)((function(){setTimeout((function(){var e=document.getElementById("typed-word-component");e&&(e.classList.remove("changing-word-".concat(t.indexOf(o)+1)),e.offsetWidth,e.classList.add("changing-word-".concat(t.indexOf(o)+1)))}),0)}),[o]),setTimeout((function(){s(t[t.indexOf(o)===t.length-1?0:t.indexOf(o)+1])}),4e3),setTimeout((function(){var e=document.getElementById("typed-word-component");e&&(e.className="changing-word-".concat(t.indexOf(o)+1))}),0),Object(j.jsxs)("div",{className:"text-carousel",children:[Object(j.jsx)("h1",{className:"first-word",children:"Atomic"}),Object(j.jsx)("h1",{id:"typed-word-component",className:"changing-word-".concat(t.indexOf(o)+1),children:o})]})},x=function(e){var t;return Object(j.jsxs)("div",{className:"three-part-section ".concat(e.type),children:[Object(j.jsx)("img",{src:e.image}),Object(j.jsxs)("div",{className:"main-text-threepart",children:[Object(j.jsx)("h1",{children:e.headerText}),Object(j.jsx)("h2",{children:e.mainText})]}),Object(j.jsxs)("div",{className:"bullet-container",children:[Object(j.jsx)("h1",{children:"Expertise"}),Object(j.jsx)("div",{className:"text-bullets",children:null===(t=e.bulletPoints)||void 0===t?void 0:t.map((function(e){return Object(j.jsxs)("h2",{children:["\u2022 ",e]})}))})]})]})},g=i.p+"static/media/Village-Grey.5a774c16.svg",O=i.p+"static/media/LODE-Grey.18eff5a8.svg",v=function(e){return Object(j.jsxs)("div",{className:"brand-container",id:"What-Were-Doing",children:[Object(j.jsx)("h1",{children:"We don't have clients, we have partners we believe in."}),Object(j.jsxs)("div",{className:"logos",children:[Object(j.jsx)("img",{src:g,alt:"village logo"}),Object(j.jsx)("img",{src:O,alt:"LODE logo"})]}),Object(j.jsx)("button",{className:"hero-button",onClick:function(e){return function(e,t){var i;console.log("scrolling to",t);var n=t,c=(null===(i=document.querySelector(n))||void 0===i?void 0:i.offsetTop)-150;window.scroll({top:c,behavior:"smooth"})}(0,"#Contact")},children:"Partner With Us"})]})},f=function(e){return Object(j.jsxs)("div",{className:"contact-form-container",id:"Contact",children:[Object(j.jsxs)("div",{className:"simple-text contact-form-text",children:[Object(j.jsx)("h1",{children:"Share Your Ideas With Us"}),Object(j.jsx)("h2",{children:"Still reading? It's time to talk!"})]}),Object(j.jsxs)("form",{action:"POST",className:"contact-form",children:[Object(j.jsxs)("div",{className:"input-container-outer",children:[Object(j.jsxs)("div",{className:"form-input-container-left",children:[Object(j.jsx)("label",{htmlFor:"name-input",children:"Your Name"}),Object(j.jsx)("input",{id:"name-input",placeholder:"Full Name"}),Object(j.jsx)("label",{htmlFor:"phone-input",children:"Your Phone Number"}),Object(j.jsx)("input",{id:"phone-input",placeholder:"phone number"}),Object(j.jsx)("label",{htmlFor:"text-input",children:"How can we help?"}),Object(j.jsx)("textarea",{name:"help",id:"text-input",placeholder:"Provide a few details on your project",cols:30,rows:1})]}),Object(j.jsxs)("div",{className:"form-input-container-right",children:[Object(j.jsx)("label",{htmlFor:"company-input",children:"Your Company"}),Object(j.jsx)("input",{id:"company-input",placeholder:"Name of Company"}),Object(j.jsx)("label",{htmlFor:"email-input",children:"Your Email"}),Object(j.jsx)("input",{id:"email-input",placeholder:"name@company.com"})]})]}),Object(j.jsxs)("div",{className:"form-input-container-full",children:[Object(j.jsx)("label",{htmlFor:"name-input",children:"Your Name"}),Object(j.jsx)("input",{id:"name-input",placeholder:"Full Name"}),Object(j.jsx)("label",{htmlFor:"company-input",children:"Your Company"}),Object(j.jsx)("input",{id:"company-input",placeholder:"Name of Company"}),Object(j.jsx)("label",{htmlFor:"email-input",children:"Your Email"}),Object(j.jsx)("input",{id:"email-input",placeholder:"name@company.com"}),Object(j.jsx)("label",{htmlFor:"phone-input",children:"Your Phone Number"}),Object(j.jsx)("input",{id:"phone-input",placeholder:"phone number"}),Object(j.jsx)("label",{htmlFor:"text-input",children:"How can we help?"}),Object(j.jsx)("textarea",{name:"help",id:"text-input",placeholder:"Provide a few details on your project",cols:30,rows:1})]}),Object(j.jsxs)("div",{className:"submit-group",children:[Object(j.jsx)("input",{className:"hero-button contact-submit-button",type:"submit",value:"Submit"}),Object(j.jsx)("h2",{children:"And take an atomic step towards growth."})]})]})]})},y=i(20),N=i(37),w=i(18),k=function(e){function t(e,t){var i;console.log("scrolling to",t);var n=t,c=(null===(i=document.querySelector(n))||void 0===i?void 0:i.offsetTop)-150;window.scroll({top:c,behavior:"smooth"})}return Object(j.jsxs)("div",{className:"footer-container",children:[Object(j.jsxs)("div",{className:"section-1",children:[Object(j.jsxs)("div",{onClick:function(e){return t(0,"#Top")},className:"back-to-top-mobile",children:[Object(j.jsx)(w.a,{className:"arrow-icon",icon:N.a}),Object(j.jsx)("h2",{className:"footer-text",children:"Back to the top"})]}),Object(j.jsxs)("div",{onClick:function(e){return t(0,"#Top")},className:"back-to-top-desktop",children:[Object(j.jsx)("img",{className:"a47-logo",src:d,alt:"Atomic47"}),Object(j.jsx)("h2",{children:"ATOMIC47"}),Object(j.jsx)("h2",{children:"LABS"})]}),Object(j.jsxs)("div",{className:"socials",children:[Object(j.jsx)(w.a,{icon:y.a}),Object(j.jsx)(w.a,{icon:y.d}),Object(j.jsx)(w.a,{icon:y.b}),Object(j.jsx)(w.a,{icon:y.c})]})]}),Object(j.jsxs)("div",{className:"section-2",children:[Object(j.jsx)("div",{className:"footer-links",children:["Who We Are","What We Do","What Were Doing","Blog","Contact"].map((function(e){return Object(j.jsx)("a",{onClick:function(i){return t(0,"#".concat(e.replaceAll(" ","-")))},children:e})}))}),Object(j.jsxs)("h2",{className:"footer-text",children:["\xa9 Atomic 47 Labs ",Object(j.jsx)("br",{}),"All Rights Reserved"]})]})]})},D=i(23),T=i(6),A=function(e){return Object(n.useEffect)((function(){var e;null===(e=document.getElementById("blog-link"))||void 0===e||e.classList.add("active")}),[]),Object(j.jsxs)("div",{"blog-container":!0,children:[Object(j.jsx)("div",{className:"blog-title-container",children:Object(j.jsx)("h1",{children:"Atomic Blog"})}),Object(j.jsx)("div",{className:"blog-items",children:e.blogItems.map((function(e){var t=e.title,i=e.body,n=e.postImage,c=e.postDate;return Object(j.jsx)(D.b,{to:"/blog/",children:Object(j.jsxs)("div",{className:"blog-item-box",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("h3",{children:c}),Object(j.jsx)("h1",{children:t}),Object(j.jsx)("h2",{children:i})]})})}))}),Object(j.jsx)("div",{className:"blog-nav",children:e.blogItems.length>10&&Object(j.jsx)("a",{children:"next page"})})]})},W=i.p+"static/media/magnifier.8d31e1ff.gif",I=i.p+"static/media/rocket-launch.2042f833.gif",C=i.p+"static/media/tools.66370b24.gif";var L=function(){var e=Object(n.useState)(!0),t=Object(a.a)(e,2),i=(t[0],t[1]);setTimeout((function(){i(!1)}),2e3);var c=document.getElementById("Who-We-Are-link"),o=document.getElementById("What-We-Do-link"),s=document.getElementById("What-Were-Doing-link");return window.location.href.includes("blog")||window.addEventListener("scroll",(function(){var e=window.scrollY;if(e>1026&&e<2166){var t=document.getElementsByClassName("active");Array.from(t).forEach((function(e){return e.classList.remove("active")})),null===c||void 0===c||c.classList.add("active")}else if(e>1500&&e<5130){var i=document.getElementsByClassName("active");Array.from(i).forEach((function(e){return e.classList.remove("active")})),null===o||void 0===o||o.classList.add("active")}else if(e>5130&&e<6706){var n=document.getElementsByClassName("active");Array.from(n).forEach((function(e){return e.classList.remove("active")})),null===s||void 0===s||s.classList.add("active")}else{var a=document.getElementsByClassName("active");Array.from(a).forEach((function(e){return e.classList.remove("active")}))}})),Object(j.jsx)(D.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(T.c,{children:[Object(j.jsxs)(T.a,{exact:!0,path:"/atomic47-website",children:[Object(j.jsx)(h,{}),Object(j.jsx)(u,{title:"Who We Are",mainText:"Atomic47 Labs is a technology development  firm that aligns organizations with  the right talent and tools to build,  scale and market tech products.",mainText2:" We are founded on the belief that the  right team - the A Team - has the power to  take any business from A to MVP.",quoteBody:"\u201cExceptional talent is the heart of innovation & business success\u201d",quoteAuthor:"Karen Olsson, Founder Atomic47 Labs.",subText:"From developing and designing your product efficiently,  to sourcing the funding and skills you need,  our 60+ cumulative years of experience will help you  navigate/capitalize from this dynamic world.",id:"Who-We-Are"}),Object(j.jsxs)("div",{className:"star-background",id:"What-We-Do",children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"simple-text",children:[Object(j.jsx)("h1",{children:"What We Do"}),Object(j.jsx)("h2",{children:"From funding partners and advisors to executive leadership and expert developers, we connect you with the pivotal component of your business: the people."})]}),Object(j.jsx)("div",{id:"stars"}),Object(j.jsx)("div",{id:"stars2"}),Object(j.jsx)("div",{id:"stars3"})]}),Object(j.jsx)(x,{type:"left",headerText:"Team Development & Leadership",mainText:"From funding partners and advisors to executive leadership and expert developers, we connect you with the pivotal component of your business: the people.",bulletPoints:["Recruitment","Team Development","Strategic Planning","Funding & Revenue","Executive Leadership"],image:W}),Object(j.jsx)(x,{type:"right",headerText:"Design with Intention",mainText:"It\u2019s not only about looks, it\u2019s about the feel. From product design, UX/UI, and branding, we help your customers engage with your company\u2019s unique personality like never before.",bulletPoints:["UI/UX Design","Product Design","Software Development","Security & Infrastructure","Product Management"],image:C}),Object(j.jsx)(x,{type:"left",headerText:"Advertising & Marketing",mainText:"For public relations to advertising and marketing efforts, work alongside our expert team to develop the ideal execution strategy for all your products. Don\u2019t just go viral, make a lasting impression.",bulletPoints:["Advertising","Marketing Strategy","Copywriting","Public Relations"],image:I}),Object(j.jsx)(v,{})]}),Object(j.jsx)(T.a,{path:"/atomic47-website/blog",children:Object(j.jsx)(A,{blogItems:[{title:"blog item",body:"blog item 1",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 2",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"}]})})]}),Object(j.jsx)(f,{}),Object(j.jsx)(k,{})]})})},E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,64)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),o(e),s(e)}))};i(58);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),E()}},[[59,1,2]]]);
//# sourceMappingURL=main.9147e53b.chunk.js.map