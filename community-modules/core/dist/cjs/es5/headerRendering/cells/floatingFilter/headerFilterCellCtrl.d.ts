// Type definitions for @ag-grid-community/core v27.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { HeaderRowCtrl } from "../../row/headerRowCtrl";
import { AbstractHeaderCellCtrl, IAbstractHeaderCellComp } from "../abstractCell/abstractHeaderCellCtrl";
import { Column } from '../../../entities/column';
import { IFloatingFilter } from '../../../filter/floating/floatingFilter';
import { Beans } from '../../../rendering/beans';
import { AgPromise } from '../../../utils';
import { UserCompDetails } from "../../../components/framework/userComponentFactory";
export interface IHeaderFilterCellComp extends IAbstractHeaderCellComp {
    addOrRemoveCssClass(cssClassName: string, on: boolean): void;
    addOrRemoveBodyCssClass(cssClassName: string, on: boolean): void;
    addOrRemoveButtonWrapperCssClass(cssClassName: string, on: boolean): void;
    setCompDetails(compDetails: UserCompDetails): void;
    getFloatingFilterComp(): AgPromise<IFloatingFilter> | null;
    setWidth(width: string): void;
    setMenuIcon(icon: HTMLElement): void;
}
export declare class HeaderFilterCellCtrl extends AbstractHeaderCellCtrl {
    private readonly userComponentFactory;
    private readonly filterManager;
    private readonly columnHoverService;
    private readonly gridApi;
    private readonly menuFactory;
    protected readonly beans: Beans;
    private comp;
    private column;
    private eButtonShowMainFilter;
    private eFloatingFilterBody;
    private suppressFilterButton;
    private active;
    constructor(column: Column, parentRowCtrl: HeaderRowCtrl);
    setComp(comp: IHeaderFilterCellComp, eGui: HTMLElement, eButtonShowMainFilter: HTMLElement, eFloatingFilterBody: HTMLElement): void;
    private setupUi;
    private setupFocus;
    protected onTabKeyDown(e: KeyboardEvent): void;
    private findNextColumnWithFloatingFilter;
    protected handleKeyDown(e: KeyboardEvent): void;
    protected onFocusIn(e: FocusEvent): void;
    private setupHover;
    private setupLeft;
    private setupUserComp;
    private currentParentModel;
    private getFilterComponent;
    private parentFilterInstance;
    private showParentFilter;
    private setupSyncWithFilter;
    private setupWidth;
}