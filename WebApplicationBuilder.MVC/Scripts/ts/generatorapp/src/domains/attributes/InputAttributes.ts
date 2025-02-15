export interface BaseInputAttributes {
    id: string;
    type: string;
    value?: string | number | boolean;
    placeholder?: string;
    required?: boolean;
}
export interface TextInputAttributes extends BaseInputAttributes {
    maxlength?: number;
  }
  
// Specific attributes for checkbox inputs
export interface CheckBoxInputAttributes extends BaseInputAttributes {
    checked?: boolean;
}