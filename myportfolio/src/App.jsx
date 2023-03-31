import Header from "./components/Header";
import Introduce from "./components/introduce";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
    return (
        // Container
        <div className="bg-red-100 min-h-screen">
            <Header />
            <main>
                <Introduce />
                <Portfolio />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
