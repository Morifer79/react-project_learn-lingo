import{s,t as n,F as V,e as D,g as f,j as e,b as G,S as P,T as K,E as j,h as $,B as Z,_ as T,i as g,k as ee,r as p,d as C,u as ne,o as se,A as ie,l as re,m as ae,n as oe}from"./index-c62496c6.js";const le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABHNCSVQICAgIfAhkiAAAAMNJREFUKJGVkjEKwkAQRd9usyB4gNSCVlaKV7ENpLCxjYewtrEIpPUqslZWyQVyAEHYxm+zkUQN6IMthv8/szuz0EFSLslLCvF4STnvSJpEcQgvaQJgYsADi+peUzQl55sHYDVekiUps9EU4GKMWZrYcl/dazb1lvAIve7OOo7TQxvaWWANUDTlhxkgPAJFU7bl2gJz4HWNb3S0uR10DWCBa/vAITra1QIngCxJcdZ9mJ11ZEnalqe/x0oM/Ly4Hr98jScNGre4wUvSpwAAAABJRU5ErkJggg==",te=s.div`
  margin-block: ${n.spacing(8)};
  margin-inline: auto;
  padding: ${n.spacing(12)};

  max-inline-size: 1184px;
  display: flex;
  gap: ${n.spacing(24)};
  background-color: ${n.colors.light};
  border-radius: ${n.radii.l};
`,ce=s.div`
  flex-shrink: 0;
`,de=s.div`
  display: flex;
`,he=s.img`
  padding: ${n.spacing(6)};
  inline-size: 126px;
  block-size: 126px;
  border-radius: ${n.radii.xxl};
  border: 3px solid #fbe9ba;
`,pe=s.img`
  transform: translate(88px, 34px);
  border-radius: ${n.radii.xxl};
`,xe=s.div`
  max-inline-size: 968px;
`,ge=s.div`
  display: flex;
  gap: 160px;

  p {
    display: inline-flex;
    font-weight: 500;
    line-height: 1.5;
  }
`,ue=s.span`
  font-weight: 500;
  line-height: 1.5;
  color: ${n.colors.accent};
`,k=s.span`
  margin-inline: ${n.spacing(8)};
  color: rgba(18, 20, 23, 0.2);
`,me=s.svg`
  transform: translateY(3px);
  margin-inline-end: ${n.spacing(4)};
`,be=s.svg`
  transform: translateY(3px);
  margin-inline-end: ${n.spacing(4)};
`,fe=s.span`
  margin-inline-start: ${n.spacing(2)};
  color: ${n.colors.grass};
`,je=s.button`
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
`,ve=s.div`
  h2 {
    margin-block-end: ${n.spacing(16)};

    font-size: 24px;
    font-weight: 500;
    line-height: 1;
  }
`,$e=s.ul`
  margin-block-end: ${n.spacing(8)};

  display: flex;
  flex-direction: column;
  gap: ${n.spacing(4)};
  font-weight: 500;
  line-height: 1.5;
`,y=s.span`
  color: ${n.colors.accent};
`,ke=s.span`
  text-decoration: underline;
`,ye=s.button`
  margin-block-end: ${n.spacing(16)};
  border: none;
  background-color: transparent;
  font-weight: 500;
  text-decoration: underline;

  &.active {
    display: none;
  }
`,F=s.ul`
  display: flex;
  gap: ${n.spacing(4)};
`,z=s.li`
  padding: ${n.spacing(4)} ${n.spacing(6)};

  background-color: ${({$active:i,theme:a})=>i?a.colors.primary:a.colors.light};
  border: ${({$active:i})=>i?"none":"1px solid rgba(18, 20, 23, 0.2)"};
  border-radius: ${n.radii.xl};
  color: ${n.colors.main};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.142;
`,Ae=s.div``,we=s.div``,Se=s.div`
  margin-block: ${n.spacing(17.5)} ${n.spacing(8)};

  display: flex;
  gap: ${n.spacing(6)};
`,Ce=s.img`
  border-radius: ${n.radii.xxl};
`,Fe=s.div`
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
`,ze=s.p`
  margin-block-end: ${n.spacing(16)};

  font-weight: 500;
  line-height: 1.5;
`,Te=s.button`
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
`,Ye=s.button`
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
`,Je=s.div`
  text-align: center;
`,Oe=s.div`
  padding-inline-start: 122px;
`,Qe=s.div`
  margin-block-start: 10%;
  text-align: center;
  font-size: 40px;
`,Le=s.div`
  display: flex;
  gap: ${n.spacing(7)};
  margin-block-end: ${n.spacing(20)};
`,Me=s.div`
  display: flex;
  flex-direction: column;
`,Be=s.img`
  border-radius: ${n.radii.xxl};
`,Ee=s.span`
  color: ${n.colors.accent};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.333;
`,Ie=s.h3`
  font-weight: 500;
  line-height: 1.5;
`,Re=s.h2`
  margin-block-end: ${n.spacing(10)};

  font-weight: 500;
  line-height: 1.5;
`,Ne=s.div`
  margin-block-end: ${n.spacing(20)};
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    line-height: 1.375;
  }
`,x=s(V)`
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
`,He=D({reason:f().required("Choose one of the answers"),fullName:f().min(3,"Minimum 3 characters").max(30,"Maximum 30 characters").required("Required"),email:f().email("Invalid email address").required("This is a required field"),number:f().min(9,"Sample format: XXX-XX-XX").max(9,"Sample format: XXX-XX-XX").required("This is a required field").matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and dashes.")}),Ue=({card:i,onRequestClose:a})=>{const o=({reason:l,fullName:t,email:v,number:d},{resetForm:c})=>{T.success("The data was successfully sent.",{duration:5e3,position:"top-right"}),c(),a()};return e.jsx(G,{initialValues:{reason:"",fullName:"",email:"",number:""},onSubmit:o,validationSchema:He,children:e.jsxs(P,{children:[e.jsx(K,{children:"Book trial lesson"}),e.jsx("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),e.jsxs(Le,{children:[e.jsx(Be,{src:i.avatar_url,alt:"avatar",width:44,height:44}),e.jsxs(Me,{children:[e.jsx(Ee,{children:"Your teacher"}),e.jsxs(Ie,{children:[i.name," ",i.surname]})]})]}),e.jsxs("label",{"aria-label":"Field for reason",name:"reason",children:[e.jsx(Re,{children:"What is your main reason for learning English?"}),e.jsxs(Ne,{children:[e.jsxs("label",{children:[e.jsx(x,{type:"radio",name:"reason",value:"One"}),"Career and business"]}),e.jsxs("label",{children:[e.jsx(x,{type:"radio",name:"reason",value:"Two"}),"Lesson for kids"]}),e.jsxs("label",{children:[e.jsx(x,{type:"radio",name:"reason",value:"Three"}),"Living abroad"]}),e.jsxs("label",{children:[e.jsx(x,{type:"radio",name:"reason",value:"Four"}),"Exams and coursework"]}),e.jsxs("label",{children:[e.jsx(x,{type:"radio",name:"reason",value:"Five"}),"Culture, travel or hobby"]})]}),e.jsx(j,{name:"reason",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Full name",children:[e.jsx($,{type:"text",name:"fullName",placeholder:"Name"}),e.jsx(j,{name:"fullName",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Email",children:[e.jsx($,{type:"email",name:"email",placeholder:"Email"}),e.jsx(j,{name:"email",component:"div"})]}),e.jsxs("label",{"aria-label":"Field for Phone number",children:[e.jsx($,{type:"tel",name:"number",placeholder:"Phone number"}),e.jsx(j,{name:"number",component:"div"})]}),e.jsx(Z,{type:"submit",children:e.jsx("span",{children:"Book"})})]})})},We=({item:i})=>{const{reviewer_avatar:a,reviewer_name:o,reviewer_rating:l,comment:t}=i;return e.jsxs(e.Fragment,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{src:a,alt:"avatar",width:44,height:44}),e.jsxs(Fe,{children:[e.jsx("h3",{children:o}),e.jsxs("p",{children:[e.jsx("svg",{width:16,height:16,fill:"#FFC531",children:e.jsx("use",{xlinkHref:`${g}#icon-star-full`})}),l,".0"]})]})]}),e.jsx(ze,{children:t})]})},_e=i=>i.teachers.teachers,Xe=i=>i.favorites.favorites,Ve=i=>i.teachers.loading,L=i=>i.filter.filters,De=ee([L,_e],(i,a)=>{const{language:o,level:l,price:t}=i;return o==="all"&&l==="all"&&t==="all"?a:a.filter(d=>{const c=o.includes("all")||d.languages.includes(o),u=l==="all"||d.levels.some(m=>m.includes(l)),h=t==="all"||d.price_per_hour===Number(t);return c&&u&&h})}),Ge=({card:i})=>{const[a,o]=p.useState(!1),[l,t]=p.useState(null),[v,d]=p.useState(!1),[c,u]=p.useState(null),h=C(Xe),m=h==null?void 0:h.some(r=>r.lessons_done===i.lessons_done),M=C(L).level,A=ne(),B=()=>{if(!c){T.error("You don`t authorized!",{duration:5e3,position:"top-right"});return}A(m&&c?re(i.id):ae(i))},E=()=>{o(!0),document.body.style.overflow="hidden"},w=()=>{o(!1),document.body.style.overflow=""},I=()=>{t(!0),d(!0)},{avatar_url:R,lessons_done:N,rating:H,price_per_hour:U,name:W,surname:_,lesson_info:X,conditions:q,languages:Y,levels:S,experience:J,reviews:O}=i,Q=Y.join(", ");return p.useEffect(()=>{const r=se(oe,b=>{u(b||null)});return()=>r()},[]),e.jsxs(te,{children:[e.jsxs(ce,{children:[e.jsx(pe,{src:le,alt:"dot",width:12,height:12}),e.jsx(he,{src:R,alt:"avatar"})]}),e.jsxs(xe,{children:[e.jsxs(ge,{children:[e.jsx(ue,{children:"Languages"}),e.jsxs(de,{children:[e.jsx(me,{width:16,height:16,children:e.jsx("use",{xlinkHref:`${g}#icon-book-open`})}),e.jsx("p",{children:"Lessons online"})," ",e.jsx(k,{children:"|"})," ",e.jsxs("p",{children:["Lessons done: ",N]})," ",e.jsx(k,{children:"|"}),e.jsx(be,{width:16,height:16,fill:"#FFC531",children:e.jsx("use",{xlinkHref:`${g}#icon-star-full`})}),e.jsxs("p",{children:["Rating: ",H," "]}),e.jsx(k,{children:"|"})," ",e.jsxs("p",{children:["Price / 1 hour: ",e.jsxs(fe,{children:[U,"$"]})]}),e.jsx(je,{onClick:B,children:m&&c?e.jsx("svg",{width:26,height:26,stroke:"#F4C550",fill:"#F4C550",children:e.jsx("use",{xlinkHref:`${g}#icon-heart`})}):e.jsx("svg",{width:26,height:26,stroke:"#121417",fill:"transparent",children:e.jsx("use",{xlinkHref:`${g}#icon-heart`})})})]})]}),e.jsxs(ve,{children:[e.jsxs("h2",{children:[W," ",_]}),e.jsxs($e,{children:[e.jsxs("li",{children:[e.jsx(y,{children:"Speaks: "})," ",e.jsx(ke,{children:Q})]}),e.jsxs("li",{children:[e.jsx(y,{children:"Lesson Info: "}),X]}),e.jsxs("li",{children:[e.jsx(y,{children:"Conditions: "}),q]})]}),!v&&e.jsxs(Ae,{children:[e.jsx(ye,{onClick:I,children:"Read more"}),e.jsx(F,{children:S.map(r=>e.jsx(z,{$active:r===M,children:r},r))})]}),l&&e.jsxs(we,{children:[e.jsx("p",{children:J}),O.map((r,b)=>e.jsx(We,{item:r},b)),e.jsx(F,{children:S.map(r=>e.jsx(z,{children:r},r))}),e.jsx(Te,{onClick:E,children:"Book trial lesson"}),e.jsx(ie,{isOpen:a,onRequestClose:w,children:e.jsx(Ue,{card:i,onRequestClose:w})})]})]})]})]})};export{Je as B,Qe as I,Ge as T,Oe as W,Ye as a,Xe as b,De as g,Ve as s};
