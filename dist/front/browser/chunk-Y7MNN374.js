import{$d as H,Ga as C,La as a,Lb as l,Ma as x,Mb as p,Nb as y,Od as R,Tb as s,Tc as T,Ub as S,Za as v,_b as B,_d as V,ac as E,ae as U,cb as m,db as f,de as F,eb as _,ee as P,fa as c,hb as u,jb as I,kb as k,lb as w,mb as i,nb as n,ob as o,sc as M,ud as z,wd as A,xb as g,yd as j}from"./chunk-SEETC4WC.js";var L=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-animation-bird"]],standalone:!0,features:[s],decls:8,vars:0,consts:[[1,"bird-container","bird-container--one"],[1,"bird","bird--one"],[1,"bird-container","bird-container--two"],[1,"bird","bird--two"],[1,"bird-container","bird-container--three"],[1,"bird","bird--three"],[1,"bird-container","bird-container--four"],[1,"bird","bird--four"]],template:function(r,d){r&1&&(i(0,"div",0),o(1,"div",1),n(),i(2,"div",2),o(3,"div",3),n(),i(4,"div",4),o(5,"div",5),n(),i(6,"div",6),o(7,"div",7),n())}})}}return e})();var N=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-animation-dots"]],standalone:!0,features:[s],decls:13,vars:0,consts:[[1,"animation-section"],[1,"cross","po-1"],[1,"cross","po-2"],[1,"cross","po-3"],[1,"round","po-4"],[1,"round","po-5"],[1,"round","r-2","po-6"],[1,"round","r-2","po-7"],[1,"round","r-y","po-8"],[1,"round","r-y","po-9"],[1,"square","po-10"],[1,"square","po-11"],[1,"square","s-2","po-12"]],template:function(r,d){r&1&&(i(0,"div",0),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12),n())}})}}return e})();function Y(e,b){e&1&&o(0,"app-animation-dots")}function Z(e,b){e&1&&o(0,"app-animation-bird")}var D=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-animations"]],inputs:{type:"type"},standalone:!0,features:[s],decls:2,vars:2,template:function(r,d){r&1&&v(0,Y,1,0,"app-animation-dots")(1,Z,1,0,"app-animation-bird"),r&2&&(u(d.type=="dots"?0:-1),a(),u(d.type=="bird"?1:-1))},dependencies:[N,L]})}}return e})();var q=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-pages-breadcrumb"]],inputs:{bg_image:"bg_image",title:"title",parent:"parent",child:"child",paddingClass:"paddingClass"},standalone:!0,features:[s],decls:15,vars:8,consts:[[1,"breadcrumb-section","pt-0","bg-size"],["alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none",3,"src"],[1,"breadcrumb-content"],["aria-label","breadcrumb",1,"theme-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)"],["aria-current","page",1,"breadcrumb-item","active"],[1,"title-breadcrumb"]],template:function(r,d){r&1&&(i(0,"section",0),o(1,"img",1),i(2,"div",2)(3,"div")(4,"h2"),l(5),n(),i(6,"nav",3)(7,"ol",4)(8,"li",5)(9,"a",6),l(10),n()(),i(11,"li",7),l(12),n()()()()(),i(13,"div",8),l(14,"Tuba International "),n()()),r&2&&(f("background-image","url("+d.bg_image+")"),a(),m("src",d.bg_image,C),a(),_("pt-0",d.paddingClass),a(3),p(d.title),a(5),p(d.parent),a(2),p(d.child))}})}}return e})();var $=(()=>{class e{constructor(t){this.hotelService=t}static{this.\u0275fac=function(r){return new(r||e)(x(F))}}static{this.\u0275cmp=c({type:e,selectors:[["app-restaurant-single-page-breadcrumb"]],standalone:!0,features:[s],decls:17,vars:6,consts:[[1,"breadcrumb-section","order-food-section","pt-0","bg-size"],["src","assets/images/restaurant/breadcrumb.jpg","alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none"],[1,"breadcrumb-content","restaurant-name"],["src","assets/images/restaurant/logo.png","alt","restaurant-logo",1,"img-fluid","blur-up","lazyload"]],template:function(r,d){r&1&&(i(0,"section",0),o(1,"img",1),i(2,"div",2)(3,"div"),o(4,"img",3),i(5,"h3"),l(6,"italian restro"),n(),i(7,"h6"),l(8,"Fast Food, Cafe, Italian"),n(),i(9,"ul")(10,"li"),l(11,"4.5 Rating"),n(),i(12,"li"),l(13,"30 mins"),n(),i(14,"li"),l(15),B(16,"currencyPipe"),n()()()()()),r&2&&(f("background-image","url(assets/images/restaurant/breadcrumb.jpg)"),a(15),y("",E(16,3,25,d.hotelService.currency)," for 2"))},dependencies:[P]})}}return e})();var te=()=>["/restaurant/listing/grid-view/2-grid"],G=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-restaurant-breadcrumb"]],inputs:{sectionClass:"sectionClass"},standalone:!0,features:[s],decls:19,vars:5,consts:[[1,"order-food-section","pt-0","bg-size",3,"ngClass"],["src","assets/images/restaurant/background/1.jpg","alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none"],[1,"order-food"],[1,"container"],[1,"row"],[1,"col-lg-8","offset-lg-2"],[1,"book-table","section-b-space","p-0","single-table"],[1,"table-form"],[1,"row","w-100"],[1,"form-group","col-md-4"],["type","text","placeholder","enter your location",1,"form-control"],[1,"form-group","col-md-5"],["type","text","placeholder","what are you craving?",1,"form-control"],[1,"search","col-md-3"],["href","javascript:void(0)",1,"btn","btn-rounded","color1",3,"routerLink"]],template:function(r,d){r&1&&(i(0,"section",0),o(1,"img",1),i(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3"),l(8,"The food you love, delivered with care"),n(),i(9,"div",7)(10,"form")(11,"div",8)(12,"div",9),o(13,"input",10),n(),i(14,"div",11),o(15,"input",12),n(),i(16,"div",13)(17,"a",14),l(18,"find food"),n()()()()()()()()()()()),r&2&&(f("background-image","url(assets/images/restaurant/background/1.jpg)"),m("ngClass",d.sectionClass),a(17),m("routerLink",S(4,te)))},dependencies:[M,R,j,z,A,T]})}}return e})();var J=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-cab-breadcrumb"]],inputs:{bg_image:"bg_image",title:"title",parent:"parent",child:"child"},standalone:!0,features:[s],decls:16,vars:6,consts:[[1,"breadcrumb-section","flight-sec","pt-0","bg-size"],["alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none",3,"src"],[1,"container"],[1,"row"],[1,"col-12"],[1,"breadcrumb-right","breadcrumb-content","pt-0"],["aria-label","breadcrumb",1,"theme-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)"],["aria-current","page",1,"breadcrumb-item","active"]],template:function(r,d){r&1&&(i(0,"section",0),o(1,"img",1),i(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div")(7,"h2"),l(8),n(),i(9,"nav",6)(10,"ol",7)(11,"li",8)(12,"a",9),l(13),n()(),i(14,"li",10),l(15),n()()()()()()()()()),r&2&&(f("background-image","url("+d.bg_image+")"),a(),m("src",d.bg_image,C),a(7),p(d.title),a(5),p(d.parent),a(2),p(d.child))}})}}return e})();function ie(e,b){if(e&1&&(i(0,"div",2)(1,"div")(2,"h2"),l(3),n(),i(4,"nav",3)(5,"ol",4)(6,"li",5)(7,"a",6),l(8),n()(),i(9,"li",7),l(10),n()()()()()),e&2){let t=g();a(3),p(t.title),a(5),p(t.parent),a(2),p(t.child)}}var K=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-flight-breadcrumb"]],inputs:{FlightDetails:"FlightDetails",bg_image:"bg_image",title:"title",parent:"parent",child:"child"},standalone:!0,features:[s],decls:3,vars:6,consts:[[1,"breadcrumb-section","pt-0","bg-size"],["alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none",3,"src"],[1,"breadcrumb-content","dark-content"],["aria-label","breadcrumb",1,"theme-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)"],["aria-current","page",1,"breadcrumb-item","active"]],template:function(r,d){r&1&&(i(0,"section",0),o(1,"img",1),v(2,ie,11,3,"div",2),n()),r&2&&(f("background-image","url("+d.bg_image+")"),_("small-sec",!d.FlightDetails),a(),m("src",d.bg_image,C),a(),u(d.FlightDetails?2:-1))}})}}return e})();function ne(e,b){if(e&1&&(i(0,"div",2)(1,"div",3)(2,"video",4),o(3,"source",5),n()(),i(4,"div",6)(5,"div",7)(6,"div",8)(7,"div")(8,"h1"),l(9),n(),i(10,"ul",9)(11,"li"),o(12,"i",10),l(13),n(),i(14,"li"),o(15,"i",11),l(16),n(),i(17,"li"),o(18,"i",12),i(19,"a",13),l(20,"download pdf"),n()()()()()()()()),e&2){let t=g(2);a(9),p(t.title),a(4),y("",t.days," days"),a(3),p(t.date)}}function ae(e,b){e&1&&(i(0,"div",17),o(1,"app-animations",18),n()),e&2&&(a(),m("type","bird"))}function re(e,b){if(e&1&&(i(0,"div")(1,"div",14),o(2,"img",15),i(3,"div",16)(4,"div",6)(5,"div",7)(6,"div",8)(7,"div")(8,"h1"),l(9),n(),i(10,"ul",9)(11,"li"),o(12,"i",10),l(13),n(),i(14,"li"),o(15,"i",11),l(16),n(),i(17,"li"),o(18,"i",12),i(19,"a",13),l(20,"download pdf"),n()()()()()()()(),v(21,ae,2,1,"div",17),n()()),e&2){let t=g(2);a(),f("background-image","url("+t.bg_image+")"),_("parallax-img",t.birdAnimation),a(),m("src",t.bg_image,C),a(4),_("pt-0",!t.birdAnimation),a(3),p(t.title),a(4),y("",t.days," days"),a(3),p(t.date),a(5),u(t.birdAnimation?21:-1)}}function oe(e,b){if(e&1&&v(0,ne,21,3,"div",2)(1,re,22,11,"div"),e&2){let t=g();u(t.tourVideo?0:1)}}function le(e,b){e&1&&(i(0,"span"),l(1,"Tuba International "),n())}function de(e,b){if(e&1&&(i(0,"ul",9)(1,"li"),o(2,"i",10),l(3),n(),i(4,"li"),o(5,"i",11),l(6),n(),i(7,"li"),o(8,"i",12),i(9,"a",22),l(10,"download pdf"),n()()()),e&2){let t=g(2).$implicit;a(3),y("",t.days," days"),a(3),p(t.date)}}function me(e,b){if(e&1&&(i(0,"div")(1,"div",14),o(2,"img",20),i(3,"div",16)(4,"div",6)(5,"div",7)(6,"div",21)(7,"div")(8,"h1"),l(9),v(10,le,2,0,"span"),n(),v(11,de,11,2,"ul",9),n()()()()()()()),e&2){let t=g().$implicit;a(),f("background-image","url("+t.image+")"),a(),m("src",t.image,C),a(7),y("",t.title," "),a(),u(t.subTitle?10:-1),a(),u(t.details?11:-1)}}function pe(e,b){e&1&&v(0,me,12,6,"ng-template",19)}function ce(e,b){if(e&1&&(i(0,"owl-carousel-o",1),k(1,pe,1,0,null,19,I),n()),e&2){let t=g();m("options",t.options),a(),w(t.carouselData)}}var O=(()=>{class e{constructor(){this.carouselData=[{title:"splendid spain",days:7,date:"11 dec, 2019",image:"assets/images/tour/spain4.jpg",details:!0},{title:"splendid spain",image:"assets/images/tour/spain3.jpg",subTitle:!0}],this.options={loop:!0,nav:!0,dots:!1,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],responsive:{0:{items:1}}}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-tour-breadcrumb-single-page"]],inputs:{bg_image:"bg_image",title:"title",days:"days",date:"date",slider:"slider",birdAnimation:"birdAnimation",tourVideo:"tourVideo"},standalone:!0,features:[s],decls:3,vars:1,consts:[[1,"home_section","p-0","overflow-hidden"],[3,"options"],["id","block",1,"home","home-70",2,"width","100%"],[2,"position","absolute","z-index","-1","inset","0px","overflow","hidden","background-size","cover","background-color","transparent","background-repeat","no-repeat","background-position","0% 50%","background-image","none"],["autoplay","","loop","","muted","",2,"margin","auto","position","absolute","z-index","-1","top","50%","left","0%","transform","translate(0%, -50%)","visibility","visible","opacity","1","width","1849px","height","auto"],["src","assets/video/city.mp4","type","video/mp4"],[1,"row"],[1,"col-md-8","offset-md-2"],[1,"home-content","mix-layout","mrg-cls"],[1,"package-detail"],[1,"far","fa-calendar-alt"],[1,"fas","fa-plane"],[1,"fas","fa-download"],["href","javascript:vod(0)"],[1,"home","home-60","bg-size"],["alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none",3,"src"],[1,"container"],[1,"bird-animation"],[3,"type"],["carouselSlide",""],["alt","destination-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none",3,"src"],[1,"home-content","pt-0","mix-layout","mrg-cls"],["href","javascript:void(0)"]],template:function(r,d){r&1&&(i(0,"section",0),v(1,oe,2,1)(2,ce,3,1,"owl-carousel-o",1),n()),r&2&&(a(),u(d.slider?2:1))},dependencies:[D,U,H,V]})}}return e})();var Q=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-tour-breadcrumb"]],inputs:{bg_image:"bg_image",title:"title",parent:"parent",child:"child"},standalone:!0,features:[s],decls:15,vars:7,consts:[[1,"breadcrumb-section","parallax-img","pt-0","bg-size"],["alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none",3,"src"],[1,"breadcrumb-content","overlay-black"],["aria-label","breadcrumb",1,"theme-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)"],["aria-current","page",1,"breadcrumb-item","active"],[1,"bird-animation"],[3,"type"]],template:function(r,d){r&1&&(i(0,"section",0),o(1,"img",1),i(2,"div",2)(3,"div")(4,"h2"),l(5),n(),i(6,"nav",3)(7,"ol",4)(8,"li",5)(9,"a",6),l(10),n()(),i(11,"li",7),l(12),n()()()()(),i(13,"div",8),o(14,"app-animations",9),n()()),r&2&&(f("background-image","url("+d.bg_image+")"),a(),m("src",d.bg_image,C),a(4),p(d.title),a(5),p(d.parent),a(2),p(d.child),a(2),m("type","bird"))},dependencies:[D]})}}return e})();var se=()=>["/hotel/booking/hotel-booking"],W=(()=>{class e{constructor(t){this.hotelService=t}static{this.\u0275fac=function(r){return new(r||e)(x(F))}}static{this.\u0275cmp=c({type:e,selectors:[["app-hotel-breadcrumb-title"]],standalone:!0,features:[s],decls:37,vars:6,consts:[[1,"hotel-title-section"],[1,"container"],[1,"row"],[1,"col-12"],[1,"hotel-name"],[1,"left-part"],[1,"top"],[1,"rating"],[1,"fas","fa-star"],[1,"far","fa-star"],[1,"share-buttons"],["href","javascript:void(0)",1,"btn","btn-solid"],[1,"far","fa-share-square"],[1,"far","fa-heart"],[1,"facility-detail"],[1,"right-part"],[1,"price"],["href","javascript:void(0)",1,"btn","btn-rounded","btn-sm","color1",3,"routerLink"]],template:function(r,d){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),l(8,"sea view hotel"),n(),i(9,"div",7),o(10,"i",8)(11,"i",8)(12,"i",8)(13,"i",8)(14,"i",9),n(),i(15,"div",10)(16,"a",11),o(17,"i",12),l(18," share"),n(),i(19,"a",11),o(20,"i",13),l(21," save"),n()()(),i(22,"p"),l(23,"Mina Road, Bur Dubai, Dubai, United Arab Emirates"),n(),i(24,"div",14)(25,"span"),l(26,"free wifi"),n(),i(27,"span"),l(28,"free breakfast"),n()()(),i(29,"div",15)(30,"h2",16),l(31),B(32,"currencyPipe"),i(33,"span"),l(34,"/ per night"),n()(),i(35,"a",17),l(36,"book this now"),n()()()()()()()),r&2&&(a(31),y("",E(32,2,250,d.hotelService.currency)," "),a(4),m("routerLink",S(5,se)))},dependencies:[T,P]})}}return e})();function ue(e,b){if(e&1&&(i(0,"li",5),l(1),n()),e&2){let t=g();a(),p(t.subParent)}}var X=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-hotel-breadcrumb"]],inputs:{bg_image:"bg_image",title:"title",parent:"parent",subParent:"subParent",child:"child",tourBreadcrumb:"tourBreadcrumb"},standalone:!0,features:[s],decls:16,vars:9,consts:[[1,"breadcrumb-section","pt-0","bg-size"],["alt","background-image",1,"bg-img","img-fluid","blur-up","lazyload",2,"display","none",3,"src"],[1,"breadcrumb-content"],["aria-label","breadcrumb",1,"theme-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[1,"title-breadcrumb"]],template:function(r,d){r&1&&(i(0,"section",0),o(1,"img",1),i(2,"div",2)(3,"div")(4,"h2"),l(5),n(),i(6,"nav",3)(7,"ol",4)(8,"li",5)(9,"a",6),l(10),n()(),v(11,ue,2,1,"li",5),i(12,"li",7),l(13),n()()()()(),i(14,"div",8),l(15,"Tuba"),n()()),r&2&&(f("background-image","url("+d.bg_image+")"),a(),m("src",d.bg_image,C),a(),_("pt-0",d.tourBreadcrumb),a(3),p(d.title),a(5),p(d.parent),a(),u(d.subParent?11:-1),a(2),p(d.child))}})}}return e})();function be(e,b){if(e&1&&o(0,"app-hotel-breadcrumb",0),e&2){let t=g();m("bg_image",t.bg_image)("title",t.title)("parent",t.parent)("subParent",t.subParent)("child",t.child)("tourBreadcrumb",t.tourBreadcrumb)}}function ge(e,b){e&1&&o(0,"app-hotel-breadcrumb-title")}function fe(e,b){if(e&1&&o(0,"app-tour-breadcrumb",1),e&2){let t=g();m("bg_image",t.bg_image)("title",t.title)("parent",t.parent)("child",t.child)}}function ve(e,b){if(e&1&&o(0,"app-tour-breadcrumb-single-page",2),e&2){let t=g();m("bg_image",t.bg_image)("title",t.title)("days",t.days)("date",t.date)("slider",t.slider)("birdAnimation",t.birdAnimation)("tourVideo",t.tourVideo)}}function Ce(e,b){if(e&1&&o(0,"app-flight-breadcrumb",3),e&2){let t=g();m("FlightDetails",t.FlightDetails)("bg_image",t.bg_image)("title",t.title)("parent",t.parent)("child",t.child)}}function he(e,b){if(e&1&&o(0,"app-cab-breadcrumb",1),e&2){let t=g();m("bg_image",t.bg_image)("title",t.title)("parent",t.parent)("child",t.child)}}function _e(e,b){if(e&1&&o(0,"app-restaurant-breadcrumb",4),e&2){let t=g();m("sectionClass",t.sectionClass)}}function ye(e,b){e&1&&o(0,"app-restaurant-single-page-breadcrumb")}function xe(e,b){if(e&1&&o(0,"app-pages-breadcrumb",5),e&2){let t=g();m("bg_image",t.bg_image)("title",t.title)("parent",t.parent)("child",t.child)("paddingClass",t.paddingClass)}}var nt=(()=>{class e{constructor(){this.slider=!1,this.birdAnimation=!1,this.tourVideo=!1,this.tourBreadcrumb=!1,this.paddingClass=!1}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-breadcrumbs"]],inputs:{type:"type",bg_image:"bg_image",title:"title",parent:"parent",subParent:"subParent",child:"child",days:"days",date:"date",slider:"slider",birdAnimation:"birdAnimation",tourVideo:"tourVideo",tourBreadcrumb:"tourBreadcrumb",FlightDetails:"FlightDetails",sectionClass:"sectionClass",paddingClass:"paddingClass"},standalone:!0,features:[s],decls:9,vars:9,consts:[[3,"bg_image","title","parent","subParent","child","tourBreadcrumb"],[3,"bg_image","title","parent","child"],[3,"bg_image","title","days","date","slider","birdAnimation","tourVideo"],[3,"FlightDetails","bg_image","title","parent","child"],[3,"sectionClass"],[3,"bg_image","title","parent","child","paddingClass"]],template:function(r,d){r&1&&v(0,be,1,6,"app-hotel-breadcrumb",0)(1,ge,1,0,"app-hotel-breadcrumb-title")(2,fe,1,4,"app-tour-breadcrumb",1)(3,ve,1,7,"app-tour-breadcrumb-single-page",2)(4,Ce,1,5,"app-flight-breadcrumb",3)(5,he,1,4,"app-cab-breadcrumb",1)(6,_e,1,1,"app-restaurant-breadcrumb",4)(7,ye,1,0,"app-restaurant-single-page-breadcrumb")(8,xe,1,5,"app-pages-breadcrumb",5),r&2&&(u(d.type=="hotel"?0:-1),a(),u(d.type=="hotel-title"?1:-1),a(),u(d.type=="tour"?2:-1),a(),u(d.type=="tour-single-page"?3:-1),a(),u(d.type=="flight"?4:-1),a(),u(d.type=="cab"?5:-1),a(),u(d.type=="restaurant"?6:-1),a(),u(d.type=="restaurant-single-page"?7:-1),a(),u(d.type=="pages"?8:-1))},dependencies:[X,W,Q,O,K,J,G,$,q]})}}return e})();export{D as a,nt as b};
