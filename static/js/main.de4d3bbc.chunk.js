(this["webpackJsonpaltin-doviz-fiyatlari"]=this["webpackJsonpaltin-doviz-fiyatlari"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(10),i=a(31),r=a(8),c=a(14),s=a(4),l={gold:{},modalOpen:!1,modalTitle:"",modalBody:null,proMode:!1,favs:JSON.parse(localStorage.getItem("favs")||"[]"),editFavs:!1,isDark:null===localStorage.getItem("isDark")?(localStorage.setItem("isDark","1"),!0):"1"===localStorage.getItem("isDark")||!1,ikdHistory:[]},d=a(46),A=(a(58),a(59),a(60),a(6)),o=a(15),j=a.n(o),b=function(){return function(e){["ikd","fw/altin/gram","fw/altin/ceyrek","fw/altin/yarim","fw/altin/tam","fw/doviz/usd","fw/doviz/eur","fw/doviz/gbp","namaz"].forEach((function(t){e({type:"GET_GOLD_SUCCESS",payload:{data:null,path:"ikd"===t||"namaz"===t?t:t.split("/")[2]}}),j.a.get("https://g7vercel.vercel.app/"+t).then((function(a){return e({type:"GET_GOLD_SUCCESS",payload:{data:a.data,path:"ikd"===t||"namaz"===t?t:t.split("/")[2]}})}))}))}},u=function(e){return function(t){t({type:"SET_MODAL_OPEN",payload:e})}},m=function(e){return function(t){t({type:"SET_MODAL_TITLE",payload:e})}},h=function(e){return function(t){t({type:"SET_MODAL_BODY",payload:e})}},O=function(e){return function(t){t({type:"SET_FAVS",payload:e})}},x=function(){return function(e){e({type:"TOGGLE_IS_DARK"})}},f=a(1),g=a(29),k=a.n(g),p=(a(80),a(2)),y=function(){return k()(new Date,"DD-MM-YYYY HH:mm:ss").locale("tr").format("DD MMMM YYYY dddd HH:mm:ss")},v=Object(r.b)((function(e){return{proMode:e.proMode,isDark:e.isDark,editFavs:e.editFavs}}),{setModalOpen:u,setModalTitle:m,setModalBody:h,getGold:b,toggleEditFavs:function(){return function(e){e({type:"TOGGLE_EDIT_FAVS"})}},toggleIsDark:x})((function(e){var t=Object(f.useState)(y()),a=Object(A.a)(t,2),n=a[0],i=a[1];return Object(f.useEffect)((function(){setInterval((function(){i(y())}),1e3)}),[]),Object(p.jsx)("div",{style:{height:e.editFavs?"65px":"45px"},children:Object(p.jsx)("header",{className:(e.isDark?"bg-dark text-light":"bg-light text-dark")+" fixed-top border-secondary border-bottom p-1",children:Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){e.getGold(!0)},children:Object(p.jsx)("i",{style:{width:"16px"},className:"fa fa-refresh"})}),Object(p.jsx)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){return e.getGold(!1)},children:Object(p.jsx)("small",{children:n})}),Object(p.jsxs)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){e.toggleEditFavs()},children:[Object(p.jsx)("i",{className:"fa fa-sliders"}),e.editFavs?" D\xfczenleme Modunu Kapat":""]}),Object(p.jsx)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){e.toggleIsDark()},children:Object(p.jsx)("i",{style:{width:"16px"},className:e.isDark?"fa fa-moon-o":"fa fa-sun-o"})})]})})})})),D=a(47),w=function(e){D.a(e).then((function(e){!function(e,t){var a=window.document.createElement("a");a.href=e,a.download=t,a.setAttribute("style","display:none;"),(document.body||document.documentElement).appendChild(a),"function"===typeof a.click?a.click():(a.target="_blank",a.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))),URL.revokeObjectURL(a.href),a.remove()}(e,(new Date).getTime().toString()+".png")}))},E=function(e){var t=e.title,a=e.children,n=e.icon,i=e.isDark,r=e.header,c=e.isShare,s=Object(f.useRef)(null);return Object(p.jsxs)("div",{className:"card mb-2 "+(i?"bg-dark text-light":"bg-light text-dark"),ref:s,children:[Object(p.jsxs)("div",{className:"card-header "+(i?"bg-dark":"bg-light"),children:[n&&Object(p.jsx)("img",{width:"33",src:"/altin-doviz-fiyatlari"+n,alt:""}),Object(p.jsx)("span",{className:n&&"ms-2",children:t}),Object(p.jsxs)("div",{className:"float-end",children:[r,c&&Object(p.jsx)("button",{className:"m-1 btn btn-outline-primary btn-sm",onClick:function(){var e=s.current;if(!e)throw new Error("el wasn't found");w(e)},children:Object(p.jsx)("i",{style:{width:"16px"},className:"fa fa-share-alt"})})]})]}),Object(p.jsx)("div",{className:"card-body p-0 "+(i?"bg-dark":"bg-light"),children:a})]})},N=a(7),B=a(32),C=function(e){return Object(p.jsx)("img",{width:e.width,src:e.isDark?"data:image/gif;base64,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":"data:image/gif;base64,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",alt:""})},Q={gram:"Gram Alt\u0131n",ceyrek:"\xc7eyrek Alt\u0131n",yarim:"Yar\u0131m Alt\u0131n",tam:"Tam Alt\u0131n",usd:"Dolar (USD)",eur:"Euro (EUR)",gbp:"Sterlin (GBP)"},S=Object(r.b)((function(e){return{favs:e.favs,isDark:e.isDark}}),{setModalOpen:u,setModalTitle:m,setModalBody:h,setFavs:O})((function(e){var t=e.path,a=e.editFavs,n=e.favs,i=e.setFavs,r=e.setModalOpen,c=e.setModalTitle,s=e.setModalBody,l=e.Alis,d=e.Satis,A=e.Fark,o=e.OncekiKapanis,j=e.GununEnDusukDegeri,b=e.GununEnYuksekDegeri,u=e.YarinkiBeklentiOy,m=e.YarinkiBeklentiTahmin,h=e.isDark;return Object(p.jsxs)("tr",{onClick:function(){a||(r(!0),c(Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fa fa-line-chart pe-2"}),Q[t]+" Detaylar\u0131"]})),s(Object(p.jsx)("div",{children:Object(p.jsx)(N.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:h?"table-dark text-white":"table-light text-dark",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Al\u0131\u015f"}),Object(p.jsx)("td",{className:"text-end",children:l})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Sat\u0131\u015f"}),Object(p.jsx)("td",{className:"text-end",children:d})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Fark"}),Object(p.jsx)("td",{className:"text-end",children:A})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\xd6nceki Kapan\u0131\u015f"}),Object(p.jsx)("td",{className:"text-end",children:o})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"G\xfcn\xfcn En D\xfc\u015f\xfck De\u011feri"}),Object(p.jsx)("td",{className:"text-end",children:j})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"G\xfcn\xfcn En Y\xfcksek De\u011feri"}),Object(p.jsx)("td",{className:"text-end",children:b})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Yar\u0131nki Beklenti Oy"}),Object(p.jsx)("td",{className:"text-end",children:u})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Yar\u0131nki Beklenti Tahmin"}),Object(p.jsx)("td",{className:"text-end",children:m})]})]})})})))},children:[a&&Object(p.jsxs)("td",{className:"text-start",children:[!(n.indexOf(t)>-1)&&Object(p.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){i([].concat(Object(B.a)(n),[t]))},children:Object(p.jsx)("i",{className:"fa fa-star-o"})}),n.indexOf(t)>-1&&Object(p.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){n.splice(n.indexOf(t),1),i(Object(B.a)(n))},children:Object(p.jsx)("i",{className:"fa fa-star"})})]}),Object(p.jsx)("td",{className:"text-start",children:Q[t]}),Object(p.jsx)("td",{children:l||Object(p.jsx)(C,{isDark:h,width:"19"})}),Object(p.jsx)("td",{children:d||Object(p.jsx)(C,{isDark:h,width:"19"})}),Object(p.jsx)("td",{className:"text-end",children:m?m.indexOf("Art")>-1?Object(p.jsxs)("b",{className:"text-success",children:[Object(p.jsx)("i",{className:"fa fa-arrow-up pe-2"}),m]}):Object(p.jsxs)("b",{className:"text-danger",children:[Object(p.jsx)("i",{className:"fa fa-arrow-down pe-2"}),m]}):Object(p.jsx)(C,{isDark:h,width:"19"})})]})})),F=function(e){var t=e.gram,a=e.ceyrek,n=e.yarim,i=e.tam,r=e.editFavs,c=e.isDark;return Object(p.jsx)(E,{title:"Alt\u0131n Fiyatlar\u0131",icon:"/img/apple-touch-icon-152x152.png",isDark:c,isShare:!0,children:Object(p.jsx)(N.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:c?"table-dark text-white":"table-light text-dark",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[r&&Object(p.jsx)("td",{className:"text-start",children:"Favoriler"}),Object(p.jsx)("td",{}),Object(p.jsx)("td",{children:"Al\u0131\u015f"}),Object(p.jsx)("td",{children:"Sat\u0131\u015f"}),Object(p.jsx)("td",{className:"text-end",children:"Tahmin"})]}),Object(p.jsx)(S,Object(s.a)(Object(s.a)({},t),{},{path:"gram",editFavs:r})),Object(p.jsx)(S,Object(s.a)(Object(s.a)({},a),{},{path:"ceyrek",editFavs:r})),Object(p.jsx)(S,Object(s.a)(Object(s.a)({},n),{},{path:"yarim",editFavs:r})),Object(p.jsx)(S,Object(s.a)(Object(s.a)({},i),{},{path:"tam",editFavs:r}))]})})})},I=function(e){var t=e.usd,a=e.eur,n=e.gbp,i=e.editFavs,r=e.isDark;return Object(p.jsx)(E,{title:"D\xf6viz Fiyatlar\u0131",icon:"/img/doviz.png",isDark:r,isShare:!0,children:Object(p.jsx)(N.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:r?"table-dark text-white":"table-light text-dark",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[i&&Object(p.jsx)("td",{className:"text-start",children:"Favoriler"}),Object(p.jsx)("td",{}),Object(p.jsx)("td",{children:"Al\u0131\u015f"}),Object(p.jsx)("td",{children:"Sat\u0131\u015f"}),Object(p.jsx)("td",{className:"text-end",children:"Tahmin"})]}),Object(p.jsx)(S,Object(s.a)(Object(s.a)({},t),{},{path:"usd",editFavs:i})),Object(p.jsx)(S,Object(s.a)(Object(s.a)({},a),{},{path:"eur",editFavs:i})),Object(p.jsx)(S,Object(s.a)(Object(s.a)({},n),{},{path:"gbp",editFavs:i}))]})})})},G=function(e){return("00"+e).slice(-2)},M=function(e){return Object(p.jsx)(N.f,{hover:!0,responsive:!0,style:{cursor:"default",marginBottom:0},className:e.isDark?"table-dark text-white":"table-light text-dark",children:e.ikdHistory.length>0&&Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Tarih Saat"}),Object(p.jsx)("td",{children:"Gram"}),Object(p.jsx)("td",{children:"\xc7eyrek"}),Object(p.jsx)("td",{children:"Yar\u0131m"}),Object(p.jsx)("td",{children:"Tam"})]}),e.ikdHistory.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.Tarih}),Object(p.jsx)("td",{children:e.Gram}),Object(p.jsx)("td",{children:e.Ceyrek}),Object(p.jsx)("td",{children:e.Yarim}),Object(p.jsx)("td",{children:e.Tam})]},e.Tarih)}))]})})},R=Object(r.b)((function(e){return{ikdHistory:e.ikdHistory,isDark:e.isDark}}),{getIkdHistory:function(e){return function(t){t({type:"GET_IKD_HISTORY_SUCCESS",payload:[]}),j.a.get("https://g7vercel.vercel.app/ikd/"+e).then((function(e){return t({type:"GET_IKD_HISTORY_SUCCESS",payload:e.data})}))}}})((function(e){var t=new Date((new Date).getTime()-864e5),a=t.getFullYear(),n=G(t.getMonth()+1),i=G(t.getDate()),r=Object(f.useState)(a),c=Object(A.a)(r,2),l=c[0],d=c[1],o=Object(f.useState)(n),j=Object(A.a)(o,2),b=j[0],u=j[1],m=Object(f.useState)(i),h=Object(A.a)(m,2),O=h[0],x=h[1],g=function(e){var t=e.target.name,a=e.currentTarget.value;"year"===t?d(a):"month"===t?u(a):"day"!==t||x(a)};Object(f.useEffect)((function(){e.getIkdHistory("".concat(O,".").concat(b,".").concat(l))}),[]);for(var k=[],y=(new Date).getFullYear(),v=y-15;v<=y;v++)k.push(v);for(var D=[],w=1;w<=12;w++)D.push(G(w));for(var E=[],N=1;N<=31;N++)E.push(G(N));return Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsxs)("div",{className:"row p-1",children:[Object(p.jsxs)("div",{className:"col",children:["G\xfcn",Object(p.jsx)("br",{}),Object(p.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return g(e)},value:O,name:"day",children:E.map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]}),Object(p.jsxs)("div",{className:"col",children:["Ay",Object(p.jsx)("br",{}),Object(p.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return g(e)},value:b,name:"month",children:D.map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]}),Object(p.jsxs)("div",{className:"col",children:["Y\u0131l",Object(p.jsx)("br",{}),Object(p.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return g(e)},value:l,name:"year",children:k.map((function(e){return Object(p.jsx)("option",{value:e,children:e},e)}))})]})]}),Object(p.jsx)("div",{className:"row p-1",children:Object(p.jsx)("div",{className:"col",children:Object(p.jsxs)("button",{className:"btn btn-sm btn-primary w-100",onClick:function(){e.getIkdHistory("".concat(O,".").concat(b,".").concat(l))},children:[Object(p.jsx)("i",{className:"fa fa-eye pe-2"}),"G\xf6ster"]})})}),Object(p.jsx)("div",{className:"p-1",children:e.ikdHistory.length>0?Object(p.jsx)(M,Object(s.a)({},e)):Object(p.jsx)("div",{className:"text-center p-3",children:Object(p.jsx)(C,{isDark:e.isDark,width:"19"})})})]})})),T=function e(t){var a=function(){t.modalOpened||(t.setModalOpen(!0),t.setModalTitle(Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fa fa-line-chart pe-2"}),"\u0130zmir Kuyumcular Odas\u0131 Alt\u0131n Fiyatlar\u0131"]})),t.setModalBody(Object(p.jsx)(e,Object(s.a)(Object(s.a)({},t),{},{modalOpened:!0}))))};return Object(p.jsx)(N.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:t.isDark?"table-dark text-white":"table-light text-dark",children:t.data&&Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{onClick:function(){return a()},children:[Object(p.jsx)("td",{children:"Gram"}),Object(p.jsx)("td",{className:"text-end",children:t.data.Gram})]}),Object(p.jsxs)("tr",{onClick:function(){return a()},children:[Object(p.jsx)("td",{children:"\xc7eyrek"}),Object(p.jsx)("td",{className:"text-end",children:t.data.Ceyrek})]}),Object(p.jsxs)("tr",{onClick:function(){return a()},children:[Object(p.jsx)("td",{children:"Yar\u0131m"}),Object(p.jsx)("td",{className:"text-end",children:t.data.Yarim})]}),Object(p.jsxs)("tr",{onClick:function(){return a()},children:[Object(p.jsx)("td",{children:"Tam"}),Object(p.jsx)("td",{className:"text-end",children:t.data.Tam})]}),Object(p.jsxs)("tr",{onClick:function(){return a()},children:[Object(p.jsx)("td",{children:"Son G\xfcncellenme Tarihi"}),Object(p.jsx)("td",{className:"text-end",children:t.data.Tarih.replace(/-/gi,".")})]})]})})},Y=Object(r.b)((function(e){return{}}),{setModalOpen:u,setModalTitle:m,setModalBody:h})((function(e){var t=function(){e.setModalOpen(!0),e.setModalTitle(Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fa fa-line-chart pe-2"}),"Ge\xe7mi\u015f Alt\u0131n Fiyatlar\u0131"]})),e.setModalBody(Object(p.jsx)(R,{}))};return Object(p.jsxs)(E,{title:"\u0130zmir Kuyumcular Odas\u0131",icon:"/img/iko.png",isDark:e.isDark,isShare:!0,header:Object(p.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){t()},children:Object(p.jsx)("i",{style:{width:"16px"},className:"fa fa-history"})}),children:[e.data?Object(p.jsx)(T,Object(s.a)(Object(s.a)({},e),{},{modalOpened:!1})):Object(p.jsx)("div",{className:"text-center p-3",children:Object(p.jsx)(C,{isDark:e.isDark,width:"19"})}),Object(p.jsx)("div",{className:"p-2",children:Object(p.jsxs)("button",{className:"btn btn-sm btn-primary w-100",onClick:function(){t()},children:[Object(p.jsx)("i",{className:"fa fa-history pe-2"}),"Ge\xe7mi\u015f Alt\u0131n Fiyatlar\u0131"]})})]})})),U=Object(r.b)((function(e){return{favs:e.favs,gold:e.gold,isDark:e.isDark}}),{setFavs:O})((function(e){return Object(f.useEffect)((function(){}),[]),Object(p.jsx)(E,{title:"Favoriler",icon:"/img/favorites.png",isDark:e.isDark,children:Object(p.jsx)(N.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:e.isDark?"table-dark text-white":"table-light text-dark",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{}),Object(p.jsx)("td",{children:"Al\u0131\u015f"}),Object(p.jsx)("td",{children:"Sat\u0131\u015f"}),Object(p.jsx)("td",{className:"text-end",children:"Tahmin"})]}),e.favs.map((function(t){return Object(p.jsx)(S,Object(s.a)(Object(s.a)({},e.gold[t]),{},{path:t,editFavs:!1}),t)}))]})})})})),Z=null,J=Object(r.b)((function(e){return{gold:e.gold,editFavs:e.editFavs,favs:e.favs,isDark:e.isDark}}),{getGold:b,toggleIsDark:x})((function(e){var t=Object(f.useState)(localStorage.getItem("refreshTime")||"0"),a=Object(A.a)(t,2),n=a[0],i=a[1],r=function(){clearInterval(Z);var t=Number(localStorage.getItem("refreshTime")||"0");0!=t&&(Z=setInterval((function(){e.getGold(!0)}),6e4*t))};return Object(f.useEffect)((function(){return e.getGold(!0),r(),e.toggleIsDark(),e.toggleIsDark(),function(){return clearInterval(Z)}}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"row",children:[e.editFavs&&Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsx)(E,{title:"Otomatik Yenileme S\xfcresi",isDark:e.isDark,children:Object(p.jsx)("div",{className:"m-2",children:Object(p.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return function(e){var t=e.target.name,a=e.currentTarget.value;"refreshTime"===t&&(i(a),localStorage.setItem("refreshTime",a),r())}(e)},value:n,name:"refreshTime",children:Array.from(Array(61).keys()).map((function(e){return Object(p.jsx)("option",{value:e,children:e?e+" dakikada bir":"Yenileme kapal\u0131"},e)}))})})})}),e.favs.length>0&&!e.editFavs&&Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)(U,{})}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)(F,Object(s.a)(Object(s.a)({},e.gold),{},{editFavs:e.editFavs,isDark:e.isDark}))}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)(I,Object(s.a)(Object(s.a)({},e.gold),{},{editFavs:e.editFavs,isDark:e.isDark}))}),Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)(Y,{data:e.gold.ikd,isDark:e.isDark})})]})})})),H=Object(r.b)((function(e){return{modalOpen:e.modalOpen,modalTitle:e.modalTitle,modalBody:e.modalBody,isDark:e.isDark}}),{setModalOpen:u,setModalTitle:m,setModalBody:h})((function(e){var t=function(){return e.setModalOpen(!e.modalOpen)};return Object(p.jsxs)(N.b,{toggle:t,isOpen:e.modalOpen,className:e.isDark?"bg-dark text-white":"bg-light text-dark",size:"lg",children:[Object(p.jsx)(N.e,{toggle:t,className:e.isDark?"bg-dark text-white":"bg-light text-dark",children:e.modalTitle}),Object(p.jsx)(N.c,{className:"p-0 "+(e.isDark?"bg-dark":"bg-light"),children:e.modalBody}),Object(p.jsx)(N.d,{className:e.isDark?"bg-dark text-white":"bg-light text-dark",children:Object(p.jsx)("button",{className:"btn btn-sm btn-danger",onClick:t,children:"Kapat"})})]})})),z=a(48),V=a(85),K=function(){var e="Bildirimi aktif edilen cihazlara bildirim mesaj\u0131 g\xf6nderilecek, emin misiniz?",t=Object(f.useState)(""),a=Object(A.a)(t,2),n=a[0],i=a[1],r=Object(f.useState)(""),c=Object(A.a)(r,2),s=c[0],l=c[1],d=Object(f.useState)(""),o=Object(A.a)(d,2),b=o[0],u=o[1],m=Object(f.useState)(!1),h=Object(A.a)(m,2),O=h[0],x=h[1],g=Object(f.useState)(""),k=Object(A.a)(g,2),y=k[0],v=k[1],D=function(e,t){return V.AES.decrypt(e,t).toString(V.enc.Utf8)},w=function(e){"title"==e.target.name?l(e.target.value):"body"==e.target.name?u(e.target.value):"passwd"!=e.target.name||i(e.target.value)},E=function(e,t){x(e),v(t)};return Object(p.jsxs)("div",{children:[y&&Object(p.jsx)(N.a,{color:O?"success":"danger",title:"Sonu\xe7",children:Object(p.jsx)("div",{className:"m-2",children:y})}),Object(p.jsxs)("div",{className:"m-2",children:[Object(p.jsxs)("div",{className:"input-group mb-2",children:[Object(p.jsx)("span",{className:"input-group-text w-25",children:"Parola"}),Object(p.jsx)("input",{name:"passwd",type:"password",className:"form-control",onChange:function(e){return w(e)},onKeyUp:function(e){return w(e)}})]}),Object(p.jsxs)("div",{className:"input-group mb-2",children:[Object(p.jsx)("span",{className:"input-group-text w-25",children:"Ba\u015fl\u0131k"}),Object(p.jsx)("input",{name:"title",type:"text",className:"form-control",onChange:function(e){return w(e)},onKeyUp:function(e){return w(e)}})]}),Object(p.jsxs)("div",{className:"input-group mb-2",children:[Object(p.jsx)("span",{className:"input-group-text w-25",children:"\u0130\xe7erik"}),Object(p.jsx)("textarea",{name:"body",className:"form-control",onChange:function(e){return w(e)},onKeyUp:function(e){return w(e)}})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col",children:Object(p.jsxs)("button",{className:"btn btn-primary w-100",onClick:function(){setTimeout((function(){if(n.length<2)E(!1,"Parola yanl\u0131\u015f!");else if(confirm(e)){var t=D("U2FsdGVkX19x5ExLETCqdDOhSGEFQnoZkN09smlrl99HUbYw//nqzQ2Y47UESFSYHnyQRqVHX5FoFgd3neApLw==",n+"0");if(!(t.indexOf("http")>-1))return void E(!1,"Parola yanl\u0131\u015f!");t.indexOf("http")>-1&&j.a.post(t,{}).then((function(e){E(e.data.result,e.data.message)}))}}),100)},children:[Object(p.jsx)("i",{className:"fa fa-refresh pe-2"}),"S\u0131f\u0131rla"]})}),Object(p.jsx)("div",{className:"col",children:Object(p.jsxs)("button",{className:"btn btn-primary w-100",onClick:function(){setTimeout((function(){if(n.length<2)E(!1,"Parola yanl\u0131\u015f!");else if(confirm(e)){var t=D("U2FsdGVkX1+wYGuEmnZjpA7n2MjwYtHuMyOZrq5ZSWWZfaxgCIAlMOnYCdRJ3kb9NZ6JDq6AIMakqhBrSWmOkg==",n+"0");if(!(t.indexOf("http")>-1))return void E(!1,"Parola yanl\u0131\u015f!");t.indexOf("http")>-1&&j.a.post(t,{title:s,body:b}).then((function(e){E(e.data.result,e.data.message)}))}}),100)},children:[Object(p.jsx)("i",{className:"fa fa-paper-plane pe-2"}),"G\xf6nder"]})})]})]})]})},W=function(){for(var e={},t=1;t<=17;t++)e=Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},"https://thegold"+t+".herokuapp.com/","0"));return e},q=function(e){var t=e.a,a=e.b,n=e.c;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("a",{target:"_blank",href:t+"ikd",children:t.replace("https://","").replace(".herokuapp.com/","")})}),Object(p.jsx)("td",{className:"text-end",children:"0"!==n?Object(p.jsx)("span",{className:"badge bg-"+a,children:n}):Object(p.jsx)(C,{isDark:!0,width:"16"})})]})},L=function(){var e=Object(f.useState)(W()),t=Object(A.a)(e,2),a=t[0],n=t[1],i=function(){var e=Object(f.useState)(0),t=Object(A.a)(e,2),a=(t[0],t[1]);return function(){return a((function(e){return e+1}))}}(),r=function(e,t){j.a.get(e+"ikd").then((function(a){return t(e,a.data.Yarim)}))},s=function(){n(W()),setTimeout((function(){!function(){for(var e in a)r(e,(function(e,t){var r=Object.assign(a,Object(c.a)({},e,t));n(r),i()}))}()}),1e3)};return Object(f.useEffect)((function(){s()}),[]),Object(p.jsx)(N.f,{dark:!0,hover:!0,responsive:!0,style:{marginBottom:0},children:Object(p.jsx)("tbody",{children:Object.keys(a).map((function(e){var t=a[e];return Object(p.jsx)(q,{a:e,b:"0"!==t?"success":"danger",c:"0"!==t?"\xc7al\u0131\u015f\u0131yor":"0"},e)}))})})};var P=function(){return Object(p.jsxs)("div",{className:"p-3",children:[Object(p.jsx)("p",{children:'T\xfcm veriler ve bilgiler, yaln\u0131zca bilgilendirme amac\u0131yla "oldu\u011fu gibi" sa\u011flanm\u0131\u015f olup al\u0131m sat\u0131m ama\xe7l\u0131 veya finansal, yat\u0131r\u0131m, vergi, yasal, muhasebe ya da di\u011fer konularda tavsiye niteli\u011finde de\u011fildir. L\xfctfen her t\xfcrl\xfc al\u0131m sat\u0131m i\u015fleminden \xf6nce fiyatlar\u0131 do\u011frulamak i\xe7in arac\u0131 kurumunuza veya mali temsilcinize dan\u0131\u015f\u0131n. "Alt\u0131n D\xf6viz Fiyatlar\u0131"; yat\u0131r\u0131m dan\u0131\u015fman\u0131, mali dan\u0131\u015fman ya da hisse senedi arac\u0131s\u0131 de\u011fildir. Veri ve bilgilerin hi\xe7biri, bir menkul k\u0131ymetin ya da finansal \xfcr\xfcn\xfcn sat\u0131n al\u0131nmas\u0131na, sat\u0131lmas\u0131na veya tutulmas\u0131na y\xf6nelik "Alt\u0131n D\xf6viz Fiyatlar\u0131" taraf\u0131ndan yap\u0131lan bir yat\u0131r\u0131m tavsiyesi, teklif, \xf6neri ya da talep de\u011fildir. "Alt\u0131n D\xf6viz Fiyatlar\u0131", herhangi bir yat\u0131r\u0131m\u0131n tavsiye edilebilirli\u011fi veya uygunlu\u011fu konusunda hi\xe7bir taahh\xfctte bulunmaz.'}),Object(p.jsx)("p",{children:'Veri ve bilgilerin hi\xe7biri, genel ya da \xf6zel yat\u0131r\u0131m tavsiyesi de\u011fildir. Bu t\xfcr veri ve bilgilerde at\u0131fta bulunulan finansal \xfcr\xfcnler ya da i\u015flemler, yat\u0131r\u0131m profilinize ve yat\u0131r\u0131m hedeflerinize veya beklentilerinize uygun olmayabilir. Herhangi bir finansal \xfcr\xfcn veya faaliyetin ilgi alanlar\u0131n\u0131za, yat\u0131r\u0131m hedeflerinize, yat\u0131r\u0131m g\xf6r\xfc\u015f\xfcn\xfcze ve risk anlay\u0131\u015f\u0131n\u0131za g\xf6re size uygun olup olmad\u0131\u011f\u0131n\u0131 de\u011ferlendirmek sizin sorumlulu\u011funuzdad\u0131r. "Alt\u0131n D\xf6viz Fiyatlar\u0131", bu kapsamda at\u0131fta bulunulan finansal \xfcr\xfcnlerle ilgili herhangi bir i\u015flemden veya yat\u0131r\u0131mdan kaynaklanan zararlardan sorumlu tutulamaz. "Alt\u0131n D\xf6viz Fiyatlar\u0131", herhangi bir yat\u0131r\u0131m karar\u0131n\u0131n yaln\u0131zca sa\u011flanan veri ve bilgilere dayanarak verilmesini \xf6nermez.'}),Object(p.jsx)("p",{children:'Veriler, finans borsalar\u0131 ve di\u011fer i\xe7erik sa\u011flay\u0131c\u0131lar\u0131 taraf\u0131ndan sa\u011flanmakta olup finans borsalar\u0131n\u0131n veya di\u011fer veri sa\u011flay\u0131c\u0131lar\u0131n\u0131n belirtti\u011fi \u015fekilde gecikmeli olabilir. "Alt\u0131n D\xf6viz Fiyatlar\u0131" hi\xe7bir veriyi do\u011frulamaz ve bunu yapma y\xfck\xfcml\xfcl\xfc\u011f\xfcn\xfc reddeder.'}),Object(p.jsx)("p",{children:'"Alt\u0131n D\xf6viz Fiyatlar\u0131", veri veya i\xe7erik sa\u011flay\u0131c\u0131lar\u0131, finansal borsalar ve ba\u011fl\u0131 kurulu\u015flar\u0131n\u0131n her biri ile i\u015f ortaklar\u0131 (A) herhangi bir verinin do\u011fru, yeterli veya eksiksiz oldu\u011funu a\xe7\u0131k \u015fekilde reddeder ve (B) bu t\xfcr verilerdeki hatalardan, eksikliklerden veya di\u011fer kusurlardan, gecikmelerden, kesintilerden ya da bunlara dayanarak yap\u0131lan hi\xe7bir i\u015flemden sorumlu tutulamaz. "Alt\u0131n D\xf6viz Fiyatlar\u0131" veya veri sa\u011flay\u0131c\u0131lar\u0131m\u0131z, burada sunulan verileri kullanman\u0131z nedeniyle olu\u015fabilecek herhangi bir zarardan sorumlu de\u011fildir. Burada kullan\u0131ld\u0131\u011f\u0131 \u015fekliyle "i\u015f ortaklar\u0131" deyimi, "Alt\u0131n D\xf6viz Fiyatlar\u0131" ile bu taraflar aras\u0131ndaki arac\u0131l\u0131k, ortakl\u0131k veya ortak giri\u015fim ili\u015fkisini ifade etmez.'}),Object(p.jsx)("p",{children:"Burada bulunan hi\xe7bir veri veya bilgi ile ilgili olarak \xf6nceden yaz\u0131l\u0131 izin almadan kopyalama, de\u011fi\u015ftirme, yeniden bi\xe7imlendirme, indirme, depolama, yeniden olu\u015fturma, yeniden i\u015fleme, iletme ya da yeniden da\u011f\u0131tma i\u015flemi yapmayaca\u011f\u0131n\u0131z\u0131 ve bu veri veya bilgileri ticari bir kurumda kullanmayaca\u011f\u0131n\u0131z\u0131 kabul edersiniz."})]})},X=Object(r.b)((function(e){return{proMode:e.proMode,isDark:e.isDark}}),{setModalOpen:u,setModalTitle:m,setModalBody:h,setProMode:function(e){return function(t){t({type:"SET_PRO_MODE",payload:e})}}})((function(e){var t=e.setModalOpen,a=e.setModalTitle,n=e.setModalBody,i=e.setProMode,r=e.proMode,c=e.isDark,s=Object(f.useState)(4),l=Object(A.a)(s,2),d=l[0],o=l[1];return Object(p.jsxs)("div",{style:{height:"90px"},children:[Object(p.jsx)("button",{className:"btn btn-link",onClick:function(){t(!0),a(Object(p.jsx)("span",{children:"Sorumluluk Reddi Beyan\u0131"})),n(Object(p.jsx)(P,{}))},children:"Sorumluluk Reddi Beyan\u0131"}),Object(p.jsx)("footer",{className:(c?"bg-dark text-light":"bg-light text-dark")+" fixed-bottom border-secondary border-top p-1",onClick:function(){0===d?i(!0):o(d-1)},children:Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[r?Object(p.jsxs)("button",{className:"btn btn-sm btn-outline-"+(c?"primary":"dark"),onClick:function(){t(!0),a(Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fa fa-bell pe-2"}),"Bildirim G\xf6nder"]})),n(Object(p.jsx)(K,{}))},children:[Object(p.jsx)("i",{className:"fa fa-bell pe-2"}),"Bildirim G\xf6nder"]}):Object(p.jsx)("span",{children:"\xa0"}),r?Object(p.jsxs)("button",{className:"btn btn-sm btn-outline-"+(c?"primary":"dark"),onClick:function(){t(!0),a(Object(p.jsxs)("span",{children:[Object(p.jsx)("i",{className:"fa fa-heartbeat pe-2"}),"Servis Sa\u011fl\u0131k Bilgileri"]})),n(Object(p.jsx)(L,{}))},children:[Object(p.jsx)("i",{className:"fa fa-heartbeat pe-2"}),"Sa\u011fl\u0131k"]}):Object(p.jsx)("span",{children:"\xa0"}),Object(p.jsx)(z.a,{href:"https://github.com/necdetuygur/altin-doviz-fiyatlari","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large",children:"Kaynak Kodu"})]})})]})})),_=Object(r.b)((function(e){return{gold:e.gold,isDark:e.isDark}}),{getGold:b,loadOldGold:function(){return function(e){e({type:"LOAD_OLD_GOLD"})}}})((function(e){var t=Object(f.useState)(!1),a=Object(A.a)(t,2),n=a[0],i=a[1];return Object(f.useEffect)((function(){i(!1);var e=setTimeout((function(){i(!0)}),7e3);return function(){clearTimeout(e)}}),[e.gold]),Object(p.jsx)(p.Fragment,{children:n&&"ikd"in e.gold&&null===e.gold.ikd&&Object(p.jsx)(E,{title:"G\xf6r\xfcn\xfc\u015fe g\xf6re fiyatlar getirilemedi, son al\u0131nan fiyatlar g\xf6sterilsin mi?",isDark:e.isDark,children:Object(p.jsxs)("div",{className:"text-center p-2",children:[Object(p.jsx)("button",{className:"mx-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){return e.loadOldGold()},children:"Evet"}),Object(p.jsx)("button",{className:"mx-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){return e.getGold(!1)},children:"Tekrar Dene"})]})})})})),$=function(){return Object(p.jsxs)("div",{className:"container-fluid mt-3",children:[Object(p.jsx)(v,{}),Object(p.jsx)(_,{}),Object(p.jsx)(J,{}),Object(p.jsx)(X,{}),Object(p.jsx)(H,{})]})},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GOLD_SUCCESS":return null!=t.payload.data&&localStorage.setItem("gold",JSON.stringify(Object(s.a)(Object(s.a)({},JSON.parse(localStorage.getItem("gold")||"{}")),{},Object(c.a)({},t.payload.path,t.payload.data)))),Object(s.a)(Object(s.a)({},e),{},{gold:Object(s.a)(Object(s.a)({},e.gold),{},Object(c.a)({},t.payload.path,t.payload.data))});case"LOAD_OLD_GOLD":return Object(s.a)(Object(s.a)({},e),{},{gold:JSON.parse(localStorage.getItem("gold")||"{}")});case"SET_MODAL_OPEN":return Object(s.a)(Object(s.a)({},e),{},{modalOpen:t.payload});case"SET_MODAL_TITLE":return Object(s.a)(Object(s.a)({},e),{},{modalTitle:t.payload});case"SET_MODAL_BODY":return Object(s.a)(Object(s.a)({},e),{},{modalBody:t.payload});case"SET_PRO_MODE":return Object(s.a)(Object(s.a)({},e),{},{proMode:t.payload});case"SET_FAVS":return localStorage.setItem("favs",JSON.stringify(t.payload)),Object(s.a)(Object(s.a)({},e),{},{favs:t.payload});case"TOGGLE_EDIT_FAVS":return Object(s.a)(Object(s.a)({},e),{},{editFavs:!e.editFavs});case"TOGGLE_IS_DARK":var a=!e.isDark;return localStorage.setItem("isDark",a?"1":"0"),document.body.style.backgroundColor=a?"#0f2537":"#c8d0d9",Object(s.a)(Object(s.a)({},e),{},{isDark:a});case"GET_IKD_HISTORY_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{ikdHistory:t.payload});default:return e}}),Object(i.a)(d.a)),ne=document.getElementById("root");Object(n.render)(Object(p.jsx)(r.a,{store:ae,children:Object(p.jsx)($,{})}),ne),function(e){if("serviceWorker"in navigator){if(new URL("/altin-doviz-fiyatlari",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/altin-doviz-fiyatlari","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(null)},58:function(e,t,a){},60:function(e,t,a){},87:function(e,t){}},[[112,1,2]]]);