import{u as m}from"./asyncData.4d51e9f7.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.646d4c8f.js";import f from"./Ellipsis.1b8830d7.js";import _ from"./ComponentPlaygroundData.29e2318f.js";import"./TabsHeader.7edaa6b8.js";import"./ComponentPlaygroundProps.361949d1.js";import"./ProseH4.300d905b.js";import"./ProseCodeInline.873e4915.js";import"./Badge.f00e0ca6.js";import"./MDCSlot.e44e56f2.js";import"./slot.0eb9f64f.js";import"./ProseP.e2ad9df4.js";import"./index.11ed30f5.js";import"./ComponentPlaygroundSlots.vue.b030e108.js";import"./ComponentPlaygroundTokens.vue.b3e70207.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-6e1135b0"]]);export{V as default};
