(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84007404"],{"365c":function(e,t,a){"use strict";var n=a("be3b"),i=a("99b1"),r=a.n(i),o={houser:function(e,t,a){return n["a"].get(r.a.HouseManagers,{page:e,limit:t,address_id:a})},audit:function(e,t){return n["a"].post(r.a.CheckManagers,{id:e,state:t})},addresses:function(e,t,a){return n["a"].get(r.a.Addresses,{page:e,limit:t,tissue_type:a})},rooms:function(e){return n["a"].post(r.a.Rooms,e)},gainRooms:function(e,t,a){return n["a"].get(r.a.Rooms,{page:e,limit:t,address_id:a})},delBuilding:function(e){return n["a"].del(r.a.DelBuilding,{id:e})},pushAddressFace:function(e){return n["a"].post(r.a.PushAddressFace,{address_id:e})},createAddress:function(e){return n["a"].post(r.a.CreateAddress,e)},gainAddress:function(e,t){return n["a"].get(r.a.GainAddress,{page:e,limit:t})},households:function(e,t,a,i,o,s,u,l){return n["a"].get(r.a.Households,{page:e,limit:t,user_id:a,address_id:i,type:o,state:s,room_id:u,name:l})},addressResidents:function(e,t,a,i){return n["a"].get(r.a.AddressResidents,{page:e,limit:t,address_id:a,type:i})},faceLogs:function(e,t,a){return n["a"].get(r.a.FaceLogs,{page:e,limit:t,face_id:a})},searchHousehold:function(e,t,a,i){return n["a"].get(r.a.Households,{page:e,limit:t,name:a,keyword:i})},delHousehold:function(e){return n["a"].del(r.a.Household,{id:e})},banners:function(e,t){return n["a"].get(r.a.Banners,{page:e,limit:t})},banner:function(e){return n["a"].post(r.a.Banner,e)},message:function(e){return n["a"].post(r.a.Message,e)},messages:function(e,t){return n["a"].get(r.a.Messages,{page:e,limit:t})},messageType:function(e){return n["a"].post(r.a.MessageType,e)},messageTypes:function(e,t){return n["a"].get(r.a.MessageTypes,{page:e,limit:t})},delDocumentType:function(e){return n["a"].del(r.a.DelDocumentType,{id:e})},documents:function(e,t){return n["a"].get(r.a.Documents,{page:e,limit:t})},delDocument:function(e){return n["a"].del(r.a.DelDocument,{id:e})},document:function(e){return n["a"].post(r.a.Document,e)},documentDel:function(e){return n["a"].del(r.a.DocumentDel,{id:e})},delBanner:function(e){return n["a"].del(r.a.DelBanner,{id:e})},role:function(e){return n["a"].post(r.a.Role,e)},getRole:function(e,t){return n["a"].get(r.a.Role,{page:e,limit:t})},delRole:function(e){return n["a"].del(r.a.Role,{id:e})},user:function(e){return n["a"].post(r.a.User,e)},users:function(e,t){return n["a"].get(r.a.Users,{page:e,limit:t})},delUser:function(e){return n["a"].del(r.a.User,{id:e})},areas:function(e,t,a){return n["a"].get(r.a.Areas,{page:e,limit:t,parent_id:a})},buys:function(e,t){return n["a"].get(r.a.Buys,{page:e,limit:t})},buy:function(e){return n["a"].post(r.a.Buy,e)},server:function(e,t,a,i,o){return n["a"].get(r.a.Server,{page:e,limit:t,product_id:a,keyword:i,areas_id:o})},setProduct:function(e){return n["a"].post(r.a.SetProduct,e)},userServes:function(e,t){return n["a"].get(r.a.UserServes,{user_id:e,face_id:t})},delServer:function(e){return n["a"].del(r.a.DelServer,{id:e})},dangerFace:function(e,t,a){return n["a"].get(r.a.DangerFace,{page:e,limit:t,address_id:a})},addDangerFace:function(e){return n["a"].post(r.a.DangerFace,e)},address:function(e,t,a){return n["a"].get(r.a.Address,{page:e,limit:t,area_id:a})},dangerLog:function(e,t,a){return n["a"].get(r.a.DangerLog,{page:e,limit:t,danger_id:a})},failFace:function(e){return n["a"].post(r.a.FailFace,{id:e})},pushFace:function(e){return n["a"].post(r.a.PushFace,{id:e})},statistics:function(e,t,a,i){return n["a"].get(r.a.Statistics,{page:e,limit:t,area_id:a,address_id:i})},visitors:function(e,t,a,i){return n["a"].get(r.a.Visitors,{page:e,limit:t,address_id:a,room_id:i})},matchFace:function(e){return n["a"].post(r.a.MatchFace,{user_id:e})},verifyPerson:function(e,t){return n["a"].post(r.a.VerifyPerson,{user_id:e,self:t})},creation:function(e){return n["a"].post(r.a.Creation,e)},userInfo:function(e){return n["a"].get(r.a.UserInfo,{name:e})},editFace:function(e,t){return n["a"].post(r.a.EditFace,{user_id:e,href:t})},getConfigs:function(){return n["a"].get(r.a.Configs)},delFaceSwitch:function(e){return n["a"].del(r.a.Configs,{id:e})},faceSwitch:function(e){return n["a"].post(r.a.Configs,e)},withdraws:function(e,t,a,i){return n["a"].get(r.a.Withdraws,{page:e,limit:t,name:a,keyword:i})},createRaw:function(e){return n["a"].post(r.a.CreateRaw,e)},withdraw:function(e){return n["a"].post(r.a.Withdraw,{id:e})},withdrawsRec:function(e,t,a,i){return n["a"].get(r.a.WithdrawsRec,{page:e,limit:t,user_id:a,address_id:i})},delWhite:function(e){return n["a"].del(r.a.DelWhite,{id:e})},rent:function(e,t,a,i){return n["a"].get(r.a.Households,{page:e,limit:t,address_id:a,type:i})},commission:function(e,t,a,i){return n["a"].get(r.a.Commission,{page:e,limit:t,name:a,keyword:i})},createCommission:function(e){return n["a"].post(r.a.CreateCommission,e)},notCommission:function(e){return n["a"].get(r.a.NotCommission,{area_id:e})},commissionRec:function(e,t,a){return n["a"].get(r.a.CommissionRec,{page:e,limit:t,address_id:a})},commissionRecord:function(e,t,a){return n["a"].get(r.a.CommissionRecord,{page:e,limit:t,address_id:a})},delCommission:function(e){return n["a"].del(r.a.DelCommission,{id:e})},payCommission:function(e){return n["a"].post(r.a.PayCommission,{address_id:e})}};t["a"]=o},"5f7b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[a("div",{staticClass:"handle-box"},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-circle-plus-outline"},on:{click:e.addSwitch}},[e._v("添加开关信息")])],1)]),a("el-dialog",{attrs:{title:"添加开关信息",visible:e.dialogSwitch,width:"50%"},on:{"update:visible":function(t){e.dialogSwitch=t}}},[a("div",{staticClass:"box"},[a("el-form",{attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"开关名称"}},[a("el-input",{model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),a("el-form-item",{attrs:{label:"版本"}},[a("el-input",{model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),a("el-form-item",{attrs:{label:"开关值"}},[a("el-input",{model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1),a("div",{staticClass:"submit"},[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.newSwitch}},[e._v("提交")])],1)],1)],1)],1)]),a("el-table",{attrs:{data:e.tableData,border:"","header-cell-style":{background:"#f0f0f0"},"max-height":"620"}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"config_key",label:"开关名称"}}),a("el-table-column",{attrs:{prop:"version",label:"版本"}}),a("el-table-column",{attrs:{prop:"config_value",label:"开关值"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleDel(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("el-dialog",{attrs:{visible:e.dialogDel,title:"删除版本",width:"20%",align:"center","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogDel=t}}},[a("div",{staticStyle:{"font-size":"20px","margin-bottom":"30px"}},[e._v("是否删除该版本")]),a("span",[a("el-button",{attrs:{type:"primary"},on:{click:e.toDel}},[e._v("删除")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogDel=!1}}},[e._v("取消")])],1)])],1)},i=[],r=a("365c"),o={name:"gradems",data:function(){return{loading:!0,dialogSwitch:!1,dialogDel:!1,form:{key:"",version:"",value:"",id:""},tableData:[],id:""}},mounted:function(){this.getSwitch()},methods:{getSwitch:function(){var e=this,t=this;r["a"].getConfigs().then((function(e){t.loading=!1,t.tableData=e,t.total=e.total})).catch((function(t){e.loading=!1}))},addSwitch:function(){var e=this;e.dialogSwitch=!0,e.form={key:"",version:"",value:"",id:""}},newSwitch:function(){var e=this;r["a"].faceSwitch(e.form).then((function(t){e.dialogSwitch=!1,e.$message.success("提交成功"),e.getSwitch(),e.current=1,e.form={}})).catch((function(t){e.dialogSwitch=!1}))},handleDel:function(e,t){var a=this;console.log(t),a.id=t.id,a.dialogDel=!0},toDel:function(){var e=this;r["a"].delFaceSwitch(e.id).then((function(t){e.dialogDel=!1,e.$message.success("删除成功"),e.getSwitch()})).catch((function(t){e.loading=!1}))},handleEdit:function(e,t){var a=this;console.log(t),a.dialogSwitch=!0,a.form={key:t.config_key,version:t.version,value:t.config_value,id:t.id}}}},s=o,u=a("2877"),l=Object(u["a"])(s,n,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-84007404.fbf7c352.js.map