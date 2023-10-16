(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[642],{8386:function(e,t,n){Promise.resolve().then(n.bind(n,7758)),Promise.resolve().then(n.bind(n,3469)),Promise.resolve().then(n.bind(n,4571)),Promise.resolve().then(n.t.bind(n,6964,23))},7758:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7437),s=n(2898);let a=(0,s.Z)("Layout",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"9",x2:"9",y1:"21",y2:"9",key:"wpwpyp"}]]),i=(0,s.Z)("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]),o=(0,s.Z)("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),l=(0,s.Z)("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);n(2265);var d=n(9311),c=n(4033),u=e=>{let{icon:t,label:n,href:s}=e,a=(0,c.usePathname)(),i=(0,c.useRouter)(),o="/"===a&&"/"===s||a===s||(null==a?void 0:a.startsWith("".concat(s,"/")));return(0,r.jsxs)("button",{onClick:()=>{i.push(s)},type:"button",className:(0,d.cn)("flex items-center gap-x-2 pl-6 text-sm font-[500] text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600",o&&"bg-sky-200/20 text-sky-700 hover:bg-sky-200/20 hover:text-sky-700"),children:[(0,r.jsxs)("div",{className:"flex items-center gap-x-2 py-4",children:[(0,r.jsx)(t,{size:22,className:(0,d.cn)("text-slate-500",o&&"text-sky-700")}),n]}),(0,r.jsx)("div",{className:(0,d.cn)("ml-auto h-full border-2 border-sky-700 opacity-0 transition-all",o&&"opacity-100")})]})};let f=[{icon:a,label:"Dashboard",href:"/"},{icon:i,label:"Browse",href:"/search"}],x=[{icon:o,label:"Courses",href:"/admin/courses"},{icon:l,label:"Analytics",href:"/admin/analytics"}];var m=()=>{let e=(0,c.usePathname)(),t=null==e?void 0:e.includes("/admin");return(0,r.jsx)("div",{className:"flex w-full flex-col",children:(t?x:f).map(e=>(0,r.jsx)(u,{icon:e.icon,label:e.label,href:e.href},e.href))})}},3469:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),s=n(681),a=n(4033),i=n(3023),o=n(2898);let l=(0,o.Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);var d=n(1396),c=n.n(d),u=()=>{let e=(0,a.usePathname)(),t=null==e?void 0:e.startsWith("/admin"),n=null==e?void 0:e.startsWith("/chapter");return(0,r.jsxs)("div",{className:"ml-auto flex gap-x-2",children:[t||n?(0,r.jsx)(c(),{href:"/",children:(0,r.jsxs)(i.z,{size:"sm",variant:"ghost",children:[(0,r.jsx)(l,{className:"mr-2 h-4 w-4"}),"離開"]})}):(0,r.jsx)(c(),{href:"/admin/courses",children:(0,r.jsx)(i.z,{size:"sm",variant:"ghost",children:"管理者後台"})}),(0,r.jsx)(s.l8,{afterSignOutUrl:"/"})]})}},3023:function(e,t,n){"use strict";n.d(t,{d:function(){return l},z:function(){return d}});var r=n(7437),s=n(2265),a=n(7256),i=n(6061),o=n(9311);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:n,variant:s,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:n})),ref:t,...c})});d.displayName="Button"},4571:function(e,t,n){"use strict";n.r(t),n.d(t,{Sheet:function(){return d},SheetClose:function(){return u},SheetContent:function(){return y},SheetDescription:function(){return b},SheetFooter:function(){return p},SheetHeader:function(){return h},SheetTitle:function(){return g},SheetTrigger:function(){return c}});var r=n(7437),s=n(2265),a=n(3452),i=n(6061),o=n(2549),l=n(9311);let d=a.fC,c=a.xz,u=a.x8,f=e=>{let{className:t,...n}=e;return(0,r.jsx)(a.h_,{className:(0,l.cn)(t),...n})};f.displayName=a.h_.displayName;let x=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...s,ref:t})});x.displayName=a.aV.displayName;let m=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),y=s.forwardRef((e,t)=>{let{side:n="right",className:s,children:i,...d}=e;return(0,r.jsxs)(f,{children:[(0,r.jsx)(x,{}),(0,r.jsxs)(a.VY,{ref:t,className:(0,l.cn)(m({side:n}),s),...d,children:[i,(0,r.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(o.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});y.displayName=a.VY.displayName;let h=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...n})};h.displayName="SheetHeader";let p=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};p.displayName="SheetFooter";let g=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold text-foreground",n),...s})});g.displayName=a.Dx.displayName;let b=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",n),...s})});b.displayName=a.dk.displayName},9311:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var r=n(7042),s=n(3986);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m)((0,r.W)(t))}},1396:function(e,t,n){e.exports=n(4724)}},function(e){e.O(0,[666,841,724,259,109,971,864,744],function(){return e(e.s=8386)}),_N_E=e.O()}]);