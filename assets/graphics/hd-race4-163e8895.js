import{S as se,i as re,s as le,C as oe,c as h,m as b,t as g,a as v,d as w,b as K,e as ae,g as S,f as H,E as j,h as I,k as T,l as C,n as M,p as N,q as y,r as P,u as fe,v as ue,F as ie}from"../TextFitSnugly-472e8846.js";import{B as $e,H as me,I as z,F as ce,t as pe,T as Z,V as _e,a as R,A as ee}from"../Video-feb4715b.js";import{r as ge,S as de}from"../rome-1b48d87f.js";function Q(l,t,s){const e=l.slice();return e[10]=t[s],e[12]=s,e}function U(l,t,s){const e=l.slice();return e[13]=t[s],e}function ve(l){let t,s,e,r,$;return t=new R({props:{value:l[13].name}}),e=new ee({props:{account:l[13].social}}),{c(){h(t.$$.fragment),s=S(),h(e.$$.fragment),r=S()},m(o,a){b(t,o,a),T(o,s,a),b(e,o,a),T(o,r,a),$=!0},p(o,a){const f={};a&32&&(f.value=o[13].name),t.$set(f);const m={};a&32&&(m.account=o[13].social),e.$set(m)},i(o){$||(g(t.$$.fragment,o),g(e.$$.fragment,o),$=!0)},o(o){v(t.$$.fragment,o),v(e.$$.fragment,o),$=!1},d(o){w(t,o),o&&y(s),w(e,o),o&&y(r)}}}function W(l){let t,s;return t=new z({props:{label:"Commentator",$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,r){const $={};r&65568&&($.$$scope={dirty:r,ctx:e}),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function he(l){let t,s;return t=new Z({props:{value:l[4]}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,r){const $={};r&16&&($.value=e[4]),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function be(l){let t,s;return t=new Z({props:{value:l[2],status:l[1]}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,r){const $={};r&4&&($.value=e[2]),r&2&&($.status=e[1]),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function we(l){var $,o;let t,s,e,r;return t=new R({props:{value:($=l[10])==null?void 0:$.players[0].name,oneLine:!0}}),e=new ee({props:{userId:(o=l[10])==null?void 0:o.players[0].id}}),{c(){h(t.$$.fragment),s=S(),h(e.$$.fragment)},m(a,f){b(t,a,f),T(a,s,f),b(e,a,f),r=!0},p(a,f){var d,k;const m={};f&8&&(m.value=(d=a[10])==null?void 0:d.players[0].name),t.$set(m);const c={};f&8&&(c.userId=(k=a[10])==null?void 0:k.players[0].id),e.$set(c)},i(a){r||(g(t.$$.fragment,a),g(e.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),v(e.$$.fragment,a),r=!1},d(a){w(t,a),a&&y(s),w(e,a)}}}function Y(l){var m;let t,s,e,r,$,o,a,f;return s=new _e({props:{width:l[6],height:l[7]}}),r=new z({props:{label:ge(l[12]+1),oneLine:!0,$$slots:{default:[we]},$$scope:{ctx:l}}}),o=new de({props:{id:(m=l[10])==null?void 0:m.id}}),{c(){t=H("div"),h(s.$$.fragment),e=S(),h(r.$$.fragment),$=S(),h(o.$$.fragment),a=S(),I(t,"class","runner svelte-15kxd5s")},m(c,d){T(c,t,d),b(s,t,null),C(t,e),b(r,t,null),C(t,$),b(o,t,null),C(t,a),f=!0},p(c,d){var x;const k={};d&65544&&(k.$$scope={dirty:d,ctx:c}),r.$set(k);const D={};d&8&&(D.id=(x=c[10])==null?void 0:x.id),o.$set(D)},i(c){f||(g(s.$$.fragment,c),g(r.$$.fragment,c),g(o.$$.fragment,c),f=!0)},o(c){v(s.$$.fragment,c),v(r.$$.fragment,c),v(o.$$.fragment,c),f=!1},d(c){c&&y(t),w(s),w(r),w(o)}}}function ke(l){let t,s,e,r,$,o,a,f,m,c,d,k,D,x,V,A,G,E,L,O;t=new $e({}),e=new me({props:{dense:!0}});let F=l[5],p=[];for(let n=0;n<F.length;n+=1)p[n]=W(U(l,F,n));const te=n=>v(p[n],1,1,()=>{p[n]=null});k=new z({props:{label:"EST",$$slots:{default:[he]},$$scope:{ctx:l}}}),x=new z({props:{label:"Current Time",$$slots:{default:[be]},$$scope:{ctx:l}}});let q=l[3],_=[];for(let n=0;n<q.length;n+=1)_[n]=Y(Q(l,q,n));const ne=n=>v(_[n],1,1,()=>{_[n]=null});return E=new ce({}),{c(){h(t.$$.fragment),s=S(),r=H("div"),h(e.$$.fragment),$=S(),o=H("main"),a=H("div"),f=H("div"),m=H("div");for(let n=0;n<p.length;n+=1)p[n].c();c=S(),d=H("div"),h(k.$$.fragment),D=S(),h(x.$$.fragment),V=S(),A=H("div");for(let n=0;n<_.length;n+=1)_[n].c();G=S(),L=H("div"),h(E.$$.fragment),j(r,"display","contents"),j(r,"--marginX","64px"),I(m,"id","commentators"),I(m,"class","svelte-15kxd5s"),I(d,"id","times"),I(d,"class","svelte-15kxd5s"),I(f,"id","info"),I(f,"class","svelte-15kxd5s"),I(a,"id","others"),I(a,"class","svelte-15kxd5s"),I(A,"id","runners"),I(A,"class","svelte-15kxd5s"),I(o,"class","svelte-15kxd5s"),j(L,"display","contents"),j(L,"--marginX","64px")},m(n,u){b(t,n,u),T(n,s,u),T(n,r,u),b(e,r,null),T(n,$,u),T(n,o,u),C(o,a),C(a,f),C(f,m);for(let B=0;B<p.length;B+=1)p[B]&&p[B].m(m,null);C(f,c),C(f,d),b(k,d,null),C(d,D),b(x,d,null),C(o,V),C(o,A);for(let B=0;B<_.length;B+=1)_[B]&&_[B].m(A,null);T(n,G,u),T(n,L,u),b(E,L,null),O=!0},p(n,u){if(u&32){F=n[5];let i;for(i=0;i<F.length;i+=1){const X=U(n,F,i);p[i]?(p[i].p(X,u),g(p[i],1)):(p[i]=W(X),p[i].c(),g(p[i],1),p[i].m(m,null))}for(M(),i=F.length;i<p.length;i+=1)te(i);N()}const B={};u&65552&&(B.$$scope={dirty:u,ctx:n}),k.$set(B);const J={};if(u&65542&&(J.$$scope={dirty:u,ctx:n}),x.$set(J),u&200){q=n[3];let i;for(i=0;i<q.length;i+=1){const X=Q(n,q,i);_[i]?(_[i].p(X,u),g(_[i],1)):(_[i]=Y(X),_[i].c(),g(_[i],1),_[i].m(A,null))}for(M(),i=q.length;i<_.length;i+=1)ne(i);N()}},i(n){if(!O){g(t.$$.fragment,n),g(e.$$.fragment,n);for(let u=0;u<F.length;u+=1)g(p[u]);g(k.$$.fragment,n),g(x.$$.fragment,n);for(let u=0;u<q.length;u+=1)g(_[u]);g(E.$$.fragment,n),O=!0}},o(n){v(t.$$.fragment,n),v(e.$$.fragment,n),p=p.filter(Boolean);for(let u=0;u<p.length;u+=1)v(p[u]);v(k.$$.fragment,n),v(x.$$.fragment,n),_=_.filter(Boolean);for(let u=0;u<_.length;u+=1)v(_[u]);v(E.$$.fragment,n),O=!1},d(n){w(t,n),n&&y(s),n&&e&&y(r),w(e,n),n&&y($),n&&y(o),P(p,n),w(k),w(x),P(_,n),n&&y(G),n&&E&&y(L),w(E,n)}}}function xe(l){let t,s;return t=new oe({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,[r]){const $={};r&65598&&($.$$scope={dirty:r,ctx:e}),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Be(l,t,s){let e,r,$,o,a,f,m,c,d=fe,k=()=>(d(),d=ue(a,V=>s(5,c=V)),a);K(l,ie,V=>s(8,f=V)),K(l,pe,V=>s(9,m=V)),l.$$.on_destroy.push(()=>d());const D=`${1920*.37}px`,x=`${1080*.37}px`;return l.$$.update=()=>{l.$$.dirty&256&&s(4,e=(f==null?void 0:f.estimate)??""),l.$$.dirty&256&&s(3,r=(f==null?void 0:f.teams)??[]),l.$$.dirty&512&&s(2,$=m==null?void 0:m.time),l.$$.dirty&512&&s(1,o=m==null?void 0:m.state),l.$$.dirty&256&&k(s(0,a=ae((f==null?void 0:f.externalID)??"")))},[a,o,$,r,e,c,D,x,f,m]}class Ie extends se{constructor(t){super(),re(this,t,Be,xe,le,{})}}new Ie({target:document.getElementById("app")});
