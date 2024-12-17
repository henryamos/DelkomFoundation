import{j as e,r as x,u as T,B as h,k as I,m as v}from"./index-db6e0208.js";import{P as d}from"./index-9f05bd38.js";import{a as j}from"./Config-0cd071a0.js";const A={MTN_MOBILE_MONEY:"13",TELECEL:"6",AIRTELTIGO_MONEY:"7"},u={INITIATE:"initiate",VERIFY:"verify",WAITING:"waiting",SUCCESS:"success"},k=({onSubmit:s,paymentData:n,setPaymentData:r,amount:i,isLoading:t,onCancel:a})=>e.jsxs("div",{className:"p-6 bg-white rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Payment Details"}),e.jsxs("form",{onSubmit:s,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Amount to Pay"}),e.jsx("input",{type:"text",value:`GH₵${i}`,className:"w-full p-2 border border-gray-300 rounded-md bg-gray-50",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Select Network"}),e.jsxs("select",{value:n.channel,onChange:o=>r(l=>({...l,channel:o.target.value})),className:"w-full p-2 border border-gray-300 rounded-md",required:!0,children:[e.jsx("option",{value:"",children:"Select network"}),Object.entries(A).map(([o,l])=>e.jsx("option",{value:l,children:o.replace("_"," ")},l))]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Mobile Number"}),e.jsx("input",{type:"tel",value:n.payer,onChange:o=>r(l=>({...l,payer:o.target.value})),className:"w-full p-2 border border-gray-300 rounded-md",placeholder:"Enter mobile number",required:!0})]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{type:"submit",disabled:t,className:`flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow hover:text-dark\r
                        transition-colors disabled:opacity-40 disabled:cursor-not-allowed`,children:t?"Processing...":"Pay Now"}),e.jsx("button",{type:"button",onClick:a,className:"flex-1 border border-dark text-dark py-2 px-4 rounded-md hover:bg-gray-100",children:"Cancel"})]})]})]});k.propTypes={onSubmit:d.func.isRequired,paymentData:d.shape({amount:d.number.isRequired,payer:d.string.isRequired,channel:d.string.isRequired}).isRequired,setPaymentData:d.func.isRequired,amount:d.number.isRequired,isLoading:d.bool.isRequired,onCancel:d.func.isRequired};const P=({onSubmit:s,verificationData:n,setVerificationData:r,isLoading:i,onCancel:t})=>{x.useEffect(()=>{n!=null&&n.externalRef||(console.error("Missing externalRef in VerificationForm"),t())},[]);const a=o=>{const l=o.target.value.replace(/[^0-9]/g,"").slice(0,6);r(p=>({...p,otpCode:l}))};return e.jsxs("div",{className:"p-6 bg-white rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Enter Verification Code"}),e.jsx("p",{className:"text-gray-600 mb-4",children:"Please enter the verification code sent to your phone."}),e.jsxs("form",{onSubmit:s,className:"space-y-4",children:[e.jsx("div",{children:e.jsx("input",{type:"text",value:n.otpCode,onChange:a,className:"w-full p-2 border border-gray-300 rounded-md text-center text-lg",placeholder:"Enter 6-digit code",maxLength:6,pattern:"\\d{6}",inputMode:"numeric",required:!0,disabled:!n.externalRef||i})}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("button",{type:"submit",disabled:!n.externalRef||i||n.otpCode.length!==6,className:`flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow hover:text-dark\r
                      transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,children:i?"Verifying...":"Verify Code"}),e.jsx("button",{type:"button",onClick:t,className:"flex-1 border border-dark text-dark py-2 px-4 rounded-md hover:bg-gray-100",children:"Cancel"})]})]}),e.jsx("div",{className:"mt-4 text-center",children:e.jsx("button",{onClick:t,className:"text-dark hover:text-darkYellow text-sm underline",children:"Didn't receive code? Try again"})})]})};P.propTypes={onSubmit:d.func.isRequired,verificationData:d.shape({externalRef:d.string,otpCode:d.string}).isRequired,setVerificationData:d.func.isRequired,isLoading:d.bool.isRequired,onCancel:d.func.isRequired};const E=({onCancel:s})=>{const[n,r]=x.useState(!1),i=3e4;x.useEffect(()=>{const a=setTimeout(()=>{r(!0)},i);return()=>clearTimeout(a)},[]);const t=()=>{window.confirm("Are you sure you want to cancel the payment?")&&s()};return e.jsxs("div",{className:"p-6 bg-white rounded-lg text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-dark mx-auto mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Waiting for Payment Approval"}),e.jsx("p",{className:"text-gray-600 mb-2",children:"Please approve the payment prompt on your phone."}),n?e.jsxs("div",{className:"mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Taking longer than expected?"}),e.jsx("p",{className:"text-sm mt-1",children:"If you haven't received a prompt or the payment failed, please try again."})]}):e.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"This may take a few moments. Please don't close this window."}),e.jsx("button",{onClick:t,className:"mt-4 text-dark hover:text-darkYellow underline",children:"Cancel Payment"})]})};E.propTypes={onCancel:d.func.isRequired};const S=({transactionDetails:s,amount:n,onClose:r})=>{T();const i=()=>{r==null||r();const t="https://delkomcharityfoundation.com/";window.location.href=t};return e.jsxs("div",{className:"p-6 bg-white rounded-lg text-center",children:[e.jsx("div",{className:"text-green-500 mb-4",children:e.jsx("svg",{className:"w-16 h-16 mx-auto",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}),e.jsx("h3",{className:"text-lg font-semibold mb-2 text-green-600",children:"Payment Successful!"}),e.jsxs("div",{className:"text-gray-600 space-y-2 mb-6",children:[e.jsxs("p",{children:["Amount: GH₵",(s==null?void 0:s.amount)||n]}),(s==null?void 0:s.transactionId)&&e.jsxs("p",{children:["Transaction ID: ",s.transactionId]}),(s==null?void 0:s.payer)&&e.jsxs("p",{children:["Phone Number: ",s.payer]})]}),e.jsxs("div",{className:"flex space-x-4 justify-center",children:[e.jsx("button",{onClick:i,className:`bg-dark text-white py-2 px-4 rounded-md \r
                    hover:bg-darkYellow hover:text-dark transition-colors`,children:"Go to Home"}),e.jsx("button",{onClick:r,className:`border border-dark text-dark py-2 px-4 rounded-md \r
                    hover:bg-gray-100 transition-colors`,children:"Stay Here"})]})]})};S.propTypes={transactionDetails:d.shape({amount:d.number,transactionId:d.string,payer:d.string}),amount:d.number.isRequired,onClose:d.func.isRequired};const C={TP15:"Invalid verification code. Please check and try again.",INVALID_OTP_LENGTH:"Please enter a 6-digit verification code.",INVALID_PHONE:"Please enter a valid phone number.",DEFAULT:"An error occurred. Please try again."},q=async s=>{var n,r,i,t;try{const a={amount:parseFloat(s.amount),payer:s.payer.replace(/\s+/g,""),channel:parseInt(s.channel)},o=await j.post("/payment",a),l=((r=(n=o.data)==null?void 0:n.data)==null?void 0:r.externalRef)||((i=o.data)==null?void 0:i.externalRef);if(!l)throw console.error("Payment Response:",o.data),new Error("Payment reference not received from server");return{...o.data,externalRef:l}}catch(a){console.error("Payment initiation error:",a);const o=(t=a.response)==null?void 0:t.data;throw o!=null&&o.errors&&o.errors[0].path==="payer"?new Error("Please enter a valid phone number"):new Error((o==null?void 0:o.message)||C.DEFAULT)}},Y=async(s,n)=>{var r,i,t;try{if(!s)throw console.error("Missing externalRef in verification request"),new Error("Payment reference is required");const a={externalRef:String(s).trim(),otpcode:String(n).trim()};return console.log("Verification payload:",a),(await j.post("/verify",a)).data}catch(a){throw console.error("Verification error details:",{error:a,response:(r=a.response)==null?void 0:r.data,externalRef:s}),(t=(i=a.response)==null?void 0:i.data)!=null&&t.errors&&a.response.data.errors.find(p=>p.path==="externalRef")?new Error("Invalid or expired payment reference"):a}},V=async s=>{var n,r,i;try{const t=await j.post("/status",{externalRef:s});console.log("Status Response:",t.data);const a=((n=t.data.data)==null?void 0:n.paymentStatus)==="Successful",o=((r=t.data.data)==null?void 0:r.paymentStatus)==="Pending";return{success:a,pending:o,data:t.data.data,message:t.data.message}}catch(t){const a=(i=t.response)==null?void 0:i.data;return a!=null&&a.data?{success:!1,pending:!1,data:a.data,message:a.message||"Payment check failed"}:{success:!1,pending:!1,data:null,message:C.DEFAULT}}},M=async(s,n=30)=>{let r=0;const i=async()=>{try{if(r>=n)throw new Error("Payment verification timed out. Please check your transaction status later.");const t=await V(s);if(console.log("Poll result:",t),t.success)return t;if(!t.pending)throw new Error(t.message||"Payment failed. Please try again.");return r++,await new Promise(a=>setTimeout(a,8e3)),i()}catch(t){if(t.message.includes("timeout"))throw t;if(r<n)return r++,await new Promise(a=>setTimeout(a,8e3)),i();throw new Error("Payment verification failed. Please contact support if amount was deducted.")}};return i()},F=s=>{const[n,r]=x.useState(u.INITIATE),[i,t]=x.useState(!1),[a,o]=x.useState({amount:s,payer:"",channel:""}),[l,p]=x.useState({externalRef:"",otpCode:""}),[g,y]=x.useState(null);return{step:n,setStep:r,isLoading:i,paymentData:a,setPaymentData:o,verificationData:l,setVerificationData:p,transactionDetails:g,handlePaymentSubmit:async f=>{var m;f.preventDefault(),t(!0);try{const c=await q(a);console.log("Payment initiation response:",c);const N=((m=c.data)==null?void 0:m.externalRef)||c.externalRef;if(!N)throw console.error("Payment Response:",c),new Error("Payment reference not received from server");p({externalRef:N,otpCode:""}),h.success(c.message||"Payment initiated successfully"),r(u.VERIFY)}catch(c){console.error("Payment initiation error:",c),h.error(c.message||"Payment initiation failed"),r(u.INITIATE)}finally{t(!1)}},handleVerification:async f=>{f.preventDefault(),t(!0);try{if(console.log("Verification attempt with:",{externalRef:l.externalRef,otpCode:l.otpCode}),!l.externalRef)throw new Error("Payment reference not found. Please try again");const m=await Y(l.externalRef,l.otpCode);h.info("Please approve the payment on your phone"),r(u.WAITING);const c=await M(l.externalRef,15);c.success?(y(c.data),h.success(c.message||"Payment completed successfully!"),r(u.SUCCESS)):(h.error(c.message||"Payment was not completed"),r(u.INITIATE))}catch(m){console.error("Verification error:",m);const c=m.message||"Verification failed";h.error(c),c.includes("reference")?r(u.INITIATE):r(u.VERIFY)}finally{t(!1)}}}},R=({amount:s,onSuccess:n,onCancel:r})=>{const{step:i,setStep:t,isLoading:a,paymentData:o,setPaymentData:l,verificationData:p,setVerificationData:g,transactionDetails:y,handlePaymentSubmit:b,handleVerification:w}=F(s),f=()=>{t(u.INITIATE),r()},m=()=>{n==null||n(y)};switch(i){case u.VERIFY:return e.jsx(P,{onSubmit:w,verificationData:p,setVerificationData:g,isLoading:a,onCancel:f});case u.WAITING:return e.jsx(E,{onCancel:()=>t(u.INITIATE)});case u.SUCCESS:return e.jsx(S,{transactionDetails:y,amount:s,onClose:m});default:return e.jsx(k,{onSubmit:b,paymentData:o,setPaymentData:l,amount:s,isLoading:a,onCancel:f})}};R.propTypes={amount:d.number.isRequired,onSuccess:d.func,onCancel:d.func.isRequired};const G="/assets/books-9e9fd7f6.jpg",H="/assets/cloths-a372c3b2.jpg",L="/assets/foodd-23cd5805.jpg",U=()=>{const[s,n]=x.useState(!1),[r,i]=x.useState(null),[t,a]=x.useState(""),o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},l=m=>{i(m),n(!0)},p=m=>{const c=m.target.value;(c===""||parseFloat(c)>=0)&&a(c)},g=m=>{m.preventDefault();const c=parseFloat(t);if(!c||isNaN(c)){h.error("Please enter a valid amount");return}if(c<2){h.error("Minimum donation amount is GH₵2");return}i(c),n(!0)},y=m=>{h.success(`Thank you for your donation of GH₵${m.amount}!`),n(!1),a(""),i(null)},b=()=>{n(!1),i(null)},w=()=>e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:e.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Complete Your Donation"}),e.jsx(R,{amount:r,onSuccess:y,onCancel:b})]})})}),f=[10,20,50,100];return x.useEffect(()=>{I.pageview()},[]),e.jsxs("div",{className:"bg-overlayPrimary min-h-screen py-12 md:py-16",children:[e.jsxs("div",{className:"w-[90%] md:w-[80%] mx-auto",children:[e.jsxs("h1",{className:"headings font-bold mb-6 text-center text-white",children:["Make a ",e.jsx("span",{className:"text-darkYellow",children:"Donation"})]}),e.jsxs("h2",{className:"text-2xl font-semibold mb-8 text-center text-gray-300",children:["Fundraising ",e.jsx("span",{className:"text-darkYellow",children:"Categories"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12",children:[e.jsxs(v.div,{className:"bg-primary p-8 sm:p-6 rounded-md shadow-md w-[95%] mx-auto md:w-full",initial:"hidden",animate:"visible",variants:o,transition:{duration:.5},children:[e.jsx("img",{src:G,alt:"Buy Stationery",className:"w-full h-52 sm:h-48 object-cover rounded-sm mb-4"}),e.jsx("h3",{className:"text-xl font-bold text-dark mb-2",children:"Donate Stationery"}),e.jsx("p",{className:"text-overlay mb-4",children:"Help us provide essential stationery for children."}),e.jsx("button",{onClick:()=>l(15),className:"w-full bg-dark text-white hover:bg-darkYellow hover:text-dark py-3 sm:py-2 px-4 rounded-lg transition duration-300",children:"Donate GH₵15"})]}),e.jsxs(v.div,{className:"bg-primary p-8 sm:p-6 rounded-md shadow-md w-[95%] mx-auto md:w-full",initial:"hidden",animate:"visible",variants:o,transition:{duration:.5},children:[e.jsx("img",{src:H,alt:"Donate Clothing",className:"w-full h-52 sm:h-48 object-cover rounded-sm mb-4"}),e.jsx("h3",{className:"text-xl font-bold text-dark mb-2",children:"Donate Clothing"}),e.jsx("p",{className:"text-overlay mb-4",children:"Support our clothing drive for those in need."}),e.jsx("button",{onClick:()=>l(20),className:"w-full bg-dark hover:bg-darkYellow text-white hover:text-dark py-3 sm:py-2 px-4 rounded-lg transition duration-300",children:"Donate GH₵20"})]}),e.jsxs(v.div,{className:"bg-primary p-8 sm:p-6 rounded-md shadow-md w-[95%] mx-auto md:w-full",initial:"hidden",animate:"visible",variants:o,transition:{duration:.5},children:[e.jsx("img",{src:L,alt:"Donate Food",className:"w-full h-52 sm:h-48 object-cover rounded-sm mb-4"}),e.jsx("h3",{className:"text-xl font-bold text-dark mb-2",children:"Donate Food"}),e.jsx("p",{className:"text-overlay mb-4",children:"Help us provide meals for families in need."}),e.jsx("button",{onClick:()=>l(20),className:"w-full bg-dark hover:bg-darkYellow text-white hover:text-dark py-3 sm:py-2 px-4 rounded-lg transition duration-300",children:"Donate GH₵20"})]})]}),e.jsxs("div",{className:"bg-darkShade shadow-lg rounded-lg p-6 md:p-8 max-w-2xl mx-auto mb-8",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-6 text-center text-white",children:["Suggested ",e.jsx("span",{className:"text-darkYellow",children:"Amounts"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4",children:f.map(m=>e.jsxs(v.button,{onClick:()=>l(m),className:`bg-dark text-white py-4 px-8 rounded-lg \r
									 hover:bg-darkYellow hover:text-dark \r
									 transition-colors text-lg font-semibold\r
									 min-w-[120px]`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:["GH₵",m]},m))})]}),e.jsxs("div",{className:"bg-darkShade shadow-lg rounded-lg p-8 max-w-2xl mx-auto",children:[e.jsxs("h2",{className:"text-2xl font-semibold mb-6 text-center text-primary",children:["Custom Donation ",e.jsx("span",{className:"text-darkYellow",children:"Amount"})]}),e.jsxs("form",{onSubmit:g,className:"flex flex-col items-center",children:[e.jsxs("div",{className:"relative w-full max-w-xs mb-4",children:[e.jsx("span",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500",children:"GH₵"}),e.jsx("input",{type:"number",step:"any",value:t,onChange:p,placeholder:"Enter amount (min. GH₵2)",className:`w-full pl-12 pr-4 py-3 rounded-lg\r
										 focus:outline-none focus:ring-2 focus:ring-darkYellow \r
										 text-gray-900`})]}),e.jsx("button",{type:"submit",className:`w-full max-w-xs bg-darkYellow text-dark hover:bg-dark \r
									 hover:text-white py-3 px-4 rounded-lg \r
									 transition duration-300`,children:"Donate"})]})]})]}),s&&e.jsx(w,{})]})};export{U as default};
