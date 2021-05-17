(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5884],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71616:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return s}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),l={title:"Scale"},p={unversionedId:"end-user/scale",id:"version-v1.0/end-user/scale",isDocsHomePage:!1,title:"Scale",description:"In the Deploy Application section, we use cpuscaler trait as an auto-scaler for the sample application.",source:"@site/versioned_docs/version-v1.0/end-user/scale.md",sourceDirName:"end-user",slug:"/end-user/scale",permalink:"/zh/docs/end-user/scale",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/scale.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"Scale"},sidebar:"version-v1.0/docs",previous:{title:"Expose Application",permalink:"/zh/docs/end-user/expose"},next:{title:"Labels and Annotations",permalink:"/zh/docs/end-user/labels"}},i=[{value:"Manuel Scale",id:"manuel-scale",children:[]}],c={toc:i};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"../application"},"Deploy Application")," section, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"cpuscaler")," trait as an auto-scaler for the sample application. "),(0,o.kt)("h2",{id:"manuel-scale"},"Manuel Scale"),(0,o.kt)("p",null,"You can use scale your application manually by using ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show scaler \n# Properties\n+----------+--------------------------------+------+----------+---------+\n|   NAME   |          DESCRIPTION           | TYPE | REQUIRED | DEFAULT |\n+----------+--------------------------------+------+----------+---------+\n| replicas | Specify replicas of workload   | int  | true     |       1 |\n+----------+--------------------------------+------+----------+---------+\n")),(0,o.kt)("p",null,"Deploy the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# sample-manual.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),(0,o.kt)("p",null,"Change and Apply the sample application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/enduser/sample-manual.yaml\napplication.core.oam.dev/website configured\n")),(0,o.kt)("p",null,"After a while, you can see the underlying deployment of ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," component has two replicas now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy -l app.oam.dev/name=website\nNAME       READY   UP-TO-DATE   AVAILABLE   AGE\nbackend    1/1     1            1           19h\nfrontend   2/2     2            2           19h\n")),(0,o.kt)("p",null,"To scale up or scale down, you can just modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait and apply the application again."))}s.isMDXComponent=!0}}]);