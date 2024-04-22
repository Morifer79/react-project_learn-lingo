import{j as t,s as o,t as r,N as e}from"./index-88ecfa24.js";const n="/react-project_learn-lingo/assets/error1-783ccb39.png",s="/react-project_learn-lingo/assets/error2-cb5631e7.png",i=o.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 400px;
`,p=o.img`
  position: absolute;
  inline-size: 80px;
  block-size: 80px;
  top: 20px;
  right: 56px;

  @media screen and (min-width: 768px) {
    inline-size: 180px;
    block-size: 180px;
    top: 70px;
    right: 160px;
  }

  @media screen and (min-width: 1440px) {
    top: 68px;
    right: 465px;
  }
`,a=o.h1`
  font-size: 30px;
  position: absolute;
  top: 140px;
  transform: rotateY(37deg);

  @media screen and (min-width: 768px) {
    font-size: 60px;
    top: 330px;
    right: 60px;
  }

  @media screen and (min-width: 1440px) {
    top: 360px;
    right: 390px;
  }
`,c=o(e)`
  background-color: ${r.colors.cherry};
  color: ${r.colors.light};
  font-size: 30px;
  position: absolute;
  top: 180px;
  right: 35px;
  transform: rotateY(-58deg);
  transition: color ${r.transition} background-color ${r.transition};

  &:hover {
    background-color: transparent;
    color: ${r.colors.cherry};
  }
  @media screen and (min-width: 768px) {
    font-size: 60px;
    transform: rotateY(-88deg);
    top: 325px;
    right: -18px;
  }

  @media screen and (min-width: 1440px) {
    top: 350px;
    right: 310px;
  }
`;function d(){return t.jsxs(i,{children:[t.jsx("img",{src:n,alt:"error"}),t.jsx(p,{src:s,alt:"error"}),t.jsx(a,{children:"PAGE NOT FOUND"}),t.jsx(c,{to:"/teachers",children:"GO BACK"})]})}export{d as default};
