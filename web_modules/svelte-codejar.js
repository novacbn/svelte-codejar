import{S as I,i as Q,s as Z,e as X,a as _,b as K,c as v,n as Y,d as B,f as $,t as ee,g as te,h as ne,H as se}from"./common/index-9ef63cc3.js";function ie(n,l,i={}){const r=Object.assign({tab:"	",indentOn:/{$/,spellcheck:!1,addClosing:!0},i);let o=[],f=[],c=-1,d=!1,h,T,R=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;n.setAttribute("contentEditable",R?"true":"plaintext-only"),n.setAttribute("spellcheck",r.spellcheck?"true":"false"),n.style.outline="none",n.style.overflowWrap="break-word",n.style.overflowY="auto",n.style.resize="vertical",n.style.whiteSpace="pre-wrap",l(n);const H=V(()=>{const e=k();l(n),p(e)},30);let L=!1;const w=e=>!F(e)&&!J(e)&&e.key!=="Meta"&&e.key!=="Control"&&e.key!=="Alt"&&!e.key.startsWith("Arrow"),b=V(e=>{w(e)&&(C(),L=!1)},300),y=(e,t)=>{o.push([e,t]),n.addEventListener(e,t)};y("keydown",e=>{if(e.defaultPrevented)return;T=j(),N(e),M(e),r.addClosing&&P(e),z(e),w(e)&&!L&&(C(),L=!0)}),y("keyup",e=>{if(e.defaultPrevented)return;if(e.isComposing)return;T!==j()&&H(),b(e),h&&h(j())}),y("focus",e=>{d=!0}),y("blur",e=>{d=!1}),y("paste",e=>{C(),G(e),C(),h&&h(j())});function k(){const e=window.getSelection(),t={start:0,end:0,dir:void 0};return U(n,s=>{if(s===e.anchorNode&&s===e.focusNode)return t.start+=e.anchorOffset,t.end+=e.focusOffset,t.dir=e.anchorOffset<=e.focusOffset?"->":"<-","stop";if(s===e.anchorNode)if(t.start+=e.anchorOffset,!t.dir)t.dir="->";else return"stop";else if(s===e.focusNode)if(t.end+=e.focusOffset,!t.dir)t.dir="<-";else return"stop";s.nodeType===Node.TEXT_NODE&&(t.dir!="->"&&(t.start+=s.nodeValue.length),t.dir!="<-"&&(t.end+=s.nodeValue.length))}),t}function p(e){const t=window.getSelection();let s,u=0,g,m=0;if(e.dir||(e.dir="->"),e.start<0&&(e.start=0),e.end<0&&(e.end=0),e.dir=="<-"){const{start:S,end:x}=e;e.start=x,e.end=S}let A=0;U(n,S=>{if(S.nodeType!==Node.TEXT_NODE)return;const x=(S.nodeValue||"").length;if(A+x>=e.start&&(s||(s=S,u=e.start-A),A+x>=e.end))return g=S,m=e.end-A,"stop";A+=x}),s||(s=n),g||(g=n),e.dir=="<-"&&([s,u,g,m]=[g,m,s,u]),t.setBaseAndExtent(s,u,g,m)}function D(){const e=window.getSelection(),t=e.getRangeAt(0),s=document.createRange();return s.selectNodeContents(n),s.setEnd(t.startContainer,t.startOffset),s.toString()}function a(){const e=window.getSelection(),t=e.getRangeAt(0),s=document.createRange();return s.selectNodeContents(n),s.setStart(t.endContainer,t.endOffset),s.toString()}function N(e){if(e.key==="Enter"){const t=D(),s=a();let[u]=W(t),g=u;if(r.indentOn.test(t)&&(g+=r.tab),(R||g.length>0)&&(O(e),E(`
`+g)),g!==u&&s[0]==="}"){const m=k();E(`
`+u),p(m)}}}function P(e){const t=`([{'"`,s=`)]}'"`,u=a();if(s.includes(e.key)&&u.substr(0,1)===e.key){const g=k();O(e),g.start=++g.end,p(g)}else if(t.includes(e.key)){const g=k();O(e);const m=e.key+s[t.indexOf(e.key)];E(m),g.start=++g.end,p(g)}}function M(e){if(e.key==="Tab")if(O(e),e.shiftKey){const t=D();let[s,u]=W(t);if(s.length>0){const g=k(),m=Math.min(r.tab.length,s.length);p({start:u,end:u+m}),document.execCommand("delete"),g.start-=m,g.end-=m,p(g)}}else E(r.tab)}function z(e){if(F(e)){O(e),c--;const t=f[c];t&&(n.innerHTML=t.html,p(t.pos)),c<0&&(c=0)}if(J(e)){O(e),c++;const t=f[c];t&&(n.innerHTML=t.html,p(t.pos)),c>=f.length&&c--}}function C(){if(!d)return;const e=n.innerHTML,t=k(),s=f[c];if(s&&(s.html===e&&s.pos.start===t.start&&s.pos.end===t.end))return;c++,f[c]={html:e,pos:t},f.splice(c+1);const u=300;c>u&&(c=u,f.splice(0,1))}function G(e){O(e);const t=(e.originalEvent||e).clipboardData.getData("text/plain"),s=k();E(t),l(n),p({start:s.start+t.length,end:s.start+t.length})}function U(e,t){const s=[];e.firstChild&&s.push(e.firstChild);let u=s.pop();for(;u&&!(t(u)==="stop");)u.nextSibling&&s.push(u.nextSibling),u.firstChild&&s.push(u.firstChild),u=s.pop()}function q(e){return e.metaKey||e.ctrlKey}function F(e){return q(e)&&!e.shiftKey&&e.key==="z"}function J(e){return q(e)&&e.shiftKey&&e.key==="z"}function E(e){e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),document.execCommand("insertHTML",!1,e)}function V(e,t){let s=0;return(...u)=>{clearTimeout(s),s=window.setTimeout(()=>e(...u),t)}}function W(e){let t=e.length-1;for(;t>=0&&e[t]!==`
`;)t--;t++;let s=t;for(;s<e.length&&/[ \t]/.test(e[s]);)s++;return[e.substring(t,s)||"",t,s]}function j(){return n.textContent||""}function O(e){e.preventDefault()}return{updateOptions(e){e=Object.assign(Object.assign({},e),e)},updateCode(e){n.textContent=e,l(n)},onUpdate(e){h=e},toString:j,destroy(){for(let[e,t]of o)n.removeEventListener(e,t)}}}function le(n,l={}){const i=Object.assign({class:"codejar-linenumbers",wrapClass:"codejar-wrap",width:"35px",backgroundColor:"rgba(128, 128, 128, 0.15)",color:""},l);let r;return function(o){n(o),r||(r=oe(o,i),o.addEventListener("scroll",()=>r.style.top=`-${o.scrollTop}px`));const f=o.textContent||"",c=f.replace(/\n+$/,`
`).split(`
`).length+1;let d="";for(let h=1;h<c;h++)d+=`${h}
`;r.innerText=d}}function oe(n,l){const i=getComputedStyle(n),r=document.createElement("div");r.className=l.wrapClass,r.style.position="relative";const o=document.createElement("div");o.className=l.class,r.appendChild(o),o.style.position="absolute",o.style.top="0px",o.style.left="0px",o.style.bottom="0px",o.style.width=l.width,o.style.overflow="hidden",o.style.backgroundColor=l.backgroundColor,o.style.color=l.color||i.color,o.style.setProperty("mix-blend-mode","difference"),o.style.fontFamily=i.fontFamily,o.style.fontSize=i.fontSize,o.style.lineHeight=i.lineHeight,o.style.paddingTop=i.paddingTop,o.style.paddingLeft=i.paddingLeft,o.style.borderTopLeftRadius=i.borderTopLeftRadius,o.style.borderBottomLeftRadius=i.borderBottomLeftRadius;const f=document.createElement("div");return f.style.position="relative",f.style.top="0px",o.appendChild(f),n.style.paddingLeft=`calc(${l.width} + ${o.style.paddingLeft})`,n.style.whiteSpace="pre",n.parentNode.insertBefore(r,n),r.appendChild(n),f}function ae(n){let l;return{c(){l=ee(n[0])},m(i,r){K(i,l,r)},p(i,r){r&1&&te(l,i[0])},d(i){i&&B(l)}}}function re(n){let l,i=n[3](n[0],n[4])+"",r;return{c(){r=ne(),l=new se(r)},m(o,f){l.m(i,o,f),K(o,r,f)},p(o,f){f&25&&i!==(i=o[3](o[0],o[4])+"")&&l.p(i)},d(o){o&&B(r),o&&l.d()}}}function ce(n){let l,i,r;function o(d,h){return!d[6]&&d[3]?re:ae}let f=o(n),c=f(n);return{c(){l=X("pre"),i=X("code"),c.c(),_(i,"class",r=n[4]?`language-${n[4]}`:""),_(i,"data-language",n[4]),_(l,"class",n[1]),_(l,"style",n[2])},m(d,h){K(d,l,h),v(l,i),c.m(i,null),n[13](l)},p(d,[h]){f===(f=o(d))&&c?c.p(d,h):(c.d(1),c=f(d),c&&(c.c(),c.m(i,null))),h&16&&r!==(r=d[4]?`language-${d[4]}`:"")&&_(i,"class",r),h&16&&_(i,"data-language",d[4]),h&2&&_(l,"class",d[1]),h&4&&_(l,"style",d[2])},i:Y,o:Y,d(d){d&&B(l),c.d(),n[13](null)}}}function fe(n,l,i){let{class:r=""}=l,{style:o=void 0}=l,{addClosing:f=!0}=l,{indentOn:c=/{$/}=l,{spellcheck:d=!1}=l,{tab:h="	"}=l,{withLineNumbers:T=!1}=l,{highlightCode:R=null}=l,{highlightElement:H=(a,N)=>{}}=l,{syntax:L=void 0}=l,{value:w=""}=l,b=null,y=null;function k(){y.destroy();const a=b.parentElement;if(a.classList.contains("codejar-wrap")){const N=a.parentElement;i(5,b.style.padding="",b),N.appendChild(b),a.remove()}}function p(a,N,P,M){y&&k();const z=P?le(C=>N(C,M)):C=>N(C,M);i(6,y=ie(a,z,{addClosing:f,indentOn:c,spellcheck:d,tab:h})),y.onUpdate(C=>{C!==w&&i(0,w=C)})}function D(a){$[a?"unshift":"push"](()=>{b=a,i(5,b)})}return n.$$set=a=>{"class"in a&&i(1,r=a.class),"style"in a&&i(2,o=a.style),"addClosing"in a&&i(7,f=a.addClosing),"indentOn"in a&&i(8,c=a.indentOn),"spellcheck"in a&&i(9,d=a.spellcheck),"tab"in a&&i(10,h=a.tab),"withLineNumbers"in a&&i(11,T=a.withLineNumbers),"highlightCode"in a&&i(3,R=a.highlightCode),"highlightElement"in a&&i(12,H=a.highlightElement),"syntax"in a&&i(4,L=a.syntax),"value"in a&&i(0,w=a.value)},n.$$.update=()=>{n.$$.dirty&6192&&(b&&p(b,H,T,L)),n.$$.dirty&1984&&(y&&y.updateOptions({addClosing:f,indentOn:c,spellcheck:d,tab:h})),n.$$.dirty&65&&(y&&y.toString()!==w&&y.updateCode(w))},[w,r,o,R,L,b,y,f,c,d,h,T,H,D]}class de extends I{constructor(l){super();Q(this,l,fe,ce,Z,{class:1,style:2,addClosing:7,indentOn:8,spellcheck:9,tab:10,withLineNumbers:11,highlightCode:3,highlightElement:12,syntax:4,value:0})}}export{de as CodeJar};
