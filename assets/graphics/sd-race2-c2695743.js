import{S as se,i as le,s as re,C as oe,c as d,m as b,t as p,a as v,d as h,b as L,e as ae,g as I,f as A,E as z,h as x,k as T,l as C,n as M,p as N,q as V,r as P,u as fe,v as ie,F as ue,A as $e}from"../TextFitSnugly-472e8846.js";import{B as me,H as ce,I as G,F as pe,t as _e,T as Z,V as ge,a as R,A as ee}from"../Video-feb4715b.js";import{r as ve,S as de}from"../rome-1b48d87f.js";function Q(r,t,s){const e=r.slice();return e[10]=t[s],e}function U(r,t,s){const e=r.slice();return e[13]=t[s],e[15]=s,e}function be(r){var c;let t,s,e,l,f,o,a,$;return s=new ge({props:{width:r[6],height:r[7]}}),l=new G({props:{dense:!0,label:ve(r[15]+1),$$slots:{default:[he]},$$scope:{ctx:r}}}),o=new de({props:{id:(c=r[13])==null?void 0:c.id}}),{c(){t=A("div"),d(s.$$.fragment),e=I(),d(l.$$.fragment),f=I(),d(o.$$.fragment),a=I(),x(t,"class","runner svelte-1yvliky")},m(m,w){T(m,t,w),b(s,t,null),C(t,e),b(l,t,null),C(t,f),b(o,t,null),C(t,a),$=!0},p(m,w){var D;const k={};w&65544&&(k.$$scope={dirty:w,ctx:m}),l.$set(k);const S={};w&8&&(S.id=(D=m[13])==null?void 0:D.id),o.$set(S)},i(m){$||(p(s.$$.fragment,m),p(l.$$.fragment,m),p(o.$$.fragment,m),$=!0)},o(m){v(s.$$.fragment,m),v(l.$$.fragment,m),v(o.$$.fragment,m),$=!1},d(m){m&&V(t),h(s),h(l),h(o)}}}function he(r){var f,o;let t,s,e,l;return t=new R({props:{value:(f=r[13])==null?void 0:f.players[0].name}}),e=new ee({props:{userId:(o=r[13])==null?void 0:o.players[0].id}}),{c(){d(t.$$.fragment),s=I(),d(e.$$.fragment)},m(a,$){b(t,a,$),T(a,s,$),b(e,a,$),l=!0},p(a,$){var w,k;const c={};$&8&&(c.value=(w=a[13])==null?void 0:w.players[0].name),t.$set(c);const m={};$&8&&(m.userId=(k=a[13])==null?void 0:k.players[0].id),e.$set(m)},i(a){l||(p(t.$$.fragment,a),p(e.$$.fragment,a),l=!0)},o(a){v(t.$$.fragment,a),v(e.$$.fragment,a),l=!1},d(a){h(t,a),a&&V(s),h(e,a)}}}function W(r){let t,s,e=r[15]<2&&be(r);return{c(){e&&e.c(),t=$e()},m(l,f){e&&e.m(l,f),T(l,t,f),s=!0},p(l,f){l[15]<2&&e.p(l,f)},i(l){s||(p(e),s=!0)},o(l){v(e),s=!1},d(l){e&&e.d(l),l&&V(t)}}}function we(r){let t,s,e,l,f;return t=new R({props:{value:r[10].name}}),e=new ee({props:{account:r[10].social}}),{c(){d(t.$$.fragment),s=I(),d(e.$$.fragment),l=I()},m(o,a){b(t,o,a),T(o,s,a),b(e,o,a),T(o,l,a),f=!0},p(o,a){const $={};a&32&&($.value=o[10].name),t.$set($);const c={};a&32&&(c.account=o[10].social),e.$set(c)},i(o){f||(p(t.$$.fragment,o),p(e.$$.fragment,o),f=!0)},o(o){v(t.$$.fragment,o),v(e.$$.fragment,o),f=!1},d(o){h(t,o),o&&V(s),h(e,o),o&&V(l)}}}function Y(r){let t,s;return t=new G({props:{label:"Commentator",$$slots:{default:[we]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},m(e,l){b(t,e,l),s=!0},p(e,l){const f={};l&65568&&(f.$$scope={dirty:l,ctx:e}),t.$set(f)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ke(r){let t,s;return t=new Z({props:{value:r[4]}}),{c(){d(t.$$.fragment)},m(e,l){b(t,e,l),s=!0},p(e,l){const f={};l&16&&(f.value=e[4]),t.$set(f)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function ye(r){let t,s;return t=new Z({props:{value:r[2],status:r[1]}}),{c(){d(t.$$.fragment)},m(e,l){b(t,e,l),s=!0},p(e,l){const f={};l&4&&(f.value=e[2]),l&2&&(f.status=e[1]),t.$set(f)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Se(r){let t,s,e,l,f,o,a,$,c,m,w,k,S,D,y,J,O,q,H,j;t=new me({}),e=new ce({});let E=r[3],_=[];for(let n=0;n<E.length;n+=1)_[n]=W(U(r,E,n));const te=n=>v(_[n],1,1,()=>{_[n]=null});let F=r[5],g=[];for(let n=0;n<F.length;n+=1)g[n]=Y(Q(r,F,n));const ne=n=>v(g[n],1,1,()=>{g[n]=null});return S=new G({props:{label:"EST",$$slots:{default:[ke]},$$scope:{ctx:r}}}),y=new G({props:{label:"Current Time",$$slots:{default:[ye]},$$scope:{ctx:r}}}),q=new pe({}),{c(){d(t.$$.fragment),s=I(),l=A("div"),d(e.$$.fragment),f=I(),o=A("main"),a=A("div");for(let n=0;n<_.length;n+=1)_[n].c();$=I(),c=A("div"),m=A("div");for(let n=0;n<g.length;n+=1)g[n].c();w=I(),k=A("div"),d(S.$$.fragment),D=I(),d(y.$$.fragment),J=I(),O=A("footer"),H=A("div"),d(q.$$.fragment),z(l,"display","contents"),z(l,"--marginX","64px"),x(a,"id","runners"),x(a,"class","svelte-1yvliky"),x(m,"id","commentators"),x(m,"class","svelte-1yvliky"),x(k,"id","times"),x(k,"class","svelte-1yvliky"),x(c,"id","others"),x(c,"class","svelte-1yvliky"),x(o,"class","svelte-1yvliky"),z(H,"display","contents"),z(H,"--marginX","64px")},m(n,i){b(t,n,i),T(n,s,i),T(n,l,i),b(e,l,null),T(n,f,i),T(n,o,i),C(o,a);for(let B=0;B<_.length;B+=1)_[B]&&_[B].m(a,null);C(o,$),C(o,c),C(c,m);for(let B=0;B<g.length;B+=1)g[B]&&g[B].m(m,null);C(c,w),C(c,k),b(S,k,null),C(k,D),b(y,k,null),T(n,J,i),T(n,O,i),C(O,H),b(q,H,null),j=!0},p(n,i){if(i&200){E=n[3];let u;for(u=0;u<E.length;u+=1){const X=U(n,E,u);_[u]?(_[u].p(X,i),p(_[u],1)):(_[u]=W(X),_[u].c(),p(_[u],1),_[u].m(a,null))}for(M(),u=E.length;u<_.length;u+=1)te(u);N()}if(i&32){F=n[5];let u;for(u=0;u<F.length;u+=1){const X=Q(n,F,u);g[u]?(g[u].p(X,i),p(g[u],1)):(g[u]=Y(X),g[u].c(),p(g[u],1),g[u].m(m,null))}for(M(),u=F.length;u<g.length;u+=1)ne(u);N()}const B={};i&65552&&(B.$$scope={dirty:i,ctx:n}),S.$set(B);const K={};i&65542&&(K.$$scope={dirty:i,ctx:n}),y.$set(K)},i(n){if(!j){p(t.$$.fragment,n),p(e.$$.fragment,n);for(let i=0;i<E.length;i+=1)p(_[i]);for(let i=0;i<F.length;i+=1)p(g[i]);p(S.$$.fragment,n),p(y.$$.fragment,n),p(q.$$.fragment,n),j=!0}},o(n){v(t.$$.fragment,n),v(e.$$.fragment,n),_=_.filter(Boolean);for(let i=0;i<_.length;i+=1)v(_[i]);g=g.filter(Boolean);for(let i=0;i<g.length;i+=1)v(g[i]);v(S.$$.fragment,n),v(y.$$.fragment,n),v(q.$$.fragment,n),j=!1},d(n){h(t,n),n&&V(s),n&&e&&V(l),h(e,n),n&&V(f),n&&V(o),P(_,n),P(g,n),h(S),h(y),n&&V(J),n&&V(O),h(q)}}}function Be(r){let t,s;return t=new oe({props:{$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},m(e,l){b(t,e,l),s=!0},p(e,[l]){const f={};l&65598&&(f.$$scope={dirty:l,ctx:e}),t.$set(f)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function Ie(r,t,s){let e,l,f,o,a,$,c,m,w=fe,k=()=>(w(),w=ie(a,y=>s(5,m=y)),a);L(r,ue,y=>s(8,$=y)),L(r,_e,y=>s(9,c=y)),r.$$.on_destroy.push(()=>w());const S=`${1920*.4}px`,D=`${1440*.4}px`;return r.$$.update=()=>{r.$$.dirty&256&&s(4,e=($==null?void 0:$.estimate)??""),r.$$.dirty&256&&s(3,l=($==null?void 0:$.teams)??[]),r.$$.dirty&512&&s(2,f=c==null?void 0:c.time),r.$$.dirty&512&&s(1,o=c==null?void 0:c.state),r.$$.dirty&256&&k(s(0,a=ae(($==null?void 0:$.externalID)??"")))},[a,o,f,l,e,m,S,D,$,c]}class Ce extends se{constructor(t){super(),le(this,t,Ie,Be,re,{})}}new Ce({target:document.getElementById("app")});
