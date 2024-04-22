import{s as e,t as i,N as a,j as n}from"./index-88ecfa24.js";const s="/react-project_learn-lingo/assets/home-3b60c394.png",r=e.section`
  padding-block-end: ${i.spacing(16)};
`,c=e.div`
  display: flex;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
  }
`,d=e.div`
  margin-block-end: ${i.spacing(12)};

  display: flex;
  gap: ${i.spacing(12)};
  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }
`,t=e.div`
  padding: ${i.spacing(12)} ${i.spacing(8)};
  margin-block-end: ${i.spacing(3)};
  background-color: ${i.colors.back};
  border-radius: ${i.radii.l};

  @media screen and (min-width: 768px) {
    padding: ${i.spacing(24.5)} ${i.spacing(16)};
    margin-block-end: 0;
  }

  @media screen and (min-width: 1440px) {
    padding: ${i.spacing(49)} ${i.spacing(32)};
    margin-block-end: 0;
  }

  p {
    margin-block-end: ${i.spacing(32)};
    line-height: 1.375;
  }
`,o=e.img`
  border-radius: ${i.radii.l};
`,l=e.h1`
  display: block;
  margin-block-end: ${i.spacing(16)};
  font-size: 36px;
  font-weight: 500;
  line-height: 1.166;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }

  i {
    font-weight: 400;
    border-radius: 8px;
    background-color: #fbe9ba;
  }
`,p=e(a)`
  display: inline-block;
  padding: ${i.spacing(8)} ${i.spacing(44)};
  border-radius: ${i.radii.xs};
  background: ${i.colors.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.555;
  transition: background-color ${i.transition};

  &:hover {
    background-color: ${i.colors.secondary};
  }
`,g=e.ul`
  padding: ${i.spacing(3)} ${i.spacing(10)};
  display: flex;
  justify-content: center;
  gap: ${i.spacing(10)};

  border: 1.5px dashed ${i.colors.primary};
  border-radius: ${i.radii.l};

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    padding: ${i.spacing(20)} ${i.spacing(61.5)};
    gap: ${i.spacing(50)};
  }

  h2 {
    white-space: nowrap;
  }

  li {
    display: flex;
    align-items: center;
    gap: ${i.spacing(8)};
    @media screen and (max-width: 1439px) {
      justify-content: space-between;
    }
  }

  p {
    max-inline-size: 96px;
    font-size: 14px;
    line-height: 1.285;
    color: rgba(18, 20, 23, 0.7);
  }
`,h=()=>n.jsx(r,{children:n.jsxs(c,{children:[n.jsxs(d,{children:[n.jsxs(t,{children:[n.jsxs(l,{children:["Unlock your potential with ",n.jsx("br",{}),"the best ",n.jsx("i",{children:"language"})," tutors"]}),n.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),n.jsx(p,{to:"/teachers",children:"Get started"})]}),n.jsx(o,{src:s,alt:"home"})]}),n.jsxs(g,{children:[n.jsxs("li",{children:[n.jsx("h2",{children:"32,000 +"}),n.jsx("p",{width:"96px",children:"Experienced tutors"})]}),n.jsxs("li",{children:[n.jsx("h2",{children:"300,000 +"}),n.jsx("p",{children:"5-star tutor reviews"})]}),n.jsxs("li",{children:[n.jsx("h2",{children:"120 +"}),n.jsx("p",{children:"Subjects taught"})]}),n.jsxs("li",{children:[n.jsx("h2",{children:"200 +"}),n.jsx("p",{children:"Tutor nationalities"})]})]})]})});function m(){return n.jsx(h,{})}export{m as default};
