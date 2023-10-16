exports.id=7120,exports.ids=[7120],exports.modules={24805:(e,t,s)=>{Promise.resolve().then(s.bind(s,69032)),Promise.resolve().then(s.bind(s,14719)),Promise.resolve().then(s.bind(s,75247)),Promise.resolve().then(s.t.bind(s,25251,23))},69032:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(60080),r=s(34231),o=s(85274),l=s(53488),i=s(96915);s(9885);var n=s(23161),d=s(57114);let c=({icon:e,label:t,href:s})=>{let r=(0,d.usePathname)(),o=(0,d.useRouter)(),l="/"===r&&"/"===s||r===s||r?.startsWith(`${s}/`);return(0,a.jsxs)("button",{onClick:()=>{o.push(s)},type:"button",className:(0,n.cn)("flex items-center gap-x-2 pl-6 text-sm font-[500] text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600",l&&"bg-sky-200/20 text-sky-700 hover:bg-sky-200/20 hover:text-sky-700"),children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-2 py-4",children:[a.jsx(e,{size:22,className:(0,n.cn)("text-slate-500",l&&"text-sky-700")}),t]}),a.jsx("div",{className:(0,n.cn)("ml-auto h-full border-2 border-sky-700 opacity-0 transition-all",l&&"opacity-100")})]})},m=[{icon:r.Z,label:"Dashboard",href:"/"},{icon:o.Z,label:"Browse",href:"/search"}],h=[{icon:l.Z,label:"Courses",href:"/admin/courses"},{icon:i.Z,label:"Analytics",href:"/admin/analytics"}],f=()=>{let e=(0,d.usePathname)(),t=e?.includes("/admin");return a.jsx("div",{className:"flex w-full flex-col",children:(t?h:m).map(e=>a.jsx(c,{icon:e.icon,label:e.label,href:e.href},e.href))})}},14719:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(60080),r=s(72593),o=s(57114),l=s(68384),i=s(90092),n=s(11440),d=s.n(n);let c=()=>{let e=(0,o.usePathname)(),t=e?.startsWith("/admin"),s=e?.startsWith("/chapter");return(0,a.jsxs)("div",{className:"ml-auto flex gap-x-2",children:[t||s?a.jsx(d(),{href:"/",children:(0,a.jsxs)(l.z,{size:"sm",variant:"ghost",children:[a.jsx(i.Z,{className:"mr-2 h-4 w-4"}),"離開"]})}):a.jsx(d(),{href:"/admin/courses",children:a.jsx(l.z,{size:"sm",variant:"ghost",children:"管理者後台"})}),a.jsx(r.l8,{afterSignOutUrl:"/"})]})}},68384:(e,t,s)=>{"use strict";s.d(t,{d:()=>n,z:()=>d});var a=s(60080),r=s(9885),o=s(71085),l=s(91971),i=s(23161);let n=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...l},d)=>{let c=r?o.g7:"button";return a.jsx(c,{className:(0,i.cn)(n({variant:t,size:s,className:e})),ref:d,...l})});d.displayName="Button"},75247:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Sheet:()=>d,SheetClose:()=>m,SheetContent:()=>x,SheetDescription:()=>v,SheetFooter:()=>g,SheetHeader:()=>p,SheetTitle:()=>b,SheetTrigger:()=>c});var a=s(60080),r=s(9885),o=s(98885),l=s(91971),i=s(56206),n=s(23161);let d=o.fC,c=o.xz,m=o.x8,h=({className:e,...t})=>a.jsx(o.h_,{className:(0,n.cn)(e),...t});h.displayName=o.h_.displayName;let f=r.forwardRef(({className:e,...t},s)=>a.jsx(o.aV,{className:(0,n.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));f.displayName=o.aV.displayName;let u=(0,l.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x=r.forwardRef(({side:e="right",className:t,children:s,...r},l)=>(0,a.jsxs)(h,{children:[a.jsx(f,{}),(0,a.jsxs)(o.VY,{ref:l,className:(0,n.cn)(u({side:e}),t),...r,children:[s,(0,a.jsxs)(o.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[a.jsx(i.Z,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));x.displayName=o.VY.displayName;let p=({className:e,...t})=>a.jsx("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});p.displayName="SheetHeader";let g=({className:e,...t})=>a.jsx("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});g.displayName="SheetFooter";let b=r.forwardRef(({className:e,...t},s)=>a.jsx(o.Dx,{ref:s,className:(0,n.cn)("text-lg font-semibold text-foreground",e),...t}));b.displayName=o.Dx.displayName;let v=r.forwardRef(({className:e,...t},s)=>a.jsx(o.dk,{ref:s,className:(0,n.cn)("text-sm text-muted-foreground",e),...t}));v.displayName=o.dk.displayName},23161:(e,t,s)=>{"use strict";s.d(t,{cn:()=>o});var a=s(10566),r=s(59610);function o(...e){return(0,r.m)((0,a.W)(e))}},22608:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>z});var a=s(48144),r=s(17536);let o=(0,r.createProxy)(String.raw`/home/runner/work/Udemy-Clone/Udemy-Clone/components/navbar-routes.tsx`),{__esModule:l,$$typeof:i}=o,n=o.default;var d=s(45206);let c=(0,r.createProxy)(String.raw`/home/runner/work/Udemy-Clone/Udemy-Clone/components/ui/sheet.tsx`),{__esModule:m,$$typeof:h}=c;c.default;let f=c.Sheet,u=c.SheetTrigger;c.SheetClose;let x=c.SheetContent;c.SheetHeader,c.SheetFooter,c.SheetTitle,c.SheetDescription;var p=s(75042),g=s.n(p);let b=()=>a.jsx(g(),{height:130,width:130,alt:"logo",className:"h-auto w-auto",src:"/logo.svg",priority:!0}),v=(0,r.createProxy)(String.raw`/home/runner/work/Udemy-Clone/Udemy-Clone/app/(dashboard)/_components/sidebar-routes.tsx`),{__esModule:y,$$typeof:j}=v,N=v.default,w=()=>(0,a.jsxs)("div",{className:"flex h-full flex-col overflow-y-auto border-r bg-white shadow-sm",children:[a.jsx("div",{className:"p-6",children:a.jsx(b,{})}),a.jsx("div",{className:"flex w-full flex-col",children:a.jsx(N,{})})]}),S=()=>(0,a.jsxs)(f,{children:[a.jsx(u,{className:"pr-4 transition hover:opacity-75 md:hidden",children:a.jsx(d.Z,{})}),a.jsx(x,{side:"left",className:"bg-white p-0",children:a.jsx(w,{})})]}),k=()=>(0,a.jsxs)("div",{className:"flex h-full items-center border-b bg-white p-4 shadow-sm",children:[a.jsx(S,{}),a.jsx(n,{})]}),z=({children:e})=>(0,a.jsxs)("div",{className:"h-full",children:[a.jsx("div",{className:"fixed inset-y-0 z-50 h-[80px] w-full md:pl-56",children:a.jsx(k,{})}),a.jsx("div",{className:"fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex",children:a.jsx(w,{})}),a.jsx("main",{className:"h-full pt-[80px] md:pl-56",children:e})]})},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(96885);let r=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"32x16",url:t+""}]}}};