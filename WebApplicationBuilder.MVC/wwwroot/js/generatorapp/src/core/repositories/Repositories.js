import { InputUnit } from "../IUnitRepositories";
// Repository for TextInput
class TextInputRepository {
    constructor() {
        this.inputs = new Map();
    }
    create(id, attributes) {
        if (this.inputs.has(id)) {
            throw new Error(`TextInput with ID "${id}" already exists.`);
        }
        const inputUnit = new InputUnit("text", id, attributes);
        this.inputs.set(id, inputUnit);
        return inputUnit;
    }
    get(id) {
        return this.inputs.get(id);
    }
    update(id, attributes) {
        const inputUnit = this.inputs.get(id);
        if (!inputUnit) {
            throw new Error(`TextInput with ID "${id}" not found.`);
        }
        inputUnit.updateAttributes(attributes);
    }
    remove(id) {
        if (!this.inputs.delete(id)) {
            throw new Error(`TextInput with ID "${id}" not found.`);
        }
    }
}
class CheckBoxInputRepository {
    constructor() {
        this.inputs = new Map();
    }
    create(id, attributes) {
        if (this.inputs.has(id)) {
            throw new Error(`CheckBoxInput with ID "${id}" already exists.`);
        }
        const inputUnit = new InputUnit("checkbox", id, attributes);
        this.inputs.set(id, inputUnit);
        return inputUnit;
    }
    get(id) {
        return this.inputs.get(id);
    }
    update(id, attributes) {
        const inputUnit = this.inputs.get(id);
        if (!inputUnit) {
            throw new Error(`CheckBoxInput with ID "${id}" not found.`);
        }
        inputUnit.updateAttributes(attributes);
    }
    remove(id) {
        if (!this.inputs.delete(id)) {
            throw new Error(`CheckBoxInput with ID "${id}" not found.`);
        }
    }
}
export { TextInputRepository, CheckBoxInputRepository };
//# sourceMappingURL=Repositories.js.map