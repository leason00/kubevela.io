(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4873],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||o;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=l;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},39554:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),c={title:"Render Resource to Other Namespaces"},s={unversionedId:"platform-engineers/cue/cross-namespace-resource",id:"version-v1.1/platform-engineers/cue/cross-namespace-resource",isDocsHomePage:!1,title:"Render Resource to Other Namespaces",description:"In this section, we will introduce how to use cue template create resources in different namespace with the application.",source:"@site/versioned_docs/version-v1.1/platform-engineers/cue/cross-namespace-resource.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/cross-namespace-resource",permalink:"/docs/v1.1/platform-engineers/cue/cross-namespace-resource",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cue/cross-namespace-resource.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621052799,formattedLastUpdatedAt:"5/15/2021",frontMatter:{title:"Render Resource to Other Namespaces"}},i=[{value:"Usage",id:"usage",children:[]}],p={toc:i};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, we will introduce how to use cue template create resources in different namespace with the application."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.namespace")," of K8s resource in CUE template is automatically filled with the same namespace of the application."),(0,o.kt)("p",null,"If you want to create K8s resources running in a specific namespace witch is different with the application, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.namespace")," field.\nKubeVela will create the resources in the specified namespace, and create a resourceTracker object as owener of those resources."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\nspec:\n  definitionRef:\n    name: deployments.apps\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            name:  string\n            image: string\n            namespace: string  # make this parameter `namespace` as keyword which represents the resource maybe located in different namespace with application\n        }\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n                metadata: {\n                   namespace: my-namespace\n                }\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": parameter.name\n                }\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": parameter.name\n                    }\n                    spec: {\n                        containers: [{\n                            name:  parameter.name\n                            image: parameter.image\n                        }]\n                    }}}\n        }\n')))}u.isMDXComponent=!0}}]);