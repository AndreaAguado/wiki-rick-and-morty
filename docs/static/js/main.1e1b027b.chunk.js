(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},25:function(e,c,t){},26:function(e,c,t){},32:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(15),n=t.n(s),r=t(7),i=t(13),o=(t(22),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return console.log(e),e.results.map((function(e){return{photo:e.image,name:e.name,species:e.species,id:e.id,status:e.status,origin:e.origin.name,episodes:e.episode}}))}))}),l=t(2),j=(t(23),t(0)),h=function(e){return Object(j.jsx)("form",{onSubmit:function(e){return e.preventDefault()},action:"",children:Object(j.jsx)("input",{onKeyUp:function(c){e.handleSearch(c.target.value)},className:"text_input",type:"text"})})},d=(t(25),t(26),function(e){return Object(j.jsxs)(r.b,{to:"/character/".concat(e.character.id),children:[Object(j.jsx)("img",{className:"character_img",src:e.character.photo,alt:e.character.name}),Object(j.jsxs)("div",{className:"character_info",children:[Object(j.jsx)("p",{className:"info_item",children:e.character.name}),Object(j.jsx)("p",{className:"info_item",children:e.character.species})]})]})}),b=function(e){var c=e.filteredData.map((function(e){return Object(j.jsx)("li",{id:e.id,className:"character_card",children:Object(j.jsx)(d,{character:e})},e.id)}));return Object(j.jsx)(j.Fragment,{children:c.length<1?Object(j.jsxs)("p",{className:"warning_message",children:['No existen personajes que coincidan con : "',e.search,'" ']}):Object(j.jsx)("ul",{className:"characters_list",children:c})})};t(32),t(33);var u=function(e){return Object(j.jsx)("div",{className:"modal",children:Object(j.jsx)("div",{className:"modal__dialog",children:Object(j.jsxs)("div",{className:"modal__content",children:[Object(j.jsxs)("header",{className:"modal__header",children:[Object(j.jsx)("h2",{className:"modal__title",children:e.title}),Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("span",{className:"modal__close icon fas fa-times"})})]}),Object(j.jsx)("section",{children:e.children})]})})})},m=t.p+"static/media/rick_no_found.80dc1a7d.png",O=function(e){return void 0===e.character?Object(j.jsx)(u,{title:"Personaje no encontrado",children:Object(j.jsx)("img",{className:"no_found_img",src:m,alt:"Rick Sanchez PNG transparente"})}):Object(j.jsx)(u,{title:e.character.name,children:Object(j.jsxs)("article",{className:"character_detail",children:[Object(j.jsx)("img",{className:"character_detail_img",src:e.character.photo,alt:e.character.name}),Object(j.jsxs)("div",{className:"character_info",children:[Object(j.jsxs)("p",{className:"character_info_item",children:["Status: ",e.character.status," "]}),Object(j.jsxs)("p",{className:"character_info_item",children:["Species: ",e.character.species," "]}),Object(j.jsxs)("p",{className:"character_info_item",children:["Origin: ",e.character.origin," "]}),Object(j.jsxs)("p",{className:"character_info_item",children:["Episodes: ",e.character.episodes.length," "]})]})]})})},x=t.p+"static/media/Rick_and_Morty_logo.de13d484.png",f=(t(34),function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("a",{href:"/",className:"header_link",children:Object(j.jsx)("img",{className:"header_logo",title:"Rick and Morty logo",src:x,alt:"Rick and Morty logo"})})})}),_=(t(35),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("small",{className:"footer_small",children:" \xa9 Andrea Aguado 2021"}),Object(j.jsx)("a",{href:"https://github.com/AndreaAguado",title:"github.com/AndreaAguado",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("i",{class:"fab fa-github github_icon"})})]})}),p=(t(36),function(e){return Object(j.jsx)("main",{className:"main",children:e.children})}),g=(t(37),function(){return Object(j.jsx)("section",{className:"nofound_section",children:Object(j.jsx)("p",{children:"P\xe1gina no encontrada"})})});var N=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),d=r[0],u=r[1];Object(a.useEffect)((function(){o().then((function(e){console.log(e),s(e)}))}),[]);var m=t.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})),x=function(e){u(e)},N=Object(l.f)("/character/:id");console.log(N);var v=null!==N?N.params.id:"";console.log(v);var k=t.find((function(e){return e.id===parseInt(v)}));return console.log(k),Object(j.jsx)("div",{className:"page",children:Object(j.jsxs)(l.c,{children:[Object(j.jsxs)(l.a,{exact:!0,path:"/",children:[Object(j.jsx)(f,{}),Object(j.jsxs)(p,{children:[Object(j.jsx)(h,{search:d,handleSearch:x}),Object(j.jsx)("section",{className:"characters_list_section",children:Object(j.jsx)(b,{search:d,filteredData:m})})]}),Object(j.jsx)(_,{})]}),Object(j.jsxs)(l.a,{path:"/character/:id",children:[Object(j.jsx)(f,{}),Object(j.jsxs)(p,{children:[Object(j.jsx)(h,{search:d,handleSearch:x}),Object(j.jsx)("section",{className:"characters_list_section",children:Object(j.jsx)(b,{search:d,filteredData:m})})]}),Object(j.jsx)(_,{}),Object(j.jsx)(O,{character:k})]}),Object(j.jsxs)(l.a,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(p,{children:Object(j.jsx)(g,{})}),Object(j.jsx)(_,{})]})]})})};n.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1e1b027b.chunk.js.map