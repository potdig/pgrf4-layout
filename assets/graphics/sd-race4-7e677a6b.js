import{S as se,i as re,s as le,C as oe,c as h,m as b,t as g,a as v,d as w,b as K,f as x,e as V,A as O,g as I,j as T,k as C,l as M,n as N,p as y,q as P,r as ae,u as fe}from"../SlideBox-4881029e.js";import{c as ue,a as ie}from"../TextFitSnugly-049e471c.js";import{B as $e,H as me,I as z,F as ce,t as pe,T as Z,V as _e,a as R,A as ee}from"../Video-4f3d94c7.js";import{r as ge,S as de}from"../rome-b5e4f6b5.js";function Q(l,t,s){const e=l.slice();return e[10]=t[s],e[12]=s,e}function U(l,t,s){const e=l.slice();return e[13]=t[s],e}function ve(l){let t,s,e,r,$;return t=new R({props:{value:l[13].name}}),e=new ee({props:{account:l[13].social}}),{c(){h(t.$$.fragment),s=x(),h(e.$$.fragment),r=x()},m(o,a){b(t,o,a),T(o,s,a),b(e,o,a),T(o,r,a),$=!0},p(o,a){const f={};a&32&&(f.value=o[13].name),t.$set(f);const m={};a&32&&(m.account=o[13].social),e.$set(m)},i(o){$||(g(t.$$.fragment,o),g(e.$$.fragment,o),$=!0)},o(o){v(t.$$.fragment,o),v(e.$$.fragment,o),$=!1},d(o){w(t,o),o&&y(s),w(e,o),o&&y(r)}}}function W(l){let t,s;return t=new z({props:{label:"Commentator",$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,r){const $={};r&65568&&($.$$scope={dirty:r,ctx:e}),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function he(l){let t,s;return t=new Z({props:{value:l[4]}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,r){const $={};r&16&&($.value=e[4]),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function be(l){let t,s;return t=new Z({props:{value:l[2],status:l[1]}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,r){const $={};r&4&&($.value=e[2]),r&2&&($.status=e[1]),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function we(l){var $,o;let t,s,e,r;return t=new R({props:{value:($=l[10])==null?void 0:$.players[0].name,oneLine:!0}}),e=new ee({props:{userId:(o=l[10])==null?void 0:o.players[0].id}}),{c(){h(t.$$.fragment),s=x(),h(e.$$.fragment)},m(a,f){b(t,a,f),T(a,s,f),b(e,a,f),r=!0},p(a,f){var d,k;const m={};f&8&&(m.value=(d=a[10])==null?void 0:d.players[0].name),t.$set(m);const c={};f&8&&(c.userId=(k=a[10])==null?void 0:k.players[0].id),e.$set(c)},i(a){r||(g(t.$$.fragment,a),g(e.$$.fragment,a),r=!0)},o(a){v(t.$$.fragment,a),v(e.$$.fragment,a),r=!1},d(a){w(t,a),a&&y(s),w(e,a)}}}function Y(l){var m;let t,s,e,r,$,o,a,f;return s=new _e({props:{width:l[6],height:l[7]}}),r=new z({props:{label:ge(l[12]+1),oneLine:!0,$$slots:{default:[we]},$$scope:{ctx:l}}}),o=new de({props:{id:(m=l[10])==null?void 0:m.id}}),{c(){t=V("div"),h(s.$$.fragment),e=x(),h(r.$$.fragment),$=x(),h(o.$$.fragment),a=x(),I(t,"class","runner svelte-k21s0h")},m(c,d){T(c,t,d),b(s,t,null),C(t,e),b(r,t,null),C(t,$),b(o,t,null),C(t,a),f=!0},p(c,d){var S;const k={};d&65544&&(k.$$scope={dirty:d,ctx:c}),r.$set(k);const D={};d&8&&(D.id=(S=c[10])==null?void 0:S.id),o.$set(D)},i(c){f||(g(s.$$.fragment,c),g(r.$$.fragment,c),g(o.$$.fragment,c),f=!0)},o(c){v(s.$$.fragment,c),v(r.$$.fragment,c),v(o.$$.fragment,c),f=!1},d(c){c&&y(t),w(s),w(r),w(o)}}}function ke(l){let t,s,e,r,$,o,a,f,m,c,d,k,D,S,A,H,G,q,L,j;t=new $e({}),e=new me({props:{dense:!0}});let E=l[5],p=[];for(let n=0;n<E.length;n+=1)p[n]=W(U(l,E,n));const te=n=>v(p[n],1,1,()=>{p[n]=null});k=new z({props:{label:"EST",$$slots:{default:[he]},$$scope:{ctx:l}}}),S=new z({props:{label:"Current Time",$$slots:{default:[be]},$$scope:{ctx:l}}});let F=l[3],_=[];for(let n=0;n<F.length;n+=1)_[n]=Y(Q(l,F,n));const ne=n=>v(_[n],1,1,()=>{_[n]=null});return q=new ce({}),{c(){h(t.$$.fragment),s=x(),r=V("div"),h(e.$$.fragment),$=x(),o=V("main"),a=V("div"),f=V("div"),m=V("div");for(let n=0;n<p.length;n+=1)p[n].c();c=x(),d=V("div"),h(k.$$.fragment),D=x(),h(S.$$.fragment),A=x(),H=V("div");for(let n=0;n<_.length;n+=1)_[n].c();G=x(),L=V("div"),h(q.$$.fragment),O(r,"display","contents"),O(r,"--marginX","64px"),I(m,"id","commentators"),I(m,"class","svelte-k21s0h"),I(d,"id","times"),I(d,"class","svelte-k21s0h"),I(f,"id","info"),I(f,"class","svelte-k21s0h"),I(a,"id","others"),I(a,"class","svelte-k21s0h"),I(H,"id","runners"),I(H,"class","svelte-k21s0h"),I(o,"class","svelte-k21s0h"),O(L,"display","contents"),O(L,"--marginX","64px")},m(n,u){b(t,n,u),T(n,s,u),T(n,r,u),b(e,r,null),T(n,$,u),T(n,o,u),C(o,a),C(a,f),C(f,m);for(let B=0;B<p.length;B+=1)p[B]&&p[B].m(m,null);C(f,c),C(f,d),b(k,d,null),C(d,D),b(S,d,null),C(o,A),C(o,H);for(let B=0;B<_.length;B+=1)_[B]&&_[B].m(H,null);T(n,G,u),T(n,L,u),b(q,L,null),j=!0},p(n,u){if(u&32){E=n[5];let i;for(i=0;i<E.length;i+=1){const X=U(n,E,i);p[i]?(p[i].p(X,u),g(p[i],1)):(p[i]=W(X),p[i].c(),g(p[i],1),p[i].m(m,null))}for(M(),i=E.length;i<p.length;i+=1)te(i);N()}const B={};u&65552&&(B.$$scope={dirty:u,ctx:n}),k.$set(B);const J={};if(u&65542&&(J.$$scope={dirty:u,ctx:n}),S.$set(J),u&200){F=n[3];let i;for(i=0;i<F.length;i+=1){const X=Q(n,F,i);_[i]?(_[i].p(X,u),g(_[i],1)):(_[i]=Y(X),_[i].c(),g(_[i],1),_[i].m(H,null))}for(M(),i=F.length;i<_.length;i+=1)ne(i);N()}},i(n){if(!j){g(t.$$.fragment,n),g(e.$$.fragment,n);for(let u=0;u<E.length;u+=1)g(p[u]);g(k.$$.fragment,n),g(S.$$.fragment,n);for(let u=0;u<F.length;u+=1)g(_[u]);g(q.$$.fragment,n),j=!0}},o(n){v(t.$$.fragment,n),v(e.$$.fragment,n),p=p.filter(Boolean);for(let u=0;u<p.length;u+=1)v(p[u]);v(k.$$.fragment,n),v(S.$$.fragment,n),_=_.filter(Boolean);for(let u=0;u<_.length;u+=1)v(_[u]);v(q.$$.fragment,n),j=!1},d(n){w(t,n),n&&y(s),n&&e&&y(r),w(e,n),n&&y($),n&&y(o),P(p,n),w(k),w(S),P(_,n),n&&y(G),n&&q&&y(L),w(q,n)}}}function Se(l){let t,s;return t=new oe({props:{$$slots:{default:[ke]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),s=!0},p(e,[r]){const $={};r&65598&&($.$$scope={dirty:r,ctx:e}),t.$set($)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){v(t.$$.fragment,e),s=!1},d(e){w(t,e)}}}function Be(l,t,s){let e,r,$,o,a,f,m,c,d=ae,k=()=>(d(),d=fe(a,A=>s(5,c=A)),a);K(l,ie,A=>s(8,f=A)),K(l,pe,A=>s(9,m=A)),l.$$.on_destroy.push(()=>d());const D=`${1920*.28}px`,S=`${1440*.28}px`;return l.$$.update=()=>{l.$$.dirty&256&&s(4,e=(f==null?void 0:f.estimate)??""),l.$$.dirty&256&&s(3,r=(f==null?void 0:f.teams)??[]),l.$$.dirty&512&&s(2,$=m==null?void 0:m.time),l.$$.dirty&512&&s(1,o=m==null?void 0:m.state),l.$$.dirty&256&&k(s(0,a=ue((f==null?void 0:f.externalID)??"")))},[a,o,$,r,e,c,D,S,f,m]}class Ie extends se{constructor(t){super(),re(this,t,Be,Se,le,{})}}new Ie({target:document.getElementById("app")});
