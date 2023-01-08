import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import MarketingApp from "./component/MarketingApp";

const generateClassName = createGenerateClassName({
    productionPrefix: "co",
});

const App = () => (
    <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <div className="marketing-container">
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    </StylesProvider>
);

export default App;
