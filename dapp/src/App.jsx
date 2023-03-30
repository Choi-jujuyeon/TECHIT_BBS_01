/*
bg-red-100 : 색깔 지정하기 
min-h-screen :  세로 화면에 맞게 100퍼센트 채우기! 
최소 높이 값을 screen 으로 주게 된 것이다. 

최소값 == 스크린 값이 된다.. 

/h- (~~96)까지 들어가게 된다 

h-full : 부모와 똑같아짐




*/

function App() {
    return (
        <div className="bg-red-100 min-h-screen">
            <header className=" bg-blue-100 h-12 md:h-20">
                <div className="max-w-screen-xl mx-auto bg-yellow-100 h-full flex justify-between items-option">
                    <div>최주연's Portfolio</div>
                </div>
                <ul className="flex gap-2 md:gap-8 text-base sm:text-sm md:text-base">
                    <li>Intoduce</li>
                    <li>Portfolio</li>
                    <li>Contact Me</li>
                </ul>
            </header>
        </div>
    );
}

export default App;
