import {RowID, RowElement} from './interface';
/**
 * Ambient declaration to provide type information for the crude module
 */

declare function insertRow(row: RowElement): number;     
declare function deleteRow(rowId: RowID): void;    
declare function updateRow(rowId: RowID, row: RowElement): number;