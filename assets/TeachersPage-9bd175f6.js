import{s,t as n,F as se,a as R,b as z,r as h,c as ie,j as e,d as N,e as ae,f as v,S as re,T as le,E as $,g as w,B as oe,_ as I,h as f,i as te,u as b,o as ce,A as de,k as he,l as pe,m as ge,n as xe,L as ue}from"./index-88ecfa24.js";const me="/react-project_learn-lingo/assets/chevron-down-c553fb51.svg",fe=s(se)`
  @media screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  @media screen and (min-width: 1440px) {
    white-space: nowrap;
  }
`,y=s.label`
  color: ${n.colors.accent};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;

  display: inline-flex;
  flex-direction: column;
`,A=s(R)`
  margin-block-start: ${n.spacing(4)};
  margin-inline-end: ${n.spacing(10)};
  padding: ${n.spacing(7)} ${n.spacing(9)};

  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111;
  outline: none;
  border: none;
  border-radius: ${n.radii.s};
  appearance: none;
  overflow: hidden;
  background:
    right 14px center no-repeat url(${me}),
    ${n.colors.light};

  &#language {
    inline-size: 220px;
  }
  &#level {
    inline-size: 198px;
  }
  &#price {
    inline-size: 124px;
  }

  option {
    color: rgba(18, 20, 23, 0.2);
  }
`,be=s.button`
  padding-block: ${n.spacing(7)};
  vertical-align: bottom;

  color: ${n.colors.primary};
  background: transparent;
  border: none;

  &:hover {
    color: ${n.colors.secondary};
  }
`,je=["French","English","German","Ukrainian","Polish","Spanish","Italian","Korean","Mandarin Chinese","Vietnamese"],ve=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],$e=["25","27","28","30","32","35"],C={languages:je,levels:ve,prices:$e},ke=()=>{const i=z(),l={language:"all",level:"all",price:"all"},[r,o]=h.useState(l);h.useEffect(()=>{i(ie(r))},[r,i]);const t=(a,u)=>{o(k=>({...k,[a]:u.target.value}))},g=a=>t("language",a),p=a=>t("level",a),d=a=>t("price",a),x=()=>o(l);return e.jsx(N,{initialValues:r,children:()=>e.jsxs(fe,{children:[e.jsxs(y,{children:["Languages",e.jsxs(A,{as:"select",id:"language",className:"language",name:"language",value:r.language,onChange:g,children:[e.jsx("option",{value:"all",children:"All"}),C.languages.map(a=>e.jsx("option",{value:a,children:a},a))]})]}),e.jsxs(y,{children:["Level of knowledge",e.jsxs(A,{as:"select",id:"level",className:"level",name:"level",value:r.level,onChange:p,children:[e.jsx("option",{value:"all",children:"All"}),C.levels.map(a=>e.jsx("option",{value:a,children:a},a))]})]}),e.jsxs(y,{children:["Price",e.jsxs(A,{as:"select",id:"price",className:"price",name:"price",value:r.price,onChange:d,children:[e.jsx("option",{value:"all",children:"All"}),C.prices.map(a=>e.jsxs("option",{value:a,children:[a," $"]},a))]})]}),e.jsx(be,{type:"button",onClick:x,children:"Reset"})]})})},we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABHNCSVQICAgIfAhkiAAAAMNJREFUKJGVkjEKwkAQRd9usyB4gNSCVlaKV7ENpLCxjYewtrEIpPUqslZWyQVyAEHYxm+zkUQN6IMthv8/szuz0EFSLslLCvF4STnvSJpEcQgvaQJgYsADi+peUzQl55sHYDVekiUps9EU4GKMWZrYcl/dazb1lvAIve7OOo7TQxvaWWANUDTlhxkgPAJFU7bl2gJz4HWNb3S0uR10DWCBa/vAITra1QIngCxJcdZ9mJ11ZEnalqe/x0oM/Ly4Hr98jScNGre4wUvSpwAAAABJRU5ErkJggg==",ye=s.div`
  margin-block: ${n.spacing(8)};
  margin-inline: auto;
  padding: ${n.spacing(12)};

  max-inline-size: 1184px;
  display: flex;
  gap: ${n.spacing(24)};
  background-color: ${n.colors.light};
  border-radius: ${n.radii.l};

  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }
`,Ae=s.div`
  flex-shrink: 0;
`,Ce=s.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`,Se=s.img`
  padding: ${n.spacing(6)};
  inline-size: 126px;
  block-size: 126px;
  border-radius: ${n.radii.xxl};
  border: 3px solid #fbe9ba;
`,Fe=s.img`
  transform: translate(88px, 34px);
  border-radius: ${n.radii.xxl};
`,ze=s.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: ${n.spacing(5)};
  }
  @media screen and (min-width: 1440px) {
    gap: ${n.spacing(80)};
  }

  p {
    display: inline-flex;
    font-weight: 500;
    line-height: 1.5;
  }
`,Te=s.span`
  font-weight: 500;
  line-height: 1.5;
  color: ${n.colors.accent};
`,S=s.span`
  margin-inline: ${n.spacing(8)};
  color: rgba(18, 20, 23, 0.2);
`,Le=s.svg`
  transform: translateY(3px);
  margin-inline-end: ${n.spacing(4)};
`,Ee=s.svg`
  transform: translateY(3px);
  margin-inline-end: ${n.spacing(4)};
`,Me=s.span`
  margin-inline-start: ${n.spacing(2)};
  color: ${n.colors.grass};
`,Be=s.button`
  margin-inline-start: ${n.spacing(32)};
  background-color: transparent;
  border: none;

  &:hover svg {
    @keyframes shadow {
      0% {
        scale: 1;
      }
      50% {
        scale: 1.2;
      }
      100% {
        scale: 1;
      }
    }
    animation: shadow 0.5s ease infinite;
  }
`,Re=s.div`
  h2 {
    margin-block-end: ${n.spacing(16)};

    font-size: 24px;
    font-weight: 500;
    line-height: 1;
  }
`,Ne=s.ul`
  margin-block-end: ${n.spacing(8)};

  display: flex;
  flex-direction: column;
  gap: ${n.spacing(4)};
  font-weight: 500;
  line-height: 1.5;
`,F=s.span`
  color: ${n.colors.accent};
`,Ie=s.span`
  text-decoration: underline;
`,_e=s.button`
  margin-block-end: ${n.spacing(16)};
  border: none;
  background-color: transparent;
  font-weight: 500;
  text-decoration: underline;

  &.active {
    display: none;
  }
`,M=s.ul`
  display: flex;
  gap: ${n.spacing(4)};
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`,B=s.li`
  padding: ${n.spacing(4)} ${n.spacing(6)};

  background-color: ${({$active:i,theme:l})=>i?l.colors.primary:l.colors.light};
  border: ${({$active:i})=>i?"none":"1px solid rgba(18, 20, 23, 0.2)"};
  border-radius: ${n.radii.xl};
  color: ${n.colors.main};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.142;
`,Pe=s.div`
  margin-block: ${n.spacing(17.5)} ${n.spacing(8)};

  display: flex;
  gap: ${n.spacing(6)};
`,Ue=s.img`
  border-radius: ${n.radii.xxl};
`,We=s.div`
  gap: ${n.spacing(1.5)};

  h3 {
    color: ${n.colors.accent};
    font-weight: 500;
    line-height: 1.5;
  }

  p {
    font-weight: 500;
  }

  svg {
    margin-inline-end: ${n.spacing(6)};
    transform: translateY(2px);
  }
`,He=s.p`
  margin-block-end: ${n.spacing(16)};

  font-weight: 500;
  line-height: 1.5;
`,Ve=s.button`
  margin-block-start: ${n.spacing(16)};
  padding: ${n.spacing(8)} ${n.spacing(24)};

  border-radius: ${n.radii.xs};
  border: none;
  background: ${n.colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;

  transition: background-color ${n.transition};

  &:hover {
    background-color: ${n.colors.secondary};
  }
`,Xe=s.button`
  margin-block: ${n.spacing(24)} ${n.spacing(48)};
  padding: ${n.spacing(8)} ${n.spacing(24)};

  border-radius: ${n.radii.xs};
  border: none;
  background: ${n.colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;

  transition: background-color ${n.transition};

  &:hover {
    background-color: ${n.colors.secondary};
  }
`,qe=s.div`
  text-align: center;
`,Ye=s.div`
  padding-inline-start: ${n.spacing(12)};
  @media screen and (min-width: 1440px) {
    padding-inline-start: ${n.spacing(61)};
  }
`,Je=s.div`
  margin-block-start: 10%;
  text-align: center;
  font-size: 40px;
`,Oe=s.div`
  display: flex;
  gap: ${n.spacing(7)};
  margin-block-end: ${n.spacing(20)};
`,Qe=s.div`
  display: flex;
  flex-direction: column;
`,De=s.img`
  border-radius: ${n.radii.xxl};
`,Ge=s.span`
  color: ${n.colors.accent};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.333;
`,Ke=s.h3`
  font-weight: 500;
  line-height: 1.5;
`,Ze=s.h2`
  margin-block-end: ${n.spacing(10)};

  font-weight: 500;
  line-height: 1.5;
`,en=s.div`
  margin-block-end: ${n.spacing(20)};
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    line-height: 1.375;
  }
`,m=s(R)`
  margin-inline-end: ${n.spacing(4)};
  cursor: pointer;
  position: relative;
  top: 5px;
  block-size: 22px;
  inline-size: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: ${n.radii.xxl};
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid rgba(18, 20, 23, 0.1);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: ${n.radii.xxl};
    border: 2px solid ${n.colors.primary};
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 12px;
    block-size: 12px;
    border-radius: ${n.radii.xxl};
    background-color: ${n.colors.primary};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`,nn=ae({reason:v().required("Choose one of the answers"),fullName:v().min(3,"Minimum 3 characters").max(30,"Maximum 30 characters").required("Required"),email:v().email("Invalid email address").required("This is a required field"),number:v().min(9,"Sample format: XXX-XX-XX").max(9,"Sample format: XXX-XX-XX").required("This is a required field").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and dashes.")}),sn=({card:i,onRequestClose:l})=>{const r=({reason:o,fullName:t,email:g,number:p},{resetForm:d})=>{I.success("The data was successfully sent.",{duration:5e3,position:"top-right"}),d(),l()};return e.jsx(N,{initialValues:{reason:"",fullName:"",email:"",number:""},onSubmit:r,validationSchema:nn,children:e.jsxs(re,{children:[e.jsx(le,{children:"Book trial lesson"}),e.jsx("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),e.jsxs(Oe,{children:[e.jsx(De,{src:i.avatar_url,alt:"avatar",width:44,height:44}),e.jsxs(Qe,{children:[e.jsx(Ge,{children:"Your teacher"}),e.jsxs(Ke,{children:[i.name," ",i.surname]})]})]}),e.jsxs("label",{"aria-label":"Field for reason",name:"reason",children:[e.jsx(Ze,{children:"What is your main reason for learning English?"}),e.jsxs(en,{children:[e.jsxs("label",{children:[e.jsx(m,{type:"radio",name:"reason",value:"One"}),"Career and business"]}),e.jsxs("label",{children:[e.jsx(m,{type:"radio",name:"reason",value:"Two"}),"Lesson for kids"]}),e.jsxs("label",{children:[e.jsx(m,{type:"radio",name:"reason",value:"Three"}),"Living abroad"]}),e.jsxs("label",{children:[e.jsx(m,{type:"radio",name:"reason",value:"Four"}),"Exams and coursework"]}),e.jsxs("label",{children:[e.jsx(m,{type:"radio",name:"reason",value:"Five"}),"Culture, travel or hobby"]})]}),e.jsx($,{name:"reason",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Full name",children:[e.jsx(w,{type:"text",name:"fullName",placeholder:"Name"}),e.jsx($,{name:"fullName",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Email",children:[e.jsx(w,{type:"email",name:"email",placeholder:"Email"}),e.jsx($,{name:"email",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Phone number",children:[e.jsx(w,{type:"tel",name:"number",placeholder:"Phone number"}),e.jsx($,{name:"number",component:"div"})]}),e.jsx(oe,{type:"submit",children:e.jsx("span",{children:"Book"})})]})})},an=({item:i})=>{const{reviewer_avatar:l,reviewer_name:r,reviewer_rating:o,comment:t}=i;return e.jsxs(e.Fragment,{children:[e.jsxs(Pe,{children:[e.jsx(Ue,{src:l,alt:"avatar",width:44,height:44}),e.jsxs(We,{children:[e.jsx("h3",{children:r}),e.jsxs("p",{children:[e.jsx("svg",{width:16,height:16,fill:"#FFC531",children:e.jsx("use",{xlinkHref:`${f}#icon-star-full`})}),o,".0"]})]})]}),e.jsx(He,{children:t})]})},rn=i=>i.teachers.teachers,ln=i=>i.favorites.favorites,on=i=>i.teachers.loading,_=i=>i.filter.filters,P=te([_,rn],(i,l)=>{const{language:r,level:o,price:t}=i;return r==="all"&&o==="all"&&t==="all"?l:l.filter(p=>{const d=r.includes("all")||p.languages.includes(r),x=o==="all"||p.levels.some(u=>u.includes(o)),a=t==="all"||p.price_per_hour===Number(t);return d&&x&&a})}),tn=({card:i})=>{const[l,r]=h.useState(!1),[o,t]=h.useState(null),[g,p]=h.useState(!1),[d,x]=h.useState(null),a=b(ln),u=a==null?void 0:a.some(c=>c.lessons_done===i.lessons_done),k=b(_).level,T=z(),W=()=>{if(!d){I.error("You don`t authorized!",{duration:5e3,position:"top-right"});return}T(u&&d?he(i.id):pe(i))},H=()=>{r(!0),document.body.style.overflow="hidden"},L=()=>{r(!1),document.body.style.overflow=""},V=()=>{t(!0),p(!0)},{avatar_url:X,lessons_done:q,rating:Y,price_per_hour:J,name:O,surname:Q,lesson_info:D,conditions:G,languages:K,levels:E,experience:Z,reviews:ee}=i,ne=K.join(", ");return h.useEffect(()=>{const c=ce(ge,j=>{x(j||null)});return()=>c()},[]),e.jsxs(ye,{children:[e.jsxs(Ae,{children:[e.jsx(Fe,{src:we,alt:"dot",width:12,height:12}),e.jsx(Se,{src:X,alt:"avatar"})]}),e.jsxs("div",{children:[e.jsxs(ze,{children:[e.jsx(Te,{children:"Languages"}),e.jsxs(Ce,{children:[e.jsx(Le,{width:16,height:16,children:e.jsx("use",{xlinkHref:`${f}#icon-book-open`})}),e.jsx("p",{children:"Lessons online"})," ",e.jsx(S,{children:"|"})," ",e.jsxs("p",{children:["Lessons done: ",q]})," ",e.jsx(S,{children:"|"}),e.jsx(Ee,{width:16,height:16,fill:"#FFC531",children:e.jsx("use",{xlinkHref:`${f}#icon-star-full`})}),e.jsxs("p",{children:["Rating: ",Y," "]}),e.jsx(S,{children:"|"})," ",e.jsxs("p",{children:["Price / 1 hour: ",e.jsxs(Me,{children:[J,"$"]})]}),e.jsx(Be,{onClick:W,children:u&&d?e.jsx("svg",{width:26,height:26,stroke:"#F4C550",fill:"#F4C550",children:e.jsx("use",{xlinkHref:`${f}#icon-heart`})}):e.jsx("svg",{width:26,height:26,stroke:"#121417",fill:"transparent",children:e.jsx("use",{xlinkHref:`${f}#icon-heart`})})})]})]}),e.jsxs(Re,{children:[e.jsxs("h2",{children:[O," ",Q]}),e.jsxs(Ne,{children:[e.jsxs("li",{children:[e.jsx(F,{children:"Speaks: "})," ",e.jsx(Ie,{children:ne})]}),e.jsxs("li",{children:[e.jsx(F,{children:"Lesson Info: "}),D]}),e.jsxs("li",{children:[e.jsx(F,{children:"Conditions: "}),G]})]}),!g&&e.jsxs("div",{children:[e.jsx(_e,{onClick:V,children:"Read more"}),e.jsx(M,{children:E.map(c=>e.jsx(B,{$active:c===k,children:c},c))})]}),o&&e.jsxs("div",{children:[e.jsx("p",{children:Z}),ee.map((c,j)=>e.jsx(an,{item:c},j)),e.jsx(M,{children:E.map(c=>e.jsx(B,{children:c},c))}),e.jsx(Ve,{onClick:H,children:"Book trial lesson"}),e.jsx(de,{isOpen:l,onRequestClose:L,children:e.jsx(sn,{card:i,onRequestClose:L})})]})]})]})]})},cn=({renderCard:i})=>{const l=z(),r=b(P);return h.useEffect(()=>{l(xe())},[l]),e.jsx("ul",{children:r.slice(0,i).map(o=>e.jsx("li",{children:e.jsx(tn,{card:o})},o.id))})},dn=()=>{const[i,l]=h.useState(4),r=b(P),o=b(on),t=()=>{l(g=>g+4)};return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{children:e.jsx(ke,{})}),o&&e.jsx(ue,{}),!o&&r.length===0&&e.jsx(Je,{children:"No teachers found based on the selected filters 😕"}),e.jsx(cn,{renderCard:i}),i<r.length&&e.jsx(qe,{children:e.jsx(Xe,{onClick:t,children:"Load more"})})]})},U=s.div`
  background-color: ${n.colors.back};
  padding-block-start: ${n.spacing(5)};
  min-height: 100vh;
  min-inline-size: 100%;
`;function hn(){return e.jsx(U,{children:e.jsx(dn,{})})}const gn=Object.freeze(Object.defineProperty({__proto__:null,PageWrapper:U,default:hn},Symbol.toStringTag,{value:"Module"}));export{ke as F,U as P,tn as T,Ye as W,gn as a,ln as s};
