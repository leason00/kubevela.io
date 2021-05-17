(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1396],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79941:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return s}});var a=n(22122),r=n(19756),p=(n(67294),n(3905)),o={title:"Attach Traits"},l={unversionedId:"platform-engineers/kube/trait",id:"version-v1.1/platform-engineers/kube/trait",isDocsHomePage:!1,title:"Attach Traits",description:"All traits in the KubeVela system works well with the simple template based Component.",source:"@site/versioned_docs/version-v1.1/platform-engineers/kube/trait.md",sourceDirName:"platform-engineers/kube",slug:"/platform-engineers/kube/trait",permalink:"/docs/v1.1/platform-engineers/kube/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/kube/trait.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621052799,formattedLastUpdatedAt:"5/15/2021",frontMatter:{title:"Attach Traits"},sidebar:"version-v1.1/docs",previous:{title:"How-to",permalink:"/docs/v1.1/platform-engineers/kube/component"},next:{title:"Overview",permalink:"/docs/v1.1/platform-engineers/cloud-services"}},i=[{value:"Verify",id:"verify",children:[]},{value:"Update an Application",id:"update-an-application",children:[]}],c={toc:i};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"All traits in the KubeVela system works well with the simple template based Component. "),(0,p.kt)("p",null,"In this sample, we will attach two traits,\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler"),"\nand\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/kube-module/virtual-group-td.yaml"},"virtualgroup")," to a component"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.0\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),(0,p.kt)("h2",{id:"verify"},"Verify"),(0,p.kt)("p",null,"Deploy the application and verify traits work."),(0,p.kt)("p",null,"Check the ",(0,p.kt)("inlineCode",{parentName:"p"},"scaler")," trait."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get manualscalertrait\nNAME                            AGE\ndemo-podinfo-scaler-3x1sfcd34   2m\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq .spec.replicas\n2\n")),(0,p.kt)("p",null,"Check the ",(0,p.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group1",\n  "app.kubernetes.io/name": "myapp"\n}\n')),(0,p.kt)("h2",{id:"update-an-application"},"Update an Application"),(0,p.kt)("p",null,"After the application is deployed and workloads/traits are created successfully,\nyou can update the application, and corresponding changes will be applied to the\nworkload."),(0,p.kt)("p",null,"Let's make several changes on the configuration of the sample application."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: mycomp\n      type: kube-worker\n      properties: \n        image: nginx:1.14.1 # 1.14.0 => 1.14.1\n      traits:\n        - type: scaler\n          properties:\n            replicas: 4 # 2 => 4\n        - type: virtualgroup\n          properties:\n            group: "my-group2" # my-group1 => my-group2\n            type: "cluster"\n')),(0,p.kt)("p",null,"Apply the new configuration and check the results after several seconds."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"After updating, the workload instance name will be updated from ",(0,p.kt)("inlineCode",{parentName:"p"},"mycomp-v1")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"mycomp-v2"),".")),(0,p.kt)("p",null,"Check the new property value."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq '.spec.template.spec.containers[0].image'\n\"nginx:1.14.1\"\n")),(0,p.kt)("p",null,"Check the ",(0,p.kt)("inlineCode",{parentName:"p"},"scaler")," trait."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment mycomp -o json | jq .spec.replicas\n4\n")),(0,p.kt)("p",null,"Check the ",(0,p.kt)("inlineCode",{parentName:"p"},"virtualgroup")," trait."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment mycomp -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group2",\n  "app.kubernetes.io/name": "myapp"\n}\n')))}s.isMDXComponent=!0}}]);