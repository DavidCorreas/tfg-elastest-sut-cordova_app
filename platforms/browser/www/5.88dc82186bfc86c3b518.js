(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(n,t,i){"use strict";i.r(t),i.d(t,"AuthModule",(function(){return M}));var e=i("rhD1"),a=i("Valr"),o=i("QJY3"),r=i("DUip"),c=i("TYT/"),s=i("qXBG"),u=i("17Os"),b=i("uad8"),p=i("eHTH"),m=i("cSbt"),d=i("p+mS");function l(n,t){1&n&&c.Ob(0,"mat-spinner")}function f(n,t){1&n&&(c.Sb(0,"mat-error"),c.wc(1,"Please enter a valid E-mail."),c.Rb())}function g(n,t){1&n&&(c.Sb(0,"mat-error"),c.wc(1,"Please enter a valid password"),c.Rb())}function v(n,t){if(1&n){var i=c.Tb();c.Sb(0,"form",2,3),c.ac("submit",(function(){c.pc(i);var n=c.nc(1);return c.ec().onLogin(n)})),c.Sb(2,"mat-form-field"),c.Ob(3,"input",4,5),c.vc(5,f,2,0,"mat-error",0),c.Rb(),c.Sb(6,"mat-form-field"),c.Ob(7,"input",6,7),c.vc(9,g,2,0,"mat-error",0),c.Rb(),c.Sb(10,"button",8),c.wc(11,"Login"),c.Rb(),c.Rb()}if(2&n){var e=c.nc(4),a=c.nc(8);c.Bb(5),c.jc("ngIf",e.invalid),c.Bb(4),c.jc("ngIf",a.invalid)}}function h(n,t){1&n&&c.Ob(0,"mat-spinner")}function S(n,t){1&n&&(c.Sb(0,"mat-error"),c.wc(1,"Please enter a valid E-mail."),c.Rb())}function w(n,t){1&n&&(c.Sb(0,"mat-error"),c.wc(1,"Please enter a valid password"),c.Rb())}function y(n,t){if(1&n){var i=c.Tb();c.Sb(0,"form",2,3),c.ac("submit",(function(){c.pc(i);var n=c.nc(1);return c.ec().onSingup(n)})),c.Sb(2,"mat-form-field"),c.Ob(3,"input",4,5),c.vc(5,S,2,0,"mat-error",0),c.Rb(),c.Sb(6,"mat-form-field"),c.Ob(7,"input",6,7),c.vc(9,w,2,0,"mat-error",0),c.Rb(),c.Sb(10,"button",8),c.wc(11,"Singup"),c.Rb(),c.Rb()}if(2&n){var e=c.nc(4),a=c.nc(8);c.Bb(5),c.jc("ngIf",e.invalid),c.Bb(4),c.jc("ngIf",a.invalid)}}var I=[{path:"login",component:function(){function n(n){this.authService=n,this.isLoading=!1}return n.prototype.ngOnInit=function(){var n=this;this.authStatusListener=this.authService.getAuthStatusListener().subscribe((function(){n.isLoading=!1}))},n.prototype.onLogin=function(n){n.invalid||(this.isLoading=!0,this.authService.login(n.value.email,n.value.password))},n.prototype.ngOnDestroy=function(){this.authStatusListener.unsubscribe()},n.\u0275fac=function(t){return new(t||n)(c.Nb(s.a))},n.\u0275cmp=c.Hb({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["matInput","","name","password","ngModel","","type","password","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit"]],template:function(n,t){1&n&&(c.Sb(0,"mat-card"),c.vc(1,l,1,0,"mat-spinner",0),c.vc(2,v,12,2,"form",1),c.Rb()),2&n&&(c.Bb(1),c.jc("ngIf",t.isLoading),c.Bb(1),c.jc("ngIf",!t.isLoading))},directives:[u.a,a.k,b.b,o.p,o.j,o.k,p.c,m.a,o.a,o.i,o.l,o.n,o.b,d.b,p.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n}()},{path:"singup",component:function(){function n(n){this.authService=n,this.isLoading=!1}return n.prototype.ngOnInit=function(){var n=this;this.authStatusSub=this.authService.getAuthStatusListener().subscribe((function(t){n.isLoading=!1}))},n.prototype.onSingup=function(n){n.invalid||(this.isLoading=!0,this.authService.createUser(n.value.email,n.value.password))},n.prototype.ngOnDestroy=function(){this.authStatusSub.unsubscribe()},n.\u0275fac=function(t){return new(t||n)(c.Nb(s.a))},n.\u0275cmp=c.Hb({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["singupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["matInput","","name","password","ngModel","","type","password","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit"]],template:function(n,t){1&n&&(c.Sb(0,"mat-card"),c.vc(1,h,1,0,"mat-spinner",0),c.vc(2,y,12,2,"form",1),c.Rb()),2&n&&(c.Bb(1),c.jc("ngIf",t.isLoading),c.Bb(1),c.jc("ngIf",!t.isLoading))},directives:[u.a,a.k,b.b,o.p,o.j,o.k,p.c,m.a,o.a,o.i,o.l,o.n,o.b,d.b,p.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n}()}],L=function(){function n(){}return n.\u0275mod=c.Lb({type:n}),n.\u0275inj=c.Kb({factory:function(t){return new(t||n)},imports:[[r.e.forChild(I)],r.e]}),n}(),M=function(){function n(){}return n.\u0275mod=c.Lb({type:n}),n.\u0275inj=c.Kb({factory:function(t){return new(t||n)},imports:[[a.c,o.g,e.a,L]]}),n}()}}]);