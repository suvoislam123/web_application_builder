//drag and drop start 
import { TextInputRepository } from "./generatorapp/src/core/repositories/Repositories";
const draggableFields = document.querySelectorAll('.draggable-field');
let dropZones = document.querySelectorAll('.grid-row td');
const initialUserSetting = {
    theme: "light",
    numberOfColumnInOutputMakeGrid: 3,
    outputMakerGridShow: false
};
if (!localStorage.getItem('userSetting')) {
    localStorage.setItem('userSetting', JSON.stringify(initialUserSetting));
}
//const settings = JSON.parse(localStorage.getItem('userSetting'));
let settings = JSON.parse(localStorage.getItem('userSetting'));
changeGridRowNumber(settings === null || settings === void 0 ? void 0 : settings.numberOfColumnInOutputMakeGrid);
toggleGridLine(settings === null || settings === void 0 ? void 0 : settings.outputMakerGridShow);
//function for dropZone events manger
//**
// @param {htlmlElement} item - An html element  
//  */
function dropZoneEventsAdder(item) {
    item.addEventListener('dragover', (event) => {
        event.preventDefault();
        item.classList.add('dragover');
    });
    item.addEventListener('dragleave', () => {
        item.classList.remove('dragover');
    });
    item.addEventListener('drop', (event) => {
        event.preventDefault();
        item.classList.remove('dragover');
        // ei jaiga ta te object insert hobe. not by concrete coding.
        const draggingElement = document.querySelector('.dragging');
        const toolType = draggingElement.getAttribute('toolType');
        if (toolType == "textBox") {
            console.log("textBox");
            const t = new TextInputRepository();
            const input = t.create('id', {});
            item.appendChild(input);
        }
        console.log(draggingElement);
        autoGridRowAdapter();
    });
}
dropZones.forEach((item) => {
    dropZoneEventsAdder(item);
});
draggableFields.forEach((item) => {
    item.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', event.target.id);
        item.classList.add('dragging');
    });
    item.addEventListener(('dragend'), () => {
        item.classList.remove('dragging');
    });
});
function autoGridRowAdapter() {
    var _a;
    const lastRow = (_a = document.getElementById('output-grid-table-body')) === null || _a === void 0 ? void 0 : _a.lastElementChild;
    Array.from(lastRow.children).forEach((item) => {
        var _a, _b;
        console.log(item);
        if (((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            console.log("yes");
            const newRow = document.createElement('tr');
            newRow.classList.add('grid-row');
            console.log(document.getElementById('output-grid-table-body'));
            //prothom tar sathe milaia rakhtasi pore change korbo.
            let i = 3;
            while (i--) {
                const newTd = document.createElement('td');
                dropZoneEventsAdder(newTd);
                newRow.appendChild(newTd);
            }
            (_b = document.getElementById('output-grid-table-body')) === null || _b === void 0 ? void 0 : _b.appendChild(newRow);
        }
    });
}
//drag and drop ends
//Setting
const table_grid_checkbox = document.getElementById('show-table-grid-checkbox');
table_grid_checkbox.addEventListener('change', () => {
    if (table_grid_checkbox.checked) {
        //document.getElementById('output-grid-table').classList.add('show-table-grid-dotted');
        toggleGridLine(true);
    }
    else {
        //document.getElementById('output-grid-table').classList.remove('show-table-grid-dotted');
        toggleGridLine(false);
    }
});
function changeGridRowNumber(numberOfColumn) {
    const gridRows = document.querySelectorAll('.grid-row');
    console.log(gridRows);
    const allTds = document.querySelectorAll('.grid-row td');
    allTds.forEach((td) => {
        td.classList.remove('w-25');
        td.classList.remove('w-50');
        td.classList.remove('w-75');
        td.classList.remove('w-100');
        const radios = document.getElementsByName('number_of_columns');
        const number_of_columns_1 = document.getElementById('number_of_columns_1');
        const number_of_columns_2 = document.getElementById('number_of_columns_2');
        const number_of_columns_3 = document.getElementById('number_of_columns_3');
        if (numberOfColumn == 1) {
            number_of_columns_1.checked = true;
            td.classList.add('w-100');
        }
        else if (numberOfColumn == 2) {
            number_of_columns_2.checked = true;
            td.classList.add('w-50');
        }
        else if (numberOfColumn == 3) {
            number_of_columns_3.checked = true;
            td.classList.add('w-33');
        }
        else {
            td.classList.add('w-25');
        }
    });
    gridRows.forEach((row) => {
        const nextRow = row.nextElementSibling;
        const siblings = Array.from(row.children).filter((child) => child !== nextRow); // Exclude the current element
        //console.log('All Siblings:', siblings); 
        let columns = numberOfColumn;
        let currentColumns = 0;
        siblings.forEach((cell) => {
            if (cell.getAttribute('colspan'))
                currentColumns += cell.getAttribute('colspan');
            else
                currentColumns++;
        });
        console.log(currentColumns);
        while (currentColumns < columns) {
            let td = document.createElement('td');
            if (numberOfColumn == 1)
                td.classList.add('w-100');
            else if (numberOfColumn == 2)
                td.classList.add('w-50');
            else if (numberOfColumn == 3)
                td.classList.add('w-33');
            else
                td.classList.add('w-25');
            row.appendChild(td);
            dropZoneEventsAdder(td);
            columns--;
        }
        let last_td = row.lastElementChild;
        while (currentColumns > columns) {
            row.removeChild(last_td);
            last_td = last_td.previousElementSibling;
            currentColumns--;
        }
        //making cell equeal sizes;
        //console.log(document.querySelectorAll('.grid-row td'));
    });
}
const number_of_column_grid_form = document.getElementById('number_of_column_grid_form');
number_of_column_grid_form.addEventListener('change', (event) => {
    if (event.target.name = 'number_of_columns') {
        //console.log(event.target.value);
        const userSettings = JSON.parse(localStorage.getItem('userSetting'));
        userSettings.numberOfColumnInOutputMakeGrid = event.target.value;
        localStorage.setItem('userSetting', JSON.stringify(userSettings));
        changeGridRowNumber(event.target.value);
    }
});
function toggleGridLine(status) {
    const newSettings = JSON.parse(localStorage.getItem('userSetting'));
    const table_grid_checkbox = document.getElementById('show-table-grid-checkbox');
    const ouputGridTable = document.getElementById('output-grid-table');
    if (status) {
        table_grid_checkbox.checked = true;
        newSettings.outputMakerGridShow = true;
        const ouputGridTable = document.getElementById('output-grid-table');
        ouputGridTable.classList.add('show-table-grid-dotted');
    }
    else {
        table_grid_checkbox.checked = false;
        newSettings.outputMakerGridShow = false;
        ouputGridTable.classList.remove('show-table-grid-dotted');
    }
    localStorage.setItem('userSetting', JSON.stringify(newSettings));
}
//setting end
//# sourceMappingURL=site.js.map