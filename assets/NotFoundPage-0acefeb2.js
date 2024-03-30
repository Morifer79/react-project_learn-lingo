import{j as o,s as t,t as r,N as s}from"./index-c62496c6.js";const e="/react-project_learn-lingo/assets/error1-783ccb39.png",n="/react-project_learn-lingo/assets/error2-cb5631e7.png",c=t.div`
  display: flex;
  justify-content: center;
  transform-style: preserve-3d;
  perspective: 400px;
`,i=t.img`
  position: absolute;
  top: 14%;
  right: 36%;
  inline-size: 180px;
  block-size: 180px;
`,a=t.h1`
  font-size: 75px;
  position: absolute;
  top: 65%;
  right: 30%;
  transform: rotateY(37deg);
`,l=t(s)`
  background-color: ${r.colors.cherry};
  color: ${r.colors.light};
  font-size: 65px;
  position: absolute;
  top: 65%;
  right: 26%;
  transform: rotateY(-88deg);
  transition: color ${r.transition} background-color ${r.transition};

  &:hover {
    background-color: transparent;
    color: ${r.colors.cherry};
  }
`;function g(){return o.jsxs(c,{children:[o.jsx("img",{src:e,alt:"error"}),o.jsx(i,{src:n,alt:"error"}),o.jsx(a,{children:"PAGE NOT FOUND"}),o.jsx(l,{to:"/teachers",children:"GO BACK"})]})}export{g as default};
