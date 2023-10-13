//================useMemo=======================

// import { useRef, useEffect, useState, useMemo } from "react";

// import Page from "./component/page";

// function Child({ state }) {
//   console.log("render");
//   const data = useMemo(() => {
//     // return Math.random() + Math.random + console.log("Hello World");
//     console.log("Hello world");

//     return state * 10;
//   }, [state]);

//   return <div>Child {data}</div>;
// }

// function App() {
//   const [state, setState] = useState(0);

//   const [state2, setState2] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000);

//     const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

//     // console.log(id, () => clearInterval(id));
//     return () => {
//       clearInterval(id);
//       clearInterval(id2);
//     };
//   }, []);

//   return (
//     <Page>
//       Hello world {state} <Child state={state2} />
//     </Page>
//   );
// }

// export default App;

// //============================================================================

// import { useRef, useEffect, useState, useMemo } from "react";

// import Page from "./component/page";

// function Child({ state }) {
//   console.log("render");

//   // for (let i = 0; i < 1000000000; i++) {
//   //   result += i * state;
//   // }

//   // return <div>Child {result}</div>;

//   const data = useMemo(() => {
//     let result = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       result += i * state;
//     }

//     console.log("calc");

//     return result;
//   }, [state]);

//   return <div>Child {data}</div>;
// }

// function App() {
//   const [state, setState] = useState(0);

//   const [state2, setState2] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000);

//     const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

//     // console.log(id, () => clearInterval(id));
//     return () => {
//       clearInterval(id);
//       clearInterval(id2);
//     };
//   }, []);

//   return (
//     <Page>
//       Hello world {state} <Child state={state2} />
//     </Page>
//   );
// }

// export default App;

// //=====================useCallback=======================================================

// import { useEffect, useState, useMemo, useCallback } from "react";

// import Page from "./component/page";

// // function Child({ state }) {

// // function Child({ handleClick }) {

// function Child({ handleClick, state }) {
//   console.log("render");

//   useEffect(() => {
//     console.log("new handleClick");
//     // }, [handleClick]);
//   }, [state]);

//   // const handleClick = console.log("hello world") || (() => alert("click"));

//   // const handleClick = () => alert("click");

//   return <div onClick={handleClick}>Child</div>;
// }

// function App() {
//   const [state, setState] = useState(0);

//   const [state2, setState2] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000);

//     // const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

//     // console.log(id, () => clearInterval(id));
//     return () => {
//       clearInterval(id);
//       // clearInterval(id2);
//     };
//   }, []);

//   // const handleClick = () => alert("click");

//   // const handleClick = useMemo(() => () => alert("click"), []);

//   const handleClick = useCallback(() => alert("click"), []);

//   return (
//     <Page>
//       {/* Hello world {state} <Child state={state2} /> */}
//       Hello world {state} <Child state={state2} handleClick={handleClick} />
//     </Page>
//   );
// }

// export default App;

// //============================================================================

// import { useEffect, useState, useMemo, useCallback } from "react";

// import Page from "./component/page";

// // function Child({ state }) {

// // function Child({ handleClick }) {

// function Child({ handleClick, state }) {
//   console.log("render");

//   useEffect(() => {
//     console.log("new handleClick");
//     // }, [handleClick]);
//   }, [state]);

//   // const handleClick = console.log("hello world") || (() => alert("click"));

//   // const handleClick = () => alert("click");

//   return <div onClick={handleClick}>Child</div>;
// }

// function App() {
//   const [state, setState] = useState(0);

//   const [state2, setState2] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000);

//     // const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

//     // console.log(id, () => clearInterval(id));
//     return () => {
//       clearInterval(id);
//       // clearInterval(id2);
//     };
//   }, []);

//   // const handleClick = () => alert("click");

//   // const handleClick = useMemo(() => () => alert("click"), []);

//   const handleClick = useCallback(() => alert(state), []);

//   return (
//     <Page>
//       {/* Hello world {state} <Child state={state2} /> */}
//       Hello world {state} <Child state={state2} handleClick={handleClick} />
//     </Page>
//   );
// }

// export default App;

// //============================================================================

// import { useEffect, useState, useMemo, useCallback } from "react";

// import Page from "./component/page";

// // function Child({ state }) {

// // function Child({ handleClick }) {

// function Child({ handleClick, state }) {
//   console.log("render");

//   useEffect(() => {
//     console.log("new handleClick");
//     // }, [handleClick]);
//   }, [state]);

//   // const handleClick = console.log("hello world") || (() => alert("click"));

//   // const handleClick = () => alert("click");

//   return <div onClick={handleClick}>Child</div>;
// }

// function App() {
//   const [state, setState] = useState(0);

//   const [state2, setState2] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000);

//     const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

//     // console.log(id, () => clearInterval(id));
//     return () => {
//       clearInterval(id);
//       clearInterval(id2);
//     };
//   }, []);

//   // const handleClick = () => alert("click");

//   // const handleClick = useMemo(() => () => alert("click"), []);

//   const handleClick = useCallback(() => alert(state), [state2]);

//   return (
//     <Page>
//       {/* Hello world {state} <Child state={state2} /> */}
//       Hello world {state} <Child state={state2} handleClick={handleClick} />
//     </Page>
//   );
// }

// export default App;

// //============================================================================

// import { useEffect, useState, useMemo, useCallback } from "react";

// import Page from "./component/page";

// // function Child({ state }) {

// // function Child({ handleClick }) {

// function Child({ state }) {
//   // const handleClick = useCallback(() => alert(state), [state]);

//   const handleClick = () => alert(state);

//   console.log("render");

//   useEffect(() => {
//     console.log("new handleClick");
//     // }, [handleClick]);
//   }, [state]);

//   // const handleClick = console.log("hello world") || (() => alert("click"));

//   // const handleClick = () => alert("click");

//   return <div onClick={handleClick}>Child</div>;
// }

// function App() {
//   const [state, setState] = useState(0);

//   const [state2, setState2] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setState((prev) => prev + 1), 1000);

//     const id2 = setInterval(() => setState2((prev) => prev + 1), 5000);

//     // console.log(id, () => clearInterval(id));
//     return () => {
//       clearInterval(id);
//       clearInterval(id2);
//     };
//   }, []);

//   // const handleClick = () => alert("click");

//   // const handleClick = useMemo(() => () => alert("click"), []);

//   return (
//     <Page>
//       {/* Hello world {state} <Child state={state2} /> */}
//       Hello world {state} <Child state={state2} />
//     </Page>
//   );
// }

// export default App;

//=========================
// //================Memo============================================================

// import { memo, useEffect, useState } from "react";

// import Page from "./component/page";

// function Child({ value }) {
//   console.log("child render", value);

//   return <div>{value}</div>;
// }

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <Page>
//       <Child value={0} />
//     </Page>
//   );
// }

// export default App;

// //================Memo============================================================

// import { memo, useEffect, useState } from "react";

// import Page from "./component/page";

// const Child = memo(
//   ({ value }) => {
//     console.log("child render", value);

//     return <div>{value}</div>;
//   },
//   (prev, next) => {
//     console.log(prev, next);

//     // return false;

//     return true;
//   }
// );

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <Page>
//       <Child value={value} />
//     </Page>
//   );
// }

// export default App;

// //================Memo============================================================

// import { memo, useEffect, useState } from "react";

// import Page from "./component/page";

// const Child = memo(
//   ({ value }) => {
//     console.log("child render", value);

//     return <div>{value}</div>;
//   },
//   (prev, next) => {
//     console.log(prev, next);

//     return next.value % 5 !== 0;
//   }
// );

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);

//     return () => clearInterval(id);
//   }, []);

//   console.log("App");

//   return (
//     <Page>
//       <Child value={value} />
//     </Page>
//   );
// }

// export default App;

// //================Lazy============================================================

// import { lazy, useEffect, useState } from "react";

// import Page from "./component/page";

// const Child = lazy(() => import("./Child"));

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);

//     return () => clearInterval(id);
//   }, []);

//   console.log("App");

//   return <Page>{value > 20 && <Child value={value} />}</Page>;
// }

// export default App;

// //================Lazy============================================================

// import { lazy, useEffect, useState } from "react";

// import Page from "./component/page";

// const Child = lazy(() => import("./Child"));

// function App() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setValue((prev) => prev + 1), 1000);

//     return () => clearInterval(id);
//   }, []);

//   console.log("App");

//   return (
//     <Page>
//       <div>state: {value}</div>
//       <div>{value > 5 && <Child value={value} />}</div>
//     </Page>
//   );
// }

// export default App;

//================Lazy=====Suspense=======================================================

import { Suspense, lazy, useEffect, useState } from "react";

import Page from "./component/page";

const Child = lazy(() => import("./Child"));

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setValue((prev) => prev + 1), 1000);

    return () => clearInterval(id);
  }, []);

  console.log("App");

  return (
    <Page>
      <div>state: {value}</div>
      <div>
        {value > 5 && (
          <Suspense fallback={<div>Loading...</div>}>
            <Child value={value} />
          </Suspense>
        )}
      </div>
    </Page>
  );
}

export default App;
