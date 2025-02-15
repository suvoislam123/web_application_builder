import { CheckBoxInputAttributes, TextInputAttributes } from "../../domains/attributes/InputAttributes";
import { InputUnit } from "../IUnitRepositories";

// Repository for TextInput
 class TextInputRepository implements IRepository<InputUnit<TextInputAttributes>, TextInputAttributes> {
    private inputs: Map<string, InputUnit<TextInputAttributes>> = new Map();
  
    create(id: string, attributes: Partial<TextInputAttributes>): InputUnit<TextInputAttributes> {
      if (this.inputs.has(id)) {
        throw new Error(`TextInput with ID "${id}" already exists.`);
      }
      const inputUnit = new InputUnit<TextInputAttributes>("text", id, attributes);
      this.inputs.set(id, inputUnit);
      return inputUnit;
    }
  
    get(id: string): InputUnit<TextInputAttributes> | undefined {
      return this.inputs.get(id);
    }
  
    update(id: string, attributes: Partial<TextInputAttributes>): void {
      const inputUnit = this.inputs.get(id);
      if (!inputUnit) {
        throw new Error(`TextInput with ID "${id}" not found.`);
      }
      inputUnit.updateAttributes(attributes);
    }
  
    remove(id: string): void {
      if (!this.inputs.delete(id)) {
        throw new Error(`TextInput with ID "${id}" not found.`);
      }
    }
  }
  

   class CheckBoxInputRepository implements IRepository<InputUnit<CheckBoxInputAttributes>, CheckBoxInputAttributes> {
    private inputs: Map<string, InputUnit<CheckBoxInputAttributes>> = new Map();
  
    create(id: string, attributes: Partial<CheckBoxInputAttributes>): InputUnit<CheckBoxInputAttributes> {
      if (this.inputs.has(id)) {
        throw new Error(`CheckBoxInput with ID "${id}" already exists.`);
      }
      const inputUnit = new InputUnit<CheckBoxInputAttributes>("checkbox", id, attributes);
      this.inputs.set(id, inputUnit);
      return inputUnit;
    }
  
    get(id: string): InputUnit<CheckBoxInputAttributes> | undefined {
      return this.inputs.get(id);
    }
  
    update(id: string, attributes: Partial<CheckBoxInputAttributes>): void {
      const inputUnit = this.inputs.get(id);
      if (!inputUnit) {
        throw new Error(`CheckBoxInput with ID "${id}" not found.`);
      }
      inputUnit.updateAttributes(attributes);
    }
  
    remove(id: string): void {
      if (!this.inputs.delete(id)) {
        throw new Error(`CheckBoxInput with ID "${id}" not found.`);
      }
    }
}
export {TextInputRepository,CheckBoxInputRepository}
