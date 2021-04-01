(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(201)),o={title:"Define resources located in defferent namespace with application"},i={unversionedId:"cue/cross-namespace-resource",id:"cue/cross-namespace-resource",isDocsHomePage:!1,title:"Define resources located in defferent namespace with application",description:"In this section, we will introduce how to use cue template create resources (workload/trait) in different namespace with the application.",source:"@site/docs/cue/cross-namespace-resource.md",slug:"/cue/cross-namespace-resource",permalink:"/docs/cue/cross-namespace-resource",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/cue/cross-namespace-resource.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021"},s=[{value:"Usage",id:"usage",children:[]},{value:"Limitations",id:"limitations",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In this section, we will introduce how to use cue template create resources (workload/trait) in different namespace with the application."),Object(c.b)("p",null,"By default, the ",Object(c.b)("inlineCode",{parentName:"p"},"metadata.namespace")," of K8s resource in CuE template is automatically filled with the same namespace of the applicaiton."),Object(c.b)("p",null,"If you want to create K8s resources running in a specific namespace witch is different with the application, you can set the ",Object(c.b)("inlineCode",{parentName:"p"},"metadata.namespace")," field.\nKubeVela will create the resources in the specified namespace, and create a resourceTracker object as owener of those resources."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\nspec:\n  definitionRef:\n    name: deployments.apps\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            name:  string\n            image: string\n            namespace: string  # make this parameter `namespace` as keyword which represents the resource maybe located in defferent namespace with application\n        }\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n                metadata: {\n                   namespace: my-namespace\n                }\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": parameter.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": parameter.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  parameter.name\n                            image: parameter.image\n                        }]\n                    }}}\n        }\n')),Object(c.b)("h2",{id:"limitations"},"Limitations"),Object(c.b)("p",null,"If you update definition by changing the ",Object(c.b)("inlineCode",{parentName:"p"},"metadata.namespace")," field. KubeVela will create new resources in the new namespace but not delete old resources.\nWe wil fix the limitation in the near future."))}u.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,f=l["".concat(o,".").concat(d)]||l[d]||m[d]||c;return n?r.a.createElement(f,i(i({ref:t},p),{},{components:n})):r.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);