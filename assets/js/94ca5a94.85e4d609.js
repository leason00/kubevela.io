(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),l=(n(0),n(201)),o={title:"Setting Rollout Strategy"},s={unversionedId:"developers/extensions/set-rollout",id:"developers/extensions/set-rollout",isDocsHomePage:!1,title:"Setting Rollout Strategy",description:"Note: rollout is one of the extension capabilities installed from cap center,",source:"@site/docs/developers/extensions/set-rollout.md",slug:"/developers/extensions/set-rollout",permalink:"/docs/developers/extensions/set-rollout",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/extensions/set-rollout.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021"},i=[],p={toc:i};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: rollout is one of the extension capabilities ",Object(l.b)("a",{parentName:"p",href:"../cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",Object(l.b)("inlineCode",{parentName:"p"},"vela traits"),".")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"rollout")," section is used to configure Canary strategy to release your app."),Object(l.b)("p",null,"Add rollout config under ",Object(l.b)("inlineCode",{parentName:"p"},"express-server")," along with a ",Object(l.b)("inlineCode",{parentName:"p"},"route"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\nservices:\n  express-server:\n    type: webservice\n    image: oamdev/testapp:rolling01\n    port: 80\n\n    rollout:\n      replicas: 5\n      stepWeight: 20\n      interval: "30s"\n    \n    route:\n      domain: "example.com"\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The full specification of ",Object(l.b)("inlineCode",{parentName:"p"},"rollout")," could show up by ",Object(l.b)("inlineCode",{parentName:"p"},"$ vela show rollout")," or be found on ",Object(l.b)("a",{parentName:"p",href:"../references/traits/rollout"},"its reference documentation"))),Object(l.b)("p",null,"Apply this ",Object(l.b)("inlineCode",{parentName:"p"},"appfile.yaml"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(l.b)("p",null,"You could check the status by:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    myenv\n  Created at:   2020-11-09 17:34:38.064006 +0800 CST\n  Updated at:   2020-11-10 17:05:53.903168 +0800 CST\n\nServices:\n\n  - Name: testapp\n    Type: webservice\n    HEALTHY Ready: 5/5\n    Traits:\n      - \u2705 rollout: interval=5s\n        replicas=5\n        stepWeight=20\n      - \u2705 route:    Visiting URL: http://example.com    IP: <your-ingress-IP-address>\n\n    Last Deployment:\n      Created at: 2020-11-09 17:34:38 +0800 CST\n      Updated at: 2020-11-10T17:05:53+08:00\n")),Object(l.b)("p",null,"Visiting this app by:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Host:example.com" http://<your-ingress-IP-address>/\nHello World -- Rolling 01\n')),Object(l.b)("p",null,"In day 2, assuming we have make some changes on our app and build the new image and name it by ",Object(l.b)("inlineCode",{parentName:"p"},"oamdev/testapp:v2"),"."),Object(l.b)("p",null,"Let's update the appfile by:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\nservices:\n  express-server:\n    type: webservice\n-   image: oamdev/testapp:rolling01\n+   image: oamdev/testapp:rolling02\n    port: 80\n    rollout:\n      replicas: 5\n      stepWeight: 20\n      interval: "30s"\n    route:\n      domain: example.com\n')),Object(l.b)("p",null,"Apply this ",Object(l.b)("inlineCode",{parentName:"p"},"appfile.yaml")," again:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(l.b)("p",null,"You could run ",Object(l.b)("inlineCode",{parentName:"p"},"vela status")," several times to see the instance rolling:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    myenv\n  Created at:   2020-11-12 19:02:40.353693 +0800 CST\n  Updated at:   2020-11-12 19:02:40.353693 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY express-server-v2:Ready: 1/1 express-server-v1:Ready: 4/4\n    Traits:\n      - \u2705 rollout: interval=30s\n        replicas=5\n        stepWeight=20\n      - \u2705 route:     Visiting by using 'vela port-forward testapp --route'\n\n    Last Deployment:\n      Created at: 2020-11-12 17:20:46 +0800 CST\n      Updated at: 2020-11-12T19:02:40+08:00\n")),Object(l.b)("p",null,"You could then try to ",Object(l.b)("inlineCode",{parentName:"p"},"curl")," your app multiple times and and see how the app being rollout following Canary strategy:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- This is rolling 02                                        \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- Rolling 01                                                                \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- Rolling 01                                                    \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- This is rolling 02                                         \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- Rolling 01                                                  \n$ curl -H "Host:example.com" http://<your-ingress-ip-address>/\nHello World -- This is rolling 02\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"How ",Object(l.b)("inlineCode",{parentName:"strong"},"Rollout")," works?")),Object(l.b)("details",null,Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Rollout")," trait implements progressive release process to rollout your app following ",Object(l.b)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CanaryRelease.html"},"Canary strategy"),"."),Object(l.b)("p",null,"In detail, ",Object(l.b)("inlineCode",{parentName:"p"},"Rollout")," controller will create a canary of your app , and then gradually shift traffic to the canary while measuring key performance indicators like HTTP requests success rate at the same time. "),Object(l.b)("p",null,Object(l.b)("img",{alt:"alt",src:n(288).default})),Object(l.b)("p",null,"In this sample, for every ",Object(l.b)("inlineCode",{parentName:"p"},"10s"),", ",Object(l.b)("inlineCode",{parentName:"p"},"5%")," traffic will be shifted to canary from the primary, until the traffic on canary reached ",Object(l.b)("inlineCode",{parentName:"p"},"50%"),". At the mean time, the instance number of canary will automatically scale to ",Object(l.b)("inlineCode",{parentName:"p"},"replicas: 2")," per configured in Appfile."),Object(l.b)("p",null,"Based on analysis result of the KPIs during this traffic shifting, a canary will be promoted or aborted if analysis is failed. If promoting, the primary will be upgraded from v1 to v2, and traffic will be fully shifted back to the primary instances. So as result, canary instances will be deleted after the promotion finished."),Object(l.b)("p",null,Object(l.b)("img",{alt:"alt",src:n(289).default})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: KubeVela's ",Object(l.b)("inlineCode",{parentName:"p"},"Rollout")," trait is implemented with ",Object(l.b)("a",{parentName:"p",href:"https://flagger.app/"},"Weaveworks Flagger")," operator."))))}c.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||l;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},288:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/traffic-shifting-analysis-a610a9b1912003bf49363fe9861df4bc.png"},289:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/promotion-51cd9353154b379c5e307d8c120d96e5.png"}}]);