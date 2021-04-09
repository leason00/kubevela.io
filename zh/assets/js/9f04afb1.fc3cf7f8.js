(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),l=(a(0),a(201)),i={title:"vela"},o={unversionedId:"cli/vela",id:"cli/vela",isDocsHomePage:!1,title:"vela",description:"`",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/vela.md",slug:"/cli/vela",permalink:"/zh/docs/cli/vela",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/cli/vela.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"4/9/2021"},c=[{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"vela [flags]\n")),Object(l.b)("h3",{id:"options"},"Options"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n  -h, --help         help for vela\n")),Object(l.b)("h3",{id:"see-also"},"SEE ALSO"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_cap"},"vela cap"),"\t - Manage capability centers and installing/uninstalling capabilities"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_completion"},"vela completion"),"\t - Output shell completion code for the specified shell (bash or zsh)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_config"},"vela config"),"\t - Manage configurations"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_delete"},"vela delete"),"\t - Delete an application"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_env"},"vela env"),"\t - Manage environments"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_exec"},"vela exec"),"\t - Execute command in a container"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_export"},"vela export"),"\t - Export deploy manifests from appfile"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_help"},"vela help"),"\t - Help about any command"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_init"},"vela init"),"\t - Create scaffold for an application"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_logs"},"vela logs"),"\t - Tail logs for application"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_ls"},"vela ls"),"\t - List applications"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_port-forward"},"vela port-forward"),"\t - Forward local ports to services in an application"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_show"},"vela show"),"\t - Show the reference doc for a workload type or trait"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_status"},"vela status"),"\t - Show status of an application"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_system"},"vela system"),"\t - System management utilities"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_template"},"vela template"),"\t - Manage templates"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_traits"},"vela traits"),"\t - List traits"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_up"},"vela up"),"\t - Apply an appfile"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_version"},"vela version"),"\t - Prints out build version information"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"vela_workloads"},"vela workloads"),"\t - List workloads")),Object(l.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}b.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(a),m=r,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return a?n.a.createElement(f,o(o({ref:t},p),{},{components:a})):n.a.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);