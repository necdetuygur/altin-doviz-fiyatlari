(this["webpackJsonpaltin-doviz-fiyatlari"]=this["webpackJsonpaltin-doviz-fiyatlari"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var c=a(12),n=a(30),s=a(9),r=a(14),i=a(4),l={gold:{},modalOpen:!1,modalTitle:"",modalBody:null,proMode:!1,favs:JSON.parse(localStorage.getItem("favs")||"[]"),editFavs:!1,isDark:"1"===localStorage.getItem("isDark")||!1,ikdHistory:[]},A=a(44),d=(a(58),a(59),a(60),a(7)),o=a(15),j=a.n(o),b=function(e){if(e){var t=(new Date).getDate();return"https://thegold"+(t=t>17?t-17:t)+".herokuapp.com/"}return"https://thegold"+~~(17*Math.random()+1)+".herokuapp.com/"},O=function(e){return function(t){var a=b(e);["ikd","fw/altin/gram","fw/altin/ceyrek","fw/altin/yarim","fw/altin/tam","fw/doviz/usd","fw/doviz/eur","fw/doviz/gbp"].forEach((function(e){t({type:"GET_GOLD_SUCCESS",payload:{data:null,path:"ikd"===e?e:e.split("/")[2]}}),j.a.get(a+e).then((function(a){return t({type:"GET_GOLD_SUCCESS",payload:{data:a.data,path:"ikd"===e?e:e.split("/")[2]}})}))}))}},h=function(e){return function(t){t({type:"SET_MODAL_OPEN",payload:e})}},u=function(e){return function(t){t({type:"SET_MODAL_TITLE",payload:e})}},m=function(e){return function(t){t({type:"SET_MODAL_BODY",payload:e})}},x=function(e){return function(t){t({type:"SET_FAVS",payload:e})}},f=function(){return function(e){e({type:"TOGGLE_IS_DARK"})}},g=a(1),p=a(27),k=a.n(p),D=(a(80),a(2)),w=function(){return k()(new Date,"DD-MM-YYYY HH:mm:ss").locale("tr").format("DD MMMM YYYY dddd HH:mm:ss")},v=Object(s.b)((function(e){return{proMode:e.proMode,isDark:e.isDark,editFavs:e.editFavs}}),{setModalOpen:h,setModalTitle:u,setModalBody:m,getGold:O,toggleEditFavs:function(){return function(e){e({type:"TOGGLE_EDIT_FAVS"})}},toggleIsDark:f})((function(e){var t=Object(g.useState)(w()),a=Object(d.a)(t,2),c=a[0],n=a[1];return Object(g.useEffect)((function(){setInterval((function(){n(w())}),1e3)}),[]),Object(D.jsx)("div",{style:{height:e.editFavs?"65px":"45px"},children:Object(D.jsx)("header",{className:(e.isDark?"bg-dark text-light":"bg-light text-dark")+" fixed-top border-secondary border-bottom p-1",children:Object(D.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(D.jsx)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){e.getGold(!0)},children:Object(D.jsx)("i",{style:{width:"16px"},className:"fa fa-refresh"})}),Object(D.jsx)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){return e.getGold(!1)},children:Object(D.jsx)("small",{children:c})}),Object(D.jsxs)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){e.toggleEditFavs()},children:[Object(D.jsx)("i",{className:"fa fa-sliders"}),e.editFavs?" D\xfczenleme Modunu Kapat":""]}),Object(D.jsx)("button",{className:"m-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){e.toggleIsDark()},children:Object(D.jsx)("i",{style:{width:"16px"},className:e.isDark?"fa fa-moon-o":"fa fa-sun-o"})})]})})})})),E=a(46),N=function(e){E.a(e).then((function(e){!function(e,t){var a=window.document.createElement("a");a.href=e,a.download=t,a.setAttribute("style","display:none;"),(document.body||document.documentElement).appendChild(a),"function"===typeof a.click?a.click():(a.target="_blank",a.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))),URL.revokeObjectURL(a.href),a.remove()}(e,(new Date).getTime().toString()+".png")}))},y=function(e){var t=e.title,a=e.children,c=e.icon,n=e.isDark,s=e.header,r=e.isShare,i=Object(g.useRef)(null);return Object(D.jsxs)("div",{className:"card mb-2 "+(n?"bg-dark text-light":"bg-light text-dark"),ref:i,children:[Object(D.jsxs)("div",{className:"card-header "+(n?"bg-dark":"bg-light"),children:[c&&Object(D.jsx)("img",{width:"33",src:"/altin-doviz-fiyatlari"+c,alt:""}),Object(D.jsx)("span",{className:c&&"ms-2",children:t}),Object(D.jsxs)("div",{className:"float-end",children:[s,r&&Object(D.jsx)("button",{className:"m-1 btn btn-outline-primary btn-sm",onClick:function(){var e=i.current;if(!e)throw new Error("el wasn't found");N(e)},children:Object(D.jsx)("i",{style:{width:"16px"},className:"fa fa-share-alt"})})]})]}),Object(D.jsx)("div",{className:"card-body p-0 "+(n?"bg-dark":"bg-light"),children:a})]})},C=a(8),B=a(29),Q=function(e){return Object(D.jsx)("img",{width:e.width,src:e.isDark?"data:image/gif;base64,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":"data:image/gif;base64,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",alt:""})},S={gram:"Gram Alt\u0131n",ceyrek:"\xc7eyrek Alt\u0131n",yarim:"Yar\u0131m Alt\u0131n",tam:"Tam Alt\u0131n",usd:"Dolar (USD)",eur:"Euro (EUR)",gbp:"Sterlin (GBP)"},G=Object(s.b)((function(e){return{favs:e.favs,isDark:e.isDark}}),{setModalOpen:h,setModalTitle:u,setModalBody:m,setFavs:x})((function(e){var t=e.path,a=e.editFavs,c=e.favs,n=e.setFavs,s=e.setModalOpen,r=e.setModalTitle,i=e.setModalBody,l=e.Alis,A=e.Satis,d=e.Fark,o=e.OncekiKapanis,j=e.GununEnDusukDegeri,b=e.GununEnYuksekDegeri,O=e.YarinkiBeklentiOy,h=e.YarinkiBeklentiTahmin,u=e.isDark;return Object(D.jsxs)("tr",{onClick:function(){a||(s(!0),r(Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"fa fa-line-chart pe-2"}),S[t]+" Detaylar\u0131"]})),i(Object(D.jsx)("div",{children:Object(D.jsx)(C.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:u?"table-dark text-white":"table-light text-dark",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"Al\u0131\u015f"}),Object(D.jsx)("td",{className:"text-end",children:l})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"Sat\u0131\u015f"}),Object(D.jsx)("td",{className:"text-end",children:A})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"Fark"}),Object(D.jsx)("td",{className:"text-end",children:d})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"\xd6nceki Kapan\u0131\u015f"}),Object(D.jsx)("td",{className:"text-end",children:o})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"G\xfcn\xfcn En D\xfc\u015f\xfck De\u011feri"}),Object(D.jsx)("td",{className:"text-end",children:j})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"G\xfcn\xfcn En Y\xfcksek De\u011feri"}),Object(D.jsx)("td",{className:"text-end",children:b})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"Yar\u0131nki Beklenti Oy"}),Object(D.jsx)("td",{className:"text-end",children:O})]}),Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"Yar\u0131nki Beklenti Tahmin"}),Object(D.jsx)("td",{className:"text-end",children:h})]})]})})})))},children:[a&&Object(D.jsxs)("td",{className:"text-start",children:[!(c.indexOf(t)>-1)&&Object(D.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){n([].concat(Object(B.a)(c),[t]))},children:Object(D.jsx)("i",{className:"fa fa-star-o"})}),c.indexOf(t)>-1&&Object(D.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){c.splice(c.indexOf(t),1),n(Object(B.a)(c))},children:Object(D.jsx)("i",{className:"fa fa-star"})})]}),Object(D.jsx)("td",{className:"text-start",children:S[t]}),Object(D.jsx)("td",{children:l||Object(D.jsx)(Q,{isDark:u,width:"19"})}),Object(D.jsx)("td",{children:A||Object(D.jsx)(Q,{isDark:u,width:"19"})}),Object(D.jsx)("td",{className:"text-end",children:h?h.indexOf("Art")>-1?Object(D.jsxs)("b",{className:"text-success",children:[Object(D.jsx)("i",{className:"fa fa-arrow-up pe-2"}),h]}):Object(D.jsxs)("b",{className:"text-danger",children:[Object(D.jsx)("i",{className:"fa fa-arrow-down pe-2"}),h]}):Object(D.jsx)(Q,{isDark:u,width:"19"})})]})})),I=function(e){var t=e.gram,a=e.ceyrek,c=e.yarim,n=e.tam,s=e.editFavs,r=e.isDark;return Object(D.jsx)(y,{title:"Alt\u0131n Fiyatlar\u0131",icon:"/img/apple-touch-icon-152x152.png",isDark:r,isShare:!0,children:Object(D.jsx)(C.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:r?"table-dark text-white":"table-light text-dark",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[s&&Object(D.jsx)("td",{className:"text-start",children:"Favoriler"}),Object(D.jsx)("td",{}),Object(D.jsx)("td",{children:"Al\u0131\u015f"}),Object(D.jsx)("td",{children:"Sat\u0131\u015f"}),Object(D.jsx)("td",{className:"text-end",children:"Tahmin"})]}),Object(D.jsx)(G,Object(i.a)(Object(i.a)({},t),{},{path:"gram",editFavs:s})),Object(D.jsx)(G,Object(i.a)(Object(i.a)({},a),{},{path:"ceyrek",editFavs:s})),Object(D.jsx)(G,Object(i.a)(Object(i.a)({},c),{},{path:"yarim",editFavs:s})),Object(D.jsx)(G,Object(i.a)(Object(i.a)({},n),{},{path:"tam",editFavs:s}))]})})})},M=function(e){var t=e.usd,a=e.eur,c=e.gbp,n=e.editFavs,s=e.isDark;return Object(D.jsx)(y,{title:"D\xf6viz Fiyatlar\u0131",icon:"/img/doviz.png",isDark:s,isShare:!0,children:Object(D.jsx)(C.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:s?"table-dark text-white":"table-light text-dark",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[n&&Object(D.jsx)("td",{className:"text-start",children:"Favoriler"}),Object(D.jsx)("td",{}),Object(D.jsx)("td",{children:"Al\u0131\u015f"}),Object(D.jsx)("td",{children:"Sat\u0131\u015f"}),Object(D.jsx)("td",{className:"text-end",children:"Tahmin"})]}),Object(D.jsx)(G,Object(i.a)(Object(i.a)({},t),{},{path:"usd",editFavs:n})),Object(D.jsx)(G,Object(i.a)(Object(i.a)({},a),{},{path:"eur",editFavs:n})),Object(D.jsx)(G,Object(i.a)(Object(i.a)({},c),{},{path:"gbp",editFavs:n}))]})})})},F=function(e){return("00"+e).slice(-2)},Y=function(e){return Object(D.jsx)(C.f,{hover:!0,responsive:!0,style:{cursor:"default",marginBottom:0},className:e.isDark?"table-dark text-white":"table-light text-dark",children:e.ikdHistory.length>0&&Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:"Tarih Saat"}),Object(D.jsx)("td",{children:"Gram"}),Object(D.jsx)("td",{children:"\xc7eyrek"}),Object(D.jsx)("td",{children:"Yar\u0131m"}),Object(D.jsx)("td",{children:"Tam"})]}),e.ikdHistory.map((function(e){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:e.Tarih}),Object(D.jsx)("td",{children:e.Gram}),Object(D.jsx)("td",{children:e.Ceyrek}),Object(D.jsx)("td",{children:e.Yarim}),Object(D.jsx)("td",{children:e.Tam})]},e.Tarih)}))]})})},R=Object(s.b)((function(e){return{ikdHistory:e.ikdHistory,isDark:e.isDark}}),{getIkdHistory:function(e,t){return function(a){var c=b(e);a({type:"GET_IKD_HISTORY_SUCCESS",payload:[]}),j.a.get(c+"ikd/"+t).then((function(e){return a({type:"GET_IKD_HISTORY_SUCCESS",payload:e.data})}))}}})((function(e){var t=new Date((new Date).getTime()-864e5),a=t.getFullYear(),c=F(t.getMonth()+1),n=F(t.getDate()),s=Object(g.useState)(a),r=Object(d.a)(s,2),l=r[0],A=r[1],o=Object(g.useState)(c),j=Object(d.a)(o,2),b=j[0],O=j[1],h=Object(g.useState)(n),u=Object(d.a)(h,2),m=u[0],x=u[1],f=function(e){var t=e.target.name,a=e.currentTarget.value;"year"===t?A(a):"month"===t?O(a):"day"!==t||x(a)};Object(g.useEffect)((function(){e.getIkdHistory(!0,"".concat(m,".").concat(b,".").concat(l))}),[]);for(var p=[],k=(new Date).getFullYear(),w=k-15;w<=k;w++)p.push(w);for(var v=[],E=1;E<=12;E++)v.push(F(E));for(var N=[],y=1;y<=31;y++)N.push(F(y));return Object(D.jsxs)("div",{className:"container-fluid",children:[Object(D.jsxs)("div",{className:"row p-1",children:[Object(D.jsxs)("div",{className:"col",children:["G\xfcn",Object(D.jsx)("br",{}),Object(D.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return f(e)},value:m,name:"day",children:N.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))})]}),Object(D.jsxs)("div",{className:"col",children:["Ay",Object(D.jsx)("br",{}),Object(D.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return f(e)},value:b,name:"month",children:v.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))})]}),Object(D.jsxs)("div",{className:"col",children:["Y\u0131l",Object(D.jsx)("br",{}),Object(D.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return f(e)},value:l,name:"year",children:p.map((function(e){return Object(D.jsx)("option",{value:e,children:e},e)}))})]})]}),Object(D.jsx)("div",{className:"row p-1",children:Object(D.jsx)("div",{className:"col",children:Object(D.jsxs)("button",{className:"btn btn-sm btn-primary w-100",onClick:function(){e.getIkdHistory(!0,"".concat(m,".").concat(b,".").concat(l))},children:[Object(D.jsx)("i",{className:"fa fa-eye pe-2"}),"G\xf6ster"]})})}),Object(D.jsx)("div",{className:"p-1",children:e.ikdHistory.length>0?Object(D.jsx)(Y,Object(i.a)({},e)):Object(D.jsx)("div",{className:"text-center p-3",children:Object(D.jsx)(Q,{isDark:e.isDark,width:"19"})})})]})})),T=function e(t){var a=function(){t.modalOpened||(t.setModalOpen(!0),t.setModalTitle(Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"fa fa-line-chart pe-2"}),"\u0130zmir Kuyumcular Odas\u0131 Alt\u0131n Fiyatlar\u0131"]})),t.setModalBody(Object(D.jsx)(e,Object(i.a)(Object(i.a)({},t),{},{modalOpened:!0}))))};return Object(D.jsx)(C.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:t.isDark?"table-dark text-white":"table-light text-dark",children:t.data&&Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{onClick:function(){return a()},children:[Object(D.jsx)("td",{children:"Gram"}),Object(D.jsx)("td",{className:"text-end",children:t.data.Gram})]}),Object(D.jsxs)("tr",{onClick:function(){return a()},children:[Object(D.jsx)("td",{children:"\xc7eyrek"}),Object(D.jsx)("td",{className:"text-end",children:t.data.Ceyrek})]}),Object(D.jsxs)("tr",{onClick:function(){return a()},children:[Object(D.jsx)("td",{children:"Yar\u0131m"}),Object(D.jsx)("td",{className:"text-end",children:t.data.Yarim})]}),Object(D.jsxs)("tr",{onClick:function(){return a()},children:[Object(D.jsx)("td",{children:"Tam"}),Object(D.jsx)("td",{className:"text-end",children:t.data.Tam})]}),Object(D.jsxs)("tr",{onClick:function(){return a()},children:[Object(D.jsx)("td",{children:"Son G\xfcncellenme Tarihi"}),Object(D.jsx)("td",{className:"text-end",children:t.data.Tarih.replace(/-/gi,".")})]})]})})},U=Object(s.b)((function(e){return{}}),{setModalOpen:h,setModalTitle:u,setModalBody:m})((function(e){var t=function(){e.setModalOpen(!0),e.setModalTitle(Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"fa fa-line-chart pe-2"}),"Ge\xe7mi\u015f Alt\u0131n Fiyatlar\u0131"]})),e.setModalBody(Object(D.jsx)(R,{}))};return Object(D.jsxs)(y,{title:"\u0130zmir Kuyumcular Odas\u0131",icon:"/img/iko.png",isDark:e.isDark,isShare:!0,header:Object(D.jsx)("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){t()},children:Object(D.jsx)("i",{style:{width:"16px"},className:"fa fa-history"})}),children:[e.data?Object(D.jsx)(T,Object(i.a)(Object(i.a)({},e),{},{modalOpened:!1})):Object(D.jsx)("div",{className:"text-center p-3",children:Object(D.jsx)(Q,{isDark:e.isDark,width:"19"})}),Object(D.jsx)("div",{className:"p-2",children:Object(D.jsxs)("button",{className:"btn btn-sm btn-primary w-100",onClick:function(){t()},children:[Object(D.jsx)("i",{className:"fa fa-history pe-2"}),"Ge\xe7mi\u015f Alt\u0131n Fiyatlar\u0131"]})})]})})),Z=Object(s.b)((function(e){return{favs:e.favs,gold:e.gold,isDark:e.isDark}}),{setFavs:x})((function(e){return Object(g.useEffect)((function(){}),[]),Object(D.jsx)(y,{title:"Favoriler",icon:"/img/favorites.png",isDark:e.isDark,children:Object(D.jsx)(C.f,{hover:!0,responsive:!0,style:{cursor:"pointer",marginBottom:0},className:e.isDark?"table-dark text-white":"table-light text-dark",children:Object(D.jsxs)("tbody",{children:[Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{}),Object(D.jsx)("td",{children:"Al\u0131\u015f"}),Object(D.jsx)("td",{children:"Sat\u0131\u015f"}),Object(D.jsx)("td",{className:"text-end",children:"Tahmin"})]}),e.favs.map((function(t){return Object(D.jsx)(G,Object(i.a)(Object(i.a)({},e.gold[t]),{},{path:t,editFavs:!1}),t)}))]})})})})),J=null,H=Object(s.b)((function(e){return{gold:e.gold,editFavs:e.editFavs,favs:e.favs,isDark:e.isDark}}),{getGold:O,toggleIsDark:f})((function(e){var t=Object(g.useState)(localStorage.getItem("refreshTime")||"0"),a=Object(d.a)(t,2),c=a[0],n=a[1],s=function(){clearInterval(J);var t=Number(localStorage.getItem("refreshTime")||"0");0!=t&&(J=setInterval((function(){e.getGold(!0)}),6e4*t))};return Object(g.useEffect)((function(){return e.getGold(!0),s(),e.toggleIsDark(),e.toggleIsDark(),function(){return clearInterval(J)}}),[]),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{className:"row",children:[e.editFavs&&Object(D.jsx)("div",{className:"col-md-12",children:Object(D.jsx)(y,{title:"Otomatik Yenileme S\xfcresi",isDark:e.isDark,children:Object(D.jsx)("div",{className:"m-2",children:Object(D.jsx)("select",{className:"form-select form-select-sm",onChange:function(e){return function(e){var t=e.target.name,a=e.currentTarget.value;"refreshTime"===t&&(n(a),localStorage.setItem("refreshTime",a),s())}(e)},value:c,name:"refreshTime",children:Array.from(Array(61).keys()).map((function(e){return Object(D.jsx)("option",{value:e,children:e?e+" dakikada bir":"Yenileme kapal\u0131"},e)}))})})})}),e.favs.length>0&&!e.editFavs&&Object(D.jsx)("div",{className:"col-md-4",children:Object(D.jsx)(Z,{})}),Object(D.jsx)("div",{className:"col-md-4",children:Object(D.jsx)(I,Object(i.a)(Object(i.a)({},e.gold),{},{editFavs:e.editFavs,isDark:e.isDark}))}),Object(D.jsx)("div",{className:"col-md-4",children:Object(D.jsx)(M,Object(i.a)(Object(i.a)({},e.gold),{},{editFavs:e.editFavs,isDark:e.isDark}))}),Object(D.jsx)("div",{className:"col-md-4",children:Object(D.jsx)(U,{data:e.gold.ikd,isDark:e.isDark})})]})})})),K=Object(s.b)((function(e){return{modalOpen:e.modalOpen,modalTitle:e.modalTitle,modalBody:e.modalBody,isDark:e.isDark}}),{setModalOpen:h,setModalTitle:u,setModalBody:m})((function(e){var t=function(){return e.setModalOpen(!e.modalOpen)};return Object(D.jsxs)(C.b,{toggle:t,isOpen:e.modalOpen,className:e.isDark?"bg-dark text-white":"bg-light text-dark",fullscreen:!0,children:[Object(D.jsx)(C.e,{toggle:t,className:e.isDark?"bg-dark text-white":"bg-light text-dark",children:e.modalTitle}),Object(D.jsx)(C.c,{className:"p-0 "+(e.isDark?"bg-dark":"bg-light"),children:e.modalBody}),Object(D.jsx)(C.d,{className:e.isDark?"bg-dark text-white":"bg-light text-dark",children:Object(D.jsx)("button",{className:"btn btn-sm btn-danger",onClick:t,children:"Kapat"})})]})})),V=a(45),W=a(84),q=function(){var e="Bildirimi aktif edilen cihazlara bildirim mesaj\u0131 g\xf6nderilecek, emin misiniz?",t=Object(g.useState)(""),a=Object(d.a)(t,2),c=a[0],n=a[1],s=Object(g.useState)(""),r=Object(d.a)(s,2),i=r[0],l=r[1],A=Object(g.useState)(""),o=Object(d.a)(A,2),b=o[0],O=o[1],h=Object(g.useState)(!1),u=Object(d.a)(h,2),m=u[0],x=u[1],f=Object(g.useState)(""),p=Object(d.a)(f,2),k=p[0],w=p[1],v=function(e,t){return W.AES.decrypt(e,t).toString(W.enc.Utf8)},E=function(e){"title"==e.target.name?l(e.target.value):"body"==e.target.name?O(e.target.value):"passwd"!=e.target.name||n(e.target.value)},N=function(e,t){x(e),w(t)};return Object(D.jsxs)("div",{children:[k&&Object(D.jsx)(C.a,{color:m?"success":"danger",title:"Sonu\xe7",children:Object(D.jsx)("div",{className:"m-2",children:k})}),Object(D.jsxs)("div",{className:"m-2",children:[Object(D.jsxs)("div",{className:"input-group mb-2",children:[Object(D.jsx)("span",{className:"input-group-text w-25",children:"Parola"}),Object(D.jsx)("input",{name:"passwd",type:"password",className:"form-control",onChange:function(e){return E(e)},onKeyUp:function(e){return E(e)}})]}),Object(D.jsxs)("div",{className:"input-group mb-2",children:[Object(D.jsx)("span",{className:"input-group-text w-25",children:"Ba\u015fl\u0131k"}),Object(D.jsx)("input",{name:"title",type:"text",className:"form-control",onChange:function(e){return E(e)},onKeyUp:function(e){return E(e)}})]}),Object(D.jsxs)("div",{className:"input-group mb-2",children:[Object(D.jsx)("span",{className:"input-group-text w-25",children:"\u0130\xe7erik"}),Object(D.jsx)("textarea",{name:"body",className:"form-control",onChange:function(e){return E(e)},onKeyUp:function(e){return E(e)}})]}),Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("div",{className:"col",children:Object(D.jsxs)("button",{className:"btn btn-primary w-100",onClick:function(){setTimeout((function(){if(c.length<2)N(!1,"Parola yanl\u0131\u015f!");else if(confirm(e)){var t=v("U2FsdGVkX19x5ExLETCqdDOhSGEFQnoZkN09smlrl99HUbYw//nqzQ2Y47UESFSYHnyQRqVHX5FoFgd3neApLw==",c+"0");if(!(t.indexOf("http")>-1))return void N(!1,"Parola yanl\u0131\u015f!");t.indexOf("http")>-1&&j.a.post(t,{}).then((function(e){N(e.data.result,e.data.message)}))}}),100)},children:[Object(D.jsx)("i",{className:"fa fa-refresh pe-2"}),"S\u0131f\u0131rla"]})}),Object(D.jsx)("div",{className:"col",children:Object(D.jsxs)("button",{className:"btn btn-primary w-100",onClick:function(){setTimeout((function(){if(c.length<2)N(!1,"Parola yanl\u0131\u015f!");else if(confirm(e)){var t=v("U2FsdGVkX1+wYGuEmnZjpA7n2MjwYtHuMyOZrq5ZSWWZfaxgCIAlMOnYCdRJ3kb9NZ6JDq6AIMakqhBrSWmOkg==",c+"0");if(!(t.indexOf("http")>-1))return void N(!1,"Parola yanl\u0131\u015f!");t.indexOf("http")>-1&&j.a.post(t,{title:i,body:b}).then((function(e){N(e.data.result,e.data.message)}))}}),100)},children:[Object(D.jsx)("i",{className:"fa fa-paper-plane pe-2"}),"G\xf6nder"]})})]})]})]})},L=function(){for(var e={},t=1;t<=17;t++)e=Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},"https://thegold"+t+".herokuapp.com/","0"));return e},P=function(e){var t=e.a,a=e.b,c=e.c;return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:Object(D.jsx)("a",{target:"_blank",href:t+"ikd",children:t.replace("https://","").replace(".herokuapp.com/","")})}),Object(D.jsx)("td",{className:"text-end",children:"0"!==c?Object(D.jsx)("span",{className:"badge bg-"+a,children:c}):Object(D.jsx)(Q,{isDark:!0,width:"16"})})]})},X=function(){var e=Object(g.useState)(L()),t=Object(d.a)(e,2),a=t[0],c=t[1],n=function(){var e=Object(g.useState)(0),t=Object(d.a)(e,2),a=(t[0],t[1]);return function(){return a((function(e){return e+1}))}}(),s=function(e,t){j.a.get(e+"ikd").then((function(a){return t(e,a.data.Yarim)}))},i=function(){c(L()),setTimeout((function(){!function(){for(var e in a)s(e,(function(e,t){var s=Object.assign(a,Object(r.a)({},e,t));c(s),n()}))}()}),1e3)};return Object(g.useEffect)((function(){i()}),[]),Object(D.jsx)(C.f,{dark:!0,hover:!0,responsive:!0,style:{marginBottom:0},children:Object(D.jsx)("tbody",{children:Object.keys(a).map((function(e){var t=a[e];return Object(D.jsx)(P,{a:e,b:"0"!==t?"success":"danger",c:"0"!==t?"\xc7al\u0131\u015f\u0131yor":"0"},e)}))})})},z=Object(s.b)((function(e){return{proMode:e.proMode,isDark:e.isDark}}),{setModalOpen:h,setModalTitle:u,setModalBody:m,setProMode:function(e){return function(t){t({type:"SET_PRO_MODE",payload:e})}}})((function(e){var t=e.setModalOpen,a=e.setModalTitle,c=e.setModalBody,n=e.setProMode,s=e.proMode,r=e.isDark,i=Object(g.useState)(4),l=Object(d.a)(i,2),A=l[0],o=l[1];return Object(D.jsx)("div",{style:{height:"90px"},children:Object(D.jsx)("footer",{className:(r?"bg-dark text-light":"bg-light text-dark")+" fixed-bottom border-secondary border-top p-1",onClick:function(){0===A?n(!0):o(A-1)},children:Object(D.jsxs)("div",{className:"d-flex justify-content-between",children:[s?Object(D.jsxs)("button",{className:"btn btn-sm btn-outline-"+(r?"primary":"dark"),onClick:function(){t(!0),a(Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"fa fa-bell pe-2"}),"Bildirim G\xf6nder"]})),c(Object(D.jsx)(q,{}))},children:[Object(D.jsx)("i",{className:"fa fa-bell pe-2"}),"Bildirim G\xf6nder"]}):Object(D.jsx)("span",{children:"\xa0"}),s?Object(D.jsxs)("button",{className:"btn btn-sm btn-outline-"+(r?"primary":"dark"),onClick:function(){t(!0),a(Object(D.jsxs)("span",{children:[Object(D.jsx)("i",{className:"fa fa-heartbeat pe-2"}),"Servis Sa\u011fl\u0131k Bilgileri"]})),c(Object(D.jsx)(X,{}))},children:[Object(D.jsx)("i",{className:"fa fa-heartbeat pe-2"}),"Sa\u011fl\u0131k"]}):Object(D.jsx)("span",{children:"\xa0"}),Object(D.jsx)(V.a,{href:"https://github.com/necdetuygur/altin-doviz-fiyatlari","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large",children:"GitHub"})]})})})})),_=Object(s.b)((function(e){return{gold:e.gold,isDark:e.isDark}}),{getGold:O,loadOldGold:function(){return function(e){e({type:"LOAD_OLD_GOLD"})}}})((function(e){var t=Object(g.useState)(!1),a=Object(d.a)(t,2),c=a[0],n=a[1];return Object(g.useEffect)((function(){n(!1);var e=setTimeout((function(){n(!0)}),7e3);return function(){clearTimeout(e)}}),[e.gold]),Object(D.jsx)(D.Fragment,{children:c&&"ikd"in e.gold&&null===e.gold.ikd&&Object(D.jsx)(y,{title:"G\xf6r\xfcn\xfc\u015fe g\xf6re fiyatlar getirilemedi, son al\u0131nan fiyatlar g\xf6sterilsin mi?",isDark:e.isDark,children:Object(D.jsxs)("div",{className:"text-center p-2",children:[Object(D.jsx)("button",{className:"mx-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){return e.loadOldGold()},children:"Evet"}),Object(D.jsx)("button",{className:"mx-1 btn btn-sm btn-outline-"+(e.isDark?"primary":"dark"),onClick:function(){return e.getGold(!1)},children:"Tekrar Dene"})]})})})})),$=function(){return Object(D.jsxs)("div",{className:"container-fluid mt-3",children:[Object(D.jsx)(v,{}),Object(D.jsx)(_,{}),Object(D.jsx)(H,{}),Object(D.jsx)(z,{}),Object(D.jsx)(K,{})]})},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=Object(n.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_GOLD_SUCCESS":return null!=t.payload.data&&localStorage.setItem("gold",JSON.stringify(Object(i.a)(Object(i.a)({},JSON.parse(localStorage.getItem("gold")||"{}")),{},Object(r.a)({},t.payload.path,t.payload.data)))),Object(i.a)(Object(i.a)({},e),{},{gold:Object(i.a)(Object(i.a)({},e.gold),{},Object(r.a)({},t.payload.path,t.payload.data))});case"LOAD_OLD_GOLD":return Object(i.a)(Object(i.a)({},e),{},{gold:JSON.parse(localStorage.getItem("gold")||"{}")});case"SET_MODAL_OPEN":return Object(i.a)(Object(i.a)({},e),{},{modalOpen:t.payload});case"SET_MODAL_TITLE":return Object(i.a)(Object(i.a)({},e),{},{modalTitle:t.payload});case"SET_MODAL_BODY":return Object(i.a)(Object(i.a)({},e),{},{modalBody:t.payload});case"SET_PRO_MODE":return Object(i.a)(Object(i.a)({},e),{},{proMode:t.payload});case"SET_FAVS":return localStorage.setItem("favs",JSON.stringify(t.payload)),Object(i.a)(Object(i.a)({},e),{},{favs:t.payload});case"TOGGLE_EDIT_FAVS":return Object(i.a)(Object(i.a)({},e),{},{editFavs:!e.editFavs});case"TOGGLE_IS_DARK":var a=!e.isDark;return localStorage.setItem("isDark",a?"1":"0"),document.body.style.backgroundColor=a?"#0f2537":"#c8d0d9",Object(i.a)(Object(i.a)({},e),{},{isDark:a});case"GET_IKD_HISTORY_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{ikdHistory:t.payload});default:return e}}),Object(n.a)(A.a)),ce=document.getElementById("root");Object(c.render)(Object(D.jsx)(s.a,{store:ae,children:Object(D.jsx)($,{})}),ce),function(e){if("serviceWorker"in navigator){if(new URL("/altin-doviz-fiyatlari",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/altin-doviz-fiyatlari","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var c=a.headers.get("content-type");404===a.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(null)},58:function(e,t,a){},60:function(e,t,a){},86:function(e,t){}},[[111,1,2]]]);