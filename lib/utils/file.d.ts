import { MediaType } from "./../interfaces";
declare type TypeMap = {
    [key in MediaType]: {
        extension: string;
        name: string;
    };
};
export declare const typeMap: TypeMap;
export declare const generateFilename: (str: string, extension: string) => string;
export {};
