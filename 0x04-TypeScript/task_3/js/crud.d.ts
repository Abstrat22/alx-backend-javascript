import {RowID, RowElement} from './interface';
/**
 * Ambient declaration for the crude module types
 */

declare function insertRow(row: RowElement): number;     
declare function deleteRow(rowId: RowID): void;    
declare function updateRow(rowId: RowID, row: RowElement): number;