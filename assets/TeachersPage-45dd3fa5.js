import{s as c,t as s,F as L,u as x,r as o,a as $,j as e,b as k,c as F,d as u,f as T,L as B}from"./index-c62496c6.js";import{g as j,T as y,s as P,W as S,I as w,B as A,a as E}from"./TeacherCard-0c69cfb9.js";const z="/react-project_learn-lingo/assets/chevron-down-c553fb51.svg",h=c.label`
  color: rgb(138, 138, 137);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;

  display: inline-flex;
  flex-direction: column;
`,g=c(L)`
  margin-block-start: ${s.spacing(4)};
  margin-inline-end: ${s.spacing(10)};
  padding: ${s.spacing(7)} ${s.spacing(9)};

  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.111;
  outline: none;
  border: none;
  border-radius: ${s.radii.s};
  appearance: none;
  overflow: hidden;
  background: right 14px center no-repeat url(${z}), ${s.colors.light};

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
`,I=c.button`
  padding-block: ${s.spacing(7)};
  vertical-align: bottom;

  color: ${s.colors.primary};
  background: transparent;
  border: none;

  &:hover {
    color: ${s.colors.secondary};
  }
`,R=["French","English","German","Ukrainian","Polish","Spanish","Italian","Korean","Mandarin Chinese","Vietnamese"],V=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],N=["25","27","28","30","32","35"],p={languages:R,levels:V,prices:N},W=()=>{const r=x(),i={language:"all",level:"all",price:"all"},[a,l]=o.useState(i);o.useEffect(()=>{r($(a))},[a,r]);const t=(n,b)=>{l(C=>({...C,[n]:b.target.value}))},d=n=>t("language",n),m=n=>t("level",n),v=n=>t("price",n),f=()=>l(i);return e.jsx(k,{initialValues:a,children:()=>e.jsxs(F,{children:[e.jsxs(h,{children:["Languages",e.jsxs(g,{as:"select",id:"language",className:"language",name:"language",value:a.language,onChange:d,children:[e.jsx("option",{value:"all",children:"All"}),p.languages.map(n=>e.jsx("option",{value:n,children:n},n))]})]}),e.jsxs(h,{children:["Level of knowledge",e.jsxs(g,{as:"select",id:"level",className:"level",name:"level",value:a.level,onChange:m,children:[e.jsx("option",{value:"all",children:"All"}),p.levels.map(n=>e.jsx("option",{value:n,children:n},n))]})]}),e.jsxs(h,{children:["Price",e.jsxs(g,{as:"select",id:"price",className:"price",name:"price",value:a.price,onChange:v,children:[e.jsx("option",{value:"all",children:"All"}),p.prices.map(n=>e.jsxs("option",{value:n,children:[n," $"]},n))]})]}),e.jsx(I,{type:"button",onClick:f,children:"Reset"})]})})},D=({renderCard:r})=>{const i=x(),a=u(j);return o.useEffect(()=>{i(T())},[i]),e.jsx("ul",{children:a.slice(0,r).map(l=>e.jsx("li",{children:e.jsx(y,{card:l})},l.id))})},M=()=>{const[r,i]=o.useState(4),a=u(j),l=u(P),t=()=>{i(d=>d+4)};return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsx(W,{})}),l&&e.jsx(B,{}),!l&&a.length===0&&e.jsx(w,{children:"No teachers found based on the selected filters 😕"}),e.jsx(D,{renderCard:r}),r<a.length&&e.jsx(A,{children:e.jsx(E,{onClick:t,children:"Load more"})})]})},U=c.div`
  background-color: ${s.colors.back};
  padding-block-start: ${s.spacing(5)};
  min-height: 100vh;
`;function _(){return e.jsx(U,{children:e.jsx(M,{})})}export{U as PageWrapper,_ as default};
