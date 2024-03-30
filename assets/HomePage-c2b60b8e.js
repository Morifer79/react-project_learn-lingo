import{s as e,t as n,N as s,j as i}from"./index-6a48fa86.js";const r="/react-project_learn-lingo/assets/home-3b60c394.png",a=e.section`
  padding-block-end: ${n.spacing(16)};
`,o=e.div`
  display: flex;
  flex-wrap: wrap;
`,c=e.div`
  margin-block-end: ${n.spacing(12)};

  @media screen and (min-width: 321px) {
    display: flex;
    gap: ${n.spacing(12)};
  }
`,d=e.div`
  padding: ${n.spacing(3)};
  margin-block-end: ${n.spacing(3)};
  max-inline-size: 720px;
  min-inline-size: 320px;
  background-color: ${n.colors.back};
  border-radius: ${n.radii.l};

  @media screen and (min-width: 720px) {
    padding: 98px 64px;
    margin-block-end: 0;
  }

  p {
    margin-block-end: ${n.spacing(32)};
    line-height: 1.375;
  }
`,t=e.img`
  border-radius: ${n.radii.l};
`,l=e.h1`
  display: block;
  margin-block-end: ${n.spacing(16)};
  font-size: 48px;
  font-weight: 500;
  line-height: 1.166;

  i {
    font-weight: 400;
    border-radius: 8px;
    background-color: #fbe9ba;
  }
`,p=e(s)`
  display: inline-block;
  padding: ${n.spacing(8)} ${n.spacing(44)};
  border-radius: ${n.radii.xs};
  background: ${n.colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;
  transition: background-color ${n.transition};

  &:hover {
    background-color: ${n.colors.secondary};
  }
`,g=e.ul`
  padding: ${n.spacing(3)} ${n.spacing(10)};
  min-width: 320px;

  border: 1.5px dashed ${n.colors.primary};
  border-radius: ${n.radii.l};

  h2 {
    white-space: nowrap;
  }

  li {
    display: flex;
    align-items: center;
    gap: ${n.spacing(8)};
  }

  p {
    max-inline-size: 96px;
    font-size: 14px;
    line-height: 1.285;
    color: rgba(18, 20, 23, 0.7);
  }

  @media screen and (min-width: 321px) {
    padding: ${n.spacing(20)} ${n.spacing(61.5)};
    display: flex;
    justify-content: center;
    gap: ${n.spacing(50)};
  }
`,h=()=>i.jsx(a,{children:i.jsxs(o,{children:[i.jsxs(c,{children:[i.jsxs(d,{children:[i.jsxs(l,{children:["Unlock your potential with ",i.jsx("br",{}),"the best ",i.jsx("i",{children:"language"})," tutors"]}),i.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),i.jsx(p,{to:"/teachers",children:"Get started"})]}),i.jsx(t,{src:r,alt:"home"})]}),i.jsxs(g,{children:[i.jsxs("li",{children:[i.jsx("h2",{children:"32,000 +"}),i.jsx("p",{width:"96px",children:"Experienced tutors"})]}),i.jsxs("li",{children:[i.jsx("h2",{children:"300,000 +"}),i.jsx("p",{children:"5-star tutor reviews"})]}),i.jsxs("li",{children:[i.jsx("h2",{children:"120 +"}),i.jsx("p",{children:"Subjects taught"})]}),i.jsxs("li",{children:[i.jsx("h2",{children:"200 +"}),i.jsx("p",{children:"Tutor nationalities"})]})]})]})});function u(){return i.jsx(h,{})}export{u as default};
