(this["webpackJsonpaltin-doviz-fiyatlari"]=this["webpackJsonpaltin-doviz-fiyatlari"]||[]).push([[0],{43:function(t,e,c){},44:function(t,e,c){},67:function(t,e,c){"use strict";c.r(e);var n=c(8),a=c(18),r=c(6),o=c(10),i=c(4),l={gold:{},modalOpen:!1,modalTitle:"",modalBody:null},s=c(30),d=(c(43),c(44),c(1)),A=c(5),j=c(2),h=function(t){var e=t.title,c=t.children,n=t.icon;return Object(j.jsxs)("div",{className:"card bg-dark text-white mb-2",children:[Object(j.jsxs)("div",{className:"card-header",children:[n&&Object(j.jsx)("img",{width:"33",src:"/altin-doviz-fiyatlari"+n,alt:""}),Object(j.jsx)("span",{className:n&&"ms-2",children:e})]}),Object(j.jsx)("div",{className:"card-body p-0",children:c})]})},b=c(14),O=c.n(b),p=function(){return function(t){["ikd","fw/altin/gram","fw/altin/ceyrek","fw/altin/yarim","fw/altin/tam","fw/doviz/usd","fw/doviz/eur","fw/doviz/gbp"].forEach((function(e){t({type:"GET_GOLD_SUCCESS",payload:{data:null,path:"ikd"===e?e:e.split("/")[2]}}),O.a.get("https://thegold"+~~(17*Math.random()+1)+".herokuapp.com/"+e).then((function(c){return t({type:"GET_GOLD_SUCCESS",payload:{data:c.data,path:"ikd"===e?e:e.split("/")[2]}})}))}))}},u=function(){return function(t){t({type:"LOAD_OLD_GOLD"})}},m=function(t){return function(e){e({type:"SET_MODAL_OPEN",payload:t})}},g=function(t){return function(e){e({type:"SET_MODAL_TITLE",payload:t})}},x=function(t){return function(e){e({type:"SET_MODAL_BODY",payload:t})}},k=function(t){return Object(j.jsx)("img",{width:t.width,src:"data:image/gif;base64,R0lGODlhHwAfAPUAABEiM////yU1RDpIVk5bZ1tncmZxfDA/TlJeam54gik4RzRCUV9qdmhzflllcT9NWhgoOWFsdzhGVCc2RsvP0trd37O4vkdUYZWcpHV/ia2zuRQlNpyjqrzBxkVSXxYnN7q/xM/S1gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEgUDAgFA4BiwSQexKh0eEAkrldAZbvlOD5TqYKALWu5XIwnPFwwymY0GsRgAxrwuJwbCi8aAHlYZ3sVdwtRCm8JgVgODwoQAAIXGRpojQwKRGSDCRESYRsGHYZlBFR5AJt2a3kHQlZlERN2QxMRcAiTeaG2QxJ5RnAOv1EOcEdwUMZDD3BIcKzNq3BJcJLUABBwStrNBtjf3GUGBdLfCtadWMzUz6cDxN/IZQMCvdTBcAIAsli0jOHSJeSAqmlhNr0awo7RJ19TJORqdAXVEEVZyjyKtE3Bg3oZE2iK8oeiKkFZGiCaggelSTiA2LhxiZLBSjZjBL2siNBOFQ84LxHA+mYEiRJzBO7ZCQIAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82YAIQxRCm14Ww4PChAAEAoPDlsAFRUgHkRiZAkREmoSEXiVlRgfQgeBaXRpo6MOQlZbERN0Qx4drRUcAAJmnrVDBrkVDwNjr8BDGxq5Z2MPyUQZuRgFY6rRABe5FgZjjdm8uRTh2d5b4NkQY0zX5QpjTc/lD2NOx+WSW0++2RJmUGJhmZVsQqgtCE6lqpXGjBchmt50+hQKEAEiht5gUcTIESR9GhlgE9IH0BiTkxrMmWIHDkose9SwcQlHDsOIk9ygiVbl5JgMLuV4HUmypMkTOkEAACH5BAkKAAAALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2LQV3t4UBcvcF9/eFpdYxdgZ5hUYA73YGxruCbVjt78G7hXFqlhY/fLQwR0HIQdGuUrTz5eQdIc0cfIEwByGD0MKvcGSaFGjR8GyeAPhIUofQGNQSgrB4IsdOCqx7FHDBiYcOQshYjKDxliVDpRjunCjdSTJkiZP6AQBACH5BAkKAAAALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2I3WBcvczltNxNzIW0693MFYT7bTumNQqlisv7BjswAHo64egFdQAbj0RtOXDQY6VAAUakihN1gSLaJ1IYOGChgXXqEUpQ9ASRlDYhT0xQ4cACJDhqDD5mRKjCAYuArjBmVKDP9+VRljMyMHDwcfuBlBooSCBQwJiqkJAgAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEgUDAgFA8BQIAwExKh0eEAkrlcA9oo4TKcKwharHScIiu9wwTBn3QnGQg1owBNld+O72N/zZnVzRApteFsODwoQABAKDw5bZQxpQ2JkCRESahIRh1gEVIGVamlmXgBWWxETdEMTnlsIAAJmm65DEmZGYw64UZFbR2MPv0QPY0hjpMYKY0ljjMZCEGNK09MG0diN1gXL3M5bTcTcyFtOvdzBWE+207pjUKpYrL+wY7MAB4EerqZjUAG4lKVCBwMbvnT6dCXUkEIFK0jUkOECFEeQJF2hFKUPAIkgQwIaI+hLiJAoR27Zo4YBCJQgVW4cpMYDBpgVZKL59cEBhw+U+QROQ4bBAoUlTZ7QCQIAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82Z1c0QKbXhbDg8KEAAQCg8OW2UMaUNiZAkREmoSEYdYBFSBlWppZl4AVlsRE3RDE55bCAACZpuuQxJmRmMOuFGRW0djD79ED2NIY6TGCmNJY4zGQhBjStPTFBXb21DY1VsGFtzbF9gAzlsFGOQVGefIW2LtGhvYwVgDD+0V17+6Y6BwaNfBwy9YY2YBcMAPnStTY1B9YMdNiyZOngCFGuIBxDZAiRY1eoTvE6UoDEIAGrNSUoNBUuzAaYlljxo2M+HIeXiJpRsRNMaq+JSFCpsRJEqYOPH2JQgAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfjywjlzX9jdXNEHiAVFX8ODwoQABAKDw5bZQxpQh8YiIhaERJqEhF4WwRDDpubAJdqaWZeAByoFR0edEMTolsIAA+yFUq2QxJmAgmyGhvBRJNbA5qoGcpED2MEFrIX0kMKYwUUslDaj2PA4soGY47iEOQFY6vS3FtNYw/m1KQDYw7mzFhPZj5JGzYGipUtESYowzVmF4ADgOCBCZTgFQAxZBJ4AiXqT6ltbUZhWdToUSR/Ii1FWbDnDkUyDQhJsQPn5ZU9atjUhCPHVhgTNy/RSKsiqKFFbUaQKGHiJNyXIAAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEh8JDAWCsBQIAwExKhU+HFwKlgsIMHlIg7TqQeTLW+7XYIiPGSAymY0mrFgA0LwuLzbCC/6eVlnewkADXVECgxcAGUaGRdQEAoPDmhnDGtDBJcVHQYbYRIRhWgEQwd7AB52AGt7YAAIchETrUITpGgIAAJ7ErdDEnsCA3IOwUSWaAOcaA/JQ0amBXKa0QpyBQZyENFCEHIG39HcaN7f4WhM1uTZaE1y0N/TacZoyN/LXU+/0cNyoMxCUytYLjm8AKSS46rVKzmxADhjlCACMFGkBiU4NUQRxS4OHijwNqnSJS6ZovzRyJAQo0NhGrgs5bIPmwWLCLHsQsfhxBWTe9QkOzCwC8sv5Ho127akyRM7QQAAOwAAAAAAAAAAAA==",alt:""})},f=Object(r.b)((function(t){return{}}),{setModalOpen:m,setModalTitle:g,setModalBody:x})((function(t){var e=t.setModalOpen,c=t.setModalTitle,n=t.setModalBody,a=t.TipShort,r=t.TipLong,o=t.Alis,i=t.Satis,l=t.Fark,s=t.OncekiKapanis,d=t.GununEnDusukDegeri,h=t.GununEnYuksekDegeri,b=t.YarinkiBeklentiOy,O=t.YarinkiBeklentiTahmin;return Object(j.jsxs)("tr",{onClick:function(){e(!0),c(r+" Detaylar\u0131"),n(Object(j.jsx)("div",{children:Object(j.jsx)(A.e,{dark:!0,hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Al\u0131\u015f"}),Object(j.jsx)("td",{className:"text-end",children:o})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Sat\u0131\u015f"}),Object(j.jsx)("td",{className:"text-end",children:i})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Fark"}),Object(j.jsx)("td",{className:"text-end",children:l})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"\xd6nceki Kapan\u0131\u015f"}),Object(j.jsx)("td",{className:"text-end",children:s})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"G\xfcn\xfcn En D\xfc\u015f\xfck De\u011feri"}),Object(j.jsx)("td",{className:"text-end",children:d})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"G\xfcn\xfcn En Y\xfcksek De\u011feri"}),Object(j.jsx)("td",{className:"text-end",children:h})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Yar\u0131nki Beklenti Oy"}),Object(j.jsx)("td",{className:"text-end",children:b})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Yar\u0131nki Beklenti Tahmin"}),Object(j.jsx)("td",{className:"text-end",children:O})]})]})})}))},children:[Object(j.jsx)("td",{className:"text-start",children:a}),Object(j.jsx)("td",{children:o||Object(j.jsx)(k,{width:"19"})}),Object(j.jsx)("td",{children:i||Object(j.jsx)(k,{width:"19"})}),Object(j.jsx)("td",{className:"text-end",children:O||Object(j.jsx)(k,{width:"19"})})]})})),w=function(t){var e=t.gram,c=t.ceyrek,n=t.yarim,a=t.tam;return Object(j.jsx)(h,{title:"Alt\u0131n Fiyatlar\u0131",icon:"/img/apple-touch-icon-152x152.png",children:Object(j.jsx)(A.e,{dark:!0,hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:"Al\u0131\u015f"}),Object(j.jsx)("td",{children:"Sat\u0131\u015f"}),Object(j.jsx)("td",{className:"text-end",children:"Tahmin"})]}),Object(j.jsx)(f,Object(i.a)(Object(i.a)({},e),{},{TipShort:"Gram",TipLong:"Gram Alt\u0131n"})),Object(j.jsx)(f,Object(i.a)(Object(i.a)({},c),{},{TipShort:"\xc7eyrek",TipLong:"\xc7eyrek Alt\u0131n"})),Object(j.jsx)(f,Object(i.a)(Object(i.a)({},n),{},{TipShort:"Yar\u0131m",TipLong:"Yar\u0131m Alt\u0131n"})),Object(j.jsx)(f,Object(i.a)(Object(i.a)({},a),{},{TipShort:"Tam",TipLong:"Tam Alt\u0131n"}))]})})})},E=function(t){var e=t.usd,c=t.eur,n=t.gbp;return Object(j.jsx)(h,{title:"D\xf6viz Fiyatlar\u0131",icon:"/img/doviz.png",children:Object(j.jsx)(A.e,{dark:!0,hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:"Al\u0131\u015f"}),Object(j.jsx)("td",{children:"Sat\u0131\u015f"}),Object(j.jsx)("td",{className:"text-end",children:"Tahmin"})]}),Object(j.jsx)(f,Object(i.a)(Object(i.a)({},e),{},{TipShort:"USD",TipLong:"Dolar (USD)"})),Object(j.jsx)(f,Object(i.a)(Object(i.a)({},c),{},{TipShort:"EUR",TipLong:"Euro (EUR)"})),Object(j.jsx)(f,Object(i.a)(Object(i.a)({},n),{},{TipShort:"GBP",TipLong:"Sterlin (GBP)"}))]})})})},B=function t(e){var c=function(){e.modalOpened||(e.setModalOpen(!0),e.setModalTitle("\u0130zmir Kuyumcular Odas\u0131 Alt\u0131n Fiyatlar\u0131"),e.setModalBody(Object(j.jsx)(t,Object(i.a)(Object(i.a)({},e),{},{modalOpened:!0}))))};return Object(j.jsx)(A.e,{dark:!0,hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},children:e.data&&Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{onClick:function(){return c()},children:[Object(j.jsx)("td",{children:"Gram"}),Object(j.jsx)("td",{className:"text-end",children:e.data.Gram})]}),Object(j.jsxs)("tr",{onClick:function(){return c()},children:[Object(j.jsx)("td",{children:"\xc7eyrek"}),Object(j.jsx)("td",{className:"text-end",children:e.data.Ceyrek})]}),Object(j.jsxs)("tr",{onClick:function(){return c()},children:[Object(j.jsx)("td",{children:"Yar\u0131m"}),Object(j.jsx)("td",{className:"text-end",children:e.data.Yarim})]}),Object(j.jsxs)("tr",{onClick:function(){return c()},children:[Object(j.jsx)("td",{children:"Tam"}),Object(j.jsx)("td",{className:"text-end",children:e.data.Tam})]}),Object(j.jsxs)("tr",{onClick:function(){return c()},children:[Object(j.jsx)("td",{children:"Son G\xfcncellenme Tarihi"}),Object(j.jsx)("td",{className:"text-end",children:e.data.Tarih.replace(/-/gi,".")})]})]})})},y=Object(r.b)((function(t){return{}}),{setModalOpen:m,setModalTitle:g,setModalBody:x})((function(t){return Object(j.jsx)(h,{title:"\u0130zmir Kuyumcular Odas\u0131 Alt\u0131n Fiyatlar\u0131",icon:"/img/apple-touch-icon-152x152.png",children:t.data?Object(j.jsx)(B,Object(i.a)(Object(i.a)({},t),{},{modalOpened:!1})):Object(j.jsx)("div",{className:"text-center p-3",children:Object(j.jsx)(k,{width:"19"})})})})),D=Object(r.b)((function(t){return{modalOpen:t.modalOpen,modalTitle:t.modalTitle,modalBody:t.modalBody}}),{setModalOpen:m,setModalTitle:g,setModalBody:x})((function(t){var e=function(){return t.setModalOpen(!t.modalOpen)};return Object(j.jsxs)(A.a,{toggle:e,isOpen:t.modalOpen,className:"bg-dark text-white",children:[Object(j.jsx)(A.d,{toggle:e,className:"bg-dark text-white",children:t.modalTitle}),Object(j.jsx)(A.b,{className:"p-0",children:t.modalBody}),Object(j.jsxs)(A.c,{className:"bg-dark text-white",children:[Object(j.jsx)("button",{className:"btn btn-sm btn-secondary",onClick:e,children:"Kapat"})," "]})]})})),v=c(11),C=function(t){var e=t.a,c=t.b,n=t.c;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{target:"_blank",href:e+"ikd",children:e.replace("https://","").replace(".herokuapp.com/","")})}),Object(j.jsx)("td",{className:"text-end",children:"0"!==n?Object(j.jsx)("span",{className:"badge bg-"+c,children:n}):Object(j.jsx)(k,{width:"16"})})]})},T=function(){var t=Object(d.useState)({"https://thegold1.herokuapp.com/":"0","https://thegold2.herokuapp.com/":"0","https://thegold3.herokuapp.com/":"0","https://thegold4.herokuapp.com/":"0","https://thegold5.herokuapp.com/":"0","https://thegold6.herokuapp.com/":"0","https://thegold7.herokuapp.com/":"0","https://thegold8.herokuapp.com/":"0","https://thegold9.herokuapp.com/":"0","https://thegold10.herokuapp.com/":"0","https://thegold11.herokuapp.com/":"0","https://thegold12.herokuapp.com/":"0","https://thegold13.herokuapp.com/":"0","https://thegold14.herokuapp.com/":"0","https://thegold15.herokuapp.com/":"0","https://thegold16.herokuapp.com/":"0","https://thegold17.herokuapp.com/":"0"}),e=Object(v.a)(t,2),c=e[0],n=e[1],a=function(){var t=Object(d.useState)(0),e=Object(v.a)(t,2),c=(e[0],e[1]);return function(){return c((function(t){return t+1}))}}(),r=function(t,e){O.a.get(t+"ikd").then((function(c){return e(t,c.data.Yarim)}))},i=function(){n({"https://thegold1.herokuapp.com/":"0","https://thegold2.herokuapp.com/":"0","https://thegold3.herokuapp.com/":"0","https://thegold4.herokuapp.com/":"0","https://thegold5.herokuapp.com/":"0","https://thegold6.herokuapp.com/":"0","https://thegold7.herokuapp.com/":"0","https://thegold8.herokuapp.com/":"0","https://thegold9.herokuapp.com/":"0","https://thegold10.herokuapp.com/":"0","https://thegold11.herokuapp.com/":"0","https://thegold12.herokuapp.com/":"0","https://thegold13.herokuapp.com/":"0","https://thegold14.herokuapp.com/":"0","https://thegold15.herokuapp.com/":"0","https://thegold16.herokuapp.com/":"0","https://thegold17.herokuapp.com/":"0"}),setTimeout((function(){!function(){for(var t in c)r(t,(function(t,e){var r=Object.assign(c,Object(o.a)({},t,e));n(r),a()}))}()}),1e3)};return Object(d.useEffect)((function(){i()}),[]),Object(j.jsx)(A.e,{dark:!0,hover:!0,responsive:!0,style:{marginBottom:0},children:Object(j.jsx)("tbody",{children:Object.keys(c).map((function(t){var e=c[t];return Object(j.jsx)(C,{a:t,b:"0"!==e?"success":"danger",c:"0"!==e?"\xc7al\u0131\u015f\u0131yor":"0"},t)}))})})},Q=c(16),N=c.n(Q),S=(c(65),function(){return N()(new Date,"DD-MM-YYYY HH:mm:ss").locale("tr").format("DD MMMM YYYY dddd HH:mm:ss")}),G=Object(r.b)((function(t){return{}}),{setModalOpen:m,setModalTitle:g,setModalBody:x,getGold:p})((function(t){var e=Object(d.useState)(S()),c=Object(v.a)(e,2),n=c[0],a=c[1];return Object(d.useEffect)((function(){setInterval((function(){a(S())}),1e3)}),[]),Object(j.jsx)("div",{style:{height:"33px"},children:Object(j.jsx)("header",{className:"bg-dark text-light fixed-top border-secondary border-bottom p-1",children:Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){return t.getGold()},children:n}),Object(j.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){t.setModalOpen(!0),t.setModalTitle("Servis Sa\u011fl\u0131k Bilgileri"),t.setModalBody(Object(j.jsx)(T,{}))},children:"Sa\u011fl\u0131k"})]})})})})),M=c(31),Y=function(){return Object(j.jsx)("div",{style:{height:"50px"},children:Object(j.jsx)("footer",{className:"border-secondary",children:Object(j.jsx)("span",{className:"float-end",children:Object(j.jsx)(M.a,{href:"https://github.com/necdetuygur/altin-doviz-fiyatlari","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large",children:"GitHub"})})})})},R=Object(r.b)((function(t){return{gold:t.gold}}),{getGold:p,loadOldGold:u})((function(t){var e=Object(d.useState)(!1),c=Object(v.a)(e,2),n=c[0],a=c[1];return Object(d.useEffect)((function(){a(!1);var t=setTimeout((function(){a(!0)}),3e3);return function(){clearTimeout(t)}}),[t.gold]),Object(j.jsx)(j.Fragment,{children:n&&"ikd"in t.gold&&null===t.gold.ikd&&Object(j.jsx)(h,{title:"G\xf6r\xfcn\xfc\u015fe g\xf6re fiyatlar getirilemedi, son al\u0131nan fiyatlar g\xf6sterilsin mi?",children:Object(j.jsxs)("div",{className:"text-center p-2",children:[Object(j.jsx)("button",{className:"mx-1 btn btn-sm btn-outline-primary",onClick:function(){return t.loadOldGold()},children:"Evet"}),Object(j.jsx)("button",{className:"mx-1 btn btn-sm btn-outline-primary",onClick:function(){return t.getGold()},children:"Tekrar Dene"})]})})})})),I=Object(r.b)((function(t){return{gold:t.gold}}),{getGold:p,loadOldGold:u})((function(t){return Object(d.useEffect)((function(){t.getGold()}),[]),Object(j.jsxs)("div",{className:"container-fluid mt-3",children:[Object(j.jsx)(G,{}),Object(j.jsx)(R,{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(w,Object(i.a)({},t.gold))}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(E,Object(i.a)({},t.gold))}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(y,{data:t.gold.ikd})})]}),Object(j.jsx)(Y,{}),Object(j.jsx)(D,{})]})})),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var c=t.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var Z=Object(a.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_GOLD_SUCCESS":return null!=e.payload.data&&localStorage.setItem("gold",JSON.stringify(Object(i.a)(Object(i.a)({},JSON.parse(localStorage.getItem("gold")||"{}")),{},Object(o.a)({},e.payload.path,e.payload.data)))),Object(i.a)(Object(i.a)({},t),{},{gold:Object(i.a)(Object(i.a)({},t.gold),{},Object(o.a)({},e.payload.path,e.payload.data))});case"LOAD_OLD_GOLD":return Object(i.a)(Object(i.a)({},t),{},{gold:JSON.parse(localStorage.getItem("gold")||"{}")});case"SET_MODAL_OPEN":return Object(i.a)(Object(i.a)({},t),{},{modalOpen:e.payload});case"SET_MODAL_TITLE":return Object(i.a)(Object(i.a)({},t),{},{modalTitle:e.payload});case"SET_MODAL_BODY":return Object(i.a)(Object(i.a)({},t),{},{modalBody:e.payload});default:return t}}),Object(a.a)(s.a)),J=document.getElementById("root");Object(n.render)(Object(j.jsx)(r.a,{store:Z,children:Object(j.jsx)(I,{})}),J),function(t){if("serviceWorker"in navigator){if(new URL("/altin-doviz-fiyatlari",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/altin-doviz-fiyatlari","/service-worker.js");U?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):F(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(e,t)}))}}(null)}},[[67,1,2]]]);