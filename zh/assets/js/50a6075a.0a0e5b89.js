(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return v})),a.d(t,"metadata",(function(){return O})),a.d(t,"toc",(function(){return g})),a.d(t,"default",(function(){return f}));var n=a(3),l=a(7),r=a(0),c=a.n(r),o=a(201),s=a(223),i=a(202),b=a(117),p=a.n(b);var u=37,m=39;var d=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,l=e.values,o=e.groupId,b=e.className,d=Object(s.a)(),h=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(r.useState)(n),g=O[0],j=O[1],f=r.Children.toArray(e.children),y=[];if(null!=o){var N=h[o];null!=N&&N!==g&&l.some((function(e){return e.value===N}))&&j(N)}var k=function(e){var t=e.target,a=y.indexOf(t),n=f[a].props.value;j(n),null!=o&&(v(o,n),setTimeout((function(){var e,a,n,l,r,c,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,r=e.right,c=window,o=c.innerHeight,s=c.innerWidth,a>=0&&r<=s&&l<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((function(){return t.classList.remove(p.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case m:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case u:var l=y.indexOf(e.target)-1;a=y[l]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return c.a.createElement("div",{className:"tabs-container"},c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},b)},l.map((function(e){var t=e.value,a=e.label;return c.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",p.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:k,onClick:k},a)}))),t?Object(r.cloneElement)(f.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return c.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},v={title:"\u5b89\u88c5"},O={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"If you have installed the kubevale chart before, please read the Upgrade step directly.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install.mdx",slug:"/install",permalink:"/zh/docs/install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/install.mdx",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Introduction",permalink:"/zh/docs/"},next:{title:"Quick Start",permalink:"/zh/docs/quick-start"}},g=[{value:"1. Setup Kubernetes cluster",id:"1-setup-kubernetes-cluster",children:[]},{value:"2. Install KubeVela Controller",id:"2-install-kubevela-controller",children:[]},{value:"3. (Optional) Install flux2",id:"3-optional-install-flux2",children:[]},{value:"4. (Optional) Get KubeVela CLI",id:"4-optional-get-kubevela-cli",children:[]},{value:"5. (Optional) Sync Capability from Cluster",id:"5-optional-sync-capability-from-cluster",children:[]},{value:"6. (Optional) Clean Up",id:"6-optional-clean-up",children:[]},{value:"Step 1. Update helm repo",id:"step-1-update-helm-repo",children:[]},{value:"Step 2. Upgrade KubeVela CRDs",id:"step-2-upgrade-kubevela-crds",children:[]},{value:"Step 3. Upgrade KubeVela helm chart",id:"step-3-upgrade-kubevela-helm-chart",children:[]}],j={toc:g};function f(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you have installed the kubevale chart before, please read the ",Object(o.b)("a",{parentName:"p",href:"#upgrade"},"Upgrade")," step directly."),Object(o.b)("h2",{id:"1-setup-kubernetes-cluster"},"1. Setup Kubernetes cluster"),Object(o.b)("p",null,"Requirements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Kubernetes cluster >= v1.15.0"),Object(o.b)("li",{parentName:"ul"},"kubectl installed and configured")),Object(o.b)("p",null,"If you don't have K8s cluster from Cloud Provider, you may pick either Minikube or KinD as local cluster testing option."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: If you are not using minikube or kind, please make sure to ",Object(o.b)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"install or enable ingress-nginx")," by yourself.")),Object(o.b)(d,{className:"unique-tabs",defaultValue:"minikube",values:[{label:"Minikube",value:"minikube"},{label:"KinD",value:"kind"}],mdxType:"Tabs"},Object(o.b)(h,{value:"minikube",mdxType:"TabItem"},Object(o.b)("p",null,"Follow the minikube ",Object(o.b)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"installation guide"),"."),Object(o.b)("p",null,"Once minikube is installed, create a cluster:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),Object(o.b)("p",null,"Install ingress:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),Object(o.b)(h,{value:"kind",mdxType:"TabItem"},Object(o.b)("p",null,"Follow ",Object(o.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),Object(o.b)("p",null,"Then spins up a kind cluster:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),Object(o.b)("p",null,"Then install ",Object(o.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx"},"ingress for kind"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),Object(o.b)("h2",{id:"2-install-kubevela-controller"},"2. Install KubeVela Controller"),Object(o.b)("p",null,"These steps will install KubeVela controller and its dependency."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add helm chart repo for KubeVela"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://kubevelacharts.oss-cn-hangzhou.aliyuncs.com/core\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the chart repo"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install KubeVela"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core\n")),Object(o.b)("p",{parentName:"li"}," By default, it will enable the webhook with a self-signed certificate provided by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")),Object(o.b)("p",{parentName:"li"}," If you want to try the latest master branch, add flag ",Object(o.b)("inlineCode",{parentName:"p"},"--devel")," in command ",Object(o.b)("inlineCode",{parentName:"p"},"helm search")," to choose a pre-release\nversion in format ",Object(o.b)("inlineCode",{parentName:"p"},"<next_version>-rc-master")," which means the next release candidate version build on ",Object(o.b)("inlineCode",{parentName:"p"},"master")," branch,\nlike ",Object(o.b)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-console"},"    NAME                        CHART VERSION           APP VERSION             DESCRIPTION\n    kubevela/vela-core          0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.1                   0.3.1                   A Helm chart for KubeVela core\n")),Object(o.b)("p",{parentName:"li"}," And try the following command to install it."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-console"},"NAME: kubevela\nLAST DEPLOYED: Thu Apr  1 19:41:30 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install Kubevela with cert-manager (optional)"),Object(o.b)("p",{parentName:"li"},"If cert-manager has been installed, it can be used to take care about generating certs. "),Object(o.b)("p",{parentName:"li"},"You need to install cert-manager before the kubevela chart."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),Object(o.b)("p",{parentName:"li"}," Install kubevela with enabled certmanager:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core\n")))),Object(o.b)("h2",{id:"3-optional-install-flux2"},"3. (Optional) Install flux2"),Object(o.b)("p",null,"This installation step is optional, it's required if you want to register ",Object(o.b)("a",{parentName:"p",href:"https://helm.sh/"},"Helm Chart")," as KubeVela capabilities."),Object(o.b)("p",null,"KubeVela relies on several CRDs and controllers from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"fluxcd/flux2"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"CRD"),Object(o.b)("th",{parentName:"tr",align:null},"Controller Image"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"helmrepositories.source.toolkit.fluxcd.io"),Object(o.b)("td",{parentName:"tr",align:null},"fluxcd/source-controller:v0.9.0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"helmcharts.source.toolkit.fluxcd.io"),Object(o.b)("td",{parentName:"tr",align:null},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"buckets.source.toolkit.fluxcd.io"),Object(o.b)("td",{parentName:"tr",align:null},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"gitrepositories.source.toolkit.fluxcd.io"),Object(o.b)("td",{parentName:"tr",align:null},"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"helmreleases.helm.toolkit.fluxcd.io"),Object(o.b)("td",{parentName:"tr",align:null},"fluxcd/helm-controller:v0.8.0")))),Object(o.b)("p",null,"You can install the whole flux2 from their ",Object(o.b)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"official website"),"\nor install the chart with minimal parts provided by KubeVela:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ helm install --create-namespace -n flux-system helm-flux http://oam.dev/catalog/helm-flux2-0.1.0.tgz\n")),Object(o.b)("h2",{id:"4-optional-get-kubevela-cli"},"4. (Optional) Get KubeVela CLI"),Object(o.b)("p",null,"Here are three ways to get KubeVela Cli:"),Object(o.b)(d,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},Object(o.b)(h,{value:"script",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," macOS/Linux ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Windows")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),Object(o.b)(h,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"macOS/Linux")),Object(o.b)("p",null,"Update your brew firstly."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),Object(o.b)("p",null,"Then install kubevela client."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),Object(o.b)(h,{value:"download",mdxType:"TabItem"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download the latest ",Object(o.b)("inlineCode",{parentName:"li"},"vela")," binary from the ",Object(o.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"releases page"),"."),Object(o.b)("li",{parentName:"ul"},"Unpack the ",Object(o.b)("inlineCode",{parentName:"li"},"vela")," binary and add it to ",Object(o.b)("inlineCode",{parentName:"li"},"$PATH")," to get started.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Known Issue(",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\nIf you're using mac, it will report that \u201cvela\u201d cannot be opened because the developer cannot be verified."),Object(o.b)("p",{parentName:"blockquote"},"The new version of MacOS is stricter about running software you've downloaded that isn't signed with an Apple developer key. And we haven't supported that for KubeVela yet.",Object(o.b)("br",{parentName:"p"}),"\n","You can open your 'System Preference' -> 'Security & Privacy' -> General, click the 'Allow Anyway' to temporarily fix it.")))),Object(o.b)("h2",{id:"5-optional-sync-capability-from-cluster"},"5. (Optional) Sync Capability from Cluster"),Object(o.b)("p",null,"If you want to run application from ",Object(o.b)("inlineCode",{parentName:"p"},"vela")," cli, then you should sync capabilities first like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"NAME        NAMESPACE   WORKLOAD            DESCRIPTION\ntask        vela-system jobs.batch          Describes jobs that run code or a script to completion.\nwebservice  vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that have a stable network endpoint to receive external\n                                            network traffic from customers.\nworker      vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that running at backend. They do NOT have network endpoint\n                                            to receive external network traffic.\n")),Object(o.b)("h2",{id:"6-optional-clean-up"},"6. (Optional) Clean Up"),Object(o.b)("details",null,"Run:",Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),Object(o.b)("p",null,"This will uninstall KubeVela server component and its dependency components.\nThis also cleans up local CLI cache."),Object(o.b)("p",null,"Then clean up CRDs (CRDs are not removed via helm by default):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  appdeployments.core.oam.dev \\\n  applicationconfigurations.core.oam.dev \\\n  applicationcontexts.core.oam.dev \\\n  applicationdeployments.core.oam.dev \\\n  applicationrevisions.core.oam.dev \\\n  applications.core.oam.dev \\\n  approllouts.core.oam.dev \\\n  componentdefinitions.core.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  manualscalertraits.core.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n"))),Object(o.b)("h1",{id:"upgrade"},"Upgrade"),Object(o.b)("p",null,"If you have already installed KubeVela and wants to upgrade to the new version, you could follow below instructions."),Object(o.b)("h2",{id:"step-1-update-helm-repo"},"Step 1. Update helm repo"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm repo update\n")),Object(o.b)("p",null,"you can get the new version kubevela chart by run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm search repo kubevela/vela-core -l\n")),Object(o.b)("h2",{id:"step-2-upgrade-kubevela-crds"},"Step 2. Upgrade KubeVela CRDs"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_componentdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_workloaddefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_traitdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applications.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_approllouts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationrevisions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_scopedefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_appdeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationcontexts.yaml\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Tips: If you meet errors like ",Object(o.b)("inlineCode",{parentName:"p"},'* is invalid: spec.scope: Invalid value: "Namespaced": filed is immutable'),". Please delete the crd with the error.\nand re-apply the kubevela crds.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"}," kubectl delete crd \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")),Object(o.b)("h2",{id:"step-3-upgrade-kubevela-helm-chart"},"Step 3. Upgrade KubeVela helm chart"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install --create-namespace --namespace vela-system  kubevela kubevela/vela-core --version <the_new_version>\n")))}f.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=l.a.createContext({}),b=function(e){var t=l.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return a?l.a.createElement(d,o(o({ref:t},i),{},{components:a})):l.a.createElement(d,o({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<r;i++)c[i]=a[i];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},202:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},223:function(e,t,a){"use strict";var n=a(0),l=a(224);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},224:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l}}]);