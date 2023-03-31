// /*
// // function App() {
// //     return (
// //         <div className="bg-red-100 min-h-screen">
// //             <header className=" bg-blue-100 h-12 md:h-20">
// //                 <div className="max-w-screen-xl mx-auto  h-full flex justify-between items-center ">
// //                     <div>최주연's Portfolio</div>

// import { useState } from "react";

// //                     <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm  md:text-base">
// //                         <li className="bg-indigo-300 btn-style ">Intoduce</li>
// //                         <li className="bg-purple-300 btn-style">Portfolio</li>
// //                         <li className="bg-blue-300 btn-style">Contact Me</li>
// //                     </ul>
// //                 </div>
// //             </header>
// //         </div>
// //     );
// // }

// // export default App;

// /*주로 일회성으로 사용하는 함수를 원할 때는 화살표 함수를 정의한다
// function Add(a, b) {
//     return a + b;
// }
// (a, b) => {
//     return a + b;
// };
// */
// // function App() {
// const App = () => {
//     //count : 현재 저장되어 있는값
//     // setCount : 없데이트 되는 기능 ( 함수임)
//     //useState(0 ) => 초기값을 설정  => UseState : 이미 기능이 정해져 있음.
//     const [count, setCount] = useState(0);

//     //변수를 따로 정의해서 지정해줘도 된다.
//     const onClickAdd = () => {
//         setCount(count + 1);
//     };
//     const onClickSubtract = () => {
//         setCount(count - 1);
//         if (count <= 0) {
//             alert("count의 값이 0보다 작을 수 없습니다 ! !");
//             return;
//         }
//     };
//     // const onClickSubtract = () => {
//     //     setCount((prev) => {
//     //         console.log(prev);
//     //         return prev - 1;
//     //     });
//     // };

//     return (
//         <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
//             <div>{count}</div>
//             <button
//                 className="bg-green-300 w-12 p-12 rounded-full"
//                 // 화살표 함수
//                 //함수라는 것은 인자를 받아서 ouput을 출력하는 것이다

//                 // onClick={() => console.log("Clicked!")}

//                 //함수로 지정한 부분을 선언하는 부분
//                 onClick={onClickAdd}
//             >
//                 +
//             </button>
//             <button
//                 className="bg-red-300 w-12 p-12 rounded-full"
//                 // 화살표 함수

//                 onClick={onClickSubtract}
//             >
//                 -
//             </button>
//         </div>
//         // <div className="bg-red-100 min-h-screen">
//         //     <header className="bg-blue-100 h-12 md:h-20">
//         //         <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
//         //             <div>최주연's Portfolio</div>
//         //             <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
//         //                 <li className="bg-indigo-300 btn-style">Introduce</li>
//         //                 <li className="bg-purple-300 btn-style">Portfolio</li>
//         //                 <li className="bg-blue-300 btn-style">Contact Me</li>
//         //             </ul>
//         //         </div>
//         //     </header>
//         //</div>
//     );
// };

// export default App;

/////ㄱ계산기 작업
// import { useState } from "react";

// const App = () => {
//     const [num1, setNum1] = useState();
//     const [num2, setNum2] = useState();
//     const [result, setResult] = useState(0);

//     const onChangeNum1 = (e) => {
//         if (!isNumeric(e.target.value)) {
//             alert("숫자를 입력해주세요!");
//             return;
//         } else setNum1(e.target.value);
//     };
//     const onChangeNum2 = (e) => {
//         if (!isNumeric(e.target.value)) {
//             alert("숫자를 입력해주세요!");
//             return;
//         } else setNum2(e.target.value);
//     };

//     const checkNum = (n1, n2) => {
//         if (n1 === "" || n2 === "") {
//             alert("값을 입력해주세요.");
//             return;
//         }
//     };

//     function isNumeric(value) {
//         return !isNaN(value);
//     }

//     const onClickAdd = () => {
//         checkNum(num1, num2);

//         setResult(parseInt(num1) + parseInt(num2));
//     };

//     const onClickSubtract = () => {
//         checkNum(num1, num2);

//         setResult(parseInt(num1) - parseInt(num2));
//     };
//     const onClickMultiply = () => {
//         checkNum(num1, num2);

//         setResult(parseInt(num1) * parseInt(num2));
//     };
//     const onClickDivide = () => {
//         checkNum(num1, num2);

//         setResult(parseInt(parseInt(num1) / parseInt(num2)));
//     };

//     return (
//         <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
//             <h1 className="text-2xl font-bold mb-4">
//                 Awesome한 계산기(로 바뀔예정)
//             </h1>
//             <div className="text-3xl font-black mb-4">{result}</div>
//             <div className="mb-4">
//                 <input
//                     className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl"
//                     type="text"
//                     value={num1}
//                     onChange={onChangeNum1}
//                 />
//                 <input
//                     className="border-2 focus:outline-none focus:border-purple-400 rounded-lg px-4 py-2 text-xl ml-4"
//                     type="text"
//                     value={num2}
//                     onChange={onChangeNum2}
//                 />
//             </div>
//             <div>
//                 <button
//                     onClick={onClickAdd}
//                     className="border-2 px-2 py-1 rounded-lg border-red-500 text-red-500"
//                 >
//                     Add
//                 </button>
//                 <button
//                     onClick={onClickSubtract}
//                     className="border-2 px-2 py-1 rounded-lg border-blue-500 text-blue-500 ml-4"
//                 >
//                     Subtract
//                 </button>
//                 <button
//                     onClick={onClickMultiply}
//                     className="border-2 px-2 py-1 rounded-lg border-yellow-500 text-yellow-500 ml-4"
//                 >
//                     Multiply
//                 </button>
//                 <button
//                     onClick={onClickDivide}
//                     className="border-2 px-2 py-1 rounded-lg border-green-500 text-green-500 ml-4"
//                 >
//                     Divide
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default App;

import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

const App = () => {
    return (
        <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
            <A />
            <B />
            <C />
        </div>
    );
};

export default App;
