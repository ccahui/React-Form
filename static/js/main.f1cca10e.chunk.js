(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(4),c=a(3),l=a(5),s=a(0),o=a.n(s),u=a(10),m=a.n(u),p=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"text-center text-white py-5 bg-jumbotron"},o.a.createElement("h1",null,"Citas M\xe9dicas"))}}]),t}(s.Component),h=a(7),d=a(8),f=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"cargando",value:function(){var e=this.props,t=e.cargando,a=e.value;return t?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fa fa-spinner fa-spin"})," ",a):a}},{key:"render",value:function(){return o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},this.cargando())}}]),t}(s.Component);f.defaultProps={cargando:!1,value:"Guardar"};var b=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.props.error?o.a.createElement(j,this.props):o.a.createElement(v,this.props)}}]),t}(s.Component),v=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.field,a=e.value,n=e.onChange;return o.a.createElement("div",{className:"form-group col"},o.a.createElement("label",{htmlFor:t.name,className:"text-capitalize"},t.name),o.a.createElement("input",{type:t.type,className:"form-control",id:t.name,name:t.name,onChange:n,value:a}))}}]),t}(s.Component),j=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.field,a=e.value,n=e.onChange,r=e.error;return o.a.createElement("div",{className:"form-group col"},o.a.createElement("label",{htmlFor:t.name,className:"text-capitalize"},t.name),o.a.createElement("input",{type:t.type,className:"form-control is-invalid",id:t.name,name:t.name,onChange:n,value:a}),o.a.createElement("div",{className:"invalid-feedback text-capitalize"},r))}}]),t}(s.Component),E=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.props.error?o.a.createElement(y,this.props):o.a.createElement(O,this.props)}}]),t}(s.Component),O=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.field,a=e.value,n=e.onChange;return o.a.createElement("div",{className:"form-group col"},o.a.createElement("label",{htmlFor:t.name,className:"text-capitalize"},t.name),o.a.createElement("select",{value:a,className:"form-control",name:t.name,onChange:n},o.a.createElement(g,{values:t.values})))}}]),t}(s.Component),y=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.field,a=e.value,n=e.onChange,r=e.error;return o.a.createElement("div",{className:"form-group col"},o.a.createElement("label",{htmlFor:t.name,className:"text-capitalize"},t.name),o.a.createElement("select",{value:a,className:"custom-select is-invalid",name:t.name,onChange:n},o.a.createElement(g,{values:t.values})),o.a.createElement("div",{className:"invalid-feedback text-capitalize"},r))}}]),t}(s.Component);function g(e){var t=e.values;return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{value:""},"-- Seleccionar---"),t.map((function(e,t){return o.a.createElement("option",{key:t,value:e,className:"text-capitalize"},e)})))}var C=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"isFieldValido",value:function(e){return!this.props.errors[e]}},{key:"renderInput",value:function(e){var t=e.name,a=this.props,n=a.onChange,r=a.values,i=a.errors,c={field:e,onChange:n,value:r[t]};if(!this.isFieldValido(t)){var l=i[t];c.error=l}switch(e.type){case"select":return o.a.createElement(E,c);default:return o.a.createElement(b,c)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.fields,n=t.onSubmit,r=t.cargando;return o.a.createElement("form",{onSubmit:n},a.map((function(t,a){return o.a.createElement("div",{key:a,className:"form-row"},e.renderInput(t))})),o.a.createElement(f,{cargando:r}))}}]),t}(s.Component),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).onChange=function(e){var t=e.target.name,n=e.target.value;a.setStateCita(t,n)},a.onSubmit=function(e){e.preventDefault(),a.setState({cargando:!0}),a.setState({errors:{}}),setTimeout((function(){if(a.validateFormulario()){var e=a.formValue();a.props.registrarCita(e),a.resetForm()}a.setState({cargando:!1})}),1e3)},a.state={cita:a.iniciarStateCita(),errors:{},cargando:!1,fields:k},a.iniciarStateCita(),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"iniciarStateCita",value:function(){var e=k.map((function(e){return e.name})),t={};return e.forEach((function(e){t[e]=""})),t}},{key:"setStateCita",value:function(e,t){var a=this.state.cita;this.setState({cita:Object(h.a)({},a,Object(d.a)({},e,t))})}},{key:"formValue",value:function(){return this.state.cita}},{key:"validateFormulario",value:function(){var e={},t=this.formValue(),a=!0;return Object.keys(t).forEach((function(n){""===t[n]&&(a=!1,e[n]="".concat(n," es requerido"))})),this.setState({errors:e}),a}},{key:"resetForm",value:function(){var e=this,t=this.formValue();Object.keys(t).forEach((function(t){e.setStateCita(t,"")}))}},{key:"setStateFieldsSelect",value:function(e,t){var a=this.state.fields.map((function(a){return"select"===a.type&&a.name===e?Object(h.a)({},a,{values:t}):a}));this.setState({fields:a})}},{key:"render",value:function(){var e=this.formValue(),t=this.state,a=t.errors,n=t.cargando,r={fields:t.fields,onSubmit:this.onSubmit,onChange:this.onChange,values:e,errors:a,cargando:n};return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h5",{className:"card-title mb-0"},"Registrar")),o.a.createElement("div",{className:"card-body"},o.a.createElement(C,r)))}}]),t}(s.Component),k=[{name:"dni",type:"text"},{name:"nombres",type:"text"},{name:"apellidos",type:"text"},{name:"fecha",type:"date"},{name:"hora",type:"time"},{name:"Tipo",type:"select",values:["Familiar","General"]}],S=a(6),x=a.n(S),F=x.a.shape({id:x.a.string.isRequired,dni:x.a.string.isRequired,nombres:x.a.string.isRequired,apellidos:x.a.string.isRequired,fecha:x.a.string.isRequired,hora:x.a.string.isRequired}),q=(x.a.arrayOf(F).isRequired,function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).eliminar=function(e){a.props.eliminar(e)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.cita;return o.a.createElement("tr",null,o.a.createElement("td",null,t.dni),o.a.createElement("td",null,t.apellidos),o.a.createElement("td",null,t.nombres),o.a.createElement("td",null,t.fecha),o.a.createElement("td",null,t.hora),o.a.createElement("td",{className:"text-center"},o.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.eliminar(t.id)}},"Eliminar")))}}]),t}(s.Component));q.propType={cita:F};var w=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.citas;return e.length>0?o.a.createElement(z,{citas:e,eliminar:this.props.eliminar}):o.a.createElement(R,null)}}]),t}(s.Component);function R(e){return o.a.createElement("h5",{className:"text-danger text-center"},"No hay citas")}function z(e){var t=e.citas;return o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"DNI"),o.a.createElement("th",null,"Apellidos"),o.a.createElement("th",null,"Nombres"),o.a.createElement("th",null,"Fecha"),o.a.createElement("th",null,"Hora"),o.a.createElement("th",null,"Accion"))),o.a.createElement("tbody",null,t.map((function(t){return o.a.createElement(q,{key:t.id,cita:t,eliminar:e.eliminar})})))))}var V=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).registrarCita=function(e){var t=a.state.citas.slice(),n=a.generarId(),r=Object(h.a)({id:n},e);console.log(r),t.push(r),a.setState({citas:t})},a.cancelarCita=function(e){var t=a.state.citas.filter((function(t){return t.id!==e}));a.setState({citas:t})},a.state={citas:I},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"generarId",value:function(){return"_"+Math.random().toString(36).substr(2,9)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-4 justify-content-center"},o.a.createElement("div",{className:"col-md-7 col-xl-6"},o.a.createElement(N,{registrarCita:this.registrarCita}))),o.a.createElement("div",{className:"row mt-4 justify-content-center"},o.a.createElement("div",{className:"col"},o.a.createElement("h3",{className:"text-center"},"Listado de Citas"),o.a.createElement(w,{citas:this.state.citas,eliminar:this.cancelarCita}))))}}]),t}(s.Component),I=[{id:"1",nombres:"Kristian",apellidos:"Cahui",dni:"85122132",fecha:"25-02-20",hora:"9:30 am"},{id:"2",nombres:"Juan",apellidos:"Jose",dni:"99122132",fecha:"28-02-20",hora:"10:30 am"},{id:"3",nombres:"Kristian",apellidos:"Cahui",dni:"05122132",fecha:"29-02-20",hora:"7:30 am"}];a(18);a.d(t,"default",(function(){return J}));var J=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null),o.a.createElement(V,null))}}]),t}(s.Component);m.a.render(o.a.createElement(J,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f1cca10e.chunk.js.map