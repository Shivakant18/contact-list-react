(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/profile.a7d974ee.svg"},function(e,t,a){e.exports=a.p+"static/media/bin.4abe51fd.svg"},,function(e,t,a){e.exports=a.p+"static/media/add-contact.4f4f88bc.svg"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),i=a.n(l),s=a(2),o=a(3),r=a(5),h=a(4),m=a(1),d=a(6),u=a(9),p=a.n(u),b=a(10),f=a.n(b),v=(a(18),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).handleDelete=a.handleDelete.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleDelete",value:function(e){this.props.onDelete(this.props.name)}},{key:"render",value:function(){return c.a.createElement("div",{className:"contact-card"},c.a.createElement("img",{className:"profile-photo",src:p.a,alt:"profile"}),c.a.createElement("div",{className:"contact-details"},c.a.createElement("div",{className:"contact-name"},this.props.name),c.a.createElement("div",{className:"contact-phone"},this.props.phone)),c.a.createElement("img",{className:"btn-img",src:f.a,alt:"delete",onClick:this.handleDelete}))}}]),t}(c.a.Component)),E=a(11),O=a(12),j=a.n(O),g=(a(19),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={name:"",phone:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(E.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this.state,a=t.name,n=t.phone;this.props.onAdd(a,n),this.setState({name:"",phone:""}),e.preventDefault()}},{key:"render",value:function(){return c.a.createElement("div",{id:"contact-form"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-fields"},c.a.createElement("label",{htmlFor:"name"},c.a.createElement("span",null,"NAME"),c.a.createElement("input",{name:"name",value:this.state.name,onChange:this.handleChange})),c.a.createElement("label",{htmlFor:"phone"},c.a.createElement("span",null,"PHONE"),c.a.createElement("input",{name:"phone",value:this.state.phone,onChange:this.handleChange}))),c.a.createElement("img",{className:"btn-img",src:j.a,alt:"addContact",onClick:this.handleSubmit})))}}]),t}(c.a.Component)),C=(a(20),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={contacts:[{name:"Contact 1",phone:"1111111111"},{name:"Contact 2",phone:"2222222222"}]},a.handleAdd=a.handleAdd.bind(Object(m.a)(a)),a.handleDelete=a.handleDelete.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleAdd",value:function(e,t){var a=this.state.contacts;a.unshift({name:e,phone:t}),this.setState({contacts:a})}},{key:"handleDelete",value:function(e){var t=this.state.contacts;t=t.filter((function(t){return t.name!==e})),this.setState({contacts:t})}},{key:"render",value:function(){var e=this,t=this.state.contacts;return c.a.createElement("div",{className:"contact-list-app"},c.a.createElement(g,{onAdd:this.handleAdd}),t.map((function(t){return c.a.createElement(v,{name:t.name,phone:t.phone,onDelete:e.handleDelete})})))}}]),t}(c.a.Component));a(21);i.a.render(c.a.createElement(C,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.c4014552.chunk.js.map