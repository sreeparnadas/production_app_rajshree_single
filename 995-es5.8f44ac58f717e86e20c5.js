!function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[995],{5995:function(n,e,r){r.r(e),r.d(e,{CpanelModule:function(){return C}});var c=r(38583),u=r(63423),o=r(37716),p=r(81449),a=r(80291),s=r(73535),l=r(95913),d=["PrintTemplate"];function f(t,n){1&t&&(o.TgZ(0,"span"),o._uU(1,"Little dummy Template"),o.qZA(),o.TgZ(2,"h1"),o._uU(3," Test template to print Sukanta "),o.qZA(),o.TgZ(4,"span"),o._uU(5,"Some text"),o.qZA())}function v(t,n){1&t&&(o.TgZ(0,"div",11),o._uU(1," Div to print "),o.TgZ(2,"h1"),o._uU(3," Test div to print "),o.qZA(),o.TgZ(4,"span"),o._uU(5,"Vfl Bochum 1848"),o.qZA(),o._UZ(6,"br"),o.TgZ(7,"span",12),o._uU(8,"FC Schalke 05 - this should NOT print"),o.qZA(),o._UZ(9,"br"),o._UZ(10,"app-receipt",13),o._UZ(11,"img",14),o.qZA()),2&t&&(o.xp6(10),o.Q6J("helloText","Hello!"))}var h=function(){return{color:"red"}},g=function(){return{border:"solid 1px"}},m=function(t,n){return{h1:t,h2:n}};function Z(t,n){if(1&t){var i=o.EpF();o.TgZ(0,"div"),o.YNc(1,f,6,0,"ng-template",4,5,o.W1O),o.YNc(3,v,12,1,"div",6),o.TgZ(4,"button",7),o.NdJ("click",function(){return o.CHM(i),o.oxw().printDiv()}),o._uU(5,"Print div"),o.qZA(),o.TgZ(6,"button",7),o.NdJ("click",function(){return o.CHM(i),o.oxw().printTemplate()}),o._uU(7,"Print Template"),o.qZA(),o.TgZ(8,"button",7),o.NdJ("click",function(){return o.CHM(i),o.oxw().printHTMLElementToCurrentWithCustomCSS()}),o._uU(9,"Print Template"),o.qZA(),o.TgZ(10,"div",8),o._uU(11," print this "),o.qZA(),o.TgZ(12,"button",9),o._uU(13,"print"),o.qZA(),o.TgZ(14,"div",10),o._uU(15," sdfs sdf"),o.qZA(),o.qZA()}2&t&&(o.xp6(3),o.Q6J("ngIf",!1),o.xp6(9),o.Q6J("printStyle",o.WLB(4,m,o.DdM(2,h),o.DdM(3,g))))}var T,x=((T=function(){function n(i,e){t(this,n),this.ngxPrinterService=i,this.authService=e,this.printWindowSubscription=this.ngxPrinterService.$printWindowOpen.subscribe(function(t){}),this.$printItems=this.ngxPrinterService.$printItems}return i(n,[{key:"ngOnInit",value:function(){this.user=this.authService.userBehaviorSubject.value}},{key:"printDiv",value:function(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.printDiv("printDiv"),this.ngxPrinterService.printOpenWindow=!1}},{key:"printTemplate",value:function(){this.ngxPrinterService.printAngular(this.PrintTemplateTpl)}},{key:"printHTMLElementToCurrentWithCustomCSS",value:function(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.renderClass="current-window",this.ngxPrinterService.printHTMLElement(this.PrintComponent.nativeElement),this.ngxPrinterService.printOpenWindow=!0,this.ngxPrinterService.renderClass="default"}},{key:"printerMarkerClicked",value:function(){alert("Print marker clicked")}}]),n}()).\u0275fac=function(t){return new(t||T)(o.Y36(a.Al),o.Y36(s.e))},T.\u0275cmp=o.Xpm({type:T,selectors:[["app-cpanel"]],viewQuery:function(t,n){var i;1&t&&(o.Gf(d,5),o.Gf(p.$,5,o.SBq)),2&t&&(o.iGM(i=o.CRH())&&(n.PrintTemplateTpl=i.first),o.iGM(i=o.CRH())&&(n.PrintComponent=i.first))},decls:8,vars:1,consts:[[1,"d-flex","mt-5"],[1,"col-3"],[1,"col-6"],[4,"ngIf"],["id","test"],["PrintTemplate",""],["id","printDiv","directPrint","true","style","border: 1px solid black;",4,"ngIf"],[3,"click"],["id","print-section"],["printSectionId","print-section","ngxPrint","",3,"printStyle"],["ngxPrintItemMarker","","directPrint","true"],["id","printDiv","directPrint","true",2,"border","1px solid black"],["ngxNoPrint",""],[1,"dummy-bg",3,"helloText"],["id","imId2","src","assets/images/developer.jpg",2,"width","50px","height","50px","margin","5px"]],template:function(t,n){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"div",0),o._UZ(2,"div",1),o.TgZ(3,"div",2),o.TgZ(4,"h1"),o._uU(5,"Welcome"),o.qZA(),o.qZA(),o._UZ(6,"div",1),o.qZA(),o.YNc(7,Z,16,7,"div",3),o.qZA()),2&t&&(o.xp6(7),o.Q6J("ngIf",!1))},directives:[c.O5,l.I,p.$],styles:[""]}),T),S=[{path:"",canActivate:[r(51068).m],component:x}],P=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[u.Bz.forChild(S)],u.Bz]}),n}(),k=r(93738),A=r(3679),b=r(98295),w=r(2700),C=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.ez,P,k.QW,A.u5,b.lN,l.K,w.ReceiptModule]]}),n}()},51068:function(n,e,r){r.d(e,{m:function(){return p}});var c,u=r(37716),o=r(73535),p=((c=function(){function n(i){t(this,n),this.authService=i}return i(n,[{key:"canActivate",value:function(t,n){return this.authService.isAdmin()}}]),n}()).\u0275fac=function(t){return new(t||c)(u.LFG(o.e))},c.\u0275prov=u.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c)}}])}();