(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{120:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return p});var n,r=t(1),s=t.n(r),c=t(99),i=t.n(c),o=t(20),l=(t(120),t(94)),m=t(6),d=t(96);const u=Object(r.lazy)(()=>Promise.all([t.e(0),t.e(1)]).then(t.t.bind(null,102,7)));let p=Object(d.a)("首页")(n=Object(o.b)(({homeReducer:e,userReducer:a})=>({userReducer:a,homeReducer:e}),{fetchHomeSaga:m.f})(n=class extends r.Component{componentDidMount(){this.props.fetchHomeSaga()}render(){const e=i.a.get(this.props.userReducer,"res.data.viewer",""),a=i.a.get(this.props.homeReducer,"res.data.repositoryOwner.repository.object.text","");return s.a.createElement("div",{className:"HomePage"},s.a.createElement(l.a,{title:"主页",data:e}),s.a.createElement(u,{className:"markdown-body HomePage-markdown__body",source:a}))}})||n)||n},94:function(e,a,t){"use strict";var n=t(1),r=t.n(n);t(95);a.a=function(e){const{data:a,title:t}=e;return r.a.createElement("div",{className:"Viewer"},r.a.createElement("div",{className:"Viewer__container"},r.a.createElement("h1",{className:"Viewer__title"},t),r.a.createElement("div",{className:"Viewer__detail"},r.a.createElement("img",{className:"Viewer__image",alt:"avatar",src:a.avatarUrl}),r.a.createElement("span",{className:"Viewer__detail-list"},r.a.createElement("span",{className:"Viewer__detail-name"},a.name),r.a.createElement("span",{className:"Viewer__detail-bio"},a.bio)))))}},95:function(e,a,t){},96:function(e,a,t){"use strict";var n=t(1),r=t.n(n);a.a=(e=>a=>(class extends a{componentDidMount(){document.title=e}render(){return r.a.createElement(a,null)}}))}}]);