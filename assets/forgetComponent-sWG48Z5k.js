import{_ as d,c,a as s,w as l,v as u,b as h,d as m,F as p,r as f,o as w,e as _,p as b,f as k}from"./index-OLdlyzsC.js";const x={data(){return{useGetPassword:""}},methods:{forgetPassword(){this.$axios.get(`/users/?email=${this.useGetPassword}`).then(e=>{this.socket.send(JSON.stringify({email:this.useGetPassword,ubPassword:e.data[0].copyPassword}))}).catch(()=>{this.$swal({icon:"error",title:"查無郵件",text:"請重新輸入",timer:3e3})})},handleMessage(e){e.data.includes("OK")?this.$swal({icon:"success",title:"密碼找回信件已寄出",text:"請察看信箱",timer:3e3}).then(()=>{this.$router.push("/")}):this.$swal({icon:"error",title:"寄信失敗",text:"請稍後再試",timer:3e3}).then(()=>{this.$router.push("/")})}},computed:{findBtn(){return this.useGetPassword.trim()===""}},mounted(){const e="wss://mumuyuanserver.onrender.com/ws";this.socket=new WebSocket(e),this.socket.onopen=()=>{console.log("WebSocket connection opened")},this.socket.addEventListener("message",this.handleMessage)},beforeUnmount(){this.socket&&this.socket.close()}},a=e=>(b("data-v-4d517871"),e=e(),k(),e),g={class:"mb-4"},P=a(()=>s("label",{for:"mumuyuanPhone",class:"form-label fw-bolder fs-5"},"帳號",-1)),v=["disabled"],y={class:"text-center"},S=a(()=>s("span",{class:"text-center fs-6"},"已經有會員了?",-1));function G(e,t,$,B,r,o){const i=f("router-link");return w(),c(p,null,[s("div",g,[P,l(s("input",{type:"email",class:"form-control",id:"mumuyuanPhone",placeholder:"請輸入帳號","onUpdate:modelValue":t[0]||(t[0]=n=>r.useGetPassword=n)},null,512),[[u,r.useGetPassword]])]),s("button",{type:"type",class:"btn btn-dark d-block mx-auto w-100 pt-2 mb-3",onClick:t[1]||(t[1]=(...n)=>o.forgetPassword&&o.forgetPassword(...n)),disabled:o.findBtn}," 找回 ",8,v),s("div",y,[S,h(i,{to:"/login",class:"signin mx-2 text-decoration-none"},{default:m(()=>[_("登入")]),_:1})])],64)}const I=d(x,[["render",G],["__scopeId","data-v-4d517871"]]);export{I as default};
