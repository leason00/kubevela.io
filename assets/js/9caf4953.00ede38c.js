(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(201)),i={title:"Overview"},c={unversionedId:"platform-engineers/overview",id:"platform-engineers/overview",isDocsHomePage:!1,title:"Overview",description:"This documentation will explain what is Application object and why you need it.",source:"@site/docs/platform-engineers/overview.md",slug:"/platform-engineers/overview",permalink:"/docs/platform-engineers/overview",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/overview.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1616988063,formattedLastUpdatedAt:"3/29/2021",sidebar:"docs",previous:{title:"Multi-Version Multi-Cluster Application Deployment",permalink:"/docs/rollout/appdeploy"},next:{title:"Application CRD",permalink:"/docs/application"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"Abstraction",id:"abstraction",children:[]},{value:"Encapsulation",id:"encapsulation",children:[{value:"No Configuration Drift",id:"no-configuration-drift",children:[]},{value:"No &quot;Juggling&quot; Approach to Manage Kubernetes Objects",id:"no-juggling-approach-to-manage-kubernetes-objects",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This documentation will explain what is ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," object and why you need it."),Object(r.b)("h2",{id:"motivation"},"Motivation"),Object(r.b)("p",null,"Encapsulation is probably the mostly widely used approach to enable easier developer experience and allow users to deliver the whole application resources as one unit. For example, many tools today encapsulate Kubernetes ",Object(r.b)("em",{parentName:"p"},"Deployment")," and ",Object(r.b)("em",{parentName:"p"},"Service")," into a ",Object(r.b)("em",{parentName:"p"},"Web Service")," module, and then instantiate this module by simply providing parameters such as ",Object(r.b)("em",{parentName:"p"},"image=foo")," and ",Object(r.b)("em",{parentName:"p"},"ports=80"),". This pattern can be found in cdk8s (e.g. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/awslabs/cdk8s/blob/master/examples/typescript/web-service/web-service.ts"},Object(r.b)("inlineCode",{parentName:"a"},"web-service.ts")," "),"), CUE (e.g. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cuelang/cue/blob/b8b489251a3f9ea318830788794c1b4a753031c0/doc/tutorial/kubernetes/quick/services/kube.cue#L70"},Object(r.b)("inlineCode",{parentName:"a"},"kube.cue")),"), and many widely used Helm charts (e.g. ",Object(r.b)("a",{parentName:"p",href:"https://docs.bitnami.com/tutorials/create-your-first-helm-chart/"},"Web Service"),")."),Object(r.b)("p",null,"Despite the efficiency and extensibility in defining abstractions with encapsulation, both DSL tools (e.g. cdk8s , CUE and Helm templating) are mostly used as client side tools and can be barely used as a platform level building block. This leaves platform builders either have to create restricted/inextensible abstractions, or re-invent the wheels of what DSL/templating has already been doing great."),Object(r.b)("p",null,"KubeVela allows platform teams to create developer-centric abstractions with DSL/templating but maintain them with the battle tested ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop"),". "),Object(r.b)("h2",{id:"abstraction"},"Abstraction"),Object(r.b)("p",null,"First of all, KubeVela introduces an ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," CRD as its main abstraction that could capture all needed resources to run the application, and exposes configurable parameters for end users. Every application is composed by multiple components, and each of them is defined by workload specification and traits (operational behaviors). For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: application-sample\nspec:\n  components:\n    - name: foo\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n        - type: sidecar\n          properties:\n            name: "logging"\n            image: "fluentd"\n    - name: bar\n      type: aliyun-oss # cloud service\n      bucket: "my-bucket"\n')),Object(r.b)("h2",{id:"encapsulation"},"Encapsulation"),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," provides an abstraction to deploy apps, each ",Object(r.b)("em",{parentName:"p"},"component")," and ",Object(r.b)("em",{parentName:"p"},"trait")," specification in this application is actually enforced by another set of building block objects named ",Object(r.b)("em",{parentName:"p"},'"definitions"'),", for example, ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentDefinition")," and ",Object(r.b)("inlineCode",{parentName:"p"},"TraitDefinition"),"."),Object(r.b)("p",null,"Definitions are designed to leverage encapsulation technologies such as ",Object(r.b)("inlineCode",{parentName:"p"},"CUE"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Helm")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Terraform modules")," to template and parameterize Kubernetes resources as well as cloud services. This enables users to assemble templated capabilities into an ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," by simply setting parameters. In the ",Object(r.b)("inlineCode",{parentName:"p"},"application-sample")," above, it models a Kubernetes Deployment (component ",Object(r.b)("inlineCode",{parentName:"p"},"foo"),") to run container and a Alibaba Cloud OSS bucket (component ",Object(r.b)("inlineCode",{parentName:"p"},"bar"),") alongside."),Object(r.b)("p",null,"This encapsulation and abstraction mechanism is the key for KubeVela to provide ",Object(r.b)("em",{parentName:"p"},"PaaS-like")," experience (",Object(r.b)("em",{parentName:"p"},"i.e. app-centric, higher level abstractions, self-service operations etc"),") to end users."),Object(r.b)("h3",{id:"no-configuration-drift"},"No Configuration Drift"),Object(r.b)("p",null,"Many of the existing encapsulation solutions today work at client side, for example, DSL/IaC (Infrastructure as Code) tools and Helm. This approach is easy to be adopted and has less invasion in the user cluster."),Object(r.b)("p",null,"But client side abstractions, though light-weighted, always lead to an issue called infrastructure/configuration drift, i.e. the generated component instances are not in line with the expected configuration. This could be caused by incomplete coverage, less-than-perfect processes or emergency changes."),Object(r.b)("p",null,"Hence, the encapsulation engine of KubeVela is designed to be a ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," and leverage Kubernetes control plane to eliminate the issue of configuration drifting, and still keeps the flexibly and velocity enabled by existing encapsulation solutions (e.g. DSL/IaC and templating)."),Object(r.b)("h3",{id:"no-juggling-approach-to-manage-kubernetes-objects"},'No "Juggling" Approach to Manage Kubernetes Objects'),Object(r.b)("p",null,"For example, as the platform team we want to leverage Istio as the Service Mesh layer to control the traffic to certain ",Object(r.b)("inlineCode",{parentName:"p"},"Deployment"),' instances. But this could be really painful today because we have to enforce end users to define and manage a set of Kubernetes resources in a "juggling" approach. For example, in a simple canary rollout case, the end users have to carefully manage a primary ',Object(r.b)("em",{parentName:"p"},"Deployment"),", a primary ",Object(r.b)("em",{parentName:"p"},"Service"),", a ",Object(r.b)("em",{parentName:"p"},"root Service"),", a canary ",Object(r.b)("em",{parentName:"p"},"Deployment"),", a canary ",Object(r.b)("em",{parentName:"p"},"Service"),", and have to probably rename the ",Object(r.b)("em",{parentName:"p"},"Deployment")," instance after canary promotion (this is actually unacceptable in production because renaming will lead to the app restart). What's worse, we have to expect the users properly set the labels and selectors on those objects carefully because they are the key to ensure proper accessibility of every app instance and the only revision mechanism our Istio controller could count on."),Object(r.b)("p",null,"The issue above could be even painful if the component instance is not ",Object(r.b)("em",{parentName:"p"},"Deployment"),", but ",Object(r.b)("em",{parentName:"p"},"StatefulSet")," or custom workload type. For example, normally it doesn't make sense to replicate a ",Object(r.b)("em",{parentName:"p"},"StatefulSet")," instance during rollout, this means the users have to maintain the name, revision, label, selector, app instances in a totally different approach from ",Object(r.b)("em",{parentName:"p"},"Deployment"),"."),Object(r.b)("h4",{id:"standard-contract-behind-the-abstraction"},"Standard Contract Behind The Abstraction"),Object(r.b)("p",null,"The encapsulation engine of KubeVela is designed to relieve such burden of managing versionized Kubernetes resources manually. In nutshell, all the needed Kubernetes resources for an app are now encapsulated in a single abstraction, and KubeVela will maintain the instance name, revisions, labels and selector by the battle tested reconcile loop automation, not by human hand. At the meantime, the existence of definition objects allow the platform team to customize the details of all above metadata behind the abstraction, even control the behavior of how to do revision."),Object(r.b)("p",null,'Thus, all those metadata now become a standard contract that any day 2 operation controller such as Istio or rollout can rely on. This is the key to ensure our platform could provide user friendly experience but keep "transparent" to the operational behaviors.'))}p.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);