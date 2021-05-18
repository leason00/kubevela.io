(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6340],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24071:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return p}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),c={title:"KubeVela CLI"},l={unversionedId:"developers/references/devex/cli",id:"version-v1.0/developers/references/devex/cli",isDocsHomePage:!1,title:"KubeVela CLI",description:"Auto-completion",source:"@site/versioned_docs/version-v1.0/developers/references/devex/cli.md",sourceDirName:"developers/references/devex",slug:"/developers/references/devex/cli",permalink:"/docs/developers/references/devex/cli",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/references/devex/cli.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1621315429,formattedLastUpdatedAt:"5/18/2021",frontMatter:{title:"KubeVela CLI"},sidebar:"defaultSidebar",previous:{title:"Worker",permalink:"/docs/developers/references/component-types/worker"},next:{title:"KubeVela Dashboard (WIP)",permalink:"/docs/developers/references/devex/dashboard"}},i=[{value:"Auto-completion",id:"auto-completion",children:[]}],s={toc:i};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"auto-completion"},"Auto-completion"),(0,a.kt)("h4",{id:"bash"},"bash"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"To load completions in your current shell session:\n$ source <(vela completion bash)\n\nTo load completions for every new session, execute once:\nLinux:\n  $ vela completion bash > /etc/bash_completion.d/vela\nMacOS:\n  $ vela completion bash > /usr/local/etc/bash_completion.d/vela\n")),(0,a.kt)("h4",{id:"zsh"},"zsh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'To load completions in your current shell session:\n$ source <(vela completion zsh)\n\nTo load completions for every new session, execute once:\n$ vela completion zsh > "${fpath[1]}/_vela"\n')))}p.isMDXComponent=!0}}]);