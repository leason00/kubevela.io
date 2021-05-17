(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7401],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32565:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=a(22122),i=a(19756),o=(a(67294),a(3905)),r={title:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"version-v1.0/introduction",isDocsHomePage:!1,title:"Introduction",description:"alt",source:"@site/versioned_docs/version-v1.0/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/introduction.md",version:"v1.0",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1619772878,formattedLastUpdatedAt:"4/30/2021",frontMatter:{title:"Introduction",slug:"/"},sidebar:"version-v1.0/docs",next:{title:"Installation",permalink:"/zh/docs/install"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"What is KubeVela?",id:"what-is-kubevela",children:[]},{value:"Comparisons",id:"comparisons",children:[{value:"KubeVela vs. Platform-as-a-Service (PaaS)",id:"kubevela-vs-platform-as-a-service-paas",children:[]},{value:"KubeVela vs. Serverless",id:"kubevela-vs-serverless",children:[]},{value:"KubeVela vs. Platform agnostic developer tools",id:"kubevela-vs-platform-agnostic-developer-tools",children:[]},{value:"KubeVela vs. Helm",id:"kubevela-vs-helm",children:[]},{value:"KubeVela vs. Kubernetes",id:"kubevela-vs-kubernetes",children:[]}]},{value:"Getting Started",id:"getting-started",children:[]}],u={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:a(5657).Z})),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,'The trend of cloud-native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common abstraction layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does introduce extra complexity to application developers, namely understanding the concepts of pods, port exposing, privilege escalation, resource claims, CRD, and so on. We\u2019ve seen the nontrivial learning curve and the lack of developer-facing abstraction have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production. People start to question the value of this revolution: "why am I bothered with all these details?".'),(0,o.kt)("p",null,"On the other hand, abstracting Kubernetes to serve developers' requirements is a highly opinionated process, and the resultant abstractions would only make sense had the decision makers been the platform builders. Unfortunately, the platform builders today face the following dilemma:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"There is no tool or framework for them to easily build user friendly yet highly extensible abstractions"),". "),(0,o.kt)("p",null,"Thus, many platforms today are essentially restricted abstractions with in-house add-on mechanisms despite the extensibility of Kubernetes. This makes extending such platforms for developers' requirements or to wider scenarios almost impossible, not to mention taking the full advantage of the rich Kubernetes ecosystems."),(0,o.kt)("p",null,"In the end, developers complain those platforms are too rigid and slow in response to feature requests or improvements. The platform builders do want to help but the engineering effort is daunting: any simple API change in the platform could easily become a marathon negotiation around the opinionated abstraction design."),(0,o.kt)("h2",{id:"what-is-kubevela"},"What is KubeVela?"),(0,o.kt)("p",null,"For platform builders, KubeVela serves as a framework that relieves the pains of building developer focused platforms by doing the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Developer Centric. KubeVela introduces the Application as the main API to capture a full deployment of microservices, and builds features around the application needs only. Progressive rollout and multi-cluster deployment are provided out-of-box. No infrastructure level concerns, simply deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Extending Natively. In KubeVela, all platform features (such as workloads, operational behaviors, and cloud services) are defined as reusable ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cuelang/cue"},"CUE")," and/or ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," components, per needs of the application deployment. And when application's needs grow, your platform capabilities expand naturally in a programmable approach.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Simple yet Reliable. Perfect in flexibility though, X-as-Code may lead to configuration drift (i.e. the running instances are not in line with the expected configuration). KubeVela solves this by modeling its capabilities as code but enforce them via Kubernetes control loop which will never leave inconsistency in your clusters. This also makes KubeVela work with any CI/CD or GitOps tools via declarative API without integration burden."))),(0,o.kt)("p",null,"With KubeVela, the platform builders finally have the tooling supports to design easy-to-use abstractions and ship them to end-users with high confidence and low turn around time. "),(0,o.kt)("p",null,"For end-users (e.g. app developers and operators), these abstractions will enable them to design and ship applications to Kubernetes clusters with minimal effort, and instead of managing a handful infrastructure details, a simple application definition that can be easily integrated with any CI/CD pipeline is all they need."),(0,o.kt)("h2",{id:"comparisons"},"Comparisons"),(0,o.kt)("h3",{id:"kubevela-vs-platform-as-a-service-paas"},"KubeVela vs. Platform-as-a-Service (PaaS)"),(0,o.kt)("p",null,"The typical examples are Heroku and Cloud Foundry. They provide full application management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela shares the same goal."),(0,o.kt)("p",null,"Though the biggest difference lies in ",(0,o.kt)("strong",{parentName:"p"},"flexibility"),"."),(0,o.kt)("p",null,"KubeVela is a Kubernetes add-on that enabling you to serve end users with programmable building blocks which are fully flexible and coded by yourself. Comparing to this mechanism, traditional PaaS systems are highly restricted, i.e. they have to enforce constraints in the type of supported applications and capabilities, and as application needs grows, you always outgrow the capabilities of the PaaS system - this will never happen in KubeVela platform."),(0,o.kt)("p",null,"So think of KubeVela as a Heroku that is fully extensible to serve your needs as you grow."),(0,o.kt)("h3",{id:"kubevela-vs-serverless"},"KubeVela vs. Serverless"),(0,o.kt)("p",null,'Serverless platform such as AWS Lambda provides extraordinary user experience and agility to deploy serverless applications. However, those platforms impose even more constraints in extensibility. They are arguably "hard-coded" PaaS.'),(0,o.kt)("p",null,"Kubernetes based serverless platforms such as Knative, OpenFaaS can be easily integrated with KubeVela by registering themselves as new workload types and traits. Even for AWS Lambda, there is a success story to integrate it with KubeVela by the tools developed by Crossplane."),(0,o.kt)("h3",{id:"kubevela-vs-platform-agnostic-developer-tools"},"KubeVela vs. Platform agnostic developer tools"),(0,o.kt)("p",null,"The typical example is Hashicorp's Waypoint. Waypoint is a developer facing tool which introduces a consistent workflow (i.e., build, deploy, release) to ship applications on top of different platforms."),(0,o.kt)("p",null,"KubeVela can be integrated into such tools as an application platform. In this case, developers could use the Waypoint workflow to manage applications with leverage of abstractions (e.g. application, rollout, ingress, autoscaling etc) you built via KubeVela."),(0,o.kt)("h3",{id:"kubevela-vs-helm"},"KubeVela vs. Helm"),(0,o.kt)("p",null,"Helm is a package manager for Kubernetes that provides package, install, and upgrade a set of YAML files for Kubernetes as a unit. KubeVela can patch, deploy and rollout Helm packaged application components, and it also leverages Helm to manage the capability dependencies in system level."),(0,o.kt)("p",null,"Though KubeVela itself is not a package manager, it's a core engine for platform builders to create developer-centric deployment system with easy and repeatable approach."),(0,o.kt)("h3",{id:"kubevela-vs-kubernetes"},"KubeVela vs. Kubernetes"),(0,o.kt)("p",null,"KubeVela is a Kubernetes add-on for building developer-centric deployment system. It leverages ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model")," and the native Kubernetes extensibility to resolve a hard problem - making shipping applications enjoyable on Kubernetes."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Now let's ",(0,o.kt)("a",{parentName:"p",href:"./quick-start"},"get started")," with KubeVela!"))}p.isMDXComponent=!0},5657:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);