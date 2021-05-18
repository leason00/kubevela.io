(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[9949],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(b,s(s({ref:n},p),{},{components:r})):t.createElement(b,s({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78612:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var t=r(22122),o=r(19756),a=(r(67294),r(3905)),s={title:"Provision and Consume Cloud Resources by Crossplane"},i={unversionedId:"end-user/cloud-resources",id:"version-v1.0/end-user/cloud-resources",isDocsHomePage:!1,title:"Provision and Consume Cloud Resources by Crossplane",description:"\u26a0\ufe0f This section requires your platform builder has already installed the cloud resources related capabilities.",source:"@site/versioned_docs/version-v1.0/end-user/cloud-resources.md",sourceDirName:"end-user",slug:"/end-user/cloud-resources",permalink:"/docs/end-user/cloud-resources",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/cloud-resources.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1621315429,formattedLastUpdatedAt:"5/18/2021",frontMatter:{title:"Provision and Consume Cloud Resources by Crossplane"},sidebar:"defaultSidebar",previous:{title:"Scaler",permalink:"/docs/developers/references/traits/scaler"},next:{title:"Debug and Test",permalink:"/docs/end-user/diagnose"}},c=[{value:"Provision and consume cloud resource in a single application v1 (one cloud resource)",id:"provision-and-consume-cloud-resource-in-a-single-application-v1-one-cloud-resource",children:[]},{value:"Provision and consume cloud resource in a single application v2 (two cloud resources)",id:"provision-and-consume-cloud-resource-in-a-single-application-v2-two-cloud-resources",children:[]},{value:"Provision and consume cloud resource in different applications",id:"provision-and-consume-cloud-resource-in-different-applications",children:[{value:"Provision Cloud Resource",id:"provision-cloud-resource",children:[]},{value:"Consume the Cloud Resource",id:"consume-the-cloud-resource",children:[]}]}],l={toc:c};function p(e){var n=e.components,s=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your platform builder has already installed the ",(0,a.kt)("a",{parentName:"p",href:"../platform-engineers/cloud-services"},"cloud resources related capabilities"),".")),(0,a.kt)("h2",{id:"provision-and-consume-cloud-resource-in-a-single-application-v1-one-cloud-resource"},"Provision and consume cloud resource in a single application v1 (one cloud resource)"),(0,a.kt)("p",null,"Check the parameters of cloud resource component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show alibaba-rds\n\n# Properties\n+---------------+------------------------------------------------+--------+----------+--------------------+\n|     NAME      |                  DESCRIPTION                   |  TYPE  | REQUIRED |      DEFAULT       |\n+---------------+------------------------------------------------+--------+----------+--------------------+\n| engine        | RDS engine                                     | string | true     | mysql              |\n| engineVersion | The version of RDS engine                      | string | true     |                8.0 |\n| instanceClass | The instance class for the RDS                 | string | true     | rds.mysql.c1.large |\n| username      | RDS username                                   | string | true     |                    |\n| secretName    | Secret name which RDS connection will write to | string | true     |                    |\n+---------------+------------------------------------------------+--------+----------+--------------------+\n")),(0,a.kt)("p",null,"Use the service binding trait to bind cloud resources into workload as ENV."),(0,a.kt)("p",null,"Create an application with a cloud resource provisioning component and a consuming component as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n\n')),(0,a.kt)("p",null,"Apply it and verify the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME     AGE\nwebapp   46m\n\n$ kubectl port-forward deployment/express-server 80:80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\nHandling connection for 80\nHandling connection for 80\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(80478).Z})),(0,a.kt)("h2",{id:"provision-and-consume-cloud-resource-in-a-single-application-v2-two-cloud-resources"},"Provision and consume cloud resource in a single application v2 (two cloud resources)"),(0,a.kt)("p",null,"Based on the section ",(0,a.kt)("inlineCode",{parentName:"p"},"Provisioning and consuming cloud resource in a single application v1 (one cloud resource)"),", "),(0,a.kt)("p",null,"Update the application to also consume cloud resource OSS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n                key: Bucket\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        name: velaweb\n        secretName: oss-conn\n')),(0,a.kt)("p",null,"Apply it and verify the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl port-forward deployment/express-server 80:80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\nHandling connection for 80\nHandling connection for 80\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(99733).Z})),(0,a.kt)("h2",{id:"provision-and-consume-cloud-resource-in-different-applications"},"Provision and consume cloud resource in different applications"),(0,a.kt)("p",null,"In this section, cloud resource will be provisioned in one application and consumed in another application."),(0,a.kt)("h3",{id:"provision-cloud-resource"},"Provision Cloud Resource"),(0,a.kt)("p",null,"Instantiate RDS component with ",(0,a.kt)("inlineCode",{parentName:"p"},"alibaba-rds")," workload type in an ",(0,a.kt)("a",{parentName:"p",href:"../application"},"Application")," to provide cloud resources."),(0,a.kt)("p",null,"As we have claimed an RDS instance with ComponentDefinition name ",(0,a.kt)("inlineCode",{parentName:"p"},"alibaba-rds"),".\nThe component in the application should refer to this type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: baas-rds\nspec:\n  components:\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        name: sample-db\n        engine: mysql\n        engineVersion: "8.0"\n        instanceClass: rds.mysql.c1.large\n        username: oamtest\n        secretName: db-conn\n')),(0,a.kt)("p",null,"Apply the application to Kubernetes and a RDS instance will be automatically provisioned (may take some time, ~2 mins)."),(0,a.kt)("p",null,"A secret ",(0,a.kt)("inlineCode",{parentName:"p"},"db-conn")," will also be created in the same namespace as that of the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME       AGE\nbaas-rds   9h\n\n$ kubectl get rdsinstance\nNAME           READY   SYNCED   STATE     ENGINE   VERSION   AGE\nsample-db-v1   True    True     Running   mysql    8.0       9h\n\n$ kubectl get secret\nNAME                                              TYPE                                  DATA   AGE\ndb-conn                                           connection.crossplane.io/v1alpha1     4      9h\n\n$ \u2717 kubectl get secret db-conn -o yaml\napiVersion: v1\ndata:\n  endpoint: xxx==\n  password: yyy\n  port: MzMwNg==\n  username: b2FtdGVzdA==\nkind: Secret\n")),(0,a.kt)("h3",{id:"consume-the-cloud-resource"},"Consume the Cloud Resource"),(0,a.kt)("p",null,"In this section, we will show how another component consumes the RDS instance."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: we recommend defining the cloud resource claiming to an independent application if that cloud resource has\nstandalone lifecycle.")),(0,a.kt)("p",null,"Now create the Application to consume the data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webconsumer\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n        dbSecret: db-conn\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get application\nNAME       AGE\nbaas-rds   10h\nwebapp     14h\n\n$ kubectl get deployment\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server-v1   1/1     1            1           9h\n\n$ kubectl port-forward deployment/express-server 80:80\n")),(0,a.kt)("p",null,"We can see the cloud resource is successfully consumed by the application."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(80478).Z})))}p.isMDXComponent=!0},99733:function(e,n,r){"use strict";n.Z=r.p+"assets/images/crossplane-visit-application-v2-ca5eb3887f73effb77711f38ab658025.jpg"},80478:function(e,n,r){"use strict";n.Z=r.p+"assets/images/crossplane-visit-application-b6aa490a07025d258b6d0ad00cd9a055.jpg"}}]);