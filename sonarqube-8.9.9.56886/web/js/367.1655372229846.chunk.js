(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{2217:function(e,t,n){"use strict";n.r(t);var r,a=n(13),l=n(684),o=n(667),i=n(715),c=n.n(i),s=n(176),p=n(924),u=n(1509),f=n(1036),m=n(831),y=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y(t,e),t.prototype.render=function(){var e=this.props.profile;return a.createElement("header",{className:"page-header quality-profile-header"},a.createElement("div",{className:"note spacer-bottom"},a.createElement(o.a,{className:"text-muted",to:m.a},Object(s.translate)("quality_profiles.page"))," / ",a.createElement(o.c,{className:"text-muted",to:Object(m.e)(e.language)},e.languageName)),a.createElement("h1",{className:"page-title"},a.createElement(f.a,{className:"link-base-color",language:e.language,name:e.name},a.createElement("span",null,e.name)),e.isBuiltIn&&a.createElement(p.a,{className:"spacer-left",tooltip:!1})),a.createElement("div",{className:"pull-right"},a.createElement("ul",{className:"list-inline",style:{lineHeight:"24px"}},a.createElement("li",{className:"small spacer-right"},Object(s.translate)("quality_profiles.updated_")," ",a.createElement(c.a,{date:e.rulesUpdatedAt})),a.createElement("li",{className:"small big-spacer-right"},Object(s.translate)("quality_profiles.used_")," ",a.createElement(c.a,{date:e.lastUsed})),a.createElement("li",null,a.createElement(o.c,{className:"button",to:Object(m.b)(e.name,e.language)},Object(s.translate)("changelog"))),a.createElement("li",null,a.createElement(u.a,{className:"pull-left",profile:e,updateProfiles:this.props.updateProfiles})))),e.isBuiltIn&&a.createElement("div",{className:"page-description"},Object(s.translate)("quality_profiles.built_in.description")))},t}(a.PureComponent);function g(){return a.createElement("div",{className:"quality-profile-not-found"},a.createElement("div",{className:"note spacer-bottom"},a.createElement(o.a,{className:"text-muted",to:m.a},Object(s.translate)("quality_profiles.page"))),a.createElement("div",null,Object(s.translate)("quality_profiles.not_found")))}var b=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(){return(h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return b(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.location,n=e.profiles,r=e.router;if(t.query.key){var a=n.find((function(e){return e.key===t.query.key}));a&&r.replace({pathname:t.pathname,query:{language:a.language,name:a.name}})}},t.prototype.render=function(){var e=this.props,t=e.profiles,n=e.location,r=O(e,["profiles","location"]),o=n.query,i=o.key,c=o.language,s=o.name;if(i)return t.find((function(e){return e.key===n.query.key}))?null:a.createElement(g,null);var p=t.find((function(e){return e.language===c&&e.name===s}));if(!p)return a.createElement(g,null);var u=a.cloneElement(this.props.children,h({profile:p,profiles:t},r));return a.createElement("div",{id:"quality-profile"},a.createElement(l.a,{defer:!1,title:p.name}),a.createElement(d,{profile:p,updateProfiles:this.props.updateProfiles}),u)},t}(a.PureComponent);t.default=E}}]);
//# sourceMappingURL=367.1655372229846.chunk.js.map