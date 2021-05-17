(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[555],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23674:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"The Reference Documentation Guide of Capabilities"},s={unversionedId:"developers/check-ref-doc",id:"version-v1.0/developers/check-ref-doc",isDocsHomePage:!1,title:"The Reference Documentation Guide of Capabilities",description:"In this documentation, we will show how to check the detailed schema of a given capability (i.e. workload type or trait).",source:"@site/versioned_docs/version-v1.0/developers/check-ref-doc.md",sourceDirName:"developers",slug:"/developers/check-ref-doc",permalink:"/zh/docs/developers/check-ref-doc",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/developers/check-ref-doc.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"The Reference Documentation Guide of Capabilities"}},l=[{value:"Using Browser",id:"using-browser",children:[{value:"For Workload Types",id:"for-workload-types",children:[]},{value:"For Traits",id:"for-traits",children:[]}]},{value:"Using Terminal",id:"using-terminal",children:[]}],c={toc:l};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this documentation, we will show how to check the detailed schema of a given capability (i.e. workload type or trait). "),(0,a.kt)("p",null,'This may sound challenging because every capability is a "plug-in" in KubeVela (even for the built-in ones), also, it\'s by design that KubeVela allows platform administrators to modify the capability templates at any time. In this case, do we need to manually write documentation for every newly installed capability? And how can we ensure those documentations for the system is up-to-date?'),(0,a.kt)("h2",{id:"using-browser"},"Using Browser"),(0,a.kt)("p",null,'Actually, as a important part of its "extensibility" design, KubeVela will always ',(0,a.kt)("strong",{parentName:"p"},"automatically generate")," reference documentation for every workload type or trait registered in your Kubernetes cluster, based on its template in definition of course. This feature works for any capability: either built-in ones or your own workload types/traits."),(0,a.kt)("p",null,"Thus, as an end user, the only thing you need to do is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ vela show WORKLOAD_TYPE or TRAIT --web\n")),(0,a.kt)("p",null,"This command will automatically open the reference documentation for given workload type or trait in your default browser."),(0,a.kt)("h3",{id:"for-workload-types"},"For Workload Types"),(0,a.kt)("p",null,"Let's take ",(0,a.kt)("inlineCode",{parentName:"p"},"$ vela show webservice --web")," as example. The detailed schema documentation for ",(0,a.kt)("inlineCode",{parentName:"p"},"Web Service")," workload type will show up immediately as below:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(85183).Z})),(0,a.kt)("p",null,"Note that there's in the section named ",(0,a.kt)("inlineCode",{parentName:"p"},"Specification"),", it even provides you with a full sample for the usage of this workload type with a fake name ",(0,a.kt)("inlineCode",{parentName:"p"},"my-service-name"),"."),(0,a.kt)("h3",{id:"for-traits"},"For Traits"),(0,a.kt)("p",null,"Similarly, we can also do ",(0,a.kt)("inlineCode",{parentName:"p"},"$ vela show autoscale --web"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(56261).Z})),(0,a.kt)("p",null,"With these auto-generated reference documentations, we could easily complete the application description by simple copy-paste, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: helloworld\n\nservices:\n  backend: # copy-paste from the webservice ref doc above\n    image: oamdev/testapp:v1\n    cmd: ["node", "server.js"]\n    port: 8080\n    cpu: "0.1"\n\n    autoscale: # copy-paste and modify from autoscaler ref doc above\n      min: 1\n      max: 8\n      cron:\n        startAt:  "19:00"\n        duration: "2h"\n        days:     "Friday"\n        replicas: 4\n        timezone: "America/Los_Angeles"\n')),(0,a.kt)("h2",{id:"using-terminal"},"Using Terminal"),(0,a.kt)("p",null,"This reference doc feature also works for terminal-only case. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela show webservice\n# Properties\n+-------+----------------------------------------------------------------------------------+---------------+----------+---------+\n| NAME  |                                   DESCRIPTION                                    |     TYPE      | REQUIRED | DEFAULT |\n+-------+----------------------------------------------------------------------------------+---------------+----------+---------+\n| cmd   | Commands to run in the container                                                 | []string      | false    |         |\n| env   | Define arguments by using environment variables                                  | [[]env](#env) | false    |         |\n| image | Which image would you like to use for your service                               | string        | true     |         |\n| port  | Which port do you want customer traffic sent to                                  | int           | true     |      80 |\n| cpu   | Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core) | string        | false    |         |\n+-------+----------------------------------------------------------------------------------+---------------+----------+---------+\n\n\n## env\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n|   NAME    |                        DESCRIPTION                        |          TYPE           | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n| name      | Environment variable name                                 | string                  | true     |         |\n| value     | The value of the environment variable                     | string                  | false    |         |\n| valueFrom | Specifies a source the value of this var should come from | [valueFrom](#valueFrom) | false    |         |\n+-----------+-----------------------------------------------------------+-------------------------+----------+---------+\n\n\n### valueFrom\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n|     NAME     |                   DESCRIPTION                    |             TYPE              | REQUIRED | DEFAULT |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n| secretKeyRef | Selects a key of a secret in the pod's namespace | [secretKeyRef](#secretKeyRef) | true     |         |\n+--------------+--------------------------------------------------+-------------------------------+----------+---------+\n\n\n#### secretKeyRef\n+------+------------------------------------------------------------------+--------+----------+---------+\n| NAME |                           DESCRIPTION                            |  TYPE  | REQUIRED | DEFAULT |\n+------+------------------------------------------------------------------+--------+----------+---------+\n| name | The name of the secret in the pod's namespace to select from     | string | true     |         |\n| key  | The key of the secret to select from. Must be a valid secret key | string | true     |         |\n+------+------------------------------------------------------------------+--------+----------+---------+\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that for all the built-in capabilities, we already published their reference docs ",(0,a.kt)("a",{parentName:"p",href:"https://kubevela.io/#/en/developers/references/"},"here")," based on the same doc generation mechanism.")))}u.isMDXComponent=!0},56261:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vela_show_autoscale-1eefa0ae534277bc073ad1c8302f7882.jpg"},85183:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vela_show_webservice-9b50b8ef8367026e470bb34dcc4f50be.jpg"}}]);