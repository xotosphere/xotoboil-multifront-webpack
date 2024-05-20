import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const Footer: React.VFC = () => {
    return (
        <footer
            style={{
                width: "100%",
                background: "#6565bf",
                color: "#FFFFFFFF",
                padding: "1rem",
                minHeight: "50px",
            }}
        >
            Footer from React
        </footer>
    );
};

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Footer,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
