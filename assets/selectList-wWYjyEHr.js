import{_ as i,w as c,l as p,o,c as l,F as d,h as u,t as m}from"./index-OLdlyzsC.js";const v={props:["options"],emits:["updata"],data(){return{selected:this.options[0].value}}},f=["value"];function _(r,t,a,b,s,g){return c((o(),l("select",{class:"form-select border-0 shadow-sm bg-primary text-white",id:"select","aria-label":"select","onUpdate:modelValue":t[0]||(t[0]=e=>s.selected=e),onChange:t[1]||(t[1]=e=>r.$emit("updata",s.selected))},[(o(!0),l(d,null,u(a.options,(e,n)=>(o(),l("option",{key:n,value:e.value},m(e.label),9,f))),128))],544)),[[p,s.selected]])}const w=i(v,[["render",_]]);export{w as s};
