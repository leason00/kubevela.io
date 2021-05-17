(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[739],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44119:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"Labels and Annotations"},s={unversionedId:"end-user/labels",id:"version-v1.0/end-user/labels",isDocsHomePage:!1,title:"Labels and Annotations",description:"We will introduce how to add labels and annotations to your Application.",source:"@site/versioned_docs/version-v1.0/end-user/labels.md",sourceDirName:"end-user",slug:"/end-user/labels",permalink:"/zh/docs/end-user/labels",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/labels.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"Labels and Annotations"},sidebar:"version-v1.0/docs",previous:{title:"Scale",permalink:"/zh/docs/end-user/scale"},next:{title:"Attach Sidecar",permalink:"/zh/docs/end-user/sidecar"}},i=[{value:"List Traits",id:"list-traits",children:[]},{value:"Apply Application",id:"apply-application",children:[]}],p={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will introduce how to add labels and annotations to your Application."),(0,o.kt)("h2",{id:"list-traits"},"List Traits"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get trait -n vela-system\nNAME          APPLIES-TO                DESCRIPTION\nannotations   ["webservice","worker"]   Add annotations for your Workload.\ncpuscaler     ["webservice","worker"]   configure k8s HPA with CPU metrics for Deployment\ningress       ["webservice","worker"]   Configures K8s ingress and service to enable web traffic for your service. Please use route trait in cap center for advanced usage.\nlabels        ["webservice","worker"]   Add labels for your Workload.\nscaler        ["webservice","worker"]   Configures replicas for your service by patch replicas field.\nsidecar       ["webservice","worker"]   inject a sidecar container into your app\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations")," traits to add labels and annotations for your workload."),(0,o.kt)("h2",{id:"apply-application"},"Apply Application"),(0,o.kt)("p",null,"Let's use ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations")," traits in your Application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# myapp.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: labels\n          properties:\n            "release": "stable"\n        - type: annotations\n          properties:\n            "description": "web application"\n')),(0,o.kt)("p",null,"Apply this Application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f myapp.yaml\n")),(0,o.kt)("p",null,"Check the workload has been created successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deployments\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server   1/1     1            1           15s\n")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"labels")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get deployments express-server -o jsonpath=\'{.spec.template.metadata.labels}\'\n{"app.oam.dev/component":"express-server","release": "stable"}\n')),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl get deployments express-server -o jsonpath=\'{.spec.template.metadata.annotations}\'\n{"description":"web application"}\n')))}c.isMDXComponent=!0}}]);