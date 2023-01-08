import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import MarketingApp from "./component/MarketingApp";

const App = () => (
    <BrowserRouter>
        <div className="marketing-container">
            <Header />
            <MarketingApp />
        </div>
    </BrowserRouter>
);

export default App;
