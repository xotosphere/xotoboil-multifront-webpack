import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const Header: React.VFC = () => {
    return (
        <header
            style={{
                width: "100%",
                background: "#6565bf",
                color: "#FFFFFFFF",
                padding: "1rem",
                minHeight: "50px",
            }}
        >
            Header from React
        </header>
    );
};

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Header,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
