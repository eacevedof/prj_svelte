var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function d(){return c(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}function g(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let w;function v(t){w=t}const x=[],y=[],$=[],k=[],C=Promise.resolve();let _=!1;function S(t){$.push(t)}let E=!1;const H=new Set;function L(){if(!E){E=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];v(e),T(e.$$)}for(x.length=0;y.length;)y.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];H.has(e)||(H.add(e),e())}$.length=0}while(x.length);for(;k.length;)k.pop()();_=!1,E=!1,H.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const M=new Set;function N(t,e){t&&t.i&&(M.delete(t),t.i(e))}function O(t,n,l){const{fragment:s,on_mount:a,on_destroy:u,after_update:i}=t.$$;s&&s.m(n,l),S(()=>{const n=a.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(S)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(x.push(t),_||(_=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,r,l,s,a,i,c=[-1]){const d=w;v(e);const f=r.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:c};let h=!1;if(p.ctx=l?l(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),h&&F(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&N(e.$$.fragment),O(e,r.target,r.anchor),L()}v(d)}class j{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function J(t,e,n){const o=t.slice();return o[18]=e[n],o}function q(e){let n,o,r,l=e[18].text+"";return{c(){n=i("option"),o=c(l),n.__value=r=e[18].value,n.value=n.__value},m(t,e){a(t,n,e),s(n,o)},p:t,d(t){t&&u(n)}}}function P(t){let e,n,r,l,c,m,g,w,v,x,y;return{c(){e=i("h3"),e.textContent="Hash it",n=d(),r=i("form"),l=i("div"),c=i("label"),c.textContent="Word to be hashed:",m=d(),g=i("input"),w=d(),v=i("div"),v.innerHTML='<button type="submit" class="btn btn-primary mb-3">submit</button>',h(c,"class","form-label"),h(g,"type","text"),h(g,"class","form-control "),h(l,"class","mb-3"),h(v,"class","mb-12"),h(r,"class","row")},m(o,u){a(o,e,u),a(o,n,u),a(o,r,u),s(r,l),s(l,c),s(l,m),s(l,g),b(g,t[0].word),s(r,w),s(r,v),x||(y=[f(g,"input",t[9]),f(r,"submit",p(t[7]))],x=!0)},p(t,e){1&e&&g.value!==t[0].word&&b(g,t[0].word)},d(t){t&&u(e),t&&u(n),t&&u(r),x=!1,o(y)}}}function D(t){let e,n,r,l,c,m,g,w,v,x,y,$,k,C,_,S;return{c(){e=i("h3"),e.textContent="Get token",n=d(),r=i("form"),l=i("div"),c=i("label"),c.textContent="User",m=d(),g=i("input"),w=d(),v=i("div"),x=i("label"),x.textContent="Password",y=d(),$=i("input"),k=d(),C=i("div"),C.innerHTML='<button type="submit" class="btn btn-primary mb-3">submit</button>',h(c,"class","form-label"),h(g,"type","text"),h(g,"class","form-control "),h(l,"class","mb-3"),h(x,"class","form-label"),h($,"type","text"),h($,"class","form-control "),h(v,"class","mb-3"),h(C,"class","mb-12"),h(r,"class","row")},m(o,u){a(o,e,u),a(o,n,u),a(o,r,u),s(r,l),s(l,c),s(l,m),s(l,g),b(g,t[1].user),s(r,w),s(r,v),s(v,x),s(v,y),s(v,$),b($,t[1].password),s(r,k),s(r,C),_||(S=[f(g,"input",t[10]),f($,"input",t[11]),f(r,"submit",p(t[7]))],_=!0)},p(t,e){2&e&&g.value!==t[1].user&&b(g,t[1].user),2&e&&$.value!==t[1].password&&b($,t[1].password)},d(t){t&&u(e),t&&u(n),t&&u(r),_=!1,o(S)}}}function G(t){let e,n,r,l,m,g,w,v,x,y,$,k,C,_,S,E,H,L,T,M,N,O,A,F,U,j,J,q,P=""!==t[5]&&R(t);return{c(){e=i("h3"),e.textContent="Upload",n=d(),r=i("form"),l=i("div"),m=i("label"),m.textContent="File one",g=d(),w=i("input"),v=d(),x=i("div"),y=i("label"),y.textContent="File two",$=d(),k=i("input"),C=d(),_=i("div"),S=i("label"),S.textContent="Folder",E=d(),H=i("input"),L=d(),T=i("div"),M=i("label"),M.textContent="Token",N=d(),O=i("input"),A=d(),F=i("div"),F.innerHTML='<button type="submit" class="btn btn-primary mb-3">submit</button>',U=d(),P&&P.c(),j=c(""),h(m,"class","form-label"),h(w,"type","file"),h(w,"class","form-control"),h(l,"class","mb-3"),h(y,"class","form-label"),h(k,"type","file"),h(k,"class","form-control"),h(x,"class","mb-3"),h(S,"class","form-label"),h(H,"class","form-control"),h(_,"class","mb-3"),h(M,"class","form-label"),h(O,"class","form-control"),h(T,"class","mb-3"),h(F,"class","mb-12"),h(r,"class","row")},m(o,u){a(o,e,u),a(o,n,u),a(o,r,u),s(r,l),s(l,m),s(l,g),s(l,w),s(r,v),s(r,x),s(x,y),s(x,$),s(x,k),s(r,C),s(r,_),s(_,S),s(_,E),s(_,H),b(H,t[2].folder),s(r,L),s(r,T),s(T,M),s(T,N),s(T,O),b(O,t[2].usertoken),s(r,A),s(r,F),a(o,U,u),P&&P.m(o,u),a(o,j,u),J||(q=[f(w,"change",t[12]),f(k,"change",t[13]),f(H,"input",t[14]),f(O,"input",t[15]),f(r,"submit",p(t[7]))],J=!0)},p(t,e){4&e&&H.value!==t[2].folder&&b(H,t[2].folder),4&e&&O.value!==t[2].usertoken&&b(O,t[2].usertoken),""!==t[5]?P?P.p(t,e):(P=R(t),P.c(),P.m(j.parentNode,j)):P&&(P.d(1),P=null)},d(t){t&&u(e),t&&u(n),t&&u(r),t&&u(U),P&&P.d(t),t&&u(j),J=!1,o(q)}}}function R(t){let e,n,o,r,l;return{c(){e=i("h4"),e.textContent="Files uploaded:",n=d(),o=i("div"),r=d(),l=i("br"),h(e,"class","badge bg-success"),h(o,"class","row")},m(s,u){a(s,e,u),a(s,n,u),a(s,o,u),o.innerHTML=t[5],a(s,r,u),a(s,l,u)},p(t,e){32&e&&(o.innerHTML=t[5])},d(t){t&&u(e),t&&u(n),t&&u(o),t&&u(r),t&&u(l)}}}function W(e){let n,o,r,l,p,b,w,v,x,y,$,k,C,_,E,H,L,T,M,N,O,A,F,U,j,R,W,B,V,z,I,K,Q,X,Y,Z,tt,et,nt,ot,rt,lt,st,at,ut,it,ct,dt,ft,pt,ht,mt,bt,gt,wt,vt,xt,yt,$t,kt,Ct,_t,St,Et,Ht,Lt,Tt,Mt,Nt,Ot,At,Ft,Ut,jt,Jt,qt,Pt,Dt,Gt,Rt,Wt,Bt=e[3].includes("/get-password"),Vt=e[3].includes("/login"),zt=e[3].includes("es/upload"),It=e[4].hashit.word+"",Kt=e[4].hashit.wordhashed+"",Qt=e[4].login.user+"",Xt=e[4].login.password+"",Yt=e[4].login.token+"",Zt=e[4].upload.one+"",te=e[4].upload.two+"",ee=e[4].upload.folder+"",ne=e[4].upload.usertoken+"",oe=JSON.stringify(e[4].upload.result.warning)+"",re=e[6],le=[];for(let t=0;t<re.length;t+=1)le[t]=q(J(e,re,t));let se=Bt&&P(e),ae=Vt&&D(e),ue=zt&&G(e);return{c(){n=i("main"),o=i("h1"),o.innerHTML='<span class="badge bg-secondary">My tools</span>',r=d(),l=i("div"),p=i("div"),b=i("label"),b.textContent="Action:",w=d(),v=i("select");for(let t=0;t<le.length;t+=1)le[t].c();x=d(),se&&se.c(),y=d(),ae&&ae.c(),$=d(),ue&&ue.c(),k=d(),C=i("div"),_=i("h3"),_.textContent="Resume",E=d(),H=i("ul"),L=i("li"),T=i("b"),T.textContent="Word:",M=i("br"),N=i("span"),O=c(It),A=d(),F=i("li"),U=i("b"),U.textContent="Hashed:",j=i("br"),R=i("span"),W=c(Kt),B=d(),V=i("br"),z=d(),I=i("li"),K=i("b"),K.textContent="User:",Q=i("br"),X=i("span"),Y=c(Qt),Z=d(),tt=i("li"),et=i("b"),et.textContent="Password:",nt=i("br"),ot=i("span"),rt=c(Xt),lt=d(),st=i("li"),at=i("b"),at.textContent="Login token:",ut=i("br"),it=i("span"),ct=c(Yt),dt=d(),ft=i("br"),pt=d(),ht=i("li"),mt=i("b"),mt.textContent="file-1:",bt=i("br"),gt=i("span"),wt=c(Zt),vt=d(),xt=i("li"),yt=i("b"),yt.textContent="file-2:",$t=i("br"),kt=i("span"),Ct=c(te),_t=d(),St=i("li"),Et=i("b"),Et.textContent="Folder:",Ht=i("br"),Lt=i("span"),Tt=c(ee),Mt=d(),Nt=i("li"),Ot=i("b"),Ot.textContent="Usertoken:",At=i("br"),Ft=i("span"),Ut=c(ne),jt=d(),Jt=i("li"),qt=i("b"),qt.textContent="Result:",Pt=i("br"),Dt=i("code"),Gt=c(oe),h(b,"class","form-label"),void 0===e[3]&&S(()=>e[8].call(v)),h(p,"class","mb-3"),h(l,"class","row"),h(C,"class","row"),h(n,"class","container")},m(t,u){a(t,n,u),s(n,o),s(n,r),s(n,l),s(l,p),s(p,b),s(p,w),s(p,v);for(let t=0;t<le.length;t+=1)le[t].m(v,null);g(v,e[3]),s(n,x),se&&se.m(n,null),s(n,y),ae&&ae.m(n,null),s(n,$),ue&&ue.m(n,null),s(n,k),s(n,C),s(C,_),s(C,E),s(C,H),s(H,L),s(L,T),s(L,M),s(L,N),s(N,O),s(H,A),s(H,F),s(F,U),s(F,j),s(F,R),s(R,W),s(H,B),s(H,V),s(H,z),s(H,I),s(I,K),s(I,Q),s(I,X),s(X,Y),s(H,Z),s(H,tt),s(tt,et),s(tt,nt),s(tt,ot),s(ot,rt),s(H,lt),s(H,st),s(st,at),s(st,ut),s(st,it),s(it,ct),s(H,dt),s(H,ft),s(H,pt),s(H,ht),s(ht,mt),s(ht,bt),s(ht,gt),s(gt,wt),s(H,vt),s(H,xt),s(xt,yt),s(xt,$t),s(xt,kt),s(kt,Ct),s(H,_t),s(H,St),s(St,Et),s(St,Ht),s(St,Lt),s(Lt,Tt),s(H,Mt),s(H,Nt),s(Nt,Ot),s(Nt,At),s(Nt,Ft),s(Ft,Ut),s(H,jt),s(H,Jt),s(Jt,qt),s(Jt,Pt),s(Jt,Dt),s(Dt,Gt),Rt||(Wt=f(v,"change",e[8]),Rt=!0)},p(t,[e]){if(64&e){let n;for(re=t[6],n=0;n<re.length;n+=1){const o=J(t,re,n);le[n]?le[n].p(o,e):(le[n]=q(o),le[n].c(),le[n].m(v,null))}for(;n<le.length;n+=1)le[n].d(1);le.length=re.length}72&e&&g(v,t[3]),8&e&&(Bt=t[3].includes("/get-password")),Bt?se?se.p(t,e):(se=P(t),se.c(),se.m(n,y)):se&&(se.d(1),se=null),8&e&&(Vt=t[3].includes("/login")),Vt?ae?ae.p(t,e):(ae=D(t),ae.c(),ae.m(n,$)):ae&&(ae.d(1),ae=null),8&e&&(zt=t[3].includes("es/upload")),zt?ue?ue.p(t,e):(ue=G(t),ue.c(),ue.m(n,k)):ue&&(ue.d(1),ue=null),16&e&&It!==(It=t[4].hashit.word+"")&&m(O,It),16&e&&Kt!==(Kt=t[4].hashit.wordhashed+"")&&m(W,Kt),16&e&&Qt!==(Qt=t[4].login.user+"")&&m(Y,Qt),16&e&&Xt!==(Xt=t[4].login.password+"")&&m(rt,Xt),16&e&&Yt!==(Yt=t[4].login.token+"")&&m(ct,Yt),16&e&&Zt!==(Zt=t[4].upload.one+"")&&m(wt,Zt),16&e&&te!==(te=t[4].upload.two+"")&&m(Ct,te),16&e&&ee!==(ee=t[4].upload.folder+"")&&m(Tt,ee),16&e&&ne!==(ne=t[4].upload.usertoken+"")&&m(Ut,ne),16&e&&oe!==(oe=JSON.stringify(t[4].upload.result.warning)+"")&&m(Gt,oe)},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(le,t),se&&se.d(),ae&&ae.d(),ue&&ue.d(),Rt=!1,Wt()}}}function B(t,e,n){let o={word:"",wordhashed:""},r={user:"",password:"",token:""},l={one:"",two:"",folder:"",usertoken:"",result:{url:{},warning:[]}},s=[{value:"",text:"...choose action"},{value:"https://upload.theframework.es/security/get-password",text:"get-password / Hash it"},{value:"https://upload.theframework.es/security/login",text:"login / Get token"},{value:"https://upload.theframework.es/upload",text:"upload / Upload"}],a="";const u=t=>void 0!==t;let i,c;return t.$$.update=()=>{7&t.$$.dirty&&n(4,i={hashit:o,login:r,upload:l})},n(5,c=""),[o,r,l,a,i,c,s,t=>{console.log("handleSubmit.evt",t);const e=a,s=new FormData;s.append("word",o.word),s.append("user",r.user),s.append("password",r.password),s.append("folderdomain",l.folder),s.append("resource-usertoken",l.usertoken);const d=document.querySelectorAll("input[type='file']");console.log("inputfiles",d),d&&d.forEach((t,e)=>{const n=t.files;console.log("file[0]:",n[0]),s.append("file_"+e,n[0])}),fetch(e,{method:"post",body:s}).then(t=>t.json()).then(t=>{console.log("reponse",t),0==t.errors.length?(u(t.data.result)&&n(4,i.hashit.wordhashed=t.data.result,i),u(t.data.token)&&(n(4,i.login.token=t.data.token,i),n(4,i.upload.usertoken=t.data.token,i)),u(t.data.url)&&(n(4,i.upload.result.url=t.data.url,i),n(5,c=(t=>{const e=Object.keys(t);let n="";return e.forEach(e=>{n+=`<a href="${t[e]}" class="link-success" target="_blank">${e} - ${t[e]}</a><br/>`}),n})(i.upload.result.url))),u(t.data.warning)&&n(4,i.upload.result.warning=t.data.warning,i),a.includes("es/upload")&&Swal.fire({icon:"success",title:"Upload finished",text:JSON.stringify(i.upload.result.url)})):Swal.fire({icon:"warning",title:"Esta acción no se ha podido completar",text:JSON.stringify(t.errors)})}).catch(t=>{console.log("error catched:",t),Swal.fire({icon:"error",title:"Vaya! Ha ocurrido un error",text:t.toString()})})},function(){a=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(3,a),n(6,s)},function(){o.word=this.value,n(0,o)},function(){r.user=this.value,n(1,r)},function(){r.password=this.value,n(1,r)},function(){l.one=this.value,n(2,l)},function(){l.two=this.value,n(2,l)},function(){l.folder=this.value,n(2,l)},function(){l.usertoken=this.value,n(2,l)}]}class V extends j{constructor(t){super(),U(this,t,B,W,l,{})}}function z(e){let n,o;return n=new V({}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,e){O(n,t,e),o=!0},p:t,i(t){o||(N(n.$$.fragment,t),o=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),(void 0).c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(n.$$.fragment,t),o=!1},d(t){A(n,t)}}}return new class extends j{constructor(t){super(),U(this,t,null,z,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
