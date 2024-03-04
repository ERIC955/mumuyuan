import{_ as S,i as x,j as E,o as h,c as u,g as B,a as s,t as a,k,s as p,l as f,m as F,F as g,e,r as y,T as I,p as N,b as $}from"./index-ac_Ed_F9.js";import{B as O}from"./BackendFunctions-eJ8K0Hdf.js";import{s as W}from"./selectList-ASKdOSw2.js";const M={name:"WebSocketExample",setup(){const c=x(!1),n=x(""),t=new WebSocket("ws://localhost:3000");return t.onopen=()=>{c.value=!0},t.onmessage=_=>{n.value=_.data},t.onclose=()=>{c.value=!1},E(()=>()=>{t.close()}),{connected:c,message:n}}},T={key:0};function j(c,n,t,_,i,r){return h(),u("div",null,[_.connected?(h(),u("p",T,"WebSocket connected")):B("",!0),s("p",null,a(_.message),1)])}const L=S(M,[["render",j],["__scopeId","data-v-50479396"]]),U={components:{BackendFunctions:O,selectList:W,WebSocketExample:L},data(){return{order:[],finishorder:[],select:"1",options:[{value:"1",label:"待確認訂單"},{value:"2",label:"待完成訂單"}],options2:[{value:"2",label:"待完成訂單"},{value:"1",label:"待確認訂單"}],socket:null,messages:[]}},computed:{},methods:{ok(c,n,t){const _={status:2},i={userId:n,orderId:c},r=2;this.$axios.post("notice",i),this.$axios.patch(`/orders/${c}`,_),location.reload(),this.socket.send(JSON.stringify({data:r,id:t,userId:n}))},reject(c){this.$axios.delete(`/orders/${c}`),location.reload()},get(c){this.select=c},pushForCustomer(c,n,t){const _={status:3},i=3;this.$axios.patch(`/orders/${c}`,_),location.reload(),this.socket.send(JSON.stringify({data:i,id:t,userId:n}))}},mounted(){this.$axios.get("/orders").then(n=>{n.data.forEach(t=>{const _=[];let i="",r="";t.product.forEach(m=>{_.push(m.productName+"X"+m.quantity)}),t.flavor==1?i="梅粉":t.flavor==2?i="秘粉":t.flavor==3&&(i="椒鹽"),t.spicy==1?r="不辣":t.spicy==2?r="小辣":t.spicy==3&&(r="大辣"),t.status==1?this.order.push({name:t.name,phone:t.phone,tableware:t.tableware,bags:t.bags,way:t.type,time:t.pickTime,payment:t.payment,remark:t.comment,total:t.price,product:_,flavor:i,spicy:r,day:t.day,id:t.id,orderNum:t.orderid,status:t.status,isMember:t.isMember,userId:t.userId,orderScore:t.orderScore}):t.status==2&&this.finishorder.push({name:t.name,phone:t.phone,tableware:t.tableware,bags:t.bags,way:t.type,time:t.pickTime,payment:t.payment,remark:t.comment,total:t.price,product:_,flavor:i,spicy:r,day:t.day,id:t.id,orderNum:t.orderid,status:t.status,isMember:t.isMember,userId:t.userId,orderScore:t.orderScore})})});const c="wss://mumuyuanserver.onrender.com/ws";this.socket=new WebSocket(c),this.socket.onopen=()=>{console.log("WebSocket connection opened")}},beforeUnmount(){this.socket&&this.socket.close()}},d=c=>(N("data-v-90d2f5ea"),c=c(),$(),c),V={class:"d-flex"},D={class:"sidebar border-5 border-end d-flex bg-secondary flex-column"},J={key:0,class:"main container"},q={class:"w-25 mt-5"},X={class:"card-body"},z=["id"],A={class:"accordion-item"},G=["id"],H=["data-bs-target","aria-controls"],K={class:"me-5 fs-4"},P={class:"ms-5 mt-11 fs-4"},Q={class:"ms-5 mt-11 fs-4"},R=["id","aria-labelledby","data-bs-parent"],Y={class:"accordion-body"},Z={class:"row row-cols-2"},ss={class:"col d-flex flex-wrap h-25"},ts={class:"row text-center h-25 w-100"},os={class:"col"},as={class:"table table-striped align-middle table-sm h-100"},ds={class:"fs-5"},es=d(()=>s("strong",null,"口味:",-1)),cs={class:"fs-5"},ns=d(()=>s("strong",null,"辣度:",-1)),ls={class:"fs-5"},is=d(()=>s("strong",null,"是否要餐具:",-1)),rs={class:"fs-5"},_s=d(()=>s("strong",null,"是否要加購提袋:",-1)),hs={class:"fs-5"},us=d(()=>s("strong",null,"訂購方式:",-1)),bs={class:"fs-5"},ps=d(()=>s("strong",null,"預計取餐時間:",-1)),fs={class:"text-danger"},ms={class:"fs-5"},gs=d(()=>s("strong",null,"付款方式:",-1)),ys={class:"fs-5"},vs=d(()=>s("strong",null,"總金額:",-1)),ks={class:"fs-5"},ws=d(()=>s("strong",null,"備註:",-1)),xs=["data-bs-target"],Ss=["data-bs-target"],Bs=["id"],Cs={class:"modal-dialog"},Es={class:"modal-content border-0"},Fs=d(()=>s("div",{class:"modal-body fs-3"}," 是否接受訂單? ",-1)),Is={class:"modal-footer border-0"},Ns=d(()=>s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)),$s=["onClick"],Os=["id"],Ws={class:"modal-dialog"},Ms={class:"modal-content border-0"},Ts=d(()=>s("div",{class:"modal-body fs-3"}," 是否拒絕訂單? ",-1)),js={class:"modal-footer border-0"},Ls=d(()=>s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)),Us=["onClick"],Vs={key:1,class:"main container"},Ds={class:"w-25 mt-5"},Js={class:"card-body"},qs={class:"accordion accordion-flush",id:"accordionFlushExample"},Xs={class:"accordion-item"},zs=["id"],As=["data-bs-target"],Gs={class:"me-5 fs-4"},Hs={class:"ms-5 mt-11 fs-4"},Ks=["id","aria-labelledby"],Ps={class:"accordion-body"},Qs={class:"row row-cols-2"},Rs={class:"col d-flex flex-wrap h-25"},Ys={class:"row row-cols-4 text-center h-25 w-100"},Zs={class:"col"},st={class:"table table-striped align-middle table-sm h-100"},tt={class:"fs-5"},ot=d(()=>s("strong",null,"口味:",-1)),at={class:"fs-5"},dt=d(()=>s("strong",null,"辣度:",-1)),et={class:"fs-5"},ct=d(()=>s("strong",null,"是否要餐具:",-1)),nt={class:"fs-5"},lt=d(()=>s("strong",null,"是否要加購提袋:",-1)),it={class:"fs-5"},rt=d(()=>s("strong",null,"訂購方式:",-1)),_t={class:"fs-5"},ht=d(()=>s("strong",null,"預計取餐時間:",-1)),ut={class:"text-danger"},bt={class:"fs-5"},pt=d(()=>s("strong",null,"付款方式:",-1)),ft={class:"fs-5"},mt=d(()=>s("strong",null,"總金額:",-1)),gt={class:"fs-5"},yt=d(()=>s("strong",null,"備註:",-1)),vt=["data-bs-target"],kt=["id"],wt={class:"modal-dialog"},xt={class:"modal-content border-0"},St=d(()=>s("div",{class:"modal-body fs-3"}," 是否完成訂單? ",-1)),Bt={class:"modal-footer border-0"},Ct=d(()=>s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1)),Et=["onClick"];function Ft(c,n,t,_,i,r){const m=k("BackendFunctions"),C=k("WebSocketExample"),w=k("select-list");return h(),u("div",V,[s("aside",D,[n[0]||(p(-1),n[0]=f(m),p(1),n[0])]),f(I,{name:"fade",mode:"out-in"},{default:F(()=>[i.select==1?(h(),u("main",J,[f(C),s("div",q,[n[1]||(p(-1),n[1]=f(w,{options:i.options,onUpdata:r.get},null,8,["options","onUpdata"]),p(1),n[1])]),(h(!0),u(g,null,y(i.order,(o,l)=>(h(),u("div",{class:"card mt-2 shadow-sm w-100 mb-3",key:l},[s("div",X,[s("div",{class:"accordion accordion-flush",id:"accordionFlushExample"+l},[s("div",A,[s("h2",{class:"accordion-header",id:"flush-heading"+l},[s("button",{class:"accordion-button collapsed shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne"+l,"aria-expanded":"false","aria-controls":"flush-collapseOne"+l},[s("strong",K,a(o.name),1),e(),s("span",P,"手機:"+a(o.phone),1),s("span",Q,"日期:"+a(o.day),1)],8,H)],8,G),s("div",{id:"flush-collapseOne"+l,class:"accordion-collapse collapse","aria-labelledby":"flush-heading"+l,"data-bs-parent":"#accordionFlushExample"+l},[s("div",Y,[s("div",Z,[s("div",ss,[s("div",ts,[(h(!0),u(g,null,y(o.product,(b,v)=>(h(),u("div",{class:"col-4 fs-4 text-nowrap",key:v},a(b),1))),128))])]),s("div",os,[s("table",as,[s("tbody",null,[s("tr",null,[s("td",ds,[es,e(a(o.flavor),1)])]),s("tr",null,[s("td",cs,[ns,e(a(o.spicy),1)])]),s("tr",null,[s("td",ls,[is,e(a(o.tableware?"要":"不要"),1)])]),s("tr",null,[s("td",rs,[_s,e(a(o.bags?"要":"不要"),1)])]),s("tr",null,[s("td",hs,[us,e(a(o.way?"自取":"外送"),1)])]),s("tr",null,[s("td",bs,[ps,s("span",fs,a(o.time),1)])]),s("tr",null,[s("td",ms,[gs,e(a(o.payment?"現金":"線上付款"),1)])]),s("tr",null,[s("td",ys,[vs,e(a(o.total),1)])]),s("tr",null,[s("td",ks,[ws,e(a(o.remark),1)])])]),s("tfoot",null,[s("button",{type:"btn",class:"btn btn-primary w-100 mb-1","data-bs-toggle":"modal","data-bs-target":"#ok"+l},"接受",8,xs),s("button",{type:"btn",class:"btn btn-primary w-100 mt-1","data-bs-toggle":"modal","data-bs-target":"#reject"+l},"拒絕",8,Ss)])])])])])],8,R)])],8,z),s("div",{class:"modal fade",id:"ok"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[e("0 "),s("div",Cs,[s("div",Es,[Fs,s("div",Is,[Ns,s("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:b=>r.ok(o.id,o.userId,o.orderNum)},"確認",8,$s)])])])],8,Bs),s("div",{class:"modal fade",id:"reject"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[e("0 "),s("div",Ws,[s("div",Ms,[Ts,s("div",js,[Ls,s("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:b=>r.reject(o.id)},"確認",8,Us)])])])],8,Os)])]))),128))])):i.select==2?(h(),u("main",Vs,[s("div",Ds,[n[2]||(p(-1),n[2]=f(w,{options:i.options2,onUpdata:r.get},null,8,["options","onUpdata"]),p(1),n[2])]),(h(!0),u(g,null,y(i.finishorder,(o,l)=>(h(),u("div",{class:"card mt-2 shadow-sm w-100",key:l},[s("div",Js,[s("div",qs,[s("div",Xs,[s("h2",{class:"accordion-header",id:"flush-heading"+l},[s("button",{class:"accordion-button collapsed shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne"+l,"aria-expanded":"false","aria-controls":"flush-collapseOne"},[s("strong",Gs,a(o.name),1),e(),s("span",Hs,"手機:"+a(o.phone),1)],8,As)],8,zs),s("div",{id:"flush-collapseOne"+l,class:"accordion-collapse collapse","aria-labelledby":"flush-heading"+l,"data-bs-parent":"#accordionFlushExample"},[s("div",Ps,[s("div",Qs,[s("div",Rs,[s("div",Ys,[(h(!0),u(g,null,y(o.product,(b,v)=>(h(),u("div",{class:"col-4 fs-4 text-nowrap",key:v},a(b),1))),128))])]),s("div",Zs,[s("table",st,[s("tbody",null,[s("tr",null,[s("td",tt,[ot,e(a(o.flavor),1)])]),s("tr",null,[s("td",at,[dt,e(a(o.spicy),1)])]),s("tr",null,[s("td",et,[ct,e(a(o.tableware?"要":"不要"),1)])]),s("tr",null,[s("td",nt,[lt,e(a(o.bags?"要":"不要"),1)])]),s("tr",null,[s("td",it,[rt,e(a(o.way?"自取":"外送"),1)])]),s("tr",null,[s("td",_t,[ht,s("span",ut,a(o.time),1)])]),s("tr",null,[s("td",bt,[pt,e(a(o.payment?"現金":"線上付款"),1)])]),s("tr",null,[s("td",ft,[mt,e(a(o.total),1)])]),s("tr",null,[s("td",gt,[yt,e(a(o.remark),1)])])]),s("tfoot",null,[s("button",{type:"btn",class:"btn btn-primary w-100 mt-1","data-bs-toggle":"modal","data-bs-target":"#finish"+l},"完成",8,vt)])])])])])],8,Ks)])]),s("div",{class:"modal fade",id:"finish"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[e("0 "),s("div",wt,[s("div",xt,[St,s("div",Bt,[Ct,s("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:b=>r.pushForCustomer(o.id,o.userId,o.orderNum)},"確認",8,Et)])])])],8,kt)])]))),128))])):B("",!0)]),_:1})])}const Ot=S(U,[["render",Ft],["__scopeId","data-v-90d2f5ea"]]);export{Ot as default};
