(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4725],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},28552:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"vela port-forward"},l={unversionedId:"cli/vela_port-forward",id:"version-v1.1/cli/vela_port-forward",isDocsHomePage:!1,title:"vela port-forward",description:"Forward local ports to services in an application",source:"@site/versioned_docs/version-v1.1/cli/vela_port-forward.md",sourceDirName:"cli",slug:"/cli/vela_port-forward",permalink:"/docs/v1.1/cli/vela_port-forward",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/cli/vela_port-forward.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1621052799,formattedLastUpdatedAt:"5/15/2021",frontMatter:{title:"vela port-forward"},sidebar:"version-v1.1/docs",previous:{title:"vela ls",permalink:"/docs/v1.1/cli/vela_ls"},next:{title:"vela show",permalink:"/docs/v1.1/cli/vela_show"}},s=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:s};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Forward local ports to services in an application"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Forward local ports to services in an application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela port-forward APP_NAME [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"port-forward APP_NAME [options] [LOCAL_PORT:]REMOTE_PORT [...[LOCAL_PORT_N:]REMOTE_PORT_N]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --address strings                Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, vela will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind. (default [localhost])\n  -h, --help                           help for port-forward\n      --pod-running-timeout duration   The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running (default 1m0s)\n      --route                          forward ports from route trait service\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"vela"},"vela"),"\t - ")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}c.isMDXComponent=!0}}]);