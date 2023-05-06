import { imp } from "./imp";

interface TestInt {
    test: string;
}

const asdf = (): string => {
    return imp;
};

const template: TestInt = {
    test: "Hello",
};

export { template, asdf };
export type { TestInt };
