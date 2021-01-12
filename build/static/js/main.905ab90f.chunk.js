(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),i=n.n(s),a=n(31),o=n.n(a),l=n(11),r=n(21),d=n(7),u=n(3),j=n.n(u),h=n(9),b=n(14),m=n(17),f=n.n(m),k=n(16),p=(n(56),function(t){var e=t.color,n=t.onClick,s=t.className;return Object(c.jsx)("i",{onClick:n,className:f()("badge",Object(k.a)({},"badge--".concat(e),e),s)})}),O=n.p+"static/media/remove.f5660af3.svg",v=(n(57),function(t){var e=t.items,n=t.isRemovable,s=t.onClick,i=t.onRemove,a=t.onClickItem,o=t.activeItem;return Object(c.jsx)("ul",{onClick:s,className:"list",children:e.map((function(t,e){return Object(c.jsxs)("li",{className:f()(t.className,{active:t.active?t.active:o&&o.id===t.id}),onClick:a?function(){return a(t)}:null,children:[Object(c.jsx)("i",{children:t.icon?t.icon:Object(c.jsx)(p,{color:t.color.name})}),Object(c.jsxs)("span",{children:[t.name,t.tasks&&" (".concat(t.tasks.length,")")]}),n&&Object(c.jsx)("img",{className:"list__remove-icon",src:O,alt:"Remove icon",onClick:function(){return function(t){window.confirm("Are you sure you want to delete this list?")&&j.a.delete("http://localhost:3001/lists/"+t.id).then((function(){i(t.id)}))}(t)}})]},e)}))})}),x=n.p+"static/media/close.b83c2023.svg",C=(n(58),function(t,e){Object(s.useEffect)((function(){var n=function(n){t.current&&!t.current.contains(n.target)&&e(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[t,e])}),w=function(t){var e=t.colors,n=t.onAddList,i=Object(s.useState)(!1),a=Object(d.a)(i,2),o=a[0],l=a[1],r=Object(s.useState)(3),u=Object(d.a)(r,2),h=u[0],m=u[1],f=Object(s.useState)(!1),k=Object(d.a)(f,2),O=k[0],w=k[1],g=Object(s.useState)(""),N=Object(d.a)(g,2),L=N[0],_=N[1],E=Object(s.useRef)();C(E,(function(){return y()})),Object(s.useEffect)((function(){Array.isArray(e)&&m(e[0].id)}),[e]);var y=function(){l(!1),_(""),m(e[0].id)},T=function(){L?(w(!0),j.a.post("http://localhost:3001/lists",{name:L,colorId:h}).then((function(t){var c=t.data,s=e.filter((function(t){return t.id===h}))[0],i=Object(b.a)(Object(b.a)({},c),{},{color:s,tasks:[]});n(i),y()})).catch((function(){alert("Failed to add list!")})).finally((function(){w(!1)}))):alert("Enter the name of the list.")};return Object(c.jsxs)("div",{className:"add-list",children:[Object(c.jsx)(v,{onClick:function(){return l(!0)},items:[{className:"list__add-button",icon:Object(c.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{d:"M8 1V15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(c.jsx)("path",{d:"M1 8H15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),name:"Add list"}]}),o&&Object(c.jsxs)("div",{ref:E,className:"add-list__popup",children:[Object(c.jsx)("img",{onClick:y,src:x,alt:"Close button",className:"add-list__popup-close-btn"}),Object(c.jsx)("input",{value:L,onChange:function(t){return _(t.target.value)},onKeyDown:function(t){"Enter"===t.key&&T()},className:"field",type:"text",placeholder:"List name"}),Object(c.jsx)("div",{className:"add-list__popup-colors",children:e.map((function(t){return Object(c.jsx)(p,{onClick:function(){return m(t.id)},color:t.name,className:h===t.id&&"active"},t.id)}))}),Object(c.jsx)("button",{onClick:T,className:"button",children:O?"Adding...":"Add"})]})]})},g=n.p+"static/media/add.c4fa83e1.svg",N=function(t){var e=t.list,n=t.onAddTask,i=Object(s.useState)(!1),a=Object(d.a)(i,2),o=a[0],l=a[1],r=Object(s.useState)(""),u=Object(d.a)(r,2),h=u[0],b=u[1],m=Object(s.useState)(""),f=Object(d.a)(m,2),k=f[0],p=f[1],O=function(){l(!o),b("")},v=function(){var t={listId:e.id,text:h,completed:!1};p(!0),j.a.post("http://localhost:3001/tasks",t).then((function(t){var c=t.data;n(e.id,c),O()})).catch((function(){alert("Failed to add task!")})).finally((function(){p(!1)}))};return Object(c.jsx)("div",{className:"tasks__form",children:o?Object(c.jsxs)("div",{className:"tasks__form-block",children:[Object(c.jsx)("input",{onKeyDown:function(t){"Enter"===t.key&&v()},value:h,className:"field",type:"text",placeholder:"Task name",onChange:function(t){return b(t.target.value)}}),Object(c.jsx)("button",{disabled:k,onClick:v,className:"button",children:k?"Adding...":"Add task"}),Object(c.jsx)("button",{onClick:O,className:"button button--grey",children:"Cancel"})]}):Object(c.jsxs)("div",{onClick:O,className:"tasks__form-new",children:[Object(c.jsx)("img",{src:g,alt:"Add icon"}),Object(c.jsx)("span",{children:"New task"})]})})},L=function(t){var e=t.id,n=t.text,s=t.completed,i=t.list,a=t.onRemove,o=t.onEdit,l=t.onComplete;return Object(c.jsxs)("div",{className:"tasks__items-row",children:[Object(c.jsxs)("div",{className:"checkbox",children:[Object(c.jsx)("input",{onChange:function(t){l(i.id,e,t.target.checked)},id:"task-".concat(e),type:"checkbox",checked:s}),Object(c.jsx)("label",{htmlFor:"task-".concat(e),children:Object(c.jsx)("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"#000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Object(c.jsx)("p",{children:n})]}),Object(c.jsxs)("div",{className:"tasks__items-row-actions",children:[Object(c.jsx)("div",{onClick:function(){return o(i.id,{id:e,text:n})},children:Object(c.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z",fill:"black"})})}),Object(c.jsx)("div",{onClick:function(){return a(i.id,e)},children:Object(c.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"black"})})})]})]},e)},_=n.p+"static/media/edit.1bda04de.svg",E=(n(59),function(t){var e=t.list,n=t.onEditTitle,s=t.onAddTask,i=t.onRemoveTask,a=t.onEditTask,o=t.withoutEmpty,r=t.onCompleteTask;return Object(c.jsxs)("div",{className:"tasks",children:[Object(c.jsx)(l.b,{to:"/lists/".concat(e.id),children:Object(c.jsxs)("h2",{style:{color:e.color.hex},className:"tasks__title",children:[e.name,Object(c.jsx)("img",{onClick:function(){var t=window.prompt("List name",e.name);t&&(n(e.id,t),j.a.patch("http://localhost:3001/lists/"+e.id,{name:t}).catch((function(){alert("Failed to update list title!")})))},src:_,alt:"Edit icon"})]})}),Object(c.jsxs)("div",{className:"tasks__items",children:[!o&&e.tasks&&!e.tasks.length&&Object(c.jsx)("h2",{children:"No tasks"}),e.tasks&&e.tasks.map((function(t){return Object(c.jsx)(L,Object(b.a)({list:e,onEdit:a,onRemove:i,onComplete:r},t),t.id)}))]}),Object(c.jsx)(N,{list:e,onAddTask:s},e.id)]})});var y=function(){var t=Object(s.useState)(null),e=Object(d.a)(t,2),n=e[0],i=e[1],a=Object(s.useState)(null),o=Object(d.a)(a,2),l=o[0],u=o[1],b=Object(s.useState)(null),m=Object(d.a)(b,2),f=m[0],k=m[1],p=Object(h.e)();Object(s.useEffect)((function(){j.a.get("http://localhost:3001/lists?_expand=color&_embed=tasks").then((function(t){var e=t.data;i(e)})),j.a.get("http://localhost:3001/colors").then((function(t){var e=t.data;u(e)}))}),[]);var O=function(t,e){var c=n.map((function(n){return n.id===t&&(n.tasks=[].concat(Object(r.a)(n.tasks),[e])),n}));i(c)},x=function(t,e){if(window.confirm("Are you sure you want to delete this task?")){var c=n.map((function(n){return n.id===t&&(n.tasks=n.tasks.filter((function(t){return t.id!==e}))),n}));i(c),j.a.delete("http://localhost:3001/tasks/"+e).catch((function(){alert("Failed to delete task!")}))}},C=function(t,e){var c=window.prompt("Task name",e.text);if(c){var s=n.map((function(n){return n.id===t&&(n.tasks=n.tasks.map((function(t){return t.id===e.id&&(t.text=c),t}))),n}));i(s),j.a.patch("http://localhost:3001/tasks/"+e.id,{text:c}).catch((function(){alert("Failed to edit task!")}))}},g=function(t,e,c){var s=n.map((function(n){return n.id===t&&(n.tasks=n.tasks.map((function(t){return t.id===e&&(t.completed=c),t}))),n}));i(s),j.a.patch("http://localhost:3001/tasks/"+e,{completed:c}).catch((function(){alert("Failed to edit task!")}))},N=function(t,e){var c=n.map((function(n){return n.id===t&&(n.name=e),n}));i(c)};return Object(s.useEffect)((function(){var t=p.location.pathname.split("lists/")[1];if(n){var e=n.find((function(e){return e.id===Number(t)}));k(e)}}),[n,p.location.pathname]),Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsxs)("div",{className:"todo__sidebar",children:[Object(c.jsx)(v,{onClickItem:function(){return p.push("/")},items:[{active:"/"===p.location.pathname,icon:Object(c.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M12.96 8.10001H7.74001C7.24321 8.10001 7.20001 8.50231 7.20001 9.00001C7.20001 9.49771 7.24321 9.90001 7.74001 9.90001H12.96C13.4568 9.90001 13.5 9.49771 13.5 9.00001C13.5 8.50231 13.4568 8.10001 12.96 8.10001V8.10001ZM14.76 12.6H7.74001C7.24321 12.6 7.20001 13.0023 7.20001 13.5C7.20001 13.9977 7.24321 14.4 7.74001 14.4H14.76C15.2568 14.4 15.3 13.9977 15.3 13.5C15.3 13.0023 15.2568 12.6 14.76 12.6ZM7.74001 5.40001H14.76C15.2568 5.40001 15.3 4.99771 15.3 4.50001C15.3 4.00231 15.2568 3.60001 14.76 3.60001H7.74001C7.24321 3.60001 7.20001 4.00231 7.20001 4.50001C7.20001 4.99771 7.24321 5.40001 7.74001 5.40001ZM4.86001 8.10001H3.24001C2.74321 8.10001 2.70001 8.50231 2.70001 9.00001C2.70001 9.49771 2.74321 9.90001 3.24001 9.90001H4.86001C5.35681 9.90001 5.40001 9.49771 5.40001 9.00001C5.40001 8.50231 5.35681 8.10001 4.86001 8.10001ZM4.86001 12.6H3.24001C2.74321 12.6 2.70001 13.0023 2.70001 13.5C2.70001 13.9977 2.74321 14.4 3.24001 14.4H4.86001C5.35681 14.4 5.40001 13.9977 5.40001 13.5C5.40001 13.0023 5.35681 12.6 4.86001 12.6ZM4.86001 3.60001H3.24001C2.74321 3.60001 2.70001 4.00231 2.70001 4.50001C2.70001 4.99771 2.74321 5.40001 3.24001 5.40001H4.86001C5.35681 5.40001 5.40001 4.99771 5.40001 4.50001C5.40001 4.00231 5.35681 3.60001 4.86001 3.60001Z",fill:"black"})}),name:"All tasks"}]}),n?Object(c.jsx)(v,{items:n,onRemove:function(t){var e=n.filter((function(e){return e.id!==t}));i(e)},activeItem:f,onClickItem:function(t){p.push("/lists/".concat(t.id))},isRemovable:!0}):"Downloading...",Object(c.jsx)(w,{onAddList:function(t){var e=[].concat(Object(r.a)(n),[t]);i(e)},colors:l})]}),Object(c.jsxs)("div",{className:"todo__tasks",children:[Object(c.jsx)(h.a,{exact:!0,path:"/",children:n&&n.map((function(t){return Object(c.jsx)(E,{list:t,onAddTask:O,onEditTitle:N,onRemoveTask:x,onEditTask:C,onCompleteTask:g,withoutEmpty:!0},t.id)}))}),Object(c.jsx)(h.a,{path:"/lists/:id",children:n&&f&&Object(c.jsx)(E,{list:f,onAddTask:O,onEditTitle:N,onRemoveTask:x,onEditTask:C,onCompleteTask:g})})]})]})};n(65);o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.905ab90f.chunk.js.map