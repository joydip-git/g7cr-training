/*
import { AdapterArgType, AdapterReturnType } from "../adapter-types/product-adapter.types";

export interface IProductAdapter {
    handle(data: AdapterArgType): Promise<AdapterReturnType>
}
*/

import { Optional } from "typescript-optional";

export interface IProductAdapter<TInput, TResult> {
    handle(data?: TInput, param?: any): Promise<TResult> | Promise<TResult[]>
}