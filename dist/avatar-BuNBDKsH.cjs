"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),r=["src"],a=e.defineComponent({__name:"avatar",props:{name:{},size:{default:"48"},radius:{},isRound:{type:Boolean},backgroundColour:{default:"grey"},textColor:{default:"white"},imageUrl:{}},setup(t){const o=t,l=e.computed(()=>({"is-48x48":o.size==="48"}));return(n,s)=>(e.openBlock(),e.createElementBlock("figure",{class:e.normalizeClass(["image is-clickable",l.value])},[o.imageUrl?(e.openBlock(),e.createElementBlock("img",{key:0,src:o.imageUrl,class:e.normalizeClass({"is-rounded":o.isRound})},null,10,r)):(e.openBlock(),e.createElementBlock("div",{key:1,style:e.normalizeStyle(`
                width: ${o.size}px; 
                height: ${o.size}px; 
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${o.backgroundColour};
                color: ${o.textColor};`)},e.toDisplayString(o.name),5))],2))}});exports.default=a;
