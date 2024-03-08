import{_ as w,c as p,a as o,b as s,d as u,r as c,o as b,n as d,e as _}from"./index-OLdlyzsC.js";const y={data(){return{userInfo:{email:"",password:"",copyPassword:"",name:"",phone:"",identity:"user",point:0,coupon:[]},dbCheckPassword:!1,noUsed:!1,checkEmail:!0}},computed:{isSome(){return this.userInfo.password===this.userInfo.copyPassword},signinBtn(){return this.userInfo.email.trim()===""||this.userInfo.password.trim()===""||this.userInfo.copyPassword.trim()===""||this.userInfo.name.trim()===""||this.userInfo.phone.trim()===""||!this.isSome}},watch:{"userInfo.email"(t){this.$refs.formmail.validate("信箱",t).then(e=>{e.valid?this.checkEmail=!1:this.checkEmail=!0})}},methods:{startSignin(){this.$axios.get(`/users?email=${this.userInfo.email}`).then(t=>{t.data.length?this.$swal({icon:"warning",title:"已被註冊",text:"請重新輸入",timer:2e3}):this.noUsed=!this.noUsed})},finishSignin(){this.isSome&&this.$refs.form.validate().then(t=>{t.valid?this.$axios.post("/users",{...this.userInfo}).then(()=>{this.$swal({icon:"success",title:"成功註冊",text:"待跳轉至首頁",timer:2e3}).then(()=>{window.location.href="/mumuyuan/"})}):this.$swal({icon:"error",title:"註冊失敗",text:"請稍後再試",timer:2e3}).then(()=>{window.location.href="/mumuyuan/"})})}}},k={key:0},g={class:"mb-3",style:{"min-height":"95px"}},v=o("label",{for:"mumuyuanMail",class:"form-label fw-bolder fs-5"},"信箱",-1),V=["disabled"],I={key:1},x={class:"mb-1",style:{"min-height":"95px"}},P=o("label",{for:"mumuyuanPassword",class:"form-label fw-bolder fs-5 mb-0"},"密碼",-1),C={class:"mb-1",style:{"min-height":"95px"}},S=o("label",{for:"doubleCheck",class:"form-label fw-bolder fs-5 mb-0"},"密碼確認",-1),U={class:"mb-1",style:{"min-height":"95px"}},E=o("label",{for:"mumuyuanName",class:"form-label fw-bolder fs-5 mb-0"},"姓名",-1),q={class:"mb-3",style:{"min-height":"95px"}},B=o("label",{for:"mumuyuanPhone",class:"form-label fw-bolder fs-5 mb-0"},"手機",-1),N={class:"d-flex"},F=["disabled"];function M(t,e,z,T,l,a){const r=c("VField"),m=c("ErrorMessage"),f=c("VForm"),h=c("router-link");return l.noUsed?(b(),p("div",I,[s(f,{ref:"form"},{default:u(({errors:i})=>[o("div",x,[P,s(r,{id:"mumuyuanPassword",name:"密碼",type:"password",class:d(["form-control",{"is-invalid":i.密碼}]),modelValue:l.userInfo.password,"onUpdate:modelValue":e[2]||(e[2]=n=>l.userInfo.password=n),placeholder:"請輸入密碼",rules:"required|alpha_num"},null,8,["class","modelValue"]),s(m,{name:"密碼",class:"invalid-feedback"})]),o("div",C,[S,s(r,{id:"doubleCheck",name:"密碼確認",type:"password",class:d(["form-control",{"is-invalid":i.密碼確認}]),modelValue:l.userInfo.copyPassword,"onUpdate:modelValue":e[3]||(e[3]=n=>l.userInfo.copyPassword=n),placeholder:"請再次輸入密碼",rules:"required|confirmed:@密碼"},null,8,["class","modelValue"]),s(m,{name:"密碼確認",class:"invalid-feedback"})]),o("div",U,[E,s(r,{id:"mumuyuanName",name:"姓名",type:"text",class:d(["form-control",{"is-invalid":i.姓名}]),modelValue:l.userInfo.name,"onUpdate:modelValue":e[4]||(e[4]=n=>l.userInfo.name=n),placeholder:"請輸入姓名",rules:"required"},null,8,["class","modelValue"]),s(m,{name:"姓名",class:"invalid-feedback"})]),o("div",q,[B,s(r,{id:"mumuyuanPhone",name:"手機",type:"tel",class:d(["form-control",{"is-invalid":i.手機}]),modelValue:l.userInfo.phone,"onUpdate:modelValue":e[5]||(e[5]=n=>l.userInfo.phone=n),placeholder:"請輸入電話",rules:"required|min:10|numeric|max:10"},null,8,["class","modelValue"]),s(m,{name:"手機",class:"invalid-feedback"})]),o("div",N,[s(h,{to:"/login",class:"btn btn-light d-block me-2 w-50 pt-2 mb-3"},{default:u(()=>[_("取消")]),_:1}),o("button",{type:"button",class:"btn btn-dark d-block w-50 pt-2 mb-3",onClick:e[6]||(e[6]=(...n)=>a.finishSignin&&a.finishSignin(...n)),disabled:a.signinBtn}," 完成註冊 ",8,F)])]),_:1},512)])):(b(),p("div",k,[o("div",g,[s(f,{ref:"formmail"},{default:u(({errors:i})=>[v,s(r,{id:"mumuyuanMail",name:"信箱",type:"email",class:d(["form-control",{"is-invalid":i.信箱}]),modelValue:l.userInfo.email,"onUpdate:modelValue":e[0]||(e[0]=n=>l.userInfo.email=n),placeholder:"請輸入信箱",rules:"email|required"},null,8,["class","modelValue"]),s(m,{name:"信箱",class:"invalid-feedback"})]),_:1},512)]),o("button",{type:"type",class:"btn btn-dark d-block mx-auto w-100 pt-2 mb-3",onClick:e[1]||(e[1]=(...i)=>a.startSignin&&a.startSignin(...i)),disabled:l.checkEmail}," 註冊 ",8,V),s(h,{to:"/login",class:"btn btn-light d-block mx-auto w-100 pt-2 mb-3"},{default:u(()=>[_("返回")]),_:1})]))}const A=w(y,[["render",M]]);export{A as default};
