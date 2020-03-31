import { BookData, RequiredKeys } from "./../interfaces";
/**
 *  A collection of utils for processing book data
 */
export declare function bookIsReserved(book: BookData): boolean;
export declare function bookIsReady(book: BookData): boolean;
export declare function bookIsBorrowed(book: BookData): book is RequiredKeys<BookData, "fulfillmentLinks">;
export declare function bookIsOpenAccess(book: BookData): book is RequiredKeys<BookData, "openAccessLinks">;
export declare function bookIsBorrowable(book: BookData): book is RequiredKeys<BookData, "borrowUrl">;
