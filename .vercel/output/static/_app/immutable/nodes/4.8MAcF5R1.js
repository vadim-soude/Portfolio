import{S as N,i as U,s as Y,a as S,k as v,Y as B,h as _,c as j,l as g,m as E,n as m,b as w,C as d,D as L,P as F,q as C,r as O,u as q}from"../chunks/index.BhcPLpiJ.js";import{f as T}from"../chunks/utils.YajTRkyr.js";import{t as y}from"../chunks/config.IX8X3kk1.js";async function G({fetch:i}){return{posts:await(await i("api/posts")).json()}}const V=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function A(i,s,l){const o=i.slice();return o[1]=s[l],o}function M(i){let s,l,o=i[1].title+"",n,f,a,e,c=i[1].description+"",t,p,h,b=T(i[1].date)+"",P,k;return{c(){s=v("li"),l=v("a"),n=C(o),a=S(),e=v("p"),t=C(c),p=S(),h=v("p"),P=C(b),k=S(),this.h()},l(u){s=g(u,"LI",{class:!0});var r=E(s);l=g(r,"A",{href:!0,class:!0});var z=E(l);n=O(z,o),z.forEach(_),a=j(r),e=g(r,"P",{class:!0});var D=E(e);t=O(D,c),D.forEach(_),p=j(r),h=g(r,"P",{class:!0});var I=E(h);P=O(I,b),I.forEach(_),k=j(r),r.forEach(_),this.h()},h(){m(l,"href",f=i[1].slug),m(l,"class","title svelte-1mdtgte"),m(e,"class","description svelte-1mdtgte"),m(h,"class","date svelte-1mdtgte"),m(s,"class","post svelte-1mdtgte")},m(u,r){w(u,s,r),d(s,l),d(l,n),d(s,a),d(s,e),d(e,t),d(s,p),d(s,h),d(h,P),d(s,k)},p(u,r){r&1&&o!==(o=u[1].title+"")&&q(n,o),r&1&&f!==(f=u[1].slug)&&m(l,"href",f),r&1&&c!==(c=u[1].description+"")&&q(t,c),r&1&&b!==(b=T(u[1].date)+"")&&q(P,b)},d(u){u&&_(s)}}}function H(i){let s,l,o,n;document.title=s=y;let f=i[0].posts,a=[];for(let e=0;e<f.length;e+=1)a[e]=M(A(i,f,e));return{c(){l=S(),o=v("section"),n=v("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){B("svelte-fbczdu",document.head).forEach(_),l=j(e),o=g(e,"SECTION",{});var t=E(o);n=g(t,"UL",{class:!0});var p=E(n);for(let h=0;h<a.length;h+=1)a[h].l(p);p.forEach(_),t.forEach(_),this.h()},h(){m(n,"class","posts svelte-1mdtgte")},m(e,c){w(e,l,c),w(e,o,c),d(o,n);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(n,null)},p(e,[c]){if(c&0&&s!==(s=y)&&(document.title=s),c&1){f=e[0].posts;let t;for(t=0;t<f.length;t+=1){const p=A(e,f,t);a[t]?a[t].p(p,c):(a[t]=M(p),a[t].c(),a[t].m(n,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=f.length}},i:L,o:L,d(e){e&&_(l),e&&_(o),F(a,e)}}}function J(i,s,l){let{data:o}=s;return i.$$set=n=>{"data"in n&&l(0,o=n.data)},[o]}class W extends N{constructor(s){super(),U(this,s,J,H,Y,{data:0})}}export{W as component,V as universal};
