(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(16),a=n.n(s),o=(n(43),n(62)),r=n(63),l=n.p+"static/media/a47-symbolmark.653f973a.svg",d=n(0),j=function(e){function t(e,t){var n;console.log("scrolling to",t);var c=t,i=(null===(n=document.querySelector(c))||void 0===n?void 0:n.offsetTop)-150;window.scroll({top:i,behavior:"smooth"})}return Object(d.jsx)("div",{className:"navbar-container",children:Object(d.jsxs)(o.a,{expand:"lg",bg:"light",fixed:"top",children:[Object(d.jsx)(o.a.Brand,{onClick:function(e){return t(0,"#Top")},children:Object(d.jsx)("img",{src:l,className:"navbar-logo"})}),Object(d.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsxs)(o.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav",children:[Object(d.jsx)(r.a,{children:["Who We Are","What We Do","What Were Doing","Blog"].map((function(e){return"Blog"!==e?Object(d.jsx)(r.a.Link,{onClick:function(n){return t(0,"#".concat(e.replaceAll(" ","-")))},children:e}):Object(d.jsx)(r.a.Link,{onClick:function(e){},href:"/atomic47-website/blog",children:e})}))}),Object(d.jsx)("button",{className:"header-button",onClick:function(e){return t(0,"#Contact")},children:"Contact"})]})]})})},h=n.p+"static/media/hero_satellite.b711457c.svg",b=function(e){return Object(d.jsxs)("div",{className:"hero-section",children:[Object(d.jsxs)("div",{className:"hero-text",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:"Scaling Your Buisiness Starts Here"})}),Object(d.jsxs)("div",{className:"hero-body",children:[Object(d.jsx)("h2",{children:"Think of Atomic47 Labs as your launching pad, finding your path towards sustainable growth."}),Object(d.jsx)("h2",{children:"Deriving value from your organization\u2019s data and people. Bringing your ideas to life."})]}),Object(d.jsx)("div",{className:"hero-button-section",children:Object(d.jsx)("button",{className:"hero-button",style:{width:"100%"},children:"Ready to Skyrocket?"})})]}),Object(d.jsx)("img",{className:"hero-image",src:h,alt:"satelite-image"})]})},m=function(e){var t=e.title,n=e.mainText,c=e.mainText2,i=e.quoteBody,s=e.quoteAuthor,a=e.subText,o=e.id;return Object(d.jsx)("div",{id:o,className:"text-section",children:Object(d.jsxs)("div",{className:"textSection-text",children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:t})}),n&&Object(d.jsxs)("div",{className:"main-text",children:[Object(d.jsx)("h2",{className:"subheader-text",children:n}),c&&Object(d.jsx)("h2",{className:"subheader-text",children:c})]}),i&&Object(d.jsxs)("div",{className:"quotation",children:[Object(d.jsx)("h2",{className:"quoteBody",children:i}),Object(d.jsx)("h2",{className:"quoteAuthor",children:s})]}),a&&Object(d.jsx)("div",{className:"sub-text",children:Object(d.jsx)("h2",{className:"subheader-text",children:a})})]})})},u=n(38);var x=function(e){var t=["Leadership","Marketing","Design","Development","Strategy"],n=Object(c.useState)("Leadership"),i=Object(u.a)(n,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){a(t[t.indexOf(s)===t.length-1?0:t.indexOf(s)])}),[]),setTimeout((function(){var e=document.getElementById("typed-word-component");e&&(e.classList.remove("changing-word-".concat(t.indexOf(s)+1)),e.offsetWidth,e.classList.add("changing-word-".concat(t.indexOf(s)+1)))}),0),setTimeout((function(){a(t[t.indexOf(s)===t.length-1?0:t.indexOf(s)+1])}),4e3),setTimeout((function(){var e=document.getElementById("typed-word-component");e&&(e.className="changing-word-".concat(t.indexOf(s)+1))}),0),Object(d.jsxs)("div",{className:"text-carousel",children:[Object(d.jsx)("h1",{className:"first-word",children:"Atomic"}),Object(d.jsx)("h1",{id:"typed-word-component",className:"changing-word-".concat(t.indexOf(s)+1),children:s})]})},p=function(e){var t;return Object(d.jsxs)("div",{className:"three-part-section ".concat(e.type),children:[Object(d.jsx)("img",{}),Object(d.jsxs)("div",{className:"main-text-threepart",children:[Object(d.jsx)("h1",{children:e.headerText}),Object(d.jsx)("h2",{children:e.mainText})]}),Object(d.jsxs)("div",{className:"bullet-container",children:[Object(d.jsx)("h1",{children:"Expertise"}),Object(d.jsx)("div",{className:"text-bullets",children:null===(t=e.bulletPoints)||void 0===t?void 0:t.map((function(e){return Object(d.jsxs)("h2",{children:["\u2022 ",e]})}))})]})]})},O=n.p+"static/media/Village-Grey.5a774c16.svg",g=n.p+"static/media/LODE-Grey.18eff5a8.svg",v=function(e){return Object(d.jsxs)("div",{className:"brand-container",id:"What-Were-Doing",children:[Object(d.jsx)("h1",{children:"We don't have clients, we have partners we believe in."}),Object(d.jsxs)("div",{className:"logos",children:[Object(d.jsx)("img",{src:O,alt:"village logo"}),Object(d.jsx)("img",{src:g,alt:"LODE logo"})]}),Object(d.jsx)("button",{className:"hero-button",children:"Partner With Us"})]})},f=function(e){return Object(d.jsxs)("div",{className:"contact-form-container",id:"Contact",children:[Object(d.jsxs)("div",{className:"simple-text contact-form-text",children:[Object(d.jsx)("h1",{children:"Share Your Ideas With Us"}),Object(d.jsx)("h2",{children:"Still reading? It's time to talk!"})]}),Object(d.jsxs)("form",{action:"POST",className:"contact-form",children:[Object(d.jsxs)("div",{className:"input-container-outer",children:[Object(d.jsxs)("div",{className:"form-input-container-left",children:[Object(d.jsx)("label",{htmlFor:"name-input",children:"Your Name"}),Object(d.jsx)("input",{id:"name-input",placeholder:"Full Name"}),Object(d.jsx)("label",{htmlFor:"phone-input",children:"Your Phone Number"}),Object(d.jsx)("input",{id:"phone-input",placeholder:"phone number"}),Object(d.jsx)("label",{htmlFor:"text-input",children:"How can we help?"}),Object(d.jsx)("textarea",{name:"help",id:"text-input",placeholder:"Provide a few details on your project",cols:30,rows:1})]}),Object(d.jsxs)("div",{className:"form-input-container-right",children:[Object(d.jsx)("label",{htmlFor:"company-input",children:"Your Company"}),Object(d.jsx)("input",{id:"company-input",placeholder:"Name of Company"}),Object(d.jsx)("label",{htmlFor:"email-input",children:"Your Email"}),Object(d.jsx)("input",{id:"email-input",placeholder:"name@company.com"})]})]}),Object(d.jsxs)("div",{className:"form-input-container-full",children:[Object(d.jsx)("label",{htmlFor:"name-input",children:"Your Name"}),Object(d.jsx)("input",{id:"name-input",placeholder:"Full Name"}),Object(d.jsx)("label",{htmlFor:"company-input",children:"Your Company"}),Object(d.jsx)("input",{id:"company-input",placeholder:"Name of Company"}),Object(d.jsx)("label",{htmlFor:"email-input",children:"Your Email"}),Object(d.jsx)("input",{id:"email-input",placeholder:"name@company.com"}),Object(d.jsx)("label",{htmlFor:"phone-input",children:"Your Phone Number"}),Object(d.jsx)("input",{id:"phone-input",placeholder:"phone number"}),Object(d.jsx)("label",{htmlFor:"text-input",children:"How can we help?"}),Object(d.jsx)("textarea",{name:"help",id:"text-input",placeholder:"Provide a few details on your project",cols:30,rows:1})]}),Object(d.jsxs)("div",{className:"submit-group",children:[Object(d.jsx)("input",{className:"hero-button contact-submit-button",type:"submit",value:"Submit"}),Object(d.jsx)("h2",{children:"And take an atomic step towards growth."})]})]})]})},y=n(20),N=n(36),w=n(18),k=function(e){function t(e,t){var n;console.log("scrolling to",t);var c=t,i=(null===(n=document.querySelector(c))||void 0===n?void 0:n.offsetTop)-150;window.scroll({top:i,behavior:"smooth"})}return Object(d.jsxs)("div",{className:"footer-container",children:[Object(d.jsxs)("div",{className:"section-1",children:[Object(d.jsxs)("div",{onClick:function(e){return t(0,"#Top")},className:"back-to-top-mobile",children:[Object(d.jsx)(w.a,{className:"arrow-icon",icon:N.a}),Object(d.jsx)("h2",{className:"footer-text",children:"Back to the top"})]}),Object(d.jsxs)("div",{onClick:function(e){return t(0,"#Top")},className:"back-to-top-desktop",children:[Object(d.jsx)("img",{className:"a47-logo",src:l}),Object(d.jsx)("h2",{children:"ATOMIC47"}),Object(d.jsx)("h2",{children:"LABS"})]}),Object(d.jsxs)("div",{className:"socials",children:[Object(d.jsx)(w.a,{icon:y.a}),Object(d.jsx)(w.a,{icon:y.d}),Object(d.jsx)(w.a,{icon:y.b}),Object(d.jsx)(w.a,{icon:y.c})]})]}),Object(d.jsxs)("div",{className:"section-2",children:[Object(d.jsx)("div",{className:"footer-links",children:["Who We Are","What We Do","What Were Doing","Blog","Contact"].map((function(e){return Object(d.jsx)("a",{onClick:function(n){return t(0,"#".concat(e.replaceAll(" ","-")))},children:e})}))}),Object(d.jsxs)("h2",{className:"footer-text",children:["\xa9 Atomic 47 Labs ",Object(d.jsx)("br",{}),"All Rights Reserved"]})]})]})},T=n(23),W=n(6),D=function(e){return Object(d.jsxs)("div",{"blog-container":!0,children:[Object(d.jsx)("div",{className:"blog-title-container",children:Object(d.jsx)("h1",{children:"Atomic Blog"})}),Object(d.jsx)("div",{className:"blog-items",children:e.blogItems.map((function(e){var t=e.title,n=e.body,c=e.postImage,i=e.postDate;return Object(d.jsx)(T.b,{to:"/blog/",children:Object(d.jsxs)("div",{className:"blog-item-box",children:[Object(d.jsx)("img",{src:c}),Object(d.jsx)("h3",{children:i}),Object(d.jsx)("h1",{children:t}),Object(d.jsx)("h2",{children:n})]})})}))}),Object(d.jsx)("div",{className:"blog-nav",children:Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("h2",{children:"Back to Home"})})})]})};var A=function(){return Object(d.jsx)(T.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"body",children:[Object(d.jsxs)(W.c,{children:[Object(d.jsxs)(W.a,{exact:!0,path:"/atomic47-website",children:[Object(d.jsx)("div",{id:"stars"}),Object(d.jsx)("div",{id:"stars2"}),Object(d.jsx)("div",{id:"stars3"}),Object(d.jsx)(b,{}),Object(d.jsx)(m,{title:"Who We Are",mainText:"Atomic47 Labs is a technology development  firm that aligns organizations with  the right talent and tools to build,  scale and market tech products.",mainText2:" We are founded on the belief that the  right team - the A Team - has the power to  take any business from A to MVP.",quoteBody:"\u201cExceptional talent is the heart of innovation & business success\u201d",quoteAuthor:"Karen Olsson, Founder Atomic47 Labs.",subText:"From developing and designing your product efficiently,  to sourcing the funding and skills you need,  our 60+ cumulative years of experience will help you  navigate/capitalize from this dynamic world.",id:"Who-We-Are"}),Object(d.jsx)(x,{}),Object(d.jsxs)("div",{className:"simple-text",id:"What-We-Do",children:[Object(d.jsx)("h1",{children:"What We Do"}),Object(d.jsx)("h2",{children:"From funding partners and advisors to executive leadership and expert developers, we connect you with the pivotal component of your business: the people."})]}),Object(d.jsx)(p,{type:"left",headerText:"Team Development & Leadership",mainText:"From funding partners and advisors to executive leadership and expert developers, we connect you with the pivotal component of your business: the people.",bulletPoints:["Recruitment","Team Development","Strategic Planning","Funding & Revenue","Executive Leadership"]}),Object(d.jsx)(p,{type:"right",headerText:"Product Design & Development",mainText:"It\u2019s not only about looks, it\u2019s about the feel. From product design, UX/UI, and branding, we help your customers engage with your company\u2019s unique personality like never before.",bulletPoints:["UI/UX Design","Product Design","Software Development","Security & Infrastructure","Product Management"]}),Object(d.jsx)(p,{type:"right",headerText:"Advertising & Marketing",mainText:"For public relations to advertising and marketing efforts, work alongside our expert team to develop the ideal execution strategy for all your products. Don\u2019t just go viral, make a lasting impression.",bulletPoints:["Advertising","Marketing Strategy","Copywriting","Public Relations"]}),Object(d.jsx)(v,{})]}),Object(d.jsx)(W.a,{path:"/atomic47-website/blog",children:Object(d.jsx)(D,{blogItems:[{title:"blog item",body:"blog item 1",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 2",postDate:"08/12/2021",postImage:"test"},{title:"blog item",body:"blog item 3",postDate:"08/12/2021",postImage:"test"}]})})]}),Object(d.jsx)(f,{}),Object(d.jsx)(k,{})]})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};n(58);a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),F()}},[[59,1,2]]]);
//# sourceMappingURL=main.538fdc88.chunk.js.map