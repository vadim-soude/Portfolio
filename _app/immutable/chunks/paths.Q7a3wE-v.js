import{D as c,s as _}from"./index.rDtGiAC-.js";const e=[];function d(n,a=c){let o;const i=new Set;function r(t){if(_(n,t)&&(n=t,o)){const b=!e.length;for(const s of i)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(n))}function p(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(o=a(r)||c),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:l,subscribe:p}}var f;const g=((f=globalThis.__sveltekit_16p5o9n)==null?void 0:f.base)??"/sveltekit-gh-pages";var u;const k=((u=globalThis.__sveltekit_16p5o9n)==null?void 0:u.assets)??g;export{k as a,g as b,d as w};