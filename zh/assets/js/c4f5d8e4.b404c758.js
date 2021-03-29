/*! For license information please see c4f5d8e4.b404c758.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var r=a(3),n=a(0),o=a.n(n),l=a(202),i=a(210),c=a(205),s=a(204),d=[{title:o.a.createElement(o.a.Fragment,null,"Application Centric"),imgUrl:"img/application-centric.svg",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement(s.a,null,"KubeVela enforces an Application abstraction as its main API and ALL KubeVela's capabilities serve for the applications' needs only. This is achieved by adopting the "),o.a.createElement("a",{href:"https://github.com/oam-dev/spec"},"Open Application Model"),o.a.createElement(s.a,null," as the core API for KubeVela.")))},{title:o.a.createElement(o.a.Fragment,null,"Extending Natively"),imgUrl:"img/extending-natively.svg",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement(s.a,null,"The Application abstraction is composed of modularized building blocks named components and traits. Any capability provided by Kubernetes ecosystem can be added to KubeVela as new component or trait through simple")," ",o.a.createElement("code",null,"kubectl apply -f"),".")),reverse:!0},{title:o.a.createElement(o.a.Fragment,null,"Simple yet Extensible Abstraction Mechanism"),imgUrl:"img/simple-yet-extensible-abstraction-mechanism.svg",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement(s.a,null,"The Application abstraction is implemented with server-side encapsulation controller (supports "),o.a.createElement("a",{href:"https://github.com/cuelang/cue"},"CUELang")," ",o.a.createElement(s.a,null,"and "),o.a.createElement("a",{href:"https://helm.sh/"},"Helm")," ",o.a.createElement(s.a,null,"as templating engine) to abstract user-facing primitives from Kubernetes API resources. Changes to existing capability templates (or new templates added) take effect at runtime, neither recompilation nor redeployment of KubeVela is required.")))}],u=a(16),h=a(208);class m extends n.PureComponent{constructor(e){super(e),this.$=o.a.createRef(),this._=o.a.createRef()}render(){return o.a.createElement("span",{ref:this.$},o.a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(a.bind(null,290)).then((({render:t})=>{t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var p=m,f=a(173),g=a.n(f);function b(e){var t=e.imgUrl,a=e.title,r=e.description,n=e.reverse;return o.a.createElement("div",{className:Object(l.a)("row",g.a.feature,n?g.a.featureReverse:"")},o.a.createElement("div",{className:"col col--3"},o.a.createElement("div",{className:"text--center"},t&&o.a.createElement("img",{className:g.a.featureImage,src:Object(h.a)(t),alt:a}))),o.a.createElement("div",{className:Object(l.a)("col col--9",g.a.featureDesc)},o.a.createElement("div",null,o.a.createElement("h2",null,a),o.a.createElement("div",null,r))))}var v=function(e){var t=e.children,a=e.href;return o.a.createElement("div",{className:"col col--2 margin-horiz--sm"},o.a.createElement(c.a,{className:"button button--outline button--primary button--lg",to:a},t))};function w(){var e=Object(u.default)().siteConfig,t=void 0===e?{}:e;return o.a.createElement(i.a,{title:t.tagline,description:t.tagline},o.a.createElement("header",{className:Object(l.a)("hero",g.a.hero)},o.a.createElement("div",{className:"container text--center"},o.a.createElement("div",{className:g.a.heroLogoWrapper},o.a.createElement("img",{className:g.a.heroLogo,src:Object(h.a)("img/logo.svg"),alt:"Kubevela Logo"})),o.a.createElement("h2",{className:Object(l.a)("hero__title",g.a.heroTitle)},t.title),o.a.createElement(p,{href:"https://github.com/oam-dev/kubevela","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star facebook/metro on GitHub"},"Star"),o.a.createElement("p",{className:"hero__subtitle"},t.tagline),o.a.createElement("div",{className:Object(l.a)(g.a.heroButtons,"name","margin-vert--md")},o.a.createElement(v,{href:Object(h.a)("docs/quick-start")},"Get Started"),o.a.createElement(v,{href:Object(h.a)("docs/")},"Learn More")))),o.a.createElement(E,null),o.a.createElement("main",{className:Object(l.a)("hero",g.a.hero)},o.a.createElement("div",{className:"container"},o.a.createElement("section",{className:g.a.features},o.a.createElement("div",{className:"container"},d.map((function(e,t){return o.a.createElement(b,Object(r.a)({key:t},e))})))))))}var E=function(){return o.a.createElement("div",{className:Object(l.a)("hero",g.a.hero)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6"},o.a.createElement("h1",null,o.a.createElement(s.a,null,"What is KubeVela?")),o.a.createElement("p",{className:"hero__subtitle"},o.a.createElement("small",null,o.a.createElement("strong",null,o.a.createElement(s.a,null,"For platform builders")),": ",o.a.createElement(s.a,null,"KubeVela serves as a framework that empowers them to create user friendly yet highly extensible platforms at ease"),o.a.createElement("br",null),o.a.createElement("strong",null,o.a.createElement(s.a,null,"For developers")),": ",o.a.createElement(s.a,null,"such Application abstraction built with KubeVela will enable them to design and ship their applications to Kubernetes with minimal effort.")))),o.a.createElement("div",{className:"col"},o.a.createElement("img",{className:"image",src:Object(h.a)("img/what-is-kubevela.png"),align:"right",alt:"what is kubevela"})))))}},207:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return s})),a.d(t,"e",(function(){return d})),a.d(t,"g",(function(){return u}));var r=a(206),n=a.n(r);a(213)(n.a),a(215).lunrLanguageZh(n.a),a(214)(n.a);var o=["en","zh"],l=!1,i=null,c="57788a06",s=8,d=50,u={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},290:function(e,t,a){"use strict";a.r(t),a.d(t,"render",(function(){return N}));var r=window.document,n=window.Math,o=window.HTMLElement,l=window.XMLHttpRequest,i=function(e){return function(t,a,r){var n=e.createElement(t);if(null!=a)for(var o in a){var l=a[o];null!=l&&(null!=n[o]?n[o]=l:n.setAttribute(o,l))}if(null!=r)for(var i=0,c=r.length;i<c;i++){var s=r[i];n.appendChild("string"==typeof s?e.createTextNode(s):s)}return n}},c=i(r),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=function(e){return(""+e).toLowerCase()},u="github.com",h=l&&"prototype"in l&&"withCredentials"in l.prototype,m=h&&o&&"attachShadow"in o.prototype&&!("prototype"in o.prototype.attachShadow),p=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent("on"+t,a)},f=function(e,t,a){e.removeEventListener?e.removeEventListener(t,a,!1):e.detachEvent("on"+t,a)},g={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},b=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+g[s(g,t)?t:e]+"}"},v=function(e){if(null==e)return g.light;if(s(g,e))return g[e];var t=function(e,t,a,r){null==t&&(t="&"),null==a&&(a="="),null==r&&(r=window.decodeURIComponent);for(var n={},o=e.split(t),l=0,i=o.length;l<i;l++){var c=o[l];if(""!==c){var s=c.split(a);n[r(s[0])]=null!=s[1]?r(s.slice(1).join(a)):void 0}}return n}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return g[s(g,t["no-preference"])?t["no-preference"]:"light"]+b("light",t.light)+b("dark",t.dark)},w={download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},E=function(e,t){e=d(e).replace(/^octicon-/,""),s(w,e)||(e="mark-github");var a=t>=24&&24 in w[e].heights?24:16,r=w[e].heights[a];return'<svg viewBox="0 0 '+r.width+" "+a+'" width="'+t*r.width/a+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+r.path+"</svg>"},y={},k=function(e,t){var a=y[e]||(y[e]=[]);if(!(a.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete y[e];t=a.shift();)t.apply(null,arguments)}));if(h){var n=new l;p(n,"abort",r),p(n,"error",r),p(n,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void r(t)}r(200!==this.status,e)})),n.open("GET",e),n.send()}else{var o=this||window;o._=function(e){o._=null,r(200!==e.meta.status,e.data)};var c=i(o.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){o._&&o._({meta:{}})};p(c,"load",s),p(c,"error",s),c.readyState&&function(e,t,a){var r="readystatechange",n=function(){if(t.test(e.readyState))return f(e,r,n),a.apply(this,arguments)};p(e,r,n)}(c,/de|m/,s),o.document.getElementsByTagName("head")[0].appendChild(c)}}},x=function(e,t,a){var r=i(e.ownerDocument),n=e.appendChild(r("style",{type:"text/css"})),o="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+v(t["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=o:n.appendChild(e.ownerDocument.createTextNode(o));var l="large"===d(t["data-size"]),c=r("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:E(t["data-icon"],l?16:14)},[" ",r("span",{},[t["data-text"]||""])]),s=e.appendChild(r("div",{className:"widget"+(l?" widget-lg":"")},[c])),h=c.hostname.replace(/\.$/,"");if(("."+h).substring(h.length-u.length)!=="."+u)return c.removeAttribute("href"),void a(s);var m=(" /"+c.pathname).split(/\/+/);if(((h===u||h==="gist."+u)&&"archive"===m[3]||h===u&&"releases"===m[3]&&("download"===m[4]||"latest"===m[4]&&"download"===m[5])||h==="codeload."+u)&&(c.target="_top"),"true"===d(t["data-show-count"])&&h===u&&"sponsors"!==m[1]){var p,f;if(!m[2]&&m[1])f="followers",p="?tab=followers";else if(!m[3]&&m[2])f="stargazers_count",p="/stargazers";else if(m[4]||"subscription"!==m[3])if(m[4]||"fork"!==m[3]){if("issues"!==m[3])return void a(s);f="open_issues_count",p="/issues"}else f="forks_count",p="/network/members";else f="subscribers_count",p="/watchers";var g=m[2]?"/repos/"+m[1]+"/"+m[2]:"/users/"+m[1];k.call(this,"https://api.github.com"+g,(function(e,t){if(!e){var n=t[f];s.appendChild(r("a",{className:"social-count",href:t.html_url+p,rel:"noopener",target:"_blank","aria-label":n+" "+f.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}a(s)}))}else a(s)},C=window.devicePixelRatio||1,z=function(e){return(C>1?n.ceil(n.round(e*C)/C*2)/2:n.ceil(e))||0},_=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},N=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},a=["icon","color-scheme","text","size","show-count"],r=0,n=a.length;r<n;r++){var o="data-"+a[r];t[o]=e.getAttribute(o)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),m){var a=c("span");x(a.attachShadow({mode:"closed"}),e,(function(){t(a)}))}else{var o=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});_(o,[0,0]),o.style.border="none";var l=function(){var a,i=o.contentWindow;try{a=i.document.body}catch(c){return void r.body.appendChild(o.parentNode.removeChild(o))}f(o,"load",l),x.call(i,a,e,(function(a){var r=function(e){var t=e.offsetWidth,a=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=n.max(t,z(r.width)),a=n.max(a,z(r.height))}return[t,a]}(a);o.parentNode.removeChild(o),function(e,t,a){var r=function(){return f(e,t,r),a.apply(this,arguments)};p(e,t,r)}(o,"load",(function(){_(o,r)})),o.src="https://unpkg.com/github-buttons@2.14.4/dist/buttons.html#"+(o.name=function(e,t,a,r){null==t&&(t="&"),null==a&&(a="="),null==r&&(r=window.encodeURIComponent);var n=[];for(var o in e){var l=e[o];null!=l&&n.push(r(o)+a+r(l))}return n.join(t)}(e)),t(o)}))};p(o,"load",l),r.body.appendChild(o)}}}}]);