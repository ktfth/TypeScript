//// [tests/cases/compiler/declarationEmitNormalizedObjectLiteralUnion.ts] ////

//// [declarationEmitNormalizedObjectLiteralUnion.ts]
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


//// [declarationEmitNormalizedObjectLiteralUnion.js]
export const settings = {
    mode: Math.random() > 0.5 ? { fast: true } : { retries: 3 },
};
export const nested = {
    outer: {
        inner: Math.random() > 0.5 ? { x: 1 } : Math.random() > 0.5 ? { y: "s" } : { z: null },
    },
};
export const list = [{ fast: true }, { retries: 3 }];
export function make(flag) {
    return { mode: flag ? { fast: true } : { retries: 3 } };
}


//// [declarationEmitNormalizedObjectLiteralUnion.d.ts]
export declare const settings: {
    mode: {
        fast: boolean;
        retries?: undefined;
    } | {
        fast?: undefined;
        retries: number;
    };
};
export declare const nested: {
    outer: {
        inner: {
            x: number;
            y?: undefined;
            z?: undefined;
        } | {
            x?: undefined;
            y: string;
            z?: undefined;
        } | {
            x?: undefined;
            y?: undefined;
            z: null;
        };
    };
};
export declare const list: ({
    fast: boolean;
    retries?: undefined;
} | {
    fast?: undefined;
    retries: number;
})[];
export declare function make(flag: boolean): {
    mode: {
        fast: boolean;
        retries?: undefined;
    } | {
        fast?: undefined;
        retries: number;
    };
};
