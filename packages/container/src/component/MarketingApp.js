import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
    const elRef = useRef();

    useEffect(() => {
        mount(elRef.current);
    }, []);

    return <div ref={elRef} />;
};

export default MarketingApp;
