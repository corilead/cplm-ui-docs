(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./src/index.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("react"),s=a.n(o),c=a("./node_modules/@mdx-js/react/dist/esm.js"),l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=a("./node_modules/umi-request/dist/index.es.js"),d=a("./node_modules/antd/es/message/index.js"),b=a("./node_modules/antd/es/card/index.js"),i=a("./node_modules/antd/es/form/index.js"),m=a("./node_modules/antd/es/input/index.js"),u=a("./node_modules/antd/es/button/index.js"),p=(a("./node_modules/antd/dist/antd.css"),function(e){var t=Object(o.useState)("http://cpdm.corilead.com"),a=Object(l.a)(t,2),n=a[0],c=a[1],p=Object(o.useState)("wdang@corilead"),j=Object(l.a)(p,2),O=j[0],g=j[1],f=Object(o.useState)("1"),_=Object(l.a)(f,2),h=_[0],x=_[1],w=Object(o.useState)(sessionStorage.getItem("token")),E=Object(l.a)(w,2),v=E[0],y=E[1];return s.a.createElement(b.a,{title:"\u6d4b\u8bd5\u767b\u5f55"},s.a.createElement(i.a,null,s.a.createElement(i.a.Item,{label:"\u670d\u52a1\u5668"},s.a.createElement(m.a,{value:n,onChange:function(e){c(e.target.value)}})),s.a.createElement(i.a.Item,{label:"\u7528\u6237\u540d",name:"username"},s.a.createElement(m.a,{defaultValue:O,onChange:function(e){g(e.target.value)}})),s.a.createElement(i.a.Item,{label:"\u5bc6\u7801",name:"password"},s.a.createElement(m.a,{defaultValue:h,onChange:function(e){x(e.target.value)}})),s.a.createElement(i.a.Item,{label:"Token"},s.a.createElement(m.a.TextArea,{rows:6,value:v})),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement(u.a,{onClick:function(){Object(r.a)({headers:{Authorization:"Basic YXBwOnNlY3JldA==","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}})("http://140.143.239.228/uaa/oauth/token?client_id=app&client_secret=secret&grant_type=password&password=".concat(h,"&username=").concat(O),{method:"POST",data:{}}).then((function(e){e&&e.access_token&&(sessionStorage.setItem("token",e.access_token),sessionStorage.setItem("TEST_SVR",n),y(e.access_token),d.a.success("\u767b\u5f55\u6210\u529f"),window.location.reload())}),(function(e){d.a.error("\u767b\u5f55\u5931\u8d25:\n"+e)}))},type:"primary"},"\u767b\u5f55"))))});p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Login",filename:"demo\\Login.tsx"}});var j={};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},j,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cpdm-\u901a\u7528\u7ec4\u4ef6"},"CPDM \u901a\u7528\u7ec4\u4ef6"),Object(c.b)("h2",{id:"\u901a\u7528\u7ec4\u4ef6\u7684\u5212\u5206"},"\u901a\u7528\u7ec4\u4ef6\u7684\u5212\u5206"),Object(c.b)("p",null,"\u76ee\u524d\uff0cCPDM \u901a\u7528\u901a\u7528\u7ec4\u4ef6\u4e3b\u8981\u5206\u4e3a\u5de5\u5177\u96c6\u3001\u7ec4\u4ef6\u96c6\u4ee5\u53ca\u9875\u9762\u5e03\u5c40;"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5de5\u5177\u96c6")," \u4e3b\u8981\u5305\u62ec\u901a\u7528\u5de5\u5177\u7c7b\u548c\u901a\u7528\u903b\u8f91\u7b49\uff1b"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u7ec4\u4ef6\u96c6")," \u4e3b\u8981\u5305\u62ec\u6570\u636e\u5c55\u793a\u7ec4\u4ef6\u3001\u9009\u62e9\u5668\u7ec4\u4ef6\u3001\u5b9a\u5236\u8868\u5355\u7ec4\u4ef6\u7b49\uff1b"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u9875\u9762\u5e03\u5c40")," \u5305\u62ec\u9875\u9762\u4e3b\u5e03\u5c40\u3001\u5bfc\u822a\u83dc\u5355\u3001\u4e8c\u7ea7\u83dc\u5355\u3001\u9875\u9762\u6807\u9898\u3001PageHeaderWrapper \u7b49\uff1b"),Object(c.b)("h2",{id:"\u8bbe\u8ba1\u901a\u7528\u7ec4\u4ef6\u7684\u539f\u5219"},"\u8bbe\u8ba1\u901a\u7528\u7ec4\u4ef6\u7684\u539f\u5219"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5e38\u7528 \u2014\u2014 \u4f7f\u7528\u9891\u7e41"),Object(c.b)("li",{parentName:"ul"},"\u903b\u8f91\u53ef\u590d\u7528 \u2014\u2014 \u51cf\u5c11\u4ee3\u7801\u590d\u5236"),Object(c.b)("li",{parentName:"ul"},"\u6837\u5f0f\u7edf\u4e00 \u2014\u2014 \u573a\u666f\u4e00\u81f4\u6027"),Object(c.b)("li",{parentName:"ul"},"\u76f8\u5bf9\u901a\u7528 \u2014\u2014 \u6ee1\u8db3\u5927\u591a\u6570\u9700\u6c42\u800c\u4e0d\u662f\u6240\u6709\u9700\u6c42")),Object(c.b)("h2",{id:"\u7ec4\u4ef6\u6d4b\u8bd5\u767b\u5f55"},"\u7ec4\u4ef6\u6d4b\u8bd5\u767b\u5f55"),Object(c.b)("font",{color:"red"},"\u5bf9\u4e8e\u4e00\u4e9b\u9700\u8981\u8bbf\u95eeCPDM\u540e\u53f0\u6570\u636e\u7684\u7ec4\u4ef6\u8bf7\u5148\u767b\u5f55\u624d\u53ef\u4ee5\u6b63\u5e38\u67e5\u770b"),Object(c.b)("p",null),Object(c.b)(p,{mdxType:"Login"}))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\index.mdx"}}),O.isMDXComponent=!0}}]);