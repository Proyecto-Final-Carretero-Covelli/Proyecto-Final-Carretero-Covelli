(this["webpackJsonpproyecto-final-carretero-covelli"]=this["webpackJsonpproyecto-final-carretero-covelli"]||[]).push([[0],{18:function(t,e,a){t.exports=a(42)},23:function(t,e,a){t.exports=a.p+"static/media/logo.25bf045c.svg"},24:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(12),r=a.n(l),i=a(13),s=a(14),c=a(16),u=a(15),d=a(17),p=(a(23),a(24),a(2)),h=a.n(p),m=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={data:[],id:0,message:null,intervalIsSet:!1,idToDelete:null,idToUpdate:null,objectToUpdate:null},a.getDataFromDb=function(){fetch("http://localhost:3001/api/getData").then((function(t){return t.json()})).then((function(t){return a.setState({data:t.data})}))},a.putDataToDB=function(t){for(var e=a.state.data.map((function(t){return t.id})),n=0;e.includes(n);)++n;h.a.post("http://localhost:3001/api/putData",{id:n,message:t})},a.deleteFromDB=function(t){parseInt(t);var e=null;a.state.data.forEach((function(a){a.id==t&&(e=a._id)})),h.a.delete("http://localhost:3001/api/deleteData",{data:{id:e}})},a.updateDB=function(t,e){var n=null;parseInt(t),a.state.data.forEach((function(e){e.id==t&&(n=e._id)})),h.a.post("http://localhost:3001/api/updateData",{id:n,update:{message:e}})},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){if(this.getDataFromDb(),!this.state.intervalIsSet){var t=setInterval(this.getDataFromDb,1e3);this.setState({intervalIsSet:t})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"render",value:function(){var t=this,e=this.state.data;return o.a.createElement("div",null,o.a.createElement("ul",null,e.length<=0?"NO DB ENTRIES YET":e.map((function(t){return o.a.createElement("li",{style:{padding:"10px"},key:e.message},o.a.createElement("span",{style:{color:"gray"}}," id: ")," ",t.id," ",o.a.createElement("br",null),o.a.createElement("span",{style:{color:"gray"}}," data: "),t.message)}))),o.a.createElement("div",{style:{padding:"10px"}},o.a.createElement("input",{type:"text",onChange:function(e){return t.setState({message:e.target.value})},placeholder:"add something in the database",style:{width:"200px"}}),o.a.createElement("button",{onClick:function(){return t.putDataToDB(t.state.message)}},"ADD")),o.a.createElement("div",{style:{padding:"10px"}},o.a.createElement("input",{type:"text",style:{width:"200px"},onChange:function(e){return t.setState({idToDelete:e.target.value})},placeholder:"put id of item to delete here"}),o.a.createElement("button",{onClick:function(){return t.deleteFromDB(t.state.idToDelete)}},"DELETE")),o.a.createElement("div",{style:{padding:"10px"}},o.a.createElement("input",{type:"text",style:{width:"200px"},onChange:function(e){return t.setState({idToUpdate:e.target.value})},placeholder:"id of item to update here"}),o.a.createElement("input",{type:"text",style:{width:"200px"},onChange:function(e){return t.setState({updateToApply:e.target.value})},placeholder:"put new value of the item here"}),o.a.createElement("button",{onClick:function(){return t.updateDB(t.state.idToUpdate,t.state.updateToApply)}},"UPDATE")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.03eea9c2.chunk.js.map