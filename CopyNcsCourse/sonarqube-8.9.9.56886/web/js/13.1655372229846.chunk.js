(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1036:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(13),a=n(667),o=n(831),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){var t=e.name,n=e.language,c=e.children,u=l(e,["name","language","children"]);return r.createElement(a.c,i({activeClassName:"link-no-underline",to:Object(o.d)(t,n)},u),c)}},1509:function(e,t,n){"use strict";var r,a=n(13),o=n(723),i=n.n(o),l=n(176),c=n(734),u=n(716),s=n(38),p=n(670);!function(e){e[e.Copy=0]="Copy",e[e.Extend=1]="Extend",e[e.Rename=2]="Rename",e[e.Delete=3]="Delete"}(r||(r={}));var f=n(831),d=n(661),m=n(680),h=n.n(m),y=n(671);function b(e){var t=e.loading,n=e.profile,r=Object(l.translate)("quality_profiles.delete_confirm_title");return a.createElement(h.a,{contentLabel:r,onRequestClose:e.onClose},a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onDelete()}},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,r)),a.createElement("div",{className:"modal-body"},n.childrenCount>0?a.createElement("div",null,a.createElement(y.Alert,{variant:"warning"},Object(l.translate)("quality_profiles.this_profile_has_descendants")),a.createElement("p",null,Object(l.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",n.name,n.languageName))):a.createElement("p",null,Object(l.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x",n.name,n.languageName))),a.createElement("div",{className:"modal-foot"},t&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(d.SubmitButton,{className:"button-red",disabled:t},Object(l.translate)("delete")),a.createElement(d.ResetButtonLink,{onClick:e.onClose},Object(l.translate)("cancel")))))}var v=n(688),_=n.n(v),g=n(695),O=n.n(g);function C(e){var t=e.btnLabelKey,n=e.headerKey,r=e.loading,o=e.profile,i=a.useState(void 0),c=i[0],u=i[1],s=r||!c||c===o.name,p=Object(l.translateWithParameters)(n,o.name,o.languageName);return a.createElement(h.a,{contentLabel:p,onRequestClose:e.onClose,size:"small"},a.createElement("form",{onSubmit:function(t){t.preventDefault(),c&&e.onSubmit(c)}},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,p)),a.createElement("div",{className:"modal-body"},a.createElement(O.a,{className:"modal-field"}),a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"profile-name"},Object(l.translate)("quality_profiles.new_name"),a.createElement(_.a,null)),a.createElement("input",{autoFocus:!0,id:"profile-name",maxLength:100,name:"name",onChange:function(e){u(e.currentTarget.value)},required:!0,size:50,type:"text",value:null!=c?c:o.name}))),a.createElement("div",{className:"modal-foot"},r&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(d.SubmitButton,{disabled:s},Object(l.translate)(t)),a.createElement(d.ResetButtonLink,{onClick:e.onClose},Object(l.translate)("cancel")))))}var j,E=(j=function(e,t){return(j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),q=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},N=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1},t.handleCloseModal=function(){t.setState({openModal:void 0})},t.handleCopyClick=function(){t.setState({openModal:r.Copy})},t.handleExtendClick=function(){t.setState({openModal:r.Extend})},t.handleRenameClick=function(){t.setState({openModal:r.Rename})},t.handleDeleteClick=function(){t.setState({openModal:r.Delete})},t.handleProfileCopy=function(e){return q(t,void 0,void 0,(function(){return N(this,(function(t){switch(t.label){case 0:this.setState({loading:!0}),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,Object(c.i)(this.props.profile.key,e)];case 2:return t.sent(),this.profileActionPerformed(e),[3,4];case 3:return t.sent(),this.profileActionError(),[3,4];case 4:return[2]}}))}))},t.handleProfileExtend=function(e){return q(t,void 0,void 0,(function(){var t,n,r;return N(this,(function(a){switch(a.label){case 0:t=this.props.profile,n={language:t.language,name:e},this.setState({loading:!0}),a.label=1;case 1:return a.trys.push([1,4,,5]),[4,Object(c.j)(n)];case 2:return r=a.sent().profile,[4,Object(c.g)(r,t)];case 3:return a.sent(),this.profileActionPerformed(e),[3,5];case 4:return a.sent(),this.profileActionError(),[3,5];case 5:return[2]}}))}))},t.handleProfileRename=function(e){return q(t,void 0,void 0,(function(){return N(this,(function(t){switch(t.label){case 0:this.setState({loading:!0}),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,Object(c.x)(this.props.profile.key,e)];case 2:return t.sent(),this.profileActionPerformed(e),[3,4];case 3:return t.sent(),this.profileActionError(),[3,4];case 4:return[2]}}))}))},t.handleProfileDelete=function(){return q(t,void 0,void 0,(function(){return N(this,(function(e){switch(e.label){case 0:this.setState({loading:!0}),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Object(c.l)(this.props.profile)];case 2:return e.sent(),this.mounted&&(this.setState({loading:!1,openModal:void 0}),this.props.router.replace(f.a),this.props.updateProfiles()),[3,4];case 3:return e.sent(),this.profileActionError(),[3,4];case 4:return[2]}}))}))},t.handleSetDefaultClick=function(){Object(c.C)(t.props.profile).then(t.props.updateProfiles,(function(){}))},t.profileActionPerformed=function(e){var n=t.props,r=n.profile,a=n.router;t.mounted&&(t.setState({loading:!1,openModal:void 0}),t.props.updateProfiles().then((function(){a.push(Object(f.d)(e,r.language))}),(function(){})))},t.profileActionError=function(){t.mounted&&t.setState({loading:!1})},t}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.profile,t=this.state,n=t.loading,u=t.openModal,d=e.actions,m=void 0===d?{}:d,h=""+Object(s.getBaseUrl)()+Object(c.t)(e),y=Object(p.B)({qprofile:e.key,activation:"false"});return a.createElement(a.Fragment,null,a.createElement(i.a,{className:this.props.className},m.edit&&a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__activate-more-rules",to:y},Object(l.translate)("quality_profiles.activate_more_rules")),!e.isBuiltIn&&a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__backup",download:e.key+".xml",to:h},Object(l.translate)("backup_verb")),a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__compare",to:Object(f.c)(e.name,e.language)},Object(l.translate)("compare")),m.copy&&a.createElement(a.Fragment,null,a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__copy",onClick:this.handleCopyClick},Object(l.translate)("copy")),a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__extend",onClick:this.handleExtendClick},Object(l.translate)("extend"))),m.edit&&a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__rename",onClick:this.handleRenameClick},Object(l.translate)("rename")),m.setAsDefault&&a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__set-as-default",onClick:this.handleSetDefaultClick},Object(l.translate)("set_as_default")),m.delete&&a.createElement(o.ActionsDropdownDivider,null),m.delete&&a.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__delete",destructive:!0,onClick:this.handleDeleteClick},Object(l.translate)("delete"))),u===r.Copy&&a.createElement(C,{btnLabelKey:"copy",headerKey:"quality_profiles.copy_x_title",loading:n,onClose:this.handleCloseModal,onSubmit:this.handleProfileCopy,profile:e}),u===r.Extend&&a.createElement(C,{btnLabelKey:"extend",headerKey:"quality_profiles.extend_x_title",loading:n,onClose:this.handleCloseModal,onSubmit:this.handleProfileExtend,profile:e}),u===r.Rename&&a.createElement(C,{btnLabelKey:"rename",headerKey:"quality_profiles.rename_x_title",loading:n,onClose:this.handleCloseModal,onSubmit:this.handleProfileRename,profile:e}),u===r.Delete&&a.createElement(b,{loading:n,onClose:this.handleCloseModal,onDelete:this.handleProfileDelete,profile:e}))},t}(a.PureComponent);t.a=Object(u.a)(w)},688:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(660),a=n(13),o=n(176);t.default=function(e){var t=e.className;return a.createElement("em",{"aria-label":o.translate("field_required"),className:r("mandatory little-spacer-left",t)},"*")}},695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(660),a=n(13),o=n(665),i=n(176);t.default=function(e){var t=e.className;return a.createElement("div",{"aria-hidden":!0,className:r("text-muted",t)},a.createElement(o.FormattedMessage,{id:"fields_marked_with_x_required",defaultMessage:i.translate("fields_marked_with_x_required"),values:{star:a.createElement("em",{className:"mandatory"},"*")}}))}},711:function(e,t,n){var r=n(685),a=n(678),o=n(788),i=n(718);e.exports=function(e,t){return(i(e)?r:o)(e,a(t,3))}},715:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(799),a=n(13),o=n(665),i=n(129),l=n(176),c=n(714);t.default=function(e){var t=e.children,n=void 0===t?function(e){return e}:t,u=e.date,s=e.hourPrecision,p=n;if(!u)return a.createElement(a.Fragment,null,n(l.translate("never")));u&&s&&r.differenceInHours(Date.now(),u)<1&&(p=function(){return n(l.translate("less_than_1_hour_ago"))});var f=i.parseDate(u);return a.createElement(c.default,{date:f},(function(e){return a.createElement("span",{title:e},a.createElement(o.FormattedRelative,{value:f},p))}))}},723:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(660),i=n(13),l=n(178),c=n(176),u=n(683),s=n(725),p=n(661),f=n(703),d=n(675),m=n(666);t.default=function(e){var t=e.children,n=e.className,r=e.overlayPlacement,a=e.small,l=e.toggleClassName;return i.createElement(d.default,{className:n,onOpen:e.onOpen,overlay:i.createElement("ul",{className:"menu"},t),overlayPlacement:r},i.createElement(p.Button,{className:o("dropdown-toggle",l,{"button-small":a})},i.createElement(s.default,{size:a?12:14}),i.createElement(u.default,{className:"little-spacer-left"})))};var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return a(t,e),t.prototype.render=function(){var e=this,t=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?i.createElement("li",null,i.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?i.createElement("li",null,i.createElement(l.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?i.createElement(f.ClipboardBase,null,(function(n){var r=n.setCopyButton,a=n.copySuccess;return i.createElement(m.default,{overlay:c.translate("copied_action"),visible:a},i.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:r},i.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))})):i.createElement("li",null,i.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(i.PureComponent);t.ActionsDropdownItem=h,t.ActionsDropdownDivider=function(){return i.createElement("li",{className:"divider"})}},725:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=n(664);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,l=e.size,c=void 0===l?14:l,u=a(e,["fill","size"]);return o.createElement(i.default,r({size:c,viewBox:"0 0 14 14"},u),o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:n}})))}},734:function(e,t,n){"use strict";n.d(t,"A",(function(){return u})),n.d(t,"s",(function(){return s})),n.d(t,"j",(function(){return p})),n.d(t,"y",(function(){return f})),n.d(t,"r",(function(){return d})),n.d(t,"q",(function(){return m})),n.d(t,"C",(function(){return h})),n.d(t,"x",(function(){return y})),n.d(t,"i",(function(){return b})),n.d(t,"l",(function(){return v})),n.d(t,"g",(function(){return _})),n.d(t,"t",(function(){return g})),n.d(t,"u",(function(){return O})),n.d(t,"o",(function(){return C})),n.d(t,"n",(function(){return j})),n.d(t,"p",(function(){return E})),n.d(t,"h",(function(){return q})),n.d(t,"d",(function(){return N})),n.d(t,"m",(function(){return w})),n.d(t,"B",(function(){return P})),n.d(t,"z",(function(){return k})),n.d(t,"c",(function(){return S})),n.d(t,"w",(function(){return x})),n.d(t,"b",(function(){return D})),n.d(t,"v",(function(){return A})),n.d(t,"e",(function(){return L})),n.d(t,"f",(function(){return M})),n.d(t,"a",(function(){return J})),n.d(t,"k",(function(){return I}));var r=n(711),a=n.n(r),o=n(840),i=n(49),l=n(673),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function s(e){var t=e.compareToSonarWay,n=e.profile.key;return Object(i.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:t,key:n})}function p(e){return Object(i.postJSON)("/api/qualityprofiles/create",e).catch(l.a)}function f(e){return Object(i.postJSON)("/api/qualityprofiles/restore",e).catch(l.a)}function d(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function m(e){var t=e.language,n=e.name;return Object(i.getJSON)("/api/qualityprofiles/inheritance",{language:t,qualityProfile:n}).catch(l.a)}function h(e){var t=e.language,n=e.name;return Object(i.post)("/api/qualityprofiles/set_default",{language:t,qualityProfile:n})}function y(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function b(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function v(e){var t=e.language,n=e.name;return Object(i.post)("/api/qualityprofiles/delete",{language:t,qualityProfile:n}).catch(l.a)}function _(e,t){var n=e.language,r=e.name;return Object(i.post)("/api/qualityprofiles/change_parent",{language:n,qualityProfile:r,parentQualityProfile:t?t.name:void 0}).catch(l.a)}function g(e){var t=e.language,n=e.name;return"/api/qualityprofiles/backup?"+Object.entries({language:t,qualityProfile:n}).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&")}function O(e,t){var n=e.key,r=t.language,a=t.name;return"/api/qualityprofiles/export?"+Object.entries({exporterKey:n,language:r,qualityProfile:a}).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&")}function C(){return Object(i.getJSON)("/api/qualityprofiles/importers").then((function(e){return e.importers}),l.a)}function j(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then((function(e){return e.exporters}))}function E(e,t,n,r){var a=n.language,o=n.name;return Object(i.getJSON)("/api/qualityprofiles/changelog",{since:e,to:t,language:a,qualityProfile:o,p:r})}function q(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function N(e,t){var n=e.language,r=e.name;return Object(i.post)("/api/qualityprofiles/add_project",{language:n,qualityProfile:r,project:t}).catch(l.a)}function w(e,t){var n=e.language,r=e.name;return Object(i.post)("/api/qualityprofiles/remove_project",{language:n,qualityProfile:r,project:t}).catch(l.a)}function P(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function k(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function S(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function x(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function D(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function A(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function L(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function M(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function J(e){var t=e.params&&a()(e.params,(function(e,t){return t+"="+Object(o.csvEscape)(e)})).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",c(c({},e),{params:t})).catch(l.a)}function I(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},840:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.csvEscape=function(e){return'"'+e.replace(/"/g,'\\"')+'"'}},924:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(660),a=n(13),o=n(666),i=n.n(o),l=n(176);function c(e){var t=e.className,n=e.tooltip,o=void 0===n||n,c=a.createElement("div",{className:r("badge badge-info",t)},Object(l.translate)("quality_profiles.built_in"));return o?a.createElement(i.a,{overlay:Object(l.translate)("quality_profiles.built_in.description")},c):c}}}]);
//# sourceMappingURL=13.1655372229846.chunk.js.map