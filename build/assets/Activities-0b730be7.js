import{r as a,j as e,m as d,F as o,a as m,c as h,d as j,L as c,e as N}from"./index-94338d41.js";import{S as g}from"./SkeletonCard-a39d211d.js";const p=()=>{const[t,r]=a.useState(l());function l(){const s=new Date("2024-12-24T00:00:00")-new Date;return s>0?{days:Math.floor(s/(1e3*60*60*24)),hours:Math.floor(s/(1e3*60*60)%24),minutes:Math.floor(s/1e3/60%60),seconds:Math.floor(s/1e3%60)}:null}return a.useEffect(()=>{const i=setInterval(()=>{r(l())},1e3);return()=>clearInterval(i)},[]),e.jsx("section",{className:"bg-gradient-to-b from-darkShade to-bgDark py-16",children:e.jsx("div",{className:"w-[90%] md:w-[80%] mx-auto",children:e.jsxs(d.div,{className:"bg-white rounded-2xl shadow-2xl overflow-hidden",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsxs("div",{className:"bg-gradient-to-r from-darkYellow to-yellow-500 p-6 md:p-8",children:[e.jsx("h2",{className:"text-2xl md:text-4xl font-bold text-dark text-center mb-2",children:"Join Us Spread Joy This Christmas"}),e.jsx("p",{className:"text-center text-dark text-lg md:text-xl",children:"Hillary Bassuah's Outreach '24"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 p-6 md:p-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(o,{className:"text-3xl text-darkYellow"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl text-dark",children:"Date"}),e.jsx("p",{className:"text-gray-600",children:"24th-28th December, 2024"})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(m,{className:"text-3xl text-darkYellow"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl text-dark",children:"Venue"}),e.jsx("p",{className:"text-gray-600",children:"Nyameani - Twifo Hemang Lower Denkyira"})]})]}),t&&e.jsxs("div",{className:"bg-gray-100 rounded-xl p-4",children:[e.jsx("h3",{className:"text-center font-bold text-lg mb-4",children:"Event Starts In:"}),e.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[e.jsxs("div",{className:"bg-dark text-white rounded-lg p-2",children:[e.jsx("div",{className:"text-2xl font-bold",children:t.days}),e.jsx("div",{className:"text-sm",children:"Days"})]}),e.jsxs("div",{className:"bg-dark text-white rounded-lg p-2",children:[e.jsx("div",{className:"text-2xl font-bold",children:t.hours}),e.jsx("div",{className:"text-sm",children:"Hours"})]}),e.jsxs("div",{className:"bg-dark text-white rounded-lg p-2",children:[e.jsx("div",{className:"text-2xl font-bold",children:t.minutes}),e.jsx("div",{className:"text-sm",children:"Mins"})]}),e.jsxs("div",{className:"bg-dark text-white rounded-lg p-2",children:[e.jsx("div",{className:"text-2xl font-bold",children:t.seconds}),e.jsx("div",{className:"text-sm",children:"Secs"})]})]})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx(h,{className:"text-3xl text-darkYellow"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl text-dark mb-2",children:"Volunteer Opportunities"}),e.jsxs("ul",{className:"text-gray-600 list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Coordinate Activities"}),e.jsx("li",{children:"Setup Crew"}),e.jsx("li",{children:"Food Preparation"})]})]})]}),e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx(j,{className:"text-3xl text-darkYellow"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl text-dark mb-2",children:"Donation Needs"}),e.jsxs("ul",{className:"text-gray-600 list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Non-Perishable Food Items"}),e.jsx("li",{children:"Clothing"}),e.jsx("li",{children:"Toiletries"}),e.jsx("li",{children:"Books"})]})]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mt-6",children:[e.jsx(c,{to:"/volunteer",className:"bg-dark hover:bg-darkYellow text-white hover:text-dark py-3 px-6 rounded-lg text-center transition-colors duration-300 flex-1",children:"Volunteer Now"}),e.jsx(c,{to:"/donatePage",className:"bg-darkYellow hover:bg-dark text-dark hover:text-white py-3 px-6 rounded-lg text-center transition-colors duration-300 flex-1",children:"Donate Now"})]})]})]}),e.jsx("div",{className:"bg-gray-100 p-6 text-center",children:e.jsxs("p",{className:"text-gray-600",children:["For More Information, Contact Us:",e.jsx("span",{className:"font-bold text-dark ml-2",children:"054-8151-982 / 054-5752-315"})]})})]})})})},u=()=>{const[t,r]=a.useState(!0),[l,i]=a.useState([]);a.useEffect(()=>{(()=>{setTimeout(()=>{i(N),r(!1)},2e3)})()},[]);const n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0},exit:{opacity:0,y:-20}};return e.jsxs("div",{className:"bg-bgDark",children:[e.jsx(p,{}),e.jsx(d.section,{className:"py-16",initial:"hidden",animate:"visible",exit:"exit",variants:n,transition:{duration:.5},children:e.jsxs("div",{className:"w-[90%] md:w-[80%] mx-auto",children:[e.jsxs("h2",{className:"headings text-center text-white font-bold mb-12",children:["Our ",e.jsx("span",{className:"text-darkYellow",children:" Activities"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",children:t?Array.from({length:3}).map((s,x)=>e.jsx(g,{},x)):l.map(s=>e.jsxs(d.div,{className:"bg-primary rounded-lg shadow-xl hover:scale-95 duration-300 w-full",initial:{scale:.9},animate:{scale:1},transition:{duration:.3},children:[e.jsx("img",{className:"w-full h-72 sm:h-80 md:h-96 object-cover rounded-t-lg",src:s.imgUrl,alt:s.title}),e.jsxs("div",{className:"flex flex-col p-8 md:p-10",children:[e.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-dark mb-4 md:mb-6",children:s.title}),e.jsx("p",{className:"text-lg md:text-xl text-overlay",children:s.description})]})]},s.id))})]})})]})};export{u as default};