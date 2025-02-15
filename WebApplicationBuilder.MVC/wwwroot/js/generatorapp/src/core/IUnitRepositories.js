// Base class for input elements
export class InputUnit {
    constructor(type, id, attributes = {}) {
        this.element = document.createElement("input");
        this.element.type = type;
        //ei khan thake type anuja.e defaul value daoa jabe.
        this.element.id = id;
        // Apply initial attributes
        this.updateAttributes(attributes);
    }
    // Update attributes dynamically
    updateAttributes(attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            if (value === null || value === undefined)
                return;
            if (typeof value === "boolean") {
                value
                    ? this.element.setAttribute(key, "")
                    : this.element.removeAttribute(key);
            }
            else {
                this.element.setAttribute(key, value.toString());
            }
        });
    }
    // Get the value of the input
    getValue() {
        if (this.element.type === "checkbox" || this.element.type === "radio") {
            return this.element.checked;
        }
        return this.element.value;
    }
    // Set the value of the input
    setValue(value) {
        if (this.element.type === "checkbox" || this.element.type === "radio") {
            this.element.checked = Boolean(value);
        }
        else {
            this.element.value = value.toString();
        }
    }
}
//# sourceMappingURL=IUnitRepositories.js.map