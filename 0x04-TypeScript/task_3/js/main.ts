// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./crud.d.ts">
import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = row;
updatedRow.age = 23;
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);
