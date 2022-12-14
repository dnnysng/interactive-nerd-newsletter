import Newsletter from "./components/newsletter/Newsletter";

import style from "./App.module.css";

function App() {
    return (
        <div className={`${style.container} ${style.theme}`}>
            <Newsletter />
        </div>
    );
}

export default App;
