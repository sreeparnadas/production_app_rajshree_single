!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function r(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[706],{45480:function(e,t,r){r.d(t,{q:function(){return s}});var i,a=r(51095),o=r(49983),l=r(37716),s=((i=function e(){n(this,e)}).\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[a.ot,o.c]}),i)},70706:function(t,r,a){a.r(r),a.d(r,{MasterTerminalModule:function(){return re}});var o,l=a(38583),s=a(63423),c=a(51068),m=a(92340),u=a(3679),d=a(88259),f=a.n(d),g=a(37716),h=a(79765),Z=a(5304),p=a(68307),T=a(91841),v=a(84889),x=((o=function(){function t(r,i){var a=this;n(this,t),this.http=r,this.errorService=i,this.BASE_API_URL=m.N.BASE_API_URL,this.terminals=[],this.terminalSubject=new h.xQ,this.http.get(this.BASE_API_URL+"/terminals").subscribe(function(t){a.terminals=t.data,a.terminalSubject.next(e(a.terminals))})}return i(t,[{key:"getTerminals",value:function(){return e(this.terminals)}},{key:"getTerminalListener",value:function(){return this.terminalSubject.asObservable()}},{key:"saveNewTerminal",value:function(e){return this.http.post(this.BASE_API_URL+"/terminals",e).pipe((0,Z.K)(this.errorService.serverError),(0,p.b)(function(e){}))}},{key:"updateTerminal",value:function(e){return this.http.put(this.BASE_API_URL+"/terminals",e).pipe((0,Z.K)(this.errorService.serverError),(0,p.b)(function(e){}))}},{key:"saveTerminalBalance",value:function(e){return this.http.put(this.BASE_API_URL+"/terminals/balance",e).pipe((0,Z.K)(this.errorService.serverError),(0,p.b)(function(e){}))}}]),t}()).\u0275fac=function(e){return new(e||o)(g.LFG(T.eN),g.LFG(v.T))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o),A=a(12173),b=a(73535),q=a(65939),k=a(93738),y=a(35618),I=a(98295),w=a(49983),U=a(67441),N=a(51095),_=a(11494),L=a(72458),S=a(88030),F=a(76627),C=a(45396);function J(e,t){1&e&&(g.TgZ(0,"mat-error"),g._uU(1,"This field is Required"),g.qZA())}function B(e,t){if(1&e&&(g.TgZ(0,"mat-error"),g._uU(1),g.qZA()),2&e){var r=g.oxw(2);g.xp6(1),g.hij("Minimum length of name is ",r.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function Q(e,t){if(1&e&&(g.TgZ(0,"div",31),g.YNc(1,J,2,0,"mat-error",32),g.YNc(2,B,2,1,"mat-error",32),g.qZA()),2&e){var r=g.oxw();g.xp6(1),g.Q6J("ngIf",r.terminalMasterForm.get("terminalName").errors.required),g.xp6(1),g.Q6J("ngIf",r.terminalMasterForm.get("terminalName").errors.minlength)}}function M(e,t){if(1&e&&(g.TgZ(0,"mat-option",33),g._uU(1),g.qZA()),2&e){var r=t.$implicit;g.Q6J("value",r.userId),g.xp6(1),g.hij(" ",r.userName," ")}}function Y(e,t){if(1&e){var r=g.EpF();g.TgZ(0,"tr",34),g.TgZ(1,"td"),g._uU(2),g.qZA(),g.TgZ(3,"td"),g._uU(4),g.qZA(),g.TgZ(5,"td"),g._uU(6),g.qZA(),g.TgZ(7,"td"),g._uU(8),g.qZA(),g.TgZ(9,"td"),g._uU(10),g.qZA(),g.TgZ(11,"td"),g.TgZ(12,"i",35),g.NdJ("click",function(){var e=g.CHM(r).$implicit;return g.oxw().editTerminal(e)}),g.qZA(),g.qZA(),g.qZA()}if(2&e){var i=t.$implicit,n=t.index,a=g.oxw();g.Q6J("ngStyle",a.getBackgroundColor(n)),g.xp6(2),g.Oqu(n+1),g.xp6(2),g.Oqu(i.terminalName),g.xp6(2),g.Oqu(i.pin),g.xp6(2),g.Oqu(i.balance),g.xp6(2),g.Oqu(i.stockist.userName)}}function R(e,t){if(1&e&&(g.TgZ(0,"mat-option",33),g._uU(1),g.qZA()),2&e){var r=t.$implicit;g.Q6J("value",r.terminalId),g.xp6(1),g.hij(" ",r.pin," ")}}function E(e,t){if(1&e&&(g.TgZ(0,"mat-form-field",36),g.TgZ(1,"mat-label"),g._uU(2,"Name"),g.qZA(),g._UZ(3,"input",37),g.TgZ(4,"mat-icon",38),g._uU(5,"person_pin"),g.qZA(),g.qZA()),2&e){var r=g.oxw();g.xp6(3),g.Q6J("value",r.selectedTerminal.terminalName)}}function j(e,t){if(1&e&&(g.TgZ(0,"mat-form-field",36),g.TgZ(1,"mat-label"),g._uU(2,"Current balance"),g.qZA(),g._UZ(3,"input",39),g.TgZ(4,"mat-icon",38),g._uU(5,"account_balance_wallet"),g.qZA(),g.qZA()),2&e){var r=g.oxw();g.xp6(3),g.Q6J("value",r.selectedTerminal.balance)}}function O(e,t){if(1&e&&(g.TgZ(0,"mat-form-field",36),g.TgZ(1,"mat-label"),g._uU(2,"Stockist owner"),g.qZA(),g._UZ(3,"input",37),g.TgZ(4,"mat-icon",38),g._uU(5,"person_pin"),g.qZA(),g.qZA()),2&e){var r=g.oxw(2);g.xp6(3),g.Q6J("value",r.selectedTerminal.stockist.userName)}}function D(e,t){if(1&e&&(g.TgZ(0,"mat-form-field",36),g.TgZ(1,"mat-label"),g._uU(2,"Stockist balance"),g.qZA(),g._UZ(3,"input",39),g.TgZ(4,"mat-icon",38),g._uU(5,"account_balance_wallet"),g.qZA(),g.qZA()),2&e){var r=g.oxw(2);g.xp6(3),g.Q6J("value",r.selectedTerminal.stockist.balance)}}function P(e,t){if(1&e&&(g.TgZ(0,"div",4),g.YNc(1,O,6,1,"mat-form-field",27),g.YNc(2,D,6,1,"mat-form-field",27),g.qZA()),2&e){var r=g.oxw();g.xp6(1),g.Q6J("ngIf",r.selectedTerminal),g.xp6(1),g.Q6J("ngIf",r.selectedTerminal)}}function G(e,t){if(1&e&&(g.TgZ(0,"mat-error"),g._uU(1),g.qZA()),2&e){var r=g.oxw(3);g.xp6(1),g.hij(" Amount should not exceed ",r.terminalLimitForm.controls.amount.errors.max.max," ")}}function V(e,t){if(1&e&&(g.TgZ(0,"mat-form-field",41),g.TgZ(1,"mat-label"),g._uU(2,"Recharge amount"),g.qZA(),g._UZ(3,"input",42),g.TgZ(4,"mat-icon",38),g._uU(5," money"),g.qZA(),g.YNc(6,G,2,1,"mat-error",32),g.qZA()),2&e){var r=g.oxw(2);g.xp6(6),g.Q6J("ngIf",r.terminalLimitForm.get("amount").hasError("max"))}}function z(e,t){if(1&e&&(g.TgZ(0,"div",4),g.YNc(1,V,7,1,"mat-form-field",40),g.qZA()),2&e){var r=g.oxw();g.xp6(1),g.Q6J("ngIf",r.selectedTerminal)}}function H(e,t){if(1&e){var r=g.EpF();g.TgZ(0,"div",43),g.TgZ(1,"div",44),g.TgZ(2,"mat-slide-toggle",45),g.NdJ("change",function(){g.CHM(r);var e=g.oxw();return e.showDevArea=!e.showDevArea}),g._uU(3),g.qZA(),g.qZA(),g.qZA()}if(2&e){var i=g.oxw();g.xp6(3),g.Oqu(i.showDevArea?"Hide Developer Area":"Show Developer Area")}}function X(e,t){if(1&e&&(g.TgZ(0,"div",43),g.TgZ(1,"div",46),g.TgZ(2,"pre"),g._uU(3),g._uU(4),g.ALo(5,"json"),g._uU(6,"\n      "),g.qZA(),g.qZA(),g._UZ(7,"div",44),g.qZA()),2&e){var r=g.oxw();g.xp6(3),g.hij("        ",r.terminalLimitForm.valid,"\n        "),g.xp6(1),g.hij("\n        terminalForm = ",g.lcZ(5,2,r.terminalMasterForm.value),"\n")}}function $(e,t,r){return(e<t?-1:1)*(r?1:-1)}var K=[{path:"",canActivate:[c.m],component:function(){var e=function(){function e(t,r,i){n(this,e),this.masterTerminalService=t,this.masterStockistService=r,this.authService=i,this.isProduction=m.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new u.cw({id:new u.NI(null),terminalName:new u.NI(null,[u.kI.required,u.kI.minLength(2)]),stockistId:new u.NI(null,[u.kI.required])}),this.terminalLimitForm=new u.cw({beneficiaryUid:new u.NI(null,[u.kI.required]),amount:new u.NI(null,[u.kI.required,u.kI.max(0)])})}return i(e,[{key:"ngOnInit",value:function(){var e=this;this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t,console.log(e.stockists,"from terminal")})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([u.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"editTerminal",value:function(e){var t=this.terminals.findIndex(function(t){return t.terminalId===e.terminalId});this.highLightedRowIndex=t,this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockist.userId}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;f().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),f().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):f().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"createNewTerminal",value:function(){var e=this;f().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId}).subscribe(function(t){1===t.success?(e.sortedTerminalList.unshift(t.data),e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),f().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):f().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,r){var i="asc"===e.direction;switch(e.active){case"terminalName":return $(t.terminalName,r.terminalName,i);case"stockistName":return $(t.stockist.userName,r.stockist.userName,i);case"balance":return $(t.balance,r.balance,i);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;f().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var r=t.data,i=e.terminals.findIndex(function(e){return e.terminalId===r.terminalId});e.terminals[i].balance=r.balance,e.terminals[i].stockist.balance=r.stockist.balance,e.sortedTerminalList[i].balance=r.balance,e.sortedTerminalList[i].stockist.balance=r.stockist.balance,e.highLightedRowIndex=i,e.terminalLimitForm.controls.amount.setValidators([u.kI.max(r.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),f().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else f().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(g.Y36(x),g.Y36(A.E),g.Y36(b.e))},e.\u0275cmp=g.Xpm({type:e,selectors:[["app-master-terminal"]],decls:82,vars:15,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["formControlName","stockistId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(g.TgZ(0,"mat-tab-group"),g.TgZ(1,"mat-tab",0),g.TgZ(2,"div",1),g.TgZ(3,"div",2),g.TgZ(4,"mat-card"),g.TgZ(5,"mat-card-header"),g._UZ(6,"div",3),g.TgZ(7,"mat-card-title"),g._uU(8,"New Terminal Form"),g.qZA(),g.qZA(),g.TgZ(9,"mat-card-content"),g.TgZ(10,"div",4),g.TgZ(11,"div",5),g.TgZ(12,"form",6),g.TgZ(13,"div",4),g.TgZ(14,"mat-form-field",5),g.TgZ(15,"mat-label"),g._uU(16,"Terminal Name"),g.qZA(),g._UZ(17,"input",7),g.YNc(18,Q,3,2,"div",8),g.qZA(),g.qZA(),g.TgZ(19,"div",4),g.TgZ(20,"mat-form-field",5),g.TgZ(21,"mat-label"),g._uU(22,"Stockist"),g.qZA(),g.TgZ(23,"mat-select",9),g.YNc(24,M,2,2,"mat-option",10),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(25,"div",4),g.TgZ(26,"button",11),g.NdJ("click",function(){return t.createNewTerminal()}),g._uU(27,"Create"),g.qZA(),g.TgZ(28,"button",11),g.NdJ("click",function(){return t.updateTerminal()}),g._uU(29,"Update"),g.qZA(),g.TgZ(30,"button",12),g.NdJ("click",function(){return t.clearMasterTerminalForm()}),g._uU(31,"clear"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(32,"div",13),g.TgZ(33,"table",14),g.NdJ("matSortChange",function(e){return t.sortData(e)}),g.TgZ(34,"thead"),g.TgZ(35,"tr"),g.TgZ(36,"th",15),g._uU(37,"Terminal List"),g.qZA(),g.qZA(),g.TgZ(38,"tr"),g.TgZ(39,"th"),g._uU(40,"Id"),g.qZA(),g.TgZ(41,"th",16),g._uU(42,"Terminal name"),g.qZA(),g.TgZ(43,"th",17),g._uU(44,"Pin"),g.qZA(),g.TgZ(45,"th",18),g._uU(46,"Balance"),g.qZA(),g.TgZ(47,"th",19),g._uU(48,"Stockist"),g.qZA(),g.TgZ(49,"th",20),g._uU(50,"Edit"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(51,"tbody"),g.YNc(52,Y,13,6,"tr",21),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(53,"mat-tab",22),g.TgZ(54,"div",1),g._UZ(55,"div",23),g.TgZ(56,"div",24),g.TgZ(57,"mat-card"),g.TgZ(58,"mat-card-header"),g._UZ(59,"div",3),g.TgZ(60,"mat-card-title"),g._uU(61,"Recharge Terminal"),g.qZA(),g.qZA(),g.TgZ(62,"mat-card-content"),g.TgZ(63,"div",4),g.TgZ(64,"div",5),g.TgZ(65,"form",6),g.TgZ(66,"div",4),g.TgZ(67,"mat-form-field",25),g.TgZ(68,"mat-label"),g._uU(69,"Terminal"),g.qZA(),g.TgZ(70,"mat-select",26),g.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),g.YNc(71,R,2,2,"mat-option",10),g.qZA(),g.qZA(),g.YNc(72,E,6,1,"mat-form-field",27),g.YNc(73,j,6,1,"mat-form-field",27),g.qZA(),g.YNc(74,P,3,2,"div",28),g.YNc(75,z,2,1,"div",28),g.TgZ(76,"div",4),g.TgZ(77,"button",29),g.NdJ("click",function(){return t.rechargeToTerminal()}),g._uU(78,"Save"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(79,"div",23),g.qZA(),g.qZA(),g.qZA(),g.YNc(80,H,4,1,"div",30),g.YNc(81,X,8,4,"div",30)),2&e&&(g.xp6(12),g.Q6J("formGroup",t.terminalMasterForm),g.xp6(6),g.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),g.xp6(6),g.Q6J("ngForOf",t.stockists),g.xp6(2),g.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble),g.xp6(2),g.Q6J("disabled",!t.isTerminalUpdatAble),g.xp6(24),g.Q6J("ngForOf",t.sortedTerminalList),g.xp6(13),g.Q6J("formGroup",t.terminalLimitForm),g.xp6(6),g.Q6J("ngForOf",t.sortedTerminalList),g.xp6(1),g.Q6J("ngIf",t.selectedTerminal),g.xp6(1),g.Q6J("ngIf",t.selectedTerminal),g.xp6(1),g.Q6J("ngIf",t.selectedTerminal),g.xp6(1),g.Q6J("ngIf",t.selectedTerminal),g.xp6(2),g.Q6J("disabled",!t.terminalLimitForm.valid),g.xp6(3),g.Q6J("ngIf",!t.isProduction),g.xp6(1),g.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[q.SP,q.uX,k.a8,k.dk,k.kc,k.n5,k.dn,y.xw,y.Wh,y.SQ,y.yH,u._Y,u.JL,u.sg,I.KE,I.hX,w.Nt,u.Fj,u.JJ,u.u,l.O5,U.gD,l.sg,N.lW,_.YE,_.nU,I.TO,L.ey,l.PC,S.Zl,F.Hw,I.R9,C.Rr],pipes:[l.Ts],styles:[""]}),e}(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],W=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[s.Bz.forChild(K)],s.Bz]}),e}(),ee=a(45480),te=a(15566),re=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[l.ez,W,q.Nh,ee.q,te.o9,k.QW,u.u5,u.UX,C.rP,_.JX,U.LD,F.Ps]]}),e}()},51068:function(e,t,r){r.d(t,{m:function(){return s}});var a,o=r(37716),l=r(73535),s=((a=function(){function e(t){n(this,e),this.authService=t}return i(e,[{key:"canActivate",value:function(e,t){return this.authService.isAdmin()}}]),e}()).\u0275fac=function(e){return new(e||a)(o.LFG(l.e))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a)}}])}();