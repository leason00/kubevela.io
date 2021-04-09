(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(201)),o={title:"Generate Forms from Definitions"},c={unversionedId:"platform-engineers/openapi-v3-json-schema",id:"platform-engineers/openapi-v3-json-schema",isDocsHomePage:!1,title:"Generate Forms from Definitions",description:"For any capabilities installed via Definition Objects,",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/openapi-v3-json-schema.md",slug:"/platform-engineers/openapi-v3-json-schema",permalink:"/zh/docs/platform-engineers/openapi-v3-json-schema",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/openapi-v3-json-schema.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Definition CRD",permalink:"/zh/docs/platform-engineers/definition-and-templates"},next:{title:"How-to",permalink:"/zh/docs/cue/component"}},s=[{value:"List Schema",id:"list-schema",children:[]},{value:"Render Form",id:"render-form",children:[]}],p={toc:s};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For any capabilities installed via ",Object(i.b)("a",{parentName:"p",href:"./definition-and-templates"},"Definition Objects"),",\nKubeVela will automatically generate OpenAPI v3 JSON schema based on its parameter list, and store it in a ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap")," in the same ",Object(i.b)("inlineCode",{parentName:"p"},"namespace")," with the definition object. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The default KubeVela system ",Object(i.b)("inlineCode",{parentName:"p"},"namespace")," is ",Object(i.b)("inlineCode",{parentName:"p"},"vela-system"),", the built-in capabilities and schemas are laid there.")),Object(i.b)("h2",{id:"list-schema"},"List Schema"),Object(i.b)("p",null,"This ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap")," will have a common label ",Object(i.b)("inlineCode",{parentName:"p"},"definition.oam.dev=schema"),", so you can find easily by:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get configmap -n vela-system -l definition.oam.dev=schema\nNAME                DATA   AGE\nschema-ingress      1      19s\nschema-scaler       1      19s\nschema-task         1      19s\nschema-webservice   1      19s\nschema-worker       1      20s\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ConfigMap")," name is in the format of ",Object(i.b)("inlineCode",{parentName:"p"},"schema-<your-definition-name>"),",\nand the data key is ",Object(i.b)("inlineCode",{parentName:"p"},"openapi-v3-json-schema"),"."),Object(i.b)("p",null,"For example, we can use the following command to get the JSON schema of ",Object(i.b)("inlineCode",{parentName:"p"},"webservice"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get configmap schema-webservice -n vela-system -o yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: schema-webservice\n  namespace: vela-system\ndata:\n  openapi-v3-json-schema: \'{"properties":{"cmd":{"description":"Commands to run in\n    the container","items":{"type":"string"},"title":"cmd","type":"array"},"cpu":{"description":"Number\n    of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)","title":"cpu","type":"string"},"env":{"description":"Define\n    arguments by using environment variables","items":{"properties":{"name":{"description":"Environment\n    variable name","title":"name","type":"string"},"value":{"description":"The value\n    of the environment variable","title":"value","type":"string"},"valueFrom":{"description":"Specifies\n    a source the value of this var should come from","properties":{"secretKeyRef":{"description":"Selects\n    a key of a secret in the pod\'\'s namespace","properties":{"key":{"description":"The\n    key of the secret to select from. Must be a valid secret key","title":"key","type":"string"},"name":{"description":"The\n    name of the secret in the pod\'\'s namespace to select from","title":"name","type":"string"}},"required":["name","key"],"title":"secretKeyRef","type":"object"}},"required":["secretKeyRef"],"title":"valueFrom","type":"object"}},"required":["name"],"type":"object"},"title":"env","type":"array"},"image":{"description":"Which\n    image would you like to use for your service","title":"image","type":"string"},"port":{"default":80,"description":"Which\n    port do you want customer traffic sent to","title":"port","type":"integer"}},"required":["image","port"],"type":"object"}\'\n')),Object(i.b)("p",null,"Specifically, this schema is generated based on ",Object(i.b)("inlineCode",{parentName:"p"},"parameter")," section in capability definition:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For CUE based definition: the ",Object(i.b)("a",{parentName:"li",href:"../cue/component#Write-ComponentDefinition"},Object(i.b)("inlineCode",{parentName:"a"},"parameter"))," is a keyword in CUE template."),Object(i.b)("li",{parentName:"ul"},"For Helm based definition: the ",Object(i.b)("a",{parentName:"li",href:"../helm/component#Write-ComponentDefinition"},Object(i.b)("inlineCode",{parentName:"a"},"parameter"))," is generated from ",Object(i.b)("inlineCode",{parentName:"li"},"values.yaml")," in Helm chart.")),Object(i.b)("h2",{id:"render-form"},"Render Form"),Object(i.b)("p",null,"You can render above schema into a form by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/alibaba/form-render"},"form-render")," or ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"React JSON Schema form")," and integrate with your dashboard easily."),Object(i.b)("p",null,"Below is a form rendered with ",Object(i.b)("inlineCode",{parentName:"p"},"form-render"),":"),Object(i.b)("p",null,Object(i.b)("img",{src:n(288).default})),Object(i.b)("h1",{id:"whats-next"},"What's Next"),Object(i.b)("p",null,"It's by design that KubeVela supports multiple ways to define the schematic. Hence, we will explain ",Object(i.b)("inlineCode",{parentName:"p"},".schematic")," field in detail with following guides."))}l.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||b[d]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},288:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/json-schema-render-example-531b0a75ce10cf51ce46d9c48c6cdb58.jpg"}}]);