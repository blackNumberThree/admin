(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,a){},49:function(e,t,a){e.exports=a(93)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACmSURBVHgBdVCxDcIwELx3IurQUZoJyAbABhkDUZkNYAPjipYJGIGSlhEyAjWKeN4mll6Recny++50vn+gUM5x53ZsNWZQroZnuGsxKZdmGNAagw0xVsJ0Avf0xtZfqE9Ct+eWa9yktQX3JK7EyTLhIcDib4wKT4MPfHwo4jWenO0UAl0NA+tIRIAMludAc7kPWeQDHWNfJ9EYWP+nRb9pJ/vKG5hiX+SCNGC8MA1JAAAAAElFTkSuQmCC"},84:function(e,t){},87:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABrSURBVHgBbY6xDYAwDARtRwzEBmGE9ElWQNShSIUoGcGbsAIjZIQ0lMjIVAjiwvp/3UuPMc4bgIzQvkJ09qgqhLQjgv0D18C8FlJnTOc0fBNE4hR4tD7mXLUFgFW9CEzMy9Ec4H2yMab8zW8PqR6RtlN4lwAAAABJRU5ErkJggg=="},88:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(44),c=a.n(r),o=(a(54),a(9)),l=a(10),m=a(12),i=a(11),u=a(13),h=(a(55),a(14)),_=(a(29),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={role:"admin",author:"Admin",message:"",request:"",messages:[]},a.socket=a.props.socket,a.teh_messedge=a.socket.on("TECH-MESSEGE",(function(e,t){console.log(e+" : "+t)})),a.cleanerChat=function(){a.setState({messages:[]})},a.cleanChat=a.socket.on("CLEAN_CHAT",a.cleanerChat),a.addMessage=function(e){a.setState({messages:[].concat(Object(h.a)(a.state.messages),[e])})},a.socketListening=a.socket.on("TO_CHAT_MESS",a.addMessage),a.hystoryMessage=function(e){a.setState({messages:[].concat(Object(h.a)(a.state.messages),[e.message])})},a.hystoryListening=a.socket.on("MESS_FROM_HISTORY",a.hystoryMessage),a.sendMessage=function(e){e.preventDefault(),a.socket.emit("TO_SERVER_MESS",{role:a.state.role,author:a.state.author,message:a.state.message,request:a.state.request,time:(new Date).toLocaleString(),current_room:localStorage.getItem("current_room")}),a.setState({message:"",request:""})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main__left-side"},s.a.createElement("div",{className:"main__chat chat"},this.state.messages.map((function(t){return s.a.createElement("div",{key:Math.random()*Math.random(),className:"chat__mesedge messedge  "+t.role},s.a.createElement("p",{className:"mesedge__asking-question"},t.request),s.a.createElement("div",{className:"chat-mesedge__middle-row"},s.a.createElement("p",null,t.author),s.a.createElement("div",{className:"chat-mesedge__time"},s.a.createElement("p",null,t.time),s.a.createElement("img",{className:"chat__vector-img",src:a(56),onClick:function(){e.setState({request:t.message})},alt:"ava"}))),s.a.createElement("p",{className:"chat-mesedge__main-text"},t.message))}))),s.a.createElement("div",{className:"entry-block"},s.a.createElement("div",{className:"entry-block__entry-field"},s.a.createElement("input",{maxLength:"256",autoComplete:"off",type:"text",name:"request",className:"entry-block__request",value:this.state.request,onChange:function(t){return e.setState({request:t.target.value})}}),s.a.createElement("textarea",{className:"entry-block__textarea",autoComplete:"off",maxLength:"256",name:"name",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})}})),s.a.createElement("div",{className:"entry-block__buttons"},s.a.createElement("p",{onClick:this.sendMessage},"  \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))}}]),t}(n.Component)),d=a(45),A=a.n(d),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={rooms:[],current_room:"Admin",userInfo:{author:"-",auth_phone:"--",auth_contact_number:"---",auth_balance:"----",auth_tariff_inet:"-----",auth_address:"-----"}},a.socket=A.a.connect("https://webiraylab.eu-4.evennode.com/"),a.newUser=function(e){a.socket.emit("ADD_USER","Admin",{author:"-",auth_phone:"--",auth_contact_number:"---",auth_balance:"----",auth_tariff_inet:"-----",auth_address:"-----"})},a.newConnect=a.socket.on("connect",a.newUser),a.changeRoom=function(e,t){t?(localStorage.setItem("current_room",a.state.current_room),a.setState({rooms:Object(h.a)(e)})):a.setState({rooms:Object(h.a)(e)})},a.roomListening=a.socket.on("UPDATE_ROOMS",a.changeRoom),a.userInfo=function(e){a.setState({userInfo:{author:e.author,auth_phone:e.auth_phone,auth_contact_number:e.auth_contact_number,auth_balance:e.auth_balance,auth_tariff_inet:e.auth_tariff_inet,auth_address:e.auth_address}}),console.log(a.state)},a.catchInfo=a.socket.on("USER-INFO",a.userInfo),a.switchRoom=function(e){a.socket.emit("SWITCH_ROOM",e.target.innerText),a.setState({rooms:[],current_room:e.target.innerText})},a.deleteRoom=function(){"Admin"===a.state.current_room?alert("don't do it! (\u25e3_\u25e2)"):(a.setState({current_room:"Admin"}),a.socket.emit("DETELE_ROOM",a.state.current_room),a.socket.emit("SWITCH_ROOM","Admin"))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"header__main"},s.a.createElement("div",{className:"header__leftside"},s.a.createElement("span",{className:"header__tech-text"},"\u0417\u0430\u044f\u0432\u043a\u0438 \u0432 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443"),s.a.createElement("div",{className:"header__chats-row chats-row"},this.state.rooms.map((function(t){return t===e.state.current_room?s.a.createElement("div",{key:t,className:"chats-row__pop-up_active"},t):s.a.createElement("div",{key:toString(Symbol()),className:"chats-row__pop-up",onClick:e.switchRoom},t)})),s.a.createElement("div",{className:"chats-row__pop-up-hidden"},s.a.createElement("img",{className:"header__rectangle-img",src:a(87),alt:"img"})))))),s.a.createElement("main",{className:"main-chat"},s.a.createElement(_,{socket:this.socket}),s.a.createElement("div",{className:"main__right-side right-side"},s.a.createElement("div",{className:"right-side__buttons"},s.a.createElement("p",{onClick:this.deleteRoom}," \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440")),s.a.createElement("div",{className:"right-side__blank"},s.a.createElement("div",{className:"right-side__row_short"},s.a.createElement("div",{className:"right-side__row"},s.a.createElement("p",{className:"right-side__row-title"},"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430"),s.a.createElement("input",{type:"text",name:"",value:this.state.userInfo.auth_contact_number,readOnly:"readonly"})),s.a.createElement("div",{className:"right-side__row"},s.a.createElement("p",{className:"right-side__row-title"},"\u0411\u0430\u043b\u0430\u043d\u0441"),s.a.createElement("span",{className:"right-side__balance"},this.state.userInfo.auth_balance," \u20bd"))),s.a.createElement("div",{className:"right-side__row"},s.a.createElement("p",{className:"right-side__row-title"},"\u0422\u0430\u0440\u0438\u0444"),s.a.createElement("input",{type:"text",name:"",value:this.state.userInfo.auth_tariff_inet,readOnly:"readonly"})),s.a.createElement("div",{className:"right-side__row"},s.a.createElement("p",{className:"right-side__row-title"}," \u0424\u0418\u041e \u0430\u0431\u043e\u043d\u0435\u043d\u0442\u0430"),s.a.createElement("input",{type:"text",name:"",value:this.state.userInfo.author,readOnly:"readonly"})),s.a.createElement("div",{className:"right-side__row"},s.a.createElement("p",{className:"right-side__row-title"},"\u0410\u0434\u0440\u0435\u0441"),s.a.createElement("input",{type:"text",name:"",value:this.state.userInfo.auth_address,readOnly:"readonly"})),s.a.createElement("div",{className:"right-side__row"},s.a.createElement("div",{className:"right-side__row"},s.a.createElement("p",{className:"right-side__row-title"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b"),s.a.createElement("input",{type:"text",name:"",value:this.state.userInfo.auth_phone,readOnly:"readonly"})))))))}}]),t}(n.Component),E=(a(88),function(){var e="",t="";return s.a.createElement("div",{className:"authorization-page"},s.a.createElement("header",{className:"header"},s.a.createElement("span",{className:"header__tech-text"},"\u0427\u0430\u0442 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438")),s.a.createElement("main",{className:"main-authorization"},s.a.createElement("div",{className:"authorization-block"},s.a.createElement("span",{className:"authorization__title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),s.a.createElement("form",{className:"authorization-form",action:"index.html",method:"post"},s.a.createElement("label",{htmlFor:"loginField"},s.a.createElement("span",null,"E-mail")),s.a.createElement("input",{id:"loginField",type:"text",name:"login",onChange:function(t){return e=t.target.value},placeholder:"admin@gmail.com"}),s.a.createElement("label",{htmlFor:"parolField"},s.a.createElement("span",null,"\u041f\u0430\u0440\u043e\u043b\u044c")),s.a.createElement("input",{id:"parolField",type:"text",name:"parol",onChange:function(e){return t=e.target.value},placeholder:"*******"}))),s.a.createElement("a",{href:""},s.a.createElement("p",{className:"button__text",onClick:function(){"admin"===e&&"admin"===t?sessionStorage.setItem("securety",!0):alert("your login or password is incorrect")}},"\u0412\u043e\u0439\u0442\u0438"))))}),p=a(46),f=a(6),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={displayPage:a.page},a.page=sessionStorage.getItem("securety")?g:E,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(f.a,{path:"/",component:this.page}))}}]),t}(n.Component);c.a.render(s.a.createElement(N,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.dadc0ad2.chunk.js.map