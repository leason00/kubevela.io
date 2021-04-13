(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(202)),i={title:"Scaler"},o={unversionedId:"developers/references/traits/scaler",id:"developers/references/traits/scaler",isDocsHomePage:!1,title:"Scaler",description:"Description",source:"@site/docs/developers/references/traits/scaler.md",slug:"/developers/references/traits/scaler",permalink:"/docs/developers/references/traits/scaler",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/references/traits/scaler.md",version:"current",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1618298461,formattedLastUpdatedAt:"4/13/2021",sidebar:"docs",previous:{title:"Metrics",permalink:"/docs/developers/references/traits/metrics"},next:{title:"Restful API",permalink:"/docs/developers/references/restful-api/rest"}},l=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]}],p={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Configures replicas for your service."),Object(c.b)("h2",{id:"specification"},"Specification"),Object(c.b)("p",null,"List of all configuration options for a ",Object(c.b)("inlineCode",{parentName:"p"},"Scaler")," trait."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yaml"},"...\n    scaler:\n      replicas: 100\n")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Description"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Required"),Object(c.b)("th",{parentName:"tr",align:null},"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"replicas"),Object(c.b)("td",{parentName:"tr",align:null},"Replicas of the workload"),Object(c.b)("td",{parentName:"tr",align:null},"int"),Object(c.b)("td",{parentName:"tr",align:null},"true"),Object(c.b)("td",{parentName:"tr",align:null},"1")))))}s.isMDXComponent=!0},202:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(f,o(o({ref:t},p),{},{components:r})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);