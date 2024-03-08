import{s as F}from"./selectList-wWYjyEHr.js";import{B as U}from"./BackendFunctions-DQ4gnSdy.js";import{_ as V,r as k,o as r,c as b,a as t,s as m,b as g,d as C,i as p,w as d,F as P,t as u,v as _,e as y,h as w,l as I,j as L,T as j,p as B,f as T}from"./index-OLdlyzsC.js";const D={components:{BackendFunctions:U,selectList:F},data(){return{product:[],downProduct:[],thisPage:[],categoryPage:[],thisPage2:[],category:1,page:1,pg:12,select:"1",options:[{value:"1",label:"商品管理"},{value:"2",label:"下架商品"}],options2:[{value:"2",label:"下架商品"},{value:"1",label:"商品管理"}],dataForm:{productName:"",category:1,image:"",count:1,price:"20",description:"",isLook:!1}}},watch:{category(){this.updateThisPage()}},computed:{startIndex(){return(this.page-1)*this.pg},endIndex(){return this.startIndex+this.pg},categoryProduct(){return this.thisPage.filter(i=>i.category===this.category)}},methods:{prevPage(){this.page>1&&(this.page--,this.select==1?this.updateThisPage():this.select==2&&this.updatePage())},nextPage(){this.thisPage.length>=this.pg&&(this.page++,this.select==1?this.updateThisPage():this.select==2&&this.updatePage())},updateThisPage(){this.thisPage=this.product.filter(i=>i.category===this.category).slice(this.startIndex,this.endIndex)},updatePage(){this.thisPage2=this.downProduct.slice(this.startIndex,this.endIndex)},uploadFile(i){const s=i.target.files[0];this.dataForm.image=s},goDown(i){const s={isLook:!0};this.$axios.patch(`/products/${i}`,s),location.reload()},goon(i){const s={isLook:!1};this.$axios.patch(`/products/${i}`,s),location.reload()},del(i){this.$axios.delete(`/products/${i}`),location.reload()},update(i,s,f,x){const e={price:parseFloat(s),count:parseInt(f)},n={calc:parseInt(-s)};this.$axios.get(`/coupons?name=${x}`).then(v=>{const h=v.data[0].id;this.$axios.patch(`/coupons/${h}`,n)}),this.$axios.patch(`/products/${i}`,e)},pushData(){this.$axios.post("/products",this.dataForm)},get(i){this.select=i}},mounted(){this.$axios.get("/products").then(i=>{i.data.forEach(s=>{s.isLook==!1?this.product.push({title:s.productName,category:s.category,money:s.price,count:s.count,id:s.id}):s.isLook==!0&&this.downProduct.push({id:s.id,title:s.productName})}),this.updateThisPage(),this.updatePage()}).catch(i=>{console.error(i)})}},a=i=>(B("data-v-b346febd"),i=i(),T(),i),N={class:"d-flex"},M={class:"sidebar border-5 pt-3 border-end d-flex bg-secondary flex-column"},S={key:0,class:"main"},E={class:"container mt-5"},R={class:"mt-2"},q={class:"row justify-content-between"},z=a(()=>t("div",{class:"col-2"},[t("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"新增商品")],-1)),A={class:"col-6"},G={class:"nav nav-pills"},H={class:"nav-item mx-2"},J=a(()=>t("label",{class:"btn btn-outline-primary",for:"option1"},"固定套餐",-1)),K={class:"nav-item mx-2"},O=a(()=>t("label",{class:"btn btn-outline-primary",for:"option2"},"秘捲",-1)),Q={class:"nav-item mx-2"},W=a(()=>t("label",{class:"btn btn-outline-primary",for:"option3"},"肉品",-1)),X={class:"nav-item mx-2"},Y=a(()=>t("label",{class:"btn btn-outline-primary",for:"option4"},"海鮮",-1)),Z={class:"nav-item mx-2"},$=a(()=>t("label",{class:"btn btn-outline-primary",for:"option5"},"酒食",-1)),tt={class:"nav-item mx-2"},st=a(()=>t("label",{class:"btn btn-outline-primary",for:"option6"},"蔬菜",-1)),ot={class:"nav-item mx-2"},et=a(()=>t("label",{class:"btn btn-outline-primary",for:"option7"},"經典",-1)),at={class:"col-2"},it={class:"row row-cols-4 mb-4"},nt={class:"card mt-3 bg-light"},dt={class:"cardbody"},lt={class:"text-center mt-4"},ct={class:"row px-3 justify-content-center align-items-center py-3"},rt=a(()=>t("div",{class:"col-2 fs-6"},[t("label",{for:"money",class:"ms-1 text-nowrap"},"價錢:")],-1)),bt={class:"col-4"},pt=["onUpdate:modelValue","placeholder"],mt=a(()=>t("div",{class:"col-2 fs-6"},[t("label",{for:"count",class:"ms-1 text-nowrap"},"庫存:")],-1)),_t={class:"col-4"},ut=["onUpdate:modelValue","placeholder"],ht={class:"row text-center align-items-center py-3"},gt={class:"col-6"},yt=["data-bs-target"],vt={class:"col-6"},ft=["data-bs-target"],xt=["id"],kt={class:"modal-dialog"},Pt={class:"modal-content border-0"},wt=a(()=>t("div",{class:"modal-body fs-3"}," 是否下架產品? ",-1)),Ft={class:"modal-footer border-0"},Ut=a(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)),Vt=["onClick"],Ct=["id"],It={class:"modal-dialog"},Lt={class:"modal-content border-0"},jt={class:"modal-body fs-3"},Bt={class:"modal-footer border-0"},Tt=a(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)),Dt=["onClick"],Nt={class:"d-flex justify-content-center h-25"},Mt=["disabled"],St={class:"fs-3 text-primary mx-3"},Et=["disabled"],Rt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},qt={class:"modal-dialog"},zt={class:"modal-content border-0"},At=a(()=>t("div",{class:"modal-header border-0"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"商品內容")],-1)),Gt={class:"modal-body bg-secondary"},Ht={class:"card border-0"},Jt={class:"cardbody bg-secondary"},Kt={class:"d-flex h-25 justify-content-center mt-3"},Ot={class:"d-flex h-25 justify-content-center mt-3 mb-2"},Qt=a(()=>t("label",{for:"title",class:"fs-3 me-2 form-label"},"品名:",-1)),Wt={class:"d-flex h-25 justify-content-center mb-2"},Xt=a(()=>t("label",{for:"price",class:"fs-3 me-2 form-label"},"價格:",-1)),Yt={class:"d-flex h-25 justify-content-center mb-2"},Zt=a(()=>t("label",{for:"count",class:"fs-3 me-2 form-label"},"庫存:",-1)),$t={class:"d-flex h-25 justify-content-center mb-2"},ts=a(()=>t("label",{for:"description",class:"fs-3 me-2 form-label"},"介紹:",-1)),ss={class:"d-flex h-25 justify-content-center mt-3 mb-2"},os=a(()=>t("option",{value:1},"固定套餐",-1)),es=a(()=>t("option",{value:2},"秘捲",-1)),as=a(()=>t("option",{value:3},"肉品",-1)),is=a(()=>t("option",{value:4},"海鮮",-1)),ns=a(()=>t("option",{value:5},"酒食",-1)),ds=a(()=>t("option",{value:6},"蔬菜",-1)),ls=a(()=>t("option",{value:7},"經典",-1)),cs=[os,es,as,is,ns,ds,ls],rs={class:"modal-footer border-0"},bs=a(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1)),ps={key:1,class:"main"},ms={class:"container mt-5"},_s={class:"mt-2"},us={class:"row justify-content-end"},hs={class:"col-2"},gs={class:"row row-cols-4 mb-4"},ys={class:"card my-3 bg-light"},vs={class:"cardbody"},fs={class:"text-center mt-3"},xs={class:"row text-center align-items-center py-3"},ks={class:"col-6"},Ps=["data-bs-target"],ws={class:"col-6"},Fs=["data-bs-target"],Us=["id"],Vs={class:"modal-dialog"},Cs={class:"modal-content border-0"},Is=a(()=>t("div",{class:"modal-body fs-3"}," 是否上架產品? ",-1)),Ls={class:"modal-footer border-0"},js=a(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)),Bs=["onClick"],Ts=["id"],Ds={class:"modal-dialog"},Ns={class:"modal-content border-0"},Ms=a(()=>t("div",{class:"modal-body fs-3"}," 是否刪除產品? ",-1)),Ss={class:"modal-footer border-0"},Es=a(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)),Rs=["onClick"],qs={class:"d-flex justify-content-center h-25"},zs=["disabled"],As={class:"fs-3 text-primary mx-3"},Gs=["disabled"];function Hs(i,s,f,x,e,n){const v=k("BackendFunctions"),h=k("select-list");return r(),b("div",N,[t("aside",M,[s[0]||(m(-1),s[0]=g(v),m(1),s[0])]),g(j,{name:"fade",mode:"out-in"},{default:C(()=>[e.select==1?(r(),b("main",S,[t("div",E,[t("div",R,[t("div",q,[z,t("div",A,[t("ul",G,[t("li",H,[d(t("input",{type:"radio",class:"btn-check",name:"options",id:"option1",value:1,"onUpdate:modelValue":s[1]||(s[1]=o=>e.category=o)},null,512),[[p,e.category]]),J]),t("li",K,[d(t("input",{type:"radio",class:"btn-check",name:"options",id:"option2",value:2,"onUpdate:modelValue":s[2]||(s[2]=o=>e.category=o)},null,512),[[p,e.category]]),O]),t("li",Q,[d(t("input",{type:"radio",class:"btn-check",name:"options",id:"option3",value:3,"onUpdate:modelValue":s[3]||(s[3]=o=>e.category=o)},null,512),[[p,e.category]]),W]),t("li",X,[d(t("input",{type:"radio",class:"btn-check",name:"options",id:"option4",value:4,"onUpdate:modelValue":s[4]||(s[4]=o=>e.category=o)},null,512),[[p,e.category]]),Y]),t("li",Z,[d(t("input",{type:"radio",class:"btn-check",name:"options",id:"option5",value:5,"onUpdate:modelValue":s[5]||(s[5]=o=>e.category=o)},null,512),[[p,e.category]]),$]),t("li",tt,[d(t("input",{type:"radio",class:"btn-check",name:"options",id:"option6",value:6,"onUpdate:modelValue":s[6]||(s[6]=o=>e.category=o)},null,512),[[p,e.category]]),st]),t("li",ot,[d(t("input",{type:"radio",class:"btn-check",name:"options",id:"option7",value:7,"onUpdate:modelValue":s[7]||(s[7]=o=>e.category=o)},null,512),[[p,e.category]]),et])])]),t("div",at,[s[8]||(m(-1),s[8]=g(h,{options:e.options,onUpdata:n.get},null,8,["options","onUpdata"]),m(1),s[8])])])]),t("div",it,[(r(!0),b(P,null,w(n.categoryProduct,(o,l)=>(r(),b("div",{class:"col",key:l},[t("div",nt,[t("div",dt,[t("h4",lt,u(o.title),1),t("div",ct,[rt,t("div",bt,[d(t("input",{"onUpdate:modelValue":c=>o.money=c,type:"number",id:"money",class:"form-control shadow-none",placeholder:o.money},null,8,pt),[[_,o.money]])]),mt,t("div",_t,[d(t("input",{"onUpdate:modelValue":c=>o.count=c,type:"number",id:"count",class:"form-control shadow-none",placeholder:o.count},null,8,ut),[[_,o.count]])])]),t("div",ht,[t("div",gt,[t("button",{type:"button",class:"btn btn-danger ms-6","data-bs-toggle":"modal","data-bs-target":"#goDown"+l},"下架",8,yt)]),t("div",vt,[t("button",{type:"button",class:"btn btn-primary me-6","data-bs-toggle":"modal","data-bs-target":"#updatePrice"+l},"修改",8,ft)])])])]),t("div",{class:"modal fade",id:"goDown"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[y("0 "),t("div",kt,[t("div",Pt,[wt,t("div",Ft,[Ut,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:c=>n.goDown(o.id)},"確認",8,Vt)])])])],8,xt),t("div",{class:"modal fade",id:"updatePrice"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[y("0 "),t("div",It,[t("div",Lt,[t("div",jt," 是否修改 "+u(o.title)+" 產品價錢? ",1),t("div",Bt,[Tt,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:c=>n.update(o.id,o.money,o.count,o.title)},"確認",8,Dt)])])])],8,Ct)]))),128))]),t("div",Nt,[t("button",{class:"btn btn-primary",onClick:s[9]||(s[9]=(...o)=>n.prevPage&&n.prevPage(...o)),disabled:e.page===1},"上一页",8,Mt),t("strong",St,u(e.page),1),t("button",{class:"btn btn-primary",onClick:s[10]||(s[10]=(...o)=>n.nextPage&&n.nextPage(...o)),disabled:e.thisPage.length<e.pg},"下一页",8,Et)])]),t("div",Rt,[t("div",qt,[t("div",zt,[At,t("div",Gt,[t("form",null,[t("div",Ht,[t("div",Jt,[t("div",Kt,[t("input",{class:"form-control w-50",type:"file",id:"formFile",onChange:s[11]||(s[11]=(...o)=>n.uploadFile&&n.uploadFile(...o))},null,32)]),t("div",Ot,[Qt,d(t("input",{type:"text",id:"title",placeholder:"牛肉",class:"form-control border-1 shadow-none w-50","onUpdate:modelValue":s[12]||(s[12]=o=>e.dataForm.productName=o)},null,512),[[_,e.dataForm.productName]])]),t("div",Wt,[Xt,d(t("input",{type:"text",id:"price",placeholder:"100",class:"form-control border-1 shadow-none w-50","onUpdate:modelValue":s[13]||(s[13]=o=>e.dataForm.price=o)},null,512),[[_,e.dataForm.price]])]),t("div",Yt,[Zt,d(t("input",{type:"text",id:"count",placeholder:"100",class:"form-control border-1 shadow-none w-50","onUpdate:modelValue":s[14]||(s[14]=o=>e.dataForm.count=o)},null,512),[[_,e.dataForm.count]])]),t("div",$t,[ts,d(t("input",{type:"text",id:"description",placeholder:"多汁",class:"form-control border-1 shadow-none w-50","onUpdate:modelValue":s[15]||(s[15]=o=>e.dataForm.description=o)},null,512),[[_,e.dataForm.description]])]),t("div",ss,[d(t("select",{class:"form-select w-50 shadow-none","aria-label":"Default select example","onUpdate:modelValue":s[16]||(s[16]=o=>e.dataForm.category=o)},cs,512),[[I,e.dataForm.category]])])])])])]),t("div",rs,[bs,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:s[17]||(s[17]=o=>n.pushData())},"新增")])])])])])):e.select==2?(r(),b("main",ps,[t("div",ms,[t("div",_s,[t("div",us,[t("div",hs,[s[18]||(m(-1),s[18]=g(h,{options:e.options2,onUpdata:n.get},null,8,["options","onUpdata"]),m(1),s[18])])])]),t("div",gs,[(r(!0),b(P,null,w(e.thisPage2,(o,l)=>(r(),b("div",{class:"col px-2",key:l},[t("div",ys,[t("div",vs,[t("h4",fs,u(o.title),1),t("div",xs,[t("div",ks,[t("button",{type:"button",class:"btn btn-primary ms-6","data-bs-toggle":"modal","data-bs-target":"#goon"+l},"上架",8,Ps)]),t("div",ws,[t("button",{type:"button",class:"btn btn-danger me-6","data-bs-toggle":"modal","data-bs-target":"#del"+l},"刪除",8,Fs)])])])]),t("div",{class:"modal fade",id:"goon"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[y("0 "),t("div",Vs,[t("div",Cs,[Is,t("div",Ls,[js,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:c=>n.goon(o.id)},"確認",8,Bs)])])])],8,Us),t("div",{class:"modal fade",id:"del"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[y("0 "),t("div",Ds,[t("div",Ns,[Ms,t("div",Ss,[Es,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:c=>n.del(o.id)},"確認",8,Rs)])])])],8,Ts)]))),128))]),t("div",qs,[t("button",{class:"btn btn-primary",onClick:s[19]||(s[19]=(...o)=>n.prevPage&&n.prevPage(...o)),disabled:e.page===1},"上一页",8,zs),t("strong",As,u(e.page),1),t("button",{class:"btn btn-primary",onClick:s[20]||(s[20]=(...o)=>n.nextPage&&n.nextPage(...o)),disabled:e.thisPage.length<e.pg},"下一页",8,Gs)])])])):L("",!0)]),_:1})])}const Qs=V(D,[["render",Hs],["__scopeId","data-v-b346febd"]]);export{Qs as default};
