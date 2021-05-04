// Type definitions for @ag-grid-community/core v25.2.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Component } from "../../widgets/component";
export declare enum RowContainerNames {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
    FULL_WIDTH = "fullWidth",
    TOP_LEFT = "topLeft",
    TOP_RIGHT = "topRight",
    TOP_CENTER = "topCenter",
    TOP_FULL_WITH = "topFullWidth",
    BOTTOM_LEFT = "bottomLeft",
    BOTTOM_RIGHT = "bottomRight",
    BOTTOM_CENTER = "bottomCenter",
    BOTTOM_FULL_WITH = "bottomFullWidth"
}
export declare class RowContainerComp extends Component {
    private rowRenderer;
    private beans;
    private eViewport;
    private eContainer;
    private eWrapper;
    private readonly name;
    private renderedRows;
    private embedFullWidthRows;
    private domOrder;
    private lastPlacedElement;
    constructor();
    private postConstruct;
    private forContainers;
    private stopHScrollOnPinnedRows;
    private listenOnDomOrder;
    getViewportElement(): HTMLElement;
    clearLastPlacedElement(): void;
    appendRow(element: HTMLElement): void;
    ensureDomOrder(eRow: HTMLElement): void;
    removeRow(eRow: HTMLElement): void;
    private onDisplayedRowsChanged;
    private getRowCons;
    private newRowComp;
}
