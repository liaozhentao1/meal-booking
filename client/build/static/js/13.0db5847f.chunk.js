(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{182:function(e,a,t){e.exports={Table:"Table_Table__WbckG",Table__head:"Table_Table__head__2lWVY",Table__row:"Table_Table__row__rNsSZ",Table__foot:"Table_Table__foot__2PKEA",Table__head__list:"Table_Table__head__list__3BO49",Table__row__list:"Table_Table__row__list__1Swr2",Table__foot__list:"Table_Table__foot__list__QeOP1",Table__head__list__item:"Table_Table__head__list__item__13D6e",Table__row__list__item:"Table_Table__row__list__item__3D7rH",Table__foot__list__item:"Table_Table__foot__list__item__10wdh",Order__summary__list:"Table_Order__summary__list__3h_6e",Order__summary__list__item:"Table_Order__summary__list__item__1elsG",Dash:"Table_Dash__OiJKK"}},183:function(e,a,t){"use strict";var _=t(0),l=t.n(_),s=t(182),r=t.n(s),n=function(e){return l.a.createElement("li",{className:e.classes.Table__head__list__item},e.text)},c=function(e){var a=e.rows.map(function(a){return l.a.createElement(n,{key:a,classes:e.classes,text:a})});return l.a.createElement("div",{className:e.classes.Table__head},l.a.createElement("ul",{className:e.classes.Table__head__list},a))},i=function(e){var a=e.order.meals.map(function(a){return l.a.createElement(l.a.Fragment,{key:a.id},l.a.createElement("li",{className:e.classes.Order__summary__list__item},l.a.createElement("p",null,a.name),l.a.createElement("span",{className:e.classes.Dash},"-"),l.a.createElement("p",null,a.quantity)))});return l.a.createElement("div",{className:e.classes.Table__row},l.a.createElement("ul",{className:e.classes.Table__row__list},l.a.createElement("li",{className:e.classes.Table__row__list__item},e.order.id),l.a.createElement("li",{className:e.classes.Table__row__list__item},e.order.user||e.order.caterer),l.a.createElement("li",{className:e.classes.Table__row__list__item},l.a.createElement("ul",{className:e.classes.Order__summary__list},a)),l.a.createElement("li",{className:e.classes.Table__row__list__item},e.order.date),l.a.createElement("li",{className:e.classes.Table__row__list__item},"$",e.order.total.toFixed(2))))},m=function(e){var a=e.orders.map(function(a){return l.a.createElement(i,{classes:e.classes,order:a,key:a.id})});return l.a.createElement("div",null,a)},o=function(e){var a=l.a.createElement("li",{className:e.classes.Table__foot__list__item},e.text);return"object"===typeof e.text&&(a=l.a.createElement("li",{className:e.classes.Table__foot__list__item},"$",e.text.total.toFixed(2))),a},u=function(e){var a=e.rows.map(function(a){return l.a.createElement(o,{key:a,classes:e.classes,text:a})});return l.a.createElement("div",{className:e.classes.Table__foot},l.a.createElement("ul",{className:e.classes.Table__foot__list},a))};a.a=function(e){var a=["#ID","Caterer","Order Summary","Order Date","Order Total"],t=["Total",{total:e.orders.reduce(function(e,a){return e+a.total},0)}];return e.todaysOrders&&a.splice(3,1),e.caterer&&(a[1]="Customer Name"),l.a.createElement("section",{className:["page-section",r.a.Table].join(" ")},l.a.createElement(c,{classes:r.a,rows:a}),l.a.createElement(m,{classes:r.a,orders:e.orders}),e.todaysOrders?l.a.createElement(u,{classes:r.a,rows:t}):null)}},216:function(e,a,t){"use strict";t.r(a);var _=t(15),l=t(16),s=t(18),r=t(17),n=t(19),c=t(0),i=t.n(c),m=t(47),o=t(46),u=t(183),d=function(e){function a(){var e,t;Object(_.a)(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(n)))).state={orders:[{id:1,user:"John Doe",meals:[{id:1,name:"Jollof Rice",quantity:1},{id:2,name:"Bread & Beans",quantity:2}],date:"24th Feb 2019",price:1500},{id:2,user:"James Smith",meals:[{id:1,name:"Jollof Rice",quantity:1},{id:2,name:"Bread & Beans",quantity:1}],date:"28th Feb 2019",price:1e3}]},t}return Object(n.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{bannerText:"Your Order History",authenticated:!0}),i.a.createElement("main",null,i.a.createElement(u.a,{orders:this.state.orders})),i.a.createElement(o.a,null))}}]),a}(c.Component);a.default=d}}]);
//# sourceMappingURL=13.0db5847f.chunk.js.map