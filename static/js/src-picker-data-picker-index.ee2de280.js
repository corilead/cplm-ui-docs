(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"./src/picker/DataPicker/index.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=a("react"),o=a.n(r),l=a("./node_modules/@mdx-js/react/dist/esm.js"),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=a("./node_modules/antd/es/divider/index.js"),s=a("./src/picker/DataPicker/index.tsx"),d=(a("./node_modules/antd/dist/antd.css"),function(e){var t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],l=a[1];return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("a",{onClick:function(){l(!0)}},"\u6253\u5f00\u6570\u636e\u9009\u62e9\u5668"),o.a.createElement(c.a,{type:"vertical"}),o.a.createElement("a",{onClick:function(){l(!1)}},"\u5173\u95ed\u6570\u636e\u9009\u62e9\u5668"),o.a.createElement(s.a,{visible:n,title:"\u641c\u7d22\u6570\u636e",multi:!0,onOk:function(e){l(!1)},onCancel:function(){l(!1)}}))});d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DataPickerDemo",filename:"demo\\DataPicker.tsx"}});var u={};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"demo"},"Demo"),Object(l.b)(d,{mdxType:"DataPickerDemo"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\picker\\DataPicker\\index.mdx"}}),m.isMDXComponent=!0},"./src/picker/DataPicker/index.tsx":function(e,t,a){"use strict";var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),r=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),l=a.n(o),i=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),c=a("react"),s=a.n(c),d=a("./node_modules/@ag-grid-community/react/main.js"),u=a("./node_modules/@ag-grid-enterprise/all-modules/dist/es6/main.js"),m=(a("./node_modules/@ag-grid-community/all-modules/dist/styles/ag-grid.css"),a("./node_modules/@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css"),a("./node_modules/@ant-design/icons/es/icons/SearchOutlined.js")),p=a("./node_modules/@ant-design/icons/es/icons/ReloadOutlined.js"),b=a("./node_modules/@ant-design/icons/es/icons/CaretUpOutlined.js"),f=a("./node_modules/antd/es/tree-select/index.js"),h=a("./node_modules/antd/es/layout/index.js"),v=a("./node_modules/antd/es/descriptions/index.js"),j=a("./node_modules/antd/es/input/index.js"),g=a("./node_modules/antd/es/date-picker/index.js"),y=a("./node_modules/antd/es/select/index.js"),k=a("./node_modules/antd/es/button/index.js"),O=a("./node_modules/antd/es/tooltip/index.js"),w=a("./node_modules/moment/moment.js"),C=a.n(w),E=a("./src/display/index.tsx"),S=a("./node_modules/qs/lib/index.js"),x=a("./node_modules/@cpdm/util/es/index.js"),_=sessionStorage.getItem("TEST_SVR")||"";function D(e){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(x.a)("".concat(_,"/plm/api/v2/cpdm/dict-entries?code=").concat(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P,N={searchDataFunc:function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(x.a)("".concat(_,"/plm/api/v2/cpdm/search").concat(Object(S.stringify)(t,{addQueryPrefix:!0}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loadCategoryTreeFunc:function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(x.a)("".concat(_,"/plm/api/v2/cpdm/categories/identifier")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loadSecretLevelDictFunc:function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D("SecretLevel"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loadPhaseMarkDictFunc:function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D("PhaseMark"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z={modules:u.a,columnDefs:[{field:"id",hide:!0},{field:"code",headerName:"\u7f16\u53f7",checkboxSelection:!0,headerCheckboxSelection:!0,pinned:"left",width:240},{field:"name",headerName:"\u540d\u79f0",width:160},{field:"version",headerName:"\u7248\u672c",width:70},{field:"lifecycleStateDisplay",headerName:"\u72b6\u6001"},{field:"repositoryName",headerName:"\u578b\u53f7"},{field:"modelSeries",headerName:"\u578b\u53f7\u7cfb\u5217"},{field:"modelCode",headerName:"\u578b\u53f7\u4ee3\u53f7"},{field:"secretLevelDisplay",headerName:"\u5bc6\u7ea7",width:70},{field:"phaseMarkDisplay",headerName:"\u7814\u5236\u9636\u6bb5"},{field:"modifierFullName",headerName:"\u4fee\u6539\u8005",width:80},{field:"modifyStamp",headerName:"\u4fee\u6539\u65f6\u95f4",cellRenderer:function(e){return C()(e.value).format("YYYY-MM-DD hh:mm")},width:135}],defaultColDef:{width:120,resizable:!0},rowModelType:"serverSide",cacheBlockSize:20},T={categories:[],code:void 0,name:void 0,repositoryName:void 0,modelCode:void 0,modelSeries:void 0,productCode:void 0,secretLevel:void 0,phaseMark:void 0,modifyStampStart:void 0,modifyStampEnd:void 0},L=function(e){var t,a,o=e.visible,w=e.title,S=e.onSearch,x=e.multi,_=e.categoryScope,D=e.defaultCategories,M=e.onOk,L=e.onCancel,R=e.confirmLoading,I=Object(c.useState)(T),A=Object(r.a)(I,2),F=A[0],Y=A[1],B=Object(c.useState)(!0),G=Object(r.a)(B,2),H=G[0],X=G[1],q=Object(c.useState)(!1),J=Object(r.a)(q,2),W=J[0],Q=J[1],U=Object(c.useState)([]),V=Object(r.a)(U,2),K=V[0],Z=V[1],$=Object(c.useState)([]),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ne=Object(c.useState)([]),re=Object(r.a)(ne,2),oe=re[0],le=re[1],ie=Object(c.useCallback)((function(){return P.setServerSideDatasource({getRows:(e=Object(i.a)(l.a.mark((function e(t){var a,r,o,i,c,s,d,u,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.request,r=a.startRow,o=a.endRow,i=o-r,c=Math.floor(r/i),s=N.searchDataFunc,!(d=S||s)){e.next=12;break}return F.categories&&F.categories.length?u=F.categories.join(","):D&&D.length?u=D.join(","):_&&_.length&&(u=_.join(",")),e.next=10,d(Object(n.a)(Object(n.a)({},F),{},{categories:u,page:c,size:i}));case 10:(m=e.sent).content&&Array.isArray(m.content)?t.successCallback(m.content,m.totalElements):t.failCallback();case 12:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})});var e}),[]),ce=Object(c.useCallback)((function(e){P=e.api,e.columnApi,ie()}),[]),se=Object(c.useCallback)((function(t){var a=t.api.getSelectedRows(),n=e.onSelect;n&&n(a)}),[]),de=Object(c.useCallback)((function(){P.deselectAll(),ie()}),[]),ue=Object(c.useCallback)((function(e,t){t&&t.target?F[e]=t.target.value:F[e]=t,Y(Object(n.a)({},F))}),[]),me=Object(c.useCallback)((function(e){F.modifyStampStart=null===e||void 0===e?void 0:e[0],F.modifyStampEnd=null===e||void 0===e?void 0:e[1],Y(Object(n.a)({},F))}),[]),pe=Object(c.useCallback)((function(){Y(T)}),[]),be=Object(c.useCallback)(Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=N.loadCategoryTreeFunc)){e.next=6;break}return e.next=4,t();case 4:a=e.sent,Z(a);case 6:case"end":return e.stop()}}),e)}))),[]),fe=Object(c.useCallback)(Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=N.loadSecretLevelDictFunc)){e.next=6;break}return e.next=4,t();case 4:(a=e.sent).SecretLevel&&le(a.SecretLevel);case 6:case"end":return e.stop()}}),e)}))),[]),he=Object(c.useCallback)(Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=N.loadPhaseMarkDictFunc)){e.next=6;break}return e.next=4,t();case 4:(a=e.sent).PhaseMark&&ae(a.PhaseMark);case 6:case"end":return e.stop()}}),e)}))),[]),ve=Object(c.useCallback)((function(e){return e.children?s.a.createElement(f.a.TreeNode,{value:e.id,title:e.name},e.children.map((function(e){return ve(e)}))):s.a.createElement(f.a.TreeNode,{value:e.id,title:e.name})}),[]);Object(c.useEffect)((function(){return be(),fe(),he(),ue("categories",D),function(){}}),[]),F.modifyStampStart&&(t=C()(F.modifyStampStart)),F.modifyStampEnd&&(a=C()(F.modifyStampEnd));var je=s.a.createElement("div",null,s.a.createElement("div",{style:{height:H?84:168,overflow:"hidden",position:"relative",marginBottom:6,transition:"all 0.3s"}},s.a.createElement(h.a,{style:{backgroundColor:"transparent"}},s.a.createElement(h.a.Content,null,s.a.createElement(v.a,{column:3},s.a.createElement(v.a.Item,{label:"\u7c7b\u3000\u3000\u578b",span:3},s.a.createElement(f.a,{showSearch:!0,style:{width:782},value:F.categories,dropdownStyle:{maxHeight:400,overflow:"auto"},size:"small",treeCheckable:!0,allowClear:!0,treeDefaultExpandAll:!0,onChange:function(e){ue("categories",e)}},ve(K||[]))),s.a.createElement(v.a.Item,{label:"\u7f16\u3000\u3000\u53f7"},s.a.createElement(j.a,{style:{width:200},size:"small",value:F.code,onChange:function(e){ue("code",e)}})),s.a.createElement(v.a.Item,{label:"\u540d\u3000\u3000\u79f0"},s.a.createElement(j.a,{style:{width:200},size:"small",value:F.name,onChange:function(e){ue("name",e)}})),s.a.createElement(v.a.Item,{label:"\u4fee\u6539\u65e5\u671f"},s.a.createElement(g.a.RangePicker,{size:"small",style:{width:200},format:"YYYY/MM/DD",value:[t,a],onChange:function(e,t){me(e)}})),s.a.createElement(v.a.Item,{label:"\u578b\u53f7\u540d\u79f0"},s.a.createElement(j.a,{style:{width:200},size:"small",value:F.repositoryName,onChange:function(e){ue("repositoryName",e)}})),s.a.createElement(v.a.Item,{label:"\u578b\u53f7\u4ee3\u53f7"},s.a.createElement(j.a,{style:{width:200},size:"small",value:F.modelCode,onChange:function(e){ue("modelCode",e)}})),s.a.createElement(v.a.Item,{label:"\u578b\u53f7\u7cfb\u5217"},s.a.createElement(j.a,{style:{width:200},size:"small",value:F.modelSeries,onChange:function(e){ue("modelSeries",e)}})),s.a.createElement(v.a.Item,{label:"\u4ea7\u54c1\u4ee3\u53f7"},s.a.createElement(j.a,{style:{width:200},size:"small",value:F.productCode,onChange:function(e){ue("productCode",e)}})),s.a.createElement(v.a.Item,{label:"\u5bc6\u3000\u3000\u7ea7"},s.a.createElement(y.a,{style:{width:200},size:"small",allowClear:!0,value:F.secretLevel,onChange:function(e){ue("secretLevel",e)}},oe.map((function(e){return s.a.createElement(y.a.Option,{key:e.id,value:e.value},e.name)})))),s.a.createElement(v.a.Item,{label:"\u7814\u5236\u9636\u6bb5"},s.a.createElement(y.a,{style:{width:200},size:"small",allowClear:!0,value:F.phaseMark,onChange:function(e){ue("phaseMark",e)}},te.map((function(e){return s.a.createElement(y.a.Option,{key:e.id,value:e.value},e.name)})))))),s.a.createElement(h.a.Sider,{theme:"light",width:125},s.a.createElement(k.a,{block:!0,style:{marginBottom:16,marginTop:1},icon:s.a.createElement(m.a,null),type:"primary",size:"small",onClick:de,disabled:R},"\u68c0\u7d22"),s.a.createElement(k.a,{block:!0,style:{marginBottom:16,marginTop:1},icon:s.a.createElement(p.a,null),size:"small",onClick:pe,disabled:R},"\u91cd\u7f6e"))),s.a.createElement(O.a,{title:H?"\u5c55\u5f00\u66f4\u591a\u68c0\u7d22\u6761\u4ef6":"\u6536\u8d77\u66f4\u591a\u68c0\u7d22\u6761\u4ef6"},s.a.createElement("div",{style:{position:"absolute",transform:H?"rotate(180deg)":"",lineHeight:0,overflow:"hidden",fontWeight:"bold",bottom:0,height:8,backgroundColor:W?"#ccc":"#eee",width:"100%",textAlign:"center",cursor:"pointer",transition:"background-color 0.3s"},onClick:function(){X(!H)},onMouseOver:function(){Q(!0)},onMouseLeave:function(){Q(!1)}},s.a.createElement(b.a,null)))),s.a.createElement("div",{id:"myGrid",className:"ag-theme-balham",style:{position:"relative",overflow:"hidden"}},s.a.createElement(d.AgGridReact,{modules:u.a,animateRows:!0,pagination:!0,onGridReady:ce,paginationPageSize:20,domLayout:"autoHeight",columnDefs:z.columnDefs,defaultColDef:z.defaultColDef,rowModelType:z.rowModelType,cacheBlockSize:z.cacheBlockSize,rowSelection:x?"multiple":"single",onSelectionChanged:se,suppressRowClickSelection:!0})));return s.a.createElement(E.f,{visible:o,confirmLoading:R,width:1024,title:w,bodyStyle:{padding:12},onOk:function(){var e=P.getSelectedRows();M(e)},onCancel:function(){L()}},je)};t.a=L,L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DataPicker",filename:"src\\picker\\DataPicker\\index.tsx"}})}}]);