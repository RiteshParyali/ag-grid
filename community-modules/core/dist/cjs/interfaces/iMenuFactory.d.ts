// Type definitions for @ag-grid-community/core v25.2.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "../entities/column";
import { GridBodyComp } from "../gridBodyComp/gridBodyComp";
export interface IMenuFactory {
    showMenuAfterButtonClick(column: Column | null, eventSource: HTMLElement, defaultTab?: string, restrictToTabs?: string[]): void;
    showMenuAfterMouseEvent(column: Column, mouseEvent: MouseEvent | Touch, defaultTab?: string, restrictToTabs?: string[]): void;
    isMenuEnabled(column: Column): boolean;
    hideActiveMenu(): void;
    registerGridComp(gridBodyComp: GridBodyComp): void;
}
