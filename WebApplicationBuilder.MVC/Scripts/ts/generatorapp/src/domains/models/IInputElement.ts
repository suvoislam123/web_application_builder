import { ILabelElement } from "./otherElement/ILabelElement";
import { IElement } from "./IElement";
import { Side } from "../../domains/models/enum/Side";
export interface IInputElement extends IElement
{
    label?:ILabelElement;
    labelPosition?:Side;
}