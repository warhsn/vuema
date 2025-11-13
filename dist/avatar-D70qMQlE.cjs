"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue");function l(e){const n=e.trim();if(!n)return"";const i=n.split(/\s+/),r=i[0].charAt(0);if(i.length===1)return r;const a=i[i.length-1].charAt(0);return r+a}const o=t.defineComponent({__name:"avatar",props:{name:{},size:{default:48},radius:{},isRound:{type:Boolean,default:!0},backgroundColour:{default:"grey"},textColor:{default:"white"},imageUrl:{}},setup(e){return(n,i)=>(t.openBlock(),t.createElementBlock("figure",{class:"image is-clickable",style:t.normalizeStyle(`width: ${e.size}px; height: ${e.size}px;`)},[t.createElementVNode("div",{style:t.normalizeStyle(`
                width: ${e.size}px;
                height: ${e.size}px;
                border-radius: ${e.isRound?"50%":"0"};
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${e.backgroundColour};
                color: ${e.textColor};
                ${e.imageUrl?`background-image: url('${e.imageUrl}'); background-size: cover; background-position: center;`:""}`)},t.toDisplayString(e.imageUrl?"":t.unref(l)(e.name??"")),5)],4))}});exports.default=o;
