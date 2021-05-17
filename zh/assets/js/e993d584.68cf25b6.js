(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9410],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30959:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Extend CRD Operator as Component Type"},l={unversionedId:"platform-engineers/cloneset",id:"platform-engineers/cloneset",isDocsHomePage:!1,title:"Extend CRD Operator as Component Type",description:"Let's use OpenKruise as example of extend CRD as KubeVela Component.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/cloneset.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/cloneset",permalink:"/zh/docs/next/platform-engineers/cloneset",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cloneset.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",frontMatter:{title:"Extend CRD Operator as Component Type"}},p=[{value:"Step 1: Install the CRD controller",id:"step-1-install-the-crd-controller",children:[]},{value:"Step 2: Create Component Definition",id:"step-2-create-component-definition",children:[]},{value:"Step 3: Register New Component Type to KubeVela",id:"step-3-register-new-component-type-to-kubevela",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"OpenKruise")," as example of extend CRD as KubeVela Component.\n",(0,a.kt)("strong",{parentName:"p"},"The mechanism works for all CRD Operators"),"."),(0,a.kt)("h3",{id:"step-1-install-the-crd-controller"},"Step 1: Install the CRD controller"),(0,a.kt)("p",null,"You need to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise#quick-start"},"install the CRD controller")," into your K8s system."),(0,a.kt)("h3",{id:"step-2-create-component-definition"},"Step 2: Create Component Definition"),(0,a.kt)("p",null,"To register Cloneset(one of the OpenKruise workloads) as a new workload type in KubeVela, the only thing needed is to create an ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," object for it.\nA full example can be found in this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/catalog/blob/master/registry/cloneset.yaml"},"cloneset.yaml"),".\nSeveral highlights are list below."),(0,a.kt)("h4",{id:"1-describe-the-workload-type"},"1. Describe The Workload Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n  annotations:\n    definition.oam.dev/description: "OpenKruise cloneset"\n...\n')),(0,a.kt)("p",null,"A one line description of this component type. It will be shown in helper commands such as ",(0,a.kt)("inlineCode",{parentName:"p"},"$ vela components"),"."),(0,a.kt)("h4",{id:"2-register-its-underlying-crd"},"2. Register it's underlying CRD"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nworkload:\n  definition:\n    apiVersion: apps.kruise.io/v1alpha1\n    kind: CloneSet\n...\n")),(0,a.kt)("p",null,"This is how you register OpenKruise Cloneset's API resource (",(0,a.kt)("inlineCode",{parentName:"p"},"fapps.kruise.io/v1alpha1.CloneSet"),") as the workload type.\nKubeVela uses Kubernetes API resource discovery mechanism to manage all registered capabilities."),(0,a.kt)("h4",{id:"4-define-template"},"4. Define Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nschematic:\n  cue:\n    template: |\n      output: {\n          apiVersion: "apps.kruise.io/v1alpha1"\n          kind:       "CloneSet"\n          metadata: labels: {\n            "app.oam.dev/component": context.name\n          }\n          spec: {\n              replicas: parameter.replicas\n              selector: matchLabels: {\n                  "app.oam.dev/component": context.name\n              }\n              template: {\n                  metadata: labels: {\n                    "app.oam.dev/component": context.name\n                  }\n                  spec: {\n                      containers: [{\n                        name:  context.name\n                        image: parameter.image\n                    }]\n                  }\n              }\n          }\n      }\n      parameter: {\n          // +usage=Which image would you like to use for your service\n          // +short=i\n          image: string\n\n          // +usage=Number of pods in the cloneset\n          replicas: *5 | int\n      }\n')),(0,a.kt)("h3",{id:"step-3-register-new-component-type-to-kubevela"},"Step 3: Register New Component Type to KubeVela"),(0,a.kt)("p",null,"As long as the definition file is ready, you just need to apply it to Kubernetes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/catalog/master/registry/cloneset.yaml\n")),(0,a.kt)("p",null,"And the new component type will immediately become available for developers to use in KubeVela."))}c.isMDXComponent=!0}}]);