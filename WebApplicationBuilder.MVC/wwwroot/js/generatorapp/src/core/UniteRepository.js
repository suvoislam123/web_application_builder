import { CheckBoxInputRepository, TextInputRepository } from "./repositories/Repositories";
class UniteRepository {
    constructor() {
        this.textInputRepo = new TextInputRepository();
        this.checkBoxInputRepo = new CheckBoxInputRepository();
    }
    // TextInput methods
    createTextInput(id, attributes) {
        return this.textInputRepo.create(id, attributes);
    }
    getTextInput(id) {
        return this.textInputRepo.get(id);
    }
    updateTextInput(id, attributes) {
        this.textInputRepo.update(id, attributes);
    }
    removeTextInput(id) {
        this.textInputRepo.remove(id);
    }
    // CheckBoxInput methods
    createCheckBoxInput(id, attributes) {
        return this.checkBoxInputRepo.create(id, attributes);
    }
    getCheckBoxInput(id) {
        return this.checkBoxInputRepo.get(id);
    }
    updateCheckBoxInput(id, attributes) {
        this.checkBoxInputRepo.update(id, attributes);
    }
    removeCheckBoxInput(id) {
        this.checkBoxInputRepo.remove(id);
    }
}
//# sourceMappingURL=UniteRepository.js.map