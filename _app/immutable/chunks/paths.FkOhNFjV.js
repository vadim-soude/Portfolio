import{D as b,s as _}from"./index.BhcPLpiJ.js";const e=[];function d(n,a=b){let i;const o=new Set;function r(t){if(_(n,t)&&(n=t,i)){const c=!e.length;for(const s of o)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(n))}function h(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(i=a(r)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:l,subscribe:h}}var u;const g=((u=globalThis.__sveltekit_nchyuz)==null?void 0:u.base)??"/sveltekit-gh-pages";var f;const z=((f=globalThis.__sveltekit_nchyuz)==null?void 0:f.assets)??g;export{z as a,g as b,d as w};