import{_ as m,g as u,c as h,a as s,w as i,v as c,t as f,F as w,o as p,p as _,f as b}from"./index-OLdlyzsC.js";const I={data(){return{currentPassword:"",userInfo:{email:"",password:"",copyPassword:"",newPassword:"",dbCheckPassword:"",name:"",phone:"",coupon:"",identity:"",point:0,id:0}}},created(){const l=u.getItem("id");this.$axios.get(`/users?id=${l}`).then(o=>{o.status===200&&(this.userInfo={...o.data[0],newPassword:"",dbCheckPassword:""})}).catch(o=>{console.log(o)})},computed:{checkEmpty(){return this.userInfo.name.trim()===""||this.userInfo.phone.trim()===""||this.userInfo.email.trim()===""},checkPasswordEmpty(){return!!(this.userInfo.newPassword.trim()!==this.userInfo.dbCheckPassword.trim()||this.userInfo.newPassword.trim()===""||this.userInfo.dbCheckPassword.trim()==="")},checkCurrentPassword(){return this.currentPassword.trim("")!==this.userInfo.copyPassword}},methods:{setUserInfo(){const{name:l,phone:o,email:d}=this.userInfo;this.$axios.patch(`/users/${this.userInfo.id}`,{name:l,phone:o,email:d}).then(a=>{a.status===200&&this.$swal({icon:"success",title:"更新成功",text:"請確認更新資訊",timer:2e3})}).catch(()=>{this.$swal({icon:"error",title:"更新失敗",text:"請稍後再試",timer:2e3})})},setNewPassword(){if(this.checkCurrentPassword){this.$swal({icon:"error",title:"當前密碼錯誤",text:"請重新輸入"});return}this.$axios.patch(`/users/${this.userInfo.id}`,{password:this.userInfo.newPassword,copyPassword:this.userInfo.newPassword}).then(l=>{l.status===200&&this.$swal({icon:"success",title:"更新成功",text:"請確認更新資訊",timer:2e3}).then(()=>{this.userInfo.copyPassword=this.userInfo.newPassword,this.userInfo.newPassword="",this.userInfo.dbCheckPassword=""})}).catch(()=>{this.$swal({icon:"error",title:"更新失敗",text:"請稍後再試",timer:2e3})})}}},t=l=>(_("data-v-31d96c9b"),l=l(),b(),l),P=t(()=>s("h3",{class:"text-center text-dark",style:{"font-weight":"600","letter-spacing":"2px"}},"會員中心",-1)),y=t(()=>s("hr",null,null,-1)),v={class:"row justify-content-center membercenter"},x={class:"col-10 col-md-8 mb-4"},k=t(()=>s("h5",{class:"text-primary fw-bolder",style:{"letter-spacing":"1px"}},"基本資料",-1)),g=t(()=>s("hr",null,null,-1)),C={class:"mb-3 row"},U=t(()=>s("label",{for:"name",class:"col-md-4 col-form-label"},"姓名：",-1)),V={class:"col-md-8"},S={class:"mb-3 row"},E=t(()=>s("label",{for:"phone",class:"col-md-4 col-form-label"},"手機：",-1)),N={class:"col-md-8"},j={class:"mb-3 row"},B=t(()=>s("label",{for:"email",class:"col-md-4 col-form-label"},"信箱：",-1)),q={class:"col-md-8"},D={class:"mb-3 row"},F=t(()=>s("label",{for:"email",class:"col-md-4 col-sm-3 col-4 col-form-label"},"會員點數：",-1)),M={class:"col-md-8 col-sm-9 col-8"},T={class:"mt-2"},z=t(()=>s("span",{class:"questionIcon ms-3 bi-question-circle-fill","data-bs-toggle":"tooltip","data-bs-placement":"right",title:"每消費100元集一點，用於優惠券兌換。"},null,-1)),A={class:"buttonSave d-flex justify-content-center"},G=["disabled"],H={class:"col-10 col-md-8 mb-4"},J=t(()=>s("h5",{class:"text-primary fw-bolder",style:{"letter-spacing":"1px"}},"修改密碼",-1)),K=t(()=>s("hr",null,null,-1)),L={class:"mb-3 row"},O=t(()=>s("label",{for:"name",class:"col-md-4 col-form-label"},"目前密碼：",-1)),Q={class:"col-md-8"},R={class:"mb-3 row"},W=t(()=>s("label",{for:"phone",class:"col-md-4 col-form-label"},"新密碼：",-1)),X={class:"col-md-8"},Y={class:"mb-3 row"},Z=t(()=>s("label",{for:"name",class:"col-md-4 col-form-label"},"重新輸入新密碼：",-1)),$={class:"col-md-8"},ss={class:"buttonSave d-flex justify-content-center"},os=["disabled"];function es(l,o,d,a,r,n){return p(),h(w,null,[P,y,s("div",v,[s("div",x,[k,g,s("div",C,[U,s("div",V,[i(s("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":o[0]||(o[0]=e=>r.userInfo.name=e)},null,512),[[c,r.userInfo.name]])])]),s("div",S,[E,s("div",N,[i(s("input",{type:"text",class:"form-control",id:"phone","onUpdate:modelValue":o[1]||(o[1]=e=>r.userInfo.phone=e),readonly:""},null,512),[[c,r.userInfo.phone]])])]),s("div",j,[B,s("div",q,[i(s("input",{type:"text",class:"form-control",id:"email","onUpdate:modelValue":o[2]||(o[2]=e=>r.userInfo.email=e),readonly:""},null,512),[[c,r.userInfo.email]])])]),s("div",D,[F,s("div",M,[s("p",T,[s("span",null,f(r.userInfo.point),1),z])])]),s("div",A,[s("button",{class:"btn btn-primary",type:"button",onClick:o[3]||(o[3]=(...e)=>n.setUserInfo&&n.setUserInfo(...e)),disabled:n.checkEmpty},"儲存",8,G)])]),s("div",H,[J,K,s("div",L,[O,s("div",Q,[i(s("input",{type:"text",class:"m-0 form-control","onUpdate:modelValue":o[4]||(o[4]=e=>r.currentPassword=e)},null,512),[[c,r.currentPassword]])])]),s("div",R,[W,s("div",X,[i(s("input",{type:"password",class:"form-control",id:"newPassword","onUpdate:modelValue":o[5]||(o[5]=e=>r.userInfo.newPassword=e)},null,512),[[c,r.userInfo.newPassword]])])]),s("div",Y,[Z,s("div",$,[i(s("input",{type:"password",class:"form-control",id:"rePassword","onUpdate:modelValue":o[6]||(o[6]=e=>r.userInfo.dbCheckPassword=e)},null,512),[[c,r.userInfo.dbCheckPassword]])])]),s("div",ss,[s("button",{class:"btn btn-primary",type:"button",onClick:o[7]||(o[7]=(...e)=>n.setNewPassword&&n.setNewPassword(...e)),disabled:n.checkPasswordEmpty},"更改密碼",8,os)])])])],64)}const rs=m(I,[["render",es],["__scopeId","data-v-31d96c9b"]]);export{rs as default};
