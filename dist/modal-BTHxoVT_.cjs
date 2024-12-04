"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),m=require("./_plugin-vue_export-helper-BHFhmbuH.cjs"),u={key:0,class:"modal-card-head"},p={class:"modal-card-title"},k={key:0},C={key:1,class:"modal-card-body"},B={key:2,class:"modal-card-foot"},f={key:3,class:"box is-clipped"},y=e.defineComponent({__name:"modal",props:{withCancel:{type:Boolean},withHeader:{type:Boolean,default:!0},withFooter:{type:Boolean,default:!0},title:{},isDismisable:{type:Boolean,default:!1},isCloseable:{type:Boolean,default:!0},isCard:{type:Boolean,default:!1},transistionName:{},transitionMode:{},isActive:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:n}){const r=s,t=n;function l(){t("close")}function i(){t("close")}function c(){r.isDismisable&&t("close")}return(o,a)=>{const d=e.resolveComponent("action-button");return e.openBlock(),e.createBlock(e.Transition,{name:"modal",mode:"in-out"},{default:e.withCtx(()=>[o.isActive?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["modal",{"is-active":o.isActive}])},[e.createElementVNode("div",{onClick:c,class:"modal-background"}),e.createElementVNode("div",{class:e.normalizeClass(["modal-wrapper",{"modal-card":o.isCard,"modal-content":!o.isCard}])},[o.withHeader&&o.isCard?(e.openBlock(),e.createElementBlock("header",u,[e.createElementVNode("p",p,[o.title?(e.openBlock(),e.createElementBlock("span",k,e.toDisplayString(o.title),1)):e.createCommentVNode("",!0),e.renderSlot(o.$slots,"title",{},void 0,!0)]),o.isCloseable?(e.openBlock(),e.createElementBlock("button",{key:0,onClick:l,class:"delete","aria-label":"close"})):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),o.isCard?(e.openBlock(),e.createElementBlock("section",C,[e.renderSlot(o.$slots,"default",{},void 0,!0)])):e.createCommentVNode("",!0),o.withFooter&&o.isCard?(e.openBlock(),e.createElementBlock("footer",B,[o.withCancel?(e.openBlock(),e.createBlock(d,{key:0,onClick:i},{default:e.withCtx(()=>a[0]||(a[0]=[e.createTextVNode(" Cancel ")])),_:1})):e.createCommentVNode("",!0),e.renderSlot(o.$slots,"footer",{},void 0,!0)])):e.createCommentVNode("",!0),o.isCard?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",f,[e.renderSlot(o.$slots,"default",{},void 0,!0)])),(!o.isCard||!o.withHeader)&&o.isCloseable?(e.openBlock(),e.createElementBlock("button",{key:4,onClick:l,class:"modal-close is-large","aria-label":"close"})):e.createCommentVNode("",!0)],2)],2)):e.createCommentVNode("",!0)]),_:3})}}}),b=m._export_sfc(y,[["__scopeId","data-v-ec83da24"]]);exports.default=b;
