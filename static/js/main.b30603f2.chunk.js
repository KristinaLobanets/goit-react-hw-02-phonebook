(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(e,t,a){e.exports={block:"ContactForm_block__3L7f5",form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},,,,,function(e,t,a){e.exports={block:"phonebook_block__3leaV",form:"phonebook_form__35hek",contacts:"phonebook_contacts__3Ras2"}},function(e,t,a){e.exports={contact_li:"ContactList_contact_li__3Mw54",contact_btn:"ContactList_contact_btn__2cjDu"}},,,function(e,t,a){e.exports={block:"filter_block__3mcaS",search_txt:"filter_search_txt__3O6gA",form:"filter_form__cmOFk"}},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=a(11),u=a(2),m=a(3),i=a(5),s=a(4),b=a(1),f=a.n(b),h=a(19),d=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleName=function(t){e.setState({name:t.target.value})},e.handlNumber=function(t){e.setState({number:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,c=a.number;e.props.addContact({id:Object(h.a)(),name:n,number:c}),e.setState({name:"",number:""})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:f.a.block},c.a.createElement("form",{onSubmit:this.handleSubmit,className:f.a.form},c.a.createElement("label",{className:f.a.label},"Name:",c.a.createElement("input",{className:f.a.input,type:"text",name:"name",placeholder:"Your Name",value:t,onChange:this.handleName})),c.a.createElement("label",{className:f.a.label},"Number:",c.a.createElement("input",{className:f.a.input,type:"text",name:"number",placeholder:"Your Number",value:a,onChange:this.handlNumber})),c.a.createElement("button",{className:f.a.button,type:"submit"},"Add contact"))))}}]),a}(n.Component),_=a(7),p=a.n(_),v=function(e){var t=e.contacts,a=e.onDelete;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("h2",null,"Contacts"),c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{className:p.a.contact_li,key:e.id},e.name," -",e.number,c.a.createElement("button",{className:p.a.contact_btn,onClick:function(){return a(e.id)}},"Delete"))})))))},E=a(10),k=a.n(E),C=function(e){var t=e.value,a=e.onFilter;return c.a.createElement("div",null,c.a.createElement("h2",null,"Search"),c.a.createElement("input",{className:k.a.form,type:"text",placeholder:"search",value:t,onChange:a}))},N=a(6),g=a.n(N),F=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.addContact=function(t){e.state.contacts.find((function(e){return e.name===t.name}))?alert("The name is already exsist"):e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[t])}}))},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,c=a.number;e.addContact({id:Object(h.a)(),name:n,number:c}),e.setState({name:"",number:""})},e.getFilteredData=function(){return e.state.filter?e.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())})):e.state.contacts},e.onDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.filter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:g.a.block},c.a.createElement("div",{className:g.a.form},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(d,{addContact:this.addContact})),c.a.createElement("div",{className:g.a.contacts},c.a.createElement(C,{searchContact:this.getFilteredData,value:e,onFilter:this.handleFilter}),c.a.createElement(v,{contacts:this.getFilteredData(),onDelete:this.onDelete}))))}}]),a}(n.Component),O=function(){return c.a.createElement("div",null,c.a.createElement(F,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.b30603f2.chunk.js.map