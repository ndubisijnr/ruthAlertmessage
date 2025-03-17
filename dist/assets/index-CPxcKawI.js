(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m="/vite.svg",y="/exit.svg",b="/error.svg",v="data:image/svg+xml,%3csvg%20width='27'%20height='26'%20viewBox='0%200%2027%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_3790_128)'%3e%3cpath%20d='M13.6086%2025.7917C20.6778%2025.7917%2026.4086%2020.0647%2026.4086%2013.0001C26.4086%205.93549%2020.6778%200.208496%2013.6086%200.208496C6.53935%200.208496%200.808594%205.93549%200.808594%2013.0001C0.808594%2020.0647%206.53935%2025.7917%2013.6086%2025.7917Z'%20fill='%23415251'/%3e%3cpath%20d='M12.5833%2019.8043L6.53125%2015.0895L8.25205%2012.8811L11.9685%2015.7763L18.102%206.92554L20.4037%208.51994L12.5833%2019.8043Z'%20fill='%2351C880'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_3790_128'%3e%3crect%20width='25.6'%20height='25.6'%20fill='white'%20transform='translate(0.808594%200.200195)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",L="/info.svg",w="/warning.svg",E="/settings.svg",c={success:v,error:b,cancel:y,info:L,warning:w,default:E};function A({parent:n,icon:o,title:a,timeout:s}){let e=document.getElementById("ruth-alert-container");e||(e=document.createElement("div"),e.id="ruth-alert-container",e.classList.add("ruth-alert-container"),n.appendChild(e));const t={success:"success",error:"error",info:"info",warning:"warning",default:"default"},r=document.createElement("div"),d=(t==null?void 0:t[o])??"default";r.classList.add("ruth-alert",d),r.innerHTML=`
         <img src="${c[o??"default"]||c.default}" class="alert-icon" />
         <p class="${o==="error"?"alert-text-error":"alert-text"}">${a}</p>
         <img src="${c.cancel}" class="alert-close" />
     `,e.appendChild(r),r.querySelector(".alert-close").addEventListener("click",()=>u(r)),setTimeout(()=>u(r),s);function u(l){l.classList.add("fade-out"),setTimeout(()=>l.remove(),500)}}function x({parent:n,icon:o,title:a,callback:s}){let e=document.getElementById("ruth-alert-bossybx-container");e||(e=document.createElement("div"),e.id="ruth-alert-bossybox-container",e.classList.add("ruth-alert-bossybx-container"),n.appendChild(e));const t={success:"success",error:"error",info:"info",warning:"warning",default:"default"},r=document.createElement("div"),d=(t==null?void 0:t[o])??"default",p="Confirm";document.createElement("div"),document.createElement("span"),r.classList.add("ruth-alert-bossybx",d),r.innerHTML=`
         <img src="${c[o??"default"]||c.default}" class="alert-icon" />
         <p class="${o==="error"?"alert-text-error":"alert-text"}">${a}</p>
         <div>
             <button id="custom-callback-btn" class="bossybx-btn-custom">${p}</button>
             <button class="bossybx-btn-close">Cancel</button>
         </div>
         <div class="bossybox-loader" style="display: none;">⏳ Processing...</div>

     `,e.appendChild(r),r.querySelector(".bossybx-btn-close").addEventListener("click",()=>h(e,r),{once:!0});const l=r.querySelector("#custom-callback-btn"),f=r.querySelector(".bossybox-loader");typeof s=="function"?l.addEventListener("click",async()=>{r.style.display="none",f.style.display="block";try{await s()}catch(i){console.error("Error in callback:",i)}finally{}}):l.style.display="none";function h(i,g){i.classList.add("fade-out"),g.remove(),setTimeout(()=>i.remove(),500)}}const C=({title:n,icon:o,timeout:a=3e3,type:s,callback:e})=>{console.log(s);const t=document.getElementById("app");if(!t){console.error("RuthdoAlert Error: Parent element #app not found.");return}({flyingruthly:A,bossyruthly:x})[s]({parent:t,title:n,icon:o,timeout:a,callback:e})};document.addEventListener("DOMContentLoaded",()=>{let n="flyingruthly";const o=document.querySelector("#app");if(!o){alert("App not found");return}const a=()=>{o.innerHTML=`
        <header>
            <a href="https://vite.dev" target="_blank">
                <img src="${m}" class="logo" alt="Vite logo" />
            </a>
            <h1>Ruthly</h1>
            <p>A simple Alert message system for web applications. Use Ruthly for success and error pop-ups that suit your project.</p>
        </header>

        <section id="get-started">
            <h2>🚀 Get Started</h2>
            <p>Install Ruthly using your favorite package manager:</p>
            <pre><code>npm install ruthly-alert</code></pre>
            <pre><code>yarn add ruthly-alert</code></pre>

            <h3>🔗 Compatible with React & Vue</h3>
            <p>Ruthly works seamlessly with both React and Vue. Example usage:</p>

            <div class="code-snippet">
                <h4>React Example:</h4>
                <pre><code>import { RuthdoAlert } from 'ruthly-alert'; <br />
RuthdoAlert({ title: "Success!", icon: "success" });</code></pre>
            </div>

            <div class="code-snippet">
                <h4>Vue Example:</h4>
                <pre><code>import { RuthdoAlert } from 'ruthly-alert'; <br />
RuthdoAlert({ title: "Error occurred!", icon: "error" });</code></pre>
            </div>
        </section>

        <section id="demo">
            <h2>🎉 Try the Demo</h2>
            <p>Choose a feature and test different alert types:</p>

            <div class="feature-toggle">
                <label>
                    <input type="radio" name="feature" value="flyingruthly" ${n==="flyingruthly"?"checked":""} />
                    🚀 FlyingRuthly
                </label>
                <label>
                    <input type="radio" name="feature" value="bossyruthly" ${n==="bossyruthly"?"checked":""} />
                    🎩 BossyRuthly
                </label>
            </div>

            <div class="card">
                <button data-tag="success">✅ Success Alert</button>
                <button data-tag="error">❌ Error Alert</button>
                <button data-tag="warning">⚠️ Warning Alert</button>
                <button data-tag="info">ℹ️ Info Alert</button>
                <button data-tag="default">⚙️ Default Alert</button>

            </div>
        </section>

        <footer>
            <p>Made with ❤️ using Vite.</p>
        </footer>
        `};document.addEventListener("click",s=>{console.log("Clicked Element:",s.target);const e=s.target.closest("[data-tag]");e&&(console.log("Matches [data-tag]:",e.dataset.tag),C({title:{success:"Success! Operation completed.",error:"Error! Something went wrong.",warning:"Are you sure you want to delete this user?",info:"A dispatch rider is around your area."}[e.dataset.tag],icon:e.dataset.tag,timeout:2e3,type:n}))}),document.addEventListener("change",s=>{s.target.matches('input[name="feature"]')&&(n=s.target.value,a())}),a()});
