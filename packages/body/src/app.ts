import singleSpaVue, { AppOptions } from "single-spa-vue";
import { h, createApp, render } from "vue";
import App from "./App.vue";

const lifecycles = singleSpaVue({
    createApp,
    async appOptions(props: AppOptions) {

            return h(App, {
                props: {
                    // single-spa props are available on the "this" object. Forward them to your component as needed.
                    // <https://single-spa.js.org/docs/building-applications#lifecyle-props>
                    name: props.name,
                    mountParcel: props.mountParcel,
                    singleSpa: props.singleSpa,
                },
            });
    },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
