import{S as K,i as Q,s as W,a as T,k as y,q as L,Y as X,h as p,c as D,l as P,m as k,r as w,n as _,b as N,C as f,Z as R,U as $,D as B,P as x,e as M,u as C}from"../chunks/index.rDtGiAC-.js";import{s as V,f as Y}from"../chunks/utils.RwzHMXmu.js";import{t as Z}from"../chunks/config.IX8X3kk1.js";async function ee({fetch:n}){return{posts:await(await n("api/posts")).json()}}const ne=Object.freeze(Object.defineProperty({__proto__:null,load:ee},Symbol.toStringTag,{value:"Module"}));function F(n,s,o){const e=n.slice();return e[3]=s[o],e}function G(n){let s,o,e=n[3].title+"",a,c,b,E,u=n[3].description+"",j,m,q,S=Y(n[3].date)+"",g,i,t,d,l=n[3].categories.map(J).join(", ")+"",v,I;return{c(){s=y("li"),o=y("a"),a=L(e),b=T(),E=y("p"),j=L(u),m=T(),q=y("p"),g=L(S),i=T(),t=y("p"),d=L("Tags : "),v=L(l),I=T(),this.h()},l(h){s=P(h,"LI",{class:!0});var r=k(s);o=P(r,"A",{href:!0,class:!0});var U=k(o);a=w(U,e),U.forEach(p),b=D(r),E=P(r,"P",{class:!0});var z=k(E);j=w(z,u),z.forEach(p),m=D(r),q=P(r,"P",{class:!0});var A=k(q);g=w(A,S),A.forEach(p),i=D(r),t=P(r,"P",{class:!0});var O=k(t);d=w(O,"Tags : "),v=w(O,l),O.forEach(p),I=D(r),r.forEach(p),this.h()},h(){_(o,"href",c=n[3].slug),_(o,"class","title svelte-1ya7qe"),_(E,"class","description svelte-1ya7qe"),_(q,"class","date svelte-1ya7qe"),_(t,"class","tag svelte-1ya7qe"),_(s,"class","post svelte-1ya7qe")},m(h,r){N(h,s,r),f(s,o),f(o,a),f(s,b),f(s,E),f(E,j),f(s,m),f(s,q),f(q,g),f(s,i),f(s,t),f(t,d),f(t,v),f(s,I)},p(h,r){r&1&&e!==(e=h[3].title+"")&&C(a,e),r&1&&c!==(c=h[3].slug)&&_(o,"href",c),r&1&&u!==(u=h[3].description+"")&&C(j,u),r&1&&S!==(S=Y(h[3].date)+"")&&C(g,S),r&1&&l!==(l=h[3].categories.map(J).join(", ")+"")&&C(v,l)},d(h){h&&p(s)}}}function H(n){let s=V(n[3],n[1]),o,e=s&&G(n);return{c(){e&&e.c(),o=M()},l(a){e&&e.l(a),o=M()},m(a,c){e&&e.m(a,c),N(a,o,c)},p(a,c){c&3&&(s=V(a[3],a[1])),s?e?e.p(a,c):(e=G(a),e.c(),e.m(o.parentNode,o)):e&&(e.d(1),e=null)},d(a){e&&e.d(a),a&&p(o)}}}function te(n){let s,o,e,a,c,b,E,u,j,m,q,S;document.title=s=Z;let g=n[0].posts,i=[];for(let t=0;t<g.length;t+=1)i[t]=H(F(n,g,t));return{c(){o=T(),e=y("section"),a=y("div"),c=y("label"),b=L("Rechercher"),E=T(),u=y("input"),j=T(),m=y("ul");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){X("svelte-fbczdu",document.head).forEach(p),o=D(t),e=P(t,"SECTION",{});var l=k(e);a=P(l,"DIV",{class:!0});var v=k(a);c=P(v,"LABEL",{for:!0,class:!0});var I=k(c);b=w(I,"Rechercher"),I.forEach(p),E=D(v),u=P(v,"INPUT",{id:!0,type:!0}),v.forEach(p),j=D(l),m=P(l,"UL",{class:!0});var h=k(m);for(let r=0;r<i.length;r+=1)i[r].l(h);h.forEach(p),l.forEach(p),this.h()},h(){_(c,"for","search"),_(c,"class","svelte-1ya7qe"),_(u,"id","search"),_(u,"type","text"),_(a,"class","search-module svelte-1ya7qe"),_(m,"class","posts svelte-1ya7qe")},m(t,d){N(t,o,d),N(t,e,d),f(e,a),f(a,c),f(c,b),f(a,E),f(a,u),R(u,n[1]),f(e,j),f(e,m);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(m,null);q||(S=$(u,"input",n[2]),q=!0)},p(t,[d]){if(d&0&&s!==(s=Z)&&(document.title=s),d&2&&u.value!==t[1]&&R(u,t[1]),d&3){g=t[0].posts;let l;for(l=0;l<g.length;l+=1){const v=F(t,g,l);i[l]?i[l].p(v,d):(i[l]=H(v),i[l].c(),i[l].m(m,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=g.length}},i:B,o:B,d(t){t&&p(o),t&&p(e),x(i,t),q=!1,S()}}}const J=n=>n;function se(n,s,o){let{data:e}=s,a="";function c(){a=this.value,o(1,a)}return n.$$set=b=>{"data"in b&&o(0,e=b.data)},[e,a,c]}class ie extends K{constructor(s){super(),Q(this,s,se,te,W,{data:0})}}export{ie as component,ne as universal};
