import { CheckBoxInputAttributes, TextInputAttributes } from "../domains/attributes/InputAttributes";
import { CheckBoxInputRepository, TextInputRepository } from "./repositories/Repositories";

class UniteRepository {
    private textInputRepo = new TextInputRepository();
    private checkBoxInputRepo = new CheckBoxInputRepository();
  
    // TextInput methods
    createTextInput(id: string, attributes: Partial<TextInputAttributes>) {
      return this.textInputRepo.create(id, attributes);
    }
  
    getTextInput(id: string) {
      return this.textInputRepo.get(id);
    }
  
    updateTextInput(id: string, attributes: Partial<TextInputAttributes>) {
      this.textInputRepo.update(id, attributes);
    }
  
    removeTextInput(id: string) {
      this.textInputRepo.remove(id);
    }
  
    // CheckBoxInput methods
    createCheckBoxInput(id: string, attributes: Partial<CheckBoxInputAttributes>) {
      return this.checkBoxInputRepo.create(id, attributes);
    }
  
    getCheckBoxInput(id: string) {
      return this.checkBoxInputRepo.get(id);
    }
  
    updateCheckBoxInput(id: string, attributes: Partial<CheckBoxInputAttributes>) {
      this.checkBoxInputRepo.update(id, attributes);
    }
  
    removeCheckBoxInput(id: string) {
      this.checkBoxInputRepo.remove(id);
    }
}
  