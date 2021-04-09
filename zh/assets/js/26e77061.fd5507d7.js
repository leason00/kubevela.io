(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),p=n(7),r=(n(0),n(201)),o={title:"Multi-Cluster Application Deployment"},l={unversionedId:"rollout/appdeploy",id:"rollout/appdeploy",isDocsHomePage:!1,title:"Multi-Cluster Application Deployment",description:"Introduction",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rollout/appdeploy.md",slug:"/rollout/appdeploy",permalink:"/zh/docs/rollout/appdeploy",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/rollout/appdeploy.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Progressive Rollout",permalink:"/zh/docs/rollout/rollout"},next:{title:"Definition CRD",permalink:"/zh/docs/platform-engineers/definition-and-templates"}},i=[{value:"AppDeployment CRD",id:"appdeployment-crd",children:[]},{value:"Cluster CRD",id:"cluster-crd",children:[]}],c={toc:i};function s(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Modern application infrastructure involves multiple clusters to ensure high availability and maximize service throughput. In this section, we will introduce how to use KubeVela to achieve application deployment across multiple clusters with following features supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Rolling Upgrade: To continuously deploy apps requires to rollout in a safe manner which usually involves step by step rollout batches and analysis."),Object(r.b)("li",{parentName:"ul"},"Traffic shifting: When rolling upgrade an app, it needs to split the traffic onto both the old and new revisions to verify the new version while preserving service availability.")),Object(r.b)("h2",{id:"appdeployment-crd"},"AppDeployment CRD"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"AppDeployment")," CRD has been provided to satisfy such requirements. Here's an overview of the API:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: AppDeployment\nmetadata:\n  name: sample-appdeploy\nspec:\n  traffic:\n    hosts:\n      - example.com\n\n    http:\n      - match:\n          # match any requests to 'example.com/example-app'\n          - uri:\n              prefix: \"/example-app\"\n\n        # split traffic 50/50 on v1/v2 versions of the app\n        weightedTargets:\n          - revisionName: example-app-v1\n            componentName: testsvc\n            port: 80\n            weight: 50\n          - revisionName: example-app-v2\n            componentName: testsvc\n            port: 80\n            weight: 50\n\n  appRevisions:\n    - # Name of the AppRevision.\n      # Each modification to Application would generate a new AppRevision.\n      revisionName: example-app-v1\n\n      # Cluster specific workload placement config\n      placement:\n        - clusterSelector:\n            # You can select Clusters by name or labels.\n            # If multiple clusters is selected, one will be picked via a unique hashing algorithm.\n            labels:\n              tier: production\n            name: prod-cluster-1\n\n          distribution:\n            replicas: 5\n\n        - # If no clusterSelector is given, it will use the host cluster in which this CR exists\n          distribution:\n            replicas: 5\n\n    - revisionName: example-app-v2\n      placement:\n        - clusterSelector:\n            labels:\n              tier: production\n            name: prod-cluster-1\n          distribution:\n            replicas: 5\n        - distribution:\n            replicas: 5\n")),Object(r.b)("h2",{id:"cluster-crd"},"Cluster CRD"),Object(r.b)("p",null,"The clusters selected in the ",Object(r.b)("inlineCode",{parentName:"p"},"placement")," part from above is defined in Cluster CRD. Here's what it looks like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Cluster\nmetadata:\n  name: prod-cluster-1\n  labels:\n    tier: production\nspec:\n  kubeconfigSecretRef:\n    name: kubeconfig-cluster-1 # the secret name\n")),Object(r.b)("p",null,"The secret must contain the kubeconfig credentials in ",Object(r.b)("inlineCode",{parentName:"p"},"config")," field:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: kubeconfig-cluster-1\ndata:\n  config: ... # kubeconfig data\n")),Object(r.b)("h1",{id:"quickstart"},"Quickstart"),Object(r.b)("p",null,"Here's a step-by-step tutorial for you to try out. All of the yaml files are from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/appdeployment"},Object(r.b)("inlineCode",{parentName:"a"},"docs/examples/appdeployment/")),".\nYou must run all commands in that directory."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create an Application"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  annotations:\n    app.oam.dev/revision-only: "true"\nspec:\n  components:\n    - name: testsvc\n      type: webservice\n      properties:\n        addRevisionLabel: true\n        image: crccheck/hello-world\n        port: 8000\nEOF\n')),Object(r.b)("p",{parentName:"li"},"This will create ",Object(r.b)("inlineCode",{parentName:"p"},"example-app-v1")," AppRevision. Check it:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get applicationrevisions.core.oam.dev\nNAME             AGE\nexample-app-v1   116s\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Note: with ",Object(r.b)("inlineCode",{parentName:"p"},'app.oam.dev/revision-only: "true"')," annotation, above ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," resource won't create any pod instances and leave the real deployment process to ",Object(r.b)("inlineCode",{parentName:"p"},"AppDeployment"),"."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Then use the above AppRevision to create an AppDeployment."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f appdeployment-1.yaml\n")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Note: in order to AppDeployment to work, your workload object must have a ",Object(r.b)("inlineCode",{parentName:"p"},"spec.replicas")," field for scaling."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Now you can check that there will 1 deployment and 2 pod instances deployed"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deploy\nNAME         READY   UP-TO-DATE   AVAILABLE   AGE\ntestsvc-v1   2/2     2            0           27s\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Update Application properties:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  annotations:\n    app.oam.dev/revision-only: "true"\nspec:\n  components:\n    - name: testsvc\n      type: webservice\n      properties:\n        addRevisionLabel: true\n        image: nginx\n        port: 80\nEOF\n')),Object(r.b)("p",{parentName:"li"},"This will create a new ",Object(r.b)("inlineCode",{parentName:"p"},"example-app-v2")," AppRevision. Check it:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get applicationrevisions.core.oam.dev\nNAME\nexample-app-v1\nexample-app-v2\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Then use the two AppRevisions to update the AppDeployment:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f appdeployment-2.yaml\n")),Object(r.b)("p",{parentName:"li"},"(Optional) If you have Istio installed, you can apply the AppDeployment with traffic split:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# set up gateway if not yet\n$ kubectl apply -f gateway.yaml\n\n$ kubectl apply -f appdeployment-2-traffic.yaml\n")),Object(r.b)("p",{parentName:"li"},"Note that for traffic split to work, your must set the following pod labels in workload cue templates (see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/hack/vela-templates/cue/webservice.cue"},"webservice.cue"),"):"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'"app.oam.dev/component": context.name\n"app.oam.dev/appRevision": context.appRevision\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Now you can check that there will 1 deployment and 1 pod per revision."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get deploy\nNAME         READY   UP-TO-DATE   AVAILABLE   AGE\ntestsvc-v1   1/1     1            1           2m14s\ntestsvc-v2   1/1     1            1           8s\n")),Object(r.b)("p",{parentName:"li"},"(Optional) To verify traffic split:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# run this in another terminal\n$ kubectl -n istio-system port-forward service/istio-ingressgateway 8080:80\nForwarding from 127.0.0.1:8080 -> 8080\nForwarding from [::1]:8080 -> 8080\n\n# The command should return pages of either docker whale or nginx in 50/50\n$ curl -H "Host: example-app.example.com" http://localhost:8080/\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Cleanup:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl delete appdeployments.core.oam.dev  --all\nkubectl delete applications.core.oam.dev --all\n")))))}s.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),p=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=p.a.createContext({}),s=function(e){var t=p.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return p.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},u=p.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||r;return n?p.a.createElement(d,l(l({ref:t},c),{},{components:n})):p.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return p.a.createElement.apply(null,o)}return p.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);