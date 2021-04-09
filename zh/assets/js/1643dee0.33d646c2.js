(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{201:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=t,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?r.a.createElement(m,s(s({ref:n},l),{},{components:a})):r.a.createElement(m,s({ref:n},l))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},251:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/crossplane-visit-application-b6aa490a07025d258b6d0ad00cd9a055.jpg"},280:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/crossplane-visit-application-v2-ca5eb3887f73effb77711f38ab658025.jpg"},83:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),o=(a(0),a(201)),i={title:"Define and Consume Cloud Resource"},s={unversionedId:"platform-engineers/cloud-services",id:"platform-engineers/cloud-services",isDocsHomePage:!1,title:"Define and Consume Cloud Resource",description:"KubeVela provides unified abstraction even for cloud services.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/cloud-services.md",slug:"/platform-engineers/cloud-services",permalink:"/zh/docs/platform-engineers/cloud-services",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cloud-services.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021",sidebar:"docs",previous:{title:"Advanced Features",permalink:"/zh/docs/cue/advanced"},next:{title:"Debug, Test and Dry-run",permalink:"/zh/docs/platform-engineers/debug-test-cue"}},c=[{value:"Should a Cloud Service be a Component or Trait?",id:"should-a-cloud-service-be-a-component-or-trait",children:[]},{value:"Install and Configure Crossplane",id:"install-and-configure-crossplane",children:[]},{value:"Provisioning and consuming cloud resource in a single application v1 (one cloud resource)",id:"provisioning-and-consuming-cloud-resource-in-a-single-application-v1-one-cloud-resource",children:[{value:"Step 1: Register ComponentDefinition <code>alibaba-rds</code> as RDS cloud resource producer",id:"step-1-register-componentdefinition-alibaba-rds-as-rds-cloud-resource-producer",children:[]},{value:"Step 2: Prepare TraitDefinition <code>service-binding</code> to do env-secret mapping",id:"step-2-prepare-traitdefinition-service-binding-to-do-env-secret-mapping",children:[]},{value:"Step 3: Create an application to provision and consume cloud resource",id:"step-3-create-an-application-to-provision-and-consume-cloud-resource",children:[]}]},{value:"Provisioning and consuming cloud resource in a single application v2 (two cloud resources)",id:"provisioning-and-consuming-cloud-resource-in-a-single-application-v2-two-cloud-resources",children:[]},{value:"Provisioning and consuming cloud resource in different applications",id:"provisioning-and-consuming-cloud-resource-in-different-applications",children:[{value:"Provision Cloud Resource",id:"provision-cloud-resource",children:[]},{value:"Consuming the Cloud Resource",id:"consuming-the-cloud-resource",children:[]}]}],l={toc:c};function p(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"KubeVela provides unified abstraction even for cloud services."),Object(o.b)("h2",{id:"should-a-cloud-service-be-a-component-or-trait"},"Should a Cloud Service be a Component or Trait?"),Object(o.b)("p",null,"The following practice could be considered:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"ComponentDefinition")," if:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'you want to allow your end users explicitly claim a "instance" of the cloud service and consume it, and release the "instance" when deleting the application.'))),Object(o.b)("li",{parentName:"ul"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"TraitDefinition")," if:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"you don't want to give your end users any control/workflow of claiming or releasing the cloud service, you only want to give them a way to consume a cloud service which could even be managed by some other system. A ",Object(o.b)("inlineCode",{parentName:"li"},"Service Binding")," trait is widely used in this case.")))),Object(o.b)("p",null,"In this documentation, we will define an Alibaba Cloud's RDS (Relational Database Service), and an Alibaba Cloud's OSS (Object Storage System) as example. This mechanism works the same with other cloud providers.\nIn a single application, they are in form of Traits, and in multiple applications, they are in form of Components."),Object(o.b)("h2",{id:"install-and-configure-crossplane"},"Install and Configure Crossplane"),Object(o.b)("p",null,"KubeVela uses ",Object(o.b)("a",{parentName:"p",href:"https://crossplane.io/"},"Crossplane")," as the cloud service operator. Please Refer to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/crossplane/provider-alibaba/releases/tag/v0.5.0"},"Installation"),"\nto install Crossplane Alibaba provider v0.5.0."),Object(o.b)("p",null,"If you'd like to configure any other Crossplane providers, please refer to ",Object(o.b)("a",{parentName:"p",href:"https://crossplane.io/docs/v1.1/getting-started/install-configure.html#select-a-getting-started-configuration"},"Crossplane Select a Getting Started Configuration"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ kubectl crossplane install provider crossplane/provider-alibaba:v0.5.0\n\n# Note the xxx and yyy here is your own AccessKey and SecretKey to the cloud resources.\n$ kubectl create secret generic alibaba-account-creds -n crossplane-system --from-literal=accessKeyId=xxx --from-literal=accessKeySecret=yyy\n\n$ kubectl apply -f provider.yaml\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"provider.yaml")," is as below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: crossplane-system\n\n---\napiVersion: alibaba.crossplane.io/v1alpha1\nkind: ProviderConfig\nmetadata:\n  name: default\nspec:\n  credentials:\n    source: Secret\n    secretRef:\n      namespace: crossplane-system\n      name: alibaba-account-creds\n      key: credentials\n  region: cn-beijing\n")),Object(o.b)("p",null,"Note: We currently just use Crossplane Alibaba provider. But we are about to use ",Object(o.b)("a",{parentName:"p",href:"https://crossplane.io/"},"Crossplane")," as the\ncloud resource operator for Kubernetes in the near future."),Object(o.b)("h2",{id:"provisioning-and-consuming-cloud-resource-in-a-single-application-v1-one-cloud-resource"},"Provisioning and consuming cloud resource in a single application v1 (one cloud resource)"),Object(o.b)("h3",{id:"step-1-register-componentdefinition-alibaba-rds-as-rds-cloud-resource-producer"},"Step 1: Register ComponentDefinition ",Object(o.b)("inlineCode",{parentName:"h3"},"alibaba-rds")," as RDS cloud resource producer"),Object(o.b)("p",null,"First, register the ",Object(o.b)("inlineCode",{parentName:"p"},"alibaba-rds")," workload type to KubeVela."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-rds\n  namespace: vela-system\n  annotations:\n    definition.oam.dev/description: "Alibaba Cloud RDS Resource"\nspec:\n  workload:\n    definition:\n      apiVersion: database.alibaba.crossplane.io/v1alpha1\n      kind: RDSInstance\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "database.alibaba.crossplane.io/v1alpha1"\n            kind:       "RDSInstance"\n            spec: {\n                forProvider: {\n                    engine:                parameter.engine\n                    engineVersion:         parameter.engineVersion\n                    dbInstanceClass:       parameter.instanceClass\n                    dbInstanceStorageInGB: 20\n                    securityIPList:        "0.0.0.0/0"\n                    masterUsername:        parameter.username\n                }\n                writeConnectionSecretToRef: {\n                    namespace: context.namespace\n                    name:      parameter.secretName\n                }\n                providerConfigRef: {\n                    name: "default"\n                }\n                deletionPolicy: "Delete"\n            }\n        }\n        parameter: {\n            engine:        *"mysql" | string\n            engineVersion: *"8.0" | string\n            instanceClass: *"rds.mysql.c1.large" | string\n            username:      string\n            secretName:    string\n        }\n\n')),Object(o.b)("h3",{id:"step-2-prepare-traitdefinition-service-binding-to-do-env-secret-mapping"},"Step 2: Prepare TraitDefinition ",Object(o.b)("inlineCode",{parentName:"h3"},"service-binding")," to do env-secret mapping"),Object(o.b)("p",null,"As for data binding in Application, KubeVela recommends defining a trait to finish the job. We have prepared a common\ntrait for convenience. This trait works well for binding resources' info into pod spec Env."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "binding cloud resource secrets to pod env"\n  name: service-binding\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    env: [\n                        for envName, v in parameter.envMappings {\n                            name: envName\n                            valueFrom: {\n                                secretKeyRef: {\n                                    name: v.secret\n                                    if v["key"] != _|_ {\n                                        key: v.key\n                                    }\n                                    if v["key"] == _|_ {\n                                        key: envName\n                                    }\n                                }\n                            }\n                        },\n                    ]\n                }]\n            }\n        }\n\n        parameter: {\n            envMappings: [string]: [string]: string\n        }\n')),Object(o.b)("p",null,"With the help of this ",Object(o.b)("inlineCode",{parentName:"p"},"service-binding")," trait, developers can explicitly set parameter ",Object(o.b)("inlineCode",{parentName:"p"},"envMappings")," to mapping all environment names with secret key. Here is an example."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"...\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n                key: Bucket\n...\n")),Object(o.b)("h3",{id:"step-3-create-an-application-to-provision-and-consume-cloud-resource"},"Step 3: Create an application to provision and consume cloud resource"),Object(o.b)("p",null,"Create an application with a cloud resource provisioning component and a consuming component as below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n\n')),Object(o.b)("p",null,"Apply it and verify the application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME     AGE\nwebapp   46m\n\n$ kubectl port-forward deployment/express-server 80:80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\nHandling connection for 80\nHandling connection for 80\n")),Object(o.b)("p",null,Object(o.b)("img",{src:a(251).default})),Object(o.b)("h2",{id:"provisioning-and-consuming-cloud-resource-in-a-single-application-v2-two-cloud-resources"},"Provisioning and consuming cloud resource in a single application v2 (two cloud resources)"),Object(o.b)("p",null,"Based on the section ",Object(o.b)("inlineCode",{parentName:"p"},"Provisioning and consuming cloud resource in a single application v1 (one cloud resource)"),", register\none more cloud resource workload type ",Object(o.b)("inlineCode",{parentName:"p"},"alibaba-oss")," to KubeVela."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-oss\n  namespace: vela-system\n  annotations:\n    definition.oam.dev/description: "Alibaba Cloud RDS Resource"\nspec:\n  workload:\n    definition:\n      apiVersion: oss.alibaba.crossplane.io/v1alpha1\n      kind: Bucket\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "oss.alibaba.crossplane.io/v1alpha1"\n            kind:       "Bucket"\n            spec: {\n                name:               parameter.name\n                acl:                parameter.acl\n                storageClass:       parameter.storageClass\n                dataRedundancyType: parameter.dataRedundancyType\n                writeConnectionSecretToRef: {\n                    namespace: context.namespace\n                    name:      parameter.secretName\n                }\n                providerConfigRef: {\n                    name: "default"\n                }\n                deletionPolicy: "Delete"\n            }\n        }\n        parameter: {\n            name:               string\n            acl:                *"private" | string\n            storageClass:       *"Standard" | string\n            dataRedundancyType: *"LRS" | string\n            secretName:         string\n        }\n')),Object(o.b)("p",null,"Update the application to also consume cloud resource OSS."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n                key: Bucket\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        name: velaweb\n        secretName: oss-conn\n')),Object(o.b)("p",null,"Apply it and verify the application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl port-forward deployment/express-server 80:80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\nHandling connection for 80\nHandling connection for 80\n")),Object(o.b)("p",null,Object(o.b)("img",{src:a(280).default})),Object(o.b)("h2",{id:"provisioning-and-consuming-cloud-resource-in-different-applications"},"Provisioning and consuming cloud resource in different applications"),Object(o.b)("p",null,"In this section, cloud resource will be provisioned in one application and consumed in another application."),Object(o.b)("h3",{id:"provision-cloud-resource"},"Provision Cloud Resource"),Object(o.b)("p",null,"Instantiate RDS component with ",Object(o.b)("inlineCode",{parentName:"p"},"alibaba-rds")," workload type in an ",Object(o.b)("a",{parentName:"p",href:"/zh/docs/application"},"Application")," to provide cloud resources."),Object(o.b)("p",null,"As we have claimed an RDS instance with ComponentDefinition name ",Object(o.b)("inlineCode",{parentName:"p"},"alibaba-rds"),".\nThe component in the application should refer to this type."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: baas-rds\nspec:\n  components:\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n')),Object(o.b)("p",null,"Apply the application to Kubernetes and a RDS instance will be automatically provisioned (may take some time, ~2 mins)."),Object(o.b)("p",null,"A secret ",Object(o.b)("inlineCode",{parentName:"p"},"db-conn")," will also be created in the same namespace as that of the application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME       AGE\nbaas-rds   9h\n\n$ kubectl get rdsinstance\nNAME           READY   SYNCED   STATE     ENGINE   VERSION   AGE\nsample-db-v1   True    True     Running   mysql    8.0       9h\n\n$ kubectl get secret\nNAME                                              TYPE                                  DATA   AGE\ndb-conn                                           connection.crossplane.io/v1alpha1     4      9h\n\n$ \u2717 kubectl get secret db-conn -o yaml\napiVersion: v1\ndata:\n  endpoint: xxx==\n  password: yyy\n  port: MzMwNg==\n  username: b2FtdGVzdA==\nkind: Secret\n")),Object(o.b)("h3",{id:"consuming-the-cloud-resource"},"Consuming the Cloud Resource"),Object(o.b)("p",null,"In this section, we will show how another component consumes the RDS instance."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: we recommend defining the cloud resource claiming to an independent application if that cloud resource has\nstandalone lifecycle.")),Object(o.b)("h4",{id:"step-1-define-a-componentdefinition-with-secret-reference"},"Step 1: Define a ComponentDefinition with Secret Reference"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webconsumer\n  annotations:\n    definition.oam.dev/description: A Deployment provides declarative updates for Pods and ReplicaSets\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n\n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n\n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n\n                            if parameter["dbSecret"] != _|_ {\n                                env: [\n                                    {\n                                        name:  "username"\n                                        value: dbConn.username\n                                    },\n                                    {\n                                        name:  "endpoint"\n                                        value: dbConn.endpoint\n                                    },\n                                    {\n                                        name:  "DB_PASSWORD"\n                                        value: dbConn.password\n                                    },\n                                ]\n                            }\n\n                            ports: [{\n                                containerPort: parameter.port\n                            }]\n\n                            if parameter["cpu"] != _|_ {\n                                resources: {\n                                    limits:\n                                        cpu: parameter.cpu\n                                    requests:\n                                        cpu: parameter.cpu\n                                }\n                            }\n                        }]\n                }\n                }\n            }\n        }\n\n        parameter: {\n            // +usage=Which image would you like to use for your service\n            // +short=i\n            image: string\n\n            // +usage=Commands to run in the container\n            cmd?: [...string]\n\n            // +usage=Which port do you want customer traffic sent to\n            // +short=p\n            port: *80 | int\n\n            // +usage=Referred db secret\n            // +insertSecretTo=dbConn\n            dbSecret?: string\n\n            // +usage=Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)\n            cpu?: string\n        }\n\n        dbConn: {\n            username: string\n            endpoint: string\n            password: string\n        }\n\n')),Object(o.b)("p",null,"The key point is the annotation ",Object(o.b)("inlineCode",{parentName:"p"},"//+insertSecretTo=dbConn"),", KubeVela will know the parameter is a K8s secret, it will parse\nthe secret and bind the data into the CUE struct ",Object(o.b)("inlineCode",{parentName:"p"},"dbConn"),"."),Object(o.b)("p",null,"Then the ",Object(o.b)("inlineCode",{parentName:"p"},"output")," can reference the ",Object(o.b)("inlineCode",{parentName:"p"},"dbConn")," struct for the data value. The name ",Object(o.b)("inlineCode",{parentName:"p"},"dbConn")," can be any name.\nIt's just an example in this case. The ",Object(o.b)("inlineCode",{parentName:"p"},"+insertSecretTo")," is keyword, it defines the data binding mechanism."),Object(o.b)("p",null,"Now create the Application to consume the data."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webconsumer\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n        dbSecret: db-conn\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME       AGE\nbaas-rds   10h\nwebapp     14h\n\n$ kubectl get deployment\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   1/1     1            1           9h\n\n$ kubectl port-forward deployment/express-server 80:80\n")),Object(o.b)("p",null,"We can see the cloud resource is successfully consumed by the application."),Object(o.b)("p",null,Object(o.b)("img",{src:a(251).default})))}p.isMDXComponent=!0}}]);