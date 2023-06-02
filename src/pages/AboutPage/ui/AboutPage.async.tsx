import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // test
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
