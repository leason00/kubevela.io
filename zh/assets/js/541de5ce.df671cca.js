(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6474],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20875:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Cloud Volumes"},s={unversionedId:"end-user/traits/volumes",id:"end-user/traits/volumes",isDocsHomePage:!1,title:"Cloud Volumes",description:"This section introduces how to attach cloud volumes to the component. For example, AWS ElasticBlockStore,",source:"@site/docs/end-user/traits/volumes.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/volumes",permalink:"/zh/docs/next/end-user/traits/volumes",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/volumes.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1620154848,formattedLastUpdatedAt:"5/4/2021",frontMatter:{title:"Cloud Volumes"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Sidecar",permalink:"/zh/docs/next/end-user/traits/sidecar"},next:{title:"Service Binding",permalink:"/zh/docs/next/end-user/traits/service-binding"}},l=[],u={toc:l};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section introduces how to attach cloud volumes to the component. For example, AWS ElasticBlockStore,\nAzure Disk, Alibaba Cloud OSS, etc."),(0,a.kt)("p",null,"Cloud volumes are not built-in capabilities in KubeVela so you need to enable these traits first. Let's use AWS EBS as example."),(0,a.kt)("p",null,"Install and check the ",(0,a.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," for AWS EBS volume trait."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/app-with-volumes/td-awsEBS.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela show aws-ebs-volume\n+-----------+----------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                          DESCRIPTION                           |  TYPE  | REQUIRED | DEFAULT |\n+-----------+----------------------------------------------------------------+--------+----------+---------+\n| name      | The name of volume.                                            | string | true     |         |\n| mountPath |                                                                | string | true     |         |\n| volumeID  | Unique id of the persistent disk resource.                     | string | true     |         |\n| fsType    | Filesystem type to mount.                                      | string | true     | ext4    |\n| partition | Partition on the disk to mount.                                | int    | false    |         |\n| readOnly  | ReadOnly here will force the ReadOnly setting in VolumeMounts. | bool   | true     | false   |\n+-----------+----------------------------------------------------------------+--------+----------+---------+\n")),(0,a.kt)("p",null,"Then we can now attach a ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-ebs")," volume to a component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: myworker\n      type: worker\n      properties:\n        image: "busybox"\n        cmd:\n          - sleep\n          - "1000"\n      traits:\n        - type: aws-ebs-volume\n          properties:\n            name: "my-ebs"\n            mountPath: "/myebs"\n            volumeID: "my-ebs-id"\n')))}c.isMDXComponent=!0}}]);