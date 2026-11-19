// @declaration: true
// @strict: true

export const settings = {
    mode: Math.random() > 0.5 ? { fast: true } : { retries: 3 },
};

export const nested = {
    outer: {
        inner: Math.random() > 0.5 ? { x: 1 } : Math.random() > 0.5 ? { y: "s" } : { z: null },
    },
};

export const list = [{ fast: true }, { retries: 3 }];

export function make(flag: boolean) {
    return { mode: flag ? { fast: true } : { retries: 3 } };
}
