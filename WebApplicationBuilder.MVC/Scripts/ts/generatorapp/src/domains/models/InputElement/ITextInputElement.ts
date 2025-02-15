import { IInputElement } from "../IInputElement"
export interface ITextInputElement extends IInputElement
{
    multiLine?:boolean;
    preFilledValue?:string;
}