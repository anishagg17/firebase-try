(this["webpackJsonpredux-try"]=this["webpackJsonpredux-try"]||[]).push([[0],{41:function(e,t,a){e.exports=a(57)},46:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),i=(a(46),a(2)),o=a(3),s=a(5),u=a(4),m=a(6),p=a(9),h=a(14),d=a(17),b=a.n(d);a(47),a(50);b.a.initializeApp({apiKey:"AIzaSyDpDb_eJZJM1hUNspLnMbxn9XPirwnaH4M",authDomain:"redux-try.firebaseapp.com",databaseURL:"https://redux-try.firebaseio.com",projectId:"redux-try",storageBucket:"redux-try.appspot.com",messagingSenderId:"760691451449",appId:"1:760691451449:web:4ee44525668c92e0634fe8",measurementId:"G-10MZ3V5GNN"});var f=b.a.auth(),v=new b.a.auth.GoogleAuthProvider,E=function(){return f.signInWithPopup(v)},j=function(){return f.signOut()},g=b.a.firestore(),O=(b.a,a(8)),y=a.n(O),N=Object(n.createContext)(),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a.unsubscribeFromAuth=null,a.componentDidMount=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.unsubscribeFromAuth=f.onAuthStateChanged((function(e){var t=null;null==e?a.setState({user:t}):(t={email:e.email,name:e.displayName,photo:e.photoURL},a.setState({user:t}))}));case 1:case"end":return e.stop()}}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth&&this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this.props.children,t=this.state.user;return r.a.createElement(N.Provider,{value:t},e)}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(p.c,{to:"/create"},"New project")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/",onClick:j},"Logout")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/",className:"btn btn-floating pink lighten-1"},r.a.createElement(N.Consumer,null,(function(e){var t=e.name.split(" "),a="";return a+=t[0].charAt(0),t[1]&&(a+=t[1].charAt(0)),a})))))}}]),t}(r.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(p.c,{to:"/signIn"},"Login")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/signUp"},"Sign UP")))}}]),t}(r.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"brand-logo left"},"HOZE"),r.a.createElement(N.Consumer,null,(function(e){return e?r.a.createElement(C,null):r.a.createElement(x,null)}))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},"Notifications")}}]),t}(n.Component),F=a(19),A=a(20);function D(){var e=Object(F.a)(["\n  margin-left: 1rem;\n"]);return D=function(){return e},e}var P=A.a.button(D()),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).Delete=function(e){return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(g.doc("projects/".concat(e)).delete());case 2:a.forceUpdate();case 3:case"end":return t.stop()}}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.project;return r.a.createElement(N.Consumer,null,(function(a){return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted By ",t.author),r.a.createElement("p",{className:"grey-text margin-bottom-s3"},"Date ",new Date(t.date).toString()),r.a.createElement(p.b,{to:"/project/".concat(t.id)},"read more"),a&&a.email===t.email&&r.a.createElement(P,{className:"btn-floating btn-small waves-effect waves-light red",onClick:function(){return e.Delete(t.id)}},r.a.createElement("i",{className:"material-icons"},"delete"))))}))}}]),t}(n.Component),I=a(23),L=Object(n.createContext)(),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[]},a.unsubscribeFromFireStore=null,a.componentDidMount=function(){return y.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.awrap(g.collection("projects").onSnapshot((function(e){var t=[];e.docs.forEach((function(e){return t.push(Object(I.a)({id:e.id},e.data()))})),a.setState({projects:t})})));case 2:case"end":return e.stop()}}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.unsubscribeFromFireStore&&this.unsubscribeFromFireStore()}},{key:"render",value:function(){var e=this.props.children,t=this.state.projects;return r.a.createElement(L.Provider,{value:t},e)}}]),t}(n.Component);var M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projects:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"project-list section"},r.a.createElement(L.Consumer,null,(function(e){return e.map((function(e){return r.a.createElement(G,{project:e,key:e.id})}))})))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(M,null)),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(S,null))))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={content:"",title:"",read:0},a.componentDidMount=function(){var e;return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(g.doc("projects/".concat(a.props.match.params.id)));case 2:return e=t.sent,t.next=5,y.a.awrap(e.onSnapshot((function(e){a.setState(e.data())})));case 5:case"end":return t.stop()}}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Project ",this.state.title),r.a.createElement("span",{className:"card-content"},this.state.content))))}}]),t}(n.Component),_=a(13);function B(){var e=Object(F.a)(["\n  display: flex;\n  * {\n    margin-right: 1rem;\n  }\n"]);return B=function(){return e},e}function J(){var e=Object(F.a)(["\n  border: 3px solid #4285f4;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  * {\n    margin-right: 1rem;\n  }\n  img {\n    height: 100%;\n  }\n"]);return J=function(){return e},e}var Z=A.a.button(J()),H=A.a.div(B()),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",pass:""},a.handelChange=function(e){a.setState(Object(_.a)({},e.target.id,e.target.value))},a.handelSubmit=function(e){e.preventDefault()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:function(t){return e.handelSubmit(t)}},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign in"),r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{type:"email",value:this.state.email,onChange:function(t){return e.handelChange(t)},id:"email"})),r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"pass"},"Password"),r.a.createElement("input",{type:"password",value:this.state.pass,onChange:function(t){return e.handelChange(t)},id:"pass"})),r.a.createElement(H,null,r.a.createElement("button",{className:"btn pink lighten-1 section"},"Submit"),r.a.createElement(Z,{onClick:E},r.a.createElement("img",{width:"20px",alt:"Google sign-in",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"}),r.a.createElement("div",null," Login with Google")))))}}]),t}(n.Component),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",pass:"",fname:"",lname:""},a.handelChange=function(e){a.setState(Object(_.a)({},e.target.id,e.target.value))},a.handelSubmit=function(e){e.preventDefault(),console.log(e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:function(t){return e.handelSubmit(t)}},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign up")," ",r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"pass"},"First Name"),r.a.createElement("input",{type:"text",value:this.state.fname,onChange:function(t){return e.handelChange(t)},id:"fname"}))," ",r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"pass"},"Last Name"),r.a.createElement("input",{type:"text",value:this.state.lname,onChange:function(t){return e.handelChange(t)},id:"lname"})),r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{type:"email",value:this.state.email,onChange:function(t){return e.handelChange(t)},id:"email"})),r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"pass"},"Password"),r.a.createElement("input",{type:"password",value:this.state.name,onChange:function(t){return e.handelChange(t)},id:"pass"})),r.a.createElement("button",{className:"btn pink lighten-1 section"},"Submit")))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",read:0,author:null},a.handelChange=function(e){a.setState(Object(_.a)({},e.target.id,e.target.value))},a.handelSubmit=function(e,t){var n;return y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),n=Object(I.a)({},a.state,{},t,{author:t.name,date:Date.now()}),r.next=4,y.a.awrap(g.collection("projects").add(n));case 4:a.setState({title:"",content:""}),a.props.history.push("/");case 6:case"end":return r.stop()}}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(N.Consumer,null,(function(t){return r.a.createElement("form",{className:"white",onSubmit:function(a){return e.handelSubmit(a,t)}},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"title"},"title"),r.a.createElement("input",{type:"text",value:e.state.title,onChange:e.handelChange,id:"title"})),r.a.createElement("div",{className:"inpt-field"},r.a.createElement("label",{htmlFor:"content"},"content"),r.a.createElement("textarea",{className:"materialize-textarea",onChange:function(t){return e.handelChange(t)},id:"content",value:e.state.content})),r.a.createElement("button",{className:"btn pink lighten-1 section"},"Submit"))})))}}]),t}(n.Component),X=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(k,null),r.a.createElement(N.Consumer,null,(function(e){return e?r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/create",component:V}),r.a.createElement(h.a,{path:"/project/:id",component:W}),r.a.createElement(h.a,{path:"/",component:z})):r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/signIn",component:R}),r.a.createElement(h.a,{path:"/signUp",component:K}),r.a.createElement(h.a,{path:"/project/:id",component:W}),r.a.createElement(h.a,{path:"/",component:z}))})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null,r.a.createElement(U,null,r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a86c4618.chunk.js.map