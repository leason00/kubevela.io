(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4454],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),p=(n(67294),n(3905)),i={title:"Expose Application"},o={unversionedId:"end-user/traits/ingress",id:"end-user/traits/ingress",isDocsHomePage:!1,title:"Expose Application",description:"\u26a0\ufe0f \u672c\u7ae0\u8282\u8981\u6c42\u5f53\u524d\u96c6\u7fa4\u5df2\u7ecf\u5b89\u88c5 ingress \u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/traits/ingress.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/ingress",permalink:"/zh/docs/next/end-user/traits/ingress",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/ingress.md",version:"current",lastUpdatedBy:"zhuhuijun",lastUpdatedAt:1620350065,formattedLastUpdatedAt:"5/7/2021",frontMatter:{title:"Expose Application"},sidebar:"docs",previous:{title:"Want More?",permalink:"/zh/docs/next/end-user/components/more"},next:{title:"Manual Scaling",permalink:"/zh/docs/next/end-user/traits/scaler"}},s=[],l={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u672c\u7ae0\u8282\u8981\u6c42\u5f53\u524d\u96c6\u7fa4\u5df2\u7ecf\u5b89\u88c5 ingress \u3002")),(0,p.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u5c06 application \u4e2d\u7684\u670d\u52a1\u66b4\u9732\u5bf9\u5916\uff0c\u53ea\u9700\u8981\u5728\u8be5 application \u4e2d\u6dfb\u52a0 ",(0,p.kt)("inlineCode",{parentName:"p"},"ingress")," \u7684 trait\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 kubectl \u67e5\u770b ingress \u6570\u636e\u7ed3\u6784\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show ingress\n# Properties\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n|  NAME  |                                 DESCRIPTION                                  |      TYPE      | REQUIRED | DEFAULT |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n| http   | Specify the mapping relationship between the http path and the workload port | map[string]int | true     |         |\n| domain | Specify the domain you want to expose                                        | string         | true     |         |\n+--------+------------------------------------------------------------------------------+----------------+----------+---------+\n")),(0,p.kt)("p",null,"\u968f\u540e\uff0c\u4fee\u6539\u4e14\u90e8\u7f72\u4e0b\u9762 application \uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\napplication.core.oam.dev/first-vela-app created\n")),(0,p.kt)("p",null,"\u5f53\u72b6\u6001 ",(0,p.kt)("inlineCode",{parentName:"p"},"PHASE")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"running")," \u4e14 ",(0,p.kt)("inlineCode",{parentName:"p"},"HEALTHY")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8bf4\u660e application \u5df2\u7ecf\u88ab\u6b63\u786e\u90e8\u7f72\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get application first-vela-app -w\nNAME             COMPONENT        TYPE         PHASE            HEALTHY   STATUS   AGE\nfirst-vela-app   express-server   webservice   healthChecking                      14s\nfirst-vela-app   express-server   webservice   running          true               42s\n")),(0,p.kt)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u547d\u4ee4\u884c\u67e5\u770b trait \u7684\u8be6\u60c5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application first-vela-app -o yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\n  namespace: default\nspec:\n...\n  services:\n  - healthy: true\n    name: express-server\n    traits:\n    - healthy: true\n      message: 'Visiting URL: testsvc.example.com, IP: 47.111.233.220'\n      type: ingress\n  status: running\n...\n")),(0,p.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbf\u95ee\u90e8\u7f72\u7684\u670d\u52a1\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')))}c.isMDXComponent=!0}}]);