import { LoadSuccessParams, NumberSequence, RowBounds, RowNode, RowNodeBlock, ServerSideStoreParams } from "@ag-grid-community/core";
import { SSRMParams } from "../serverSideRowModel";
import { PartialStore } from "../stores/partialStore";
export declare class PartialStoreBlock extends RowNodeBlock {
    private columnController;
    private cacheUtils;
    private blockUtils;
    private nodeManager;
    private rowNodeBlockLoader;
    private logger;
    private readonly ssrmParams;
    private readonly storeParams;
    private readonly startRow;
    private readonly level;
    private readonly groupLevel;
    private readonly leafGroup;
    private readonly parentStore;
    private readonly parentRowNode;
    private usingTreeData;
    private lastAccessed;
    private allNodesMap;
    rowNodes: RowNode[];
    private displayIndexStart;
    private displayIndexEnd;
    private blockTopPx;
    private blockHeightPx;
    private groupField;
    private rowGroupColumn;
    private nodeIdPrefix;
    constructor(blockNumber: number, parentRowNode: RowNode, ssrmParams: SSRMParams, storeParams: ServerSideStoreParams, parentStore: PartialStore);
    protected postConstruct(): void;
    isDisplayIndexInBlock(displayIndex: number): boolean;
    isBlockBefore(displayIndex: number): boolean;
    getDisplayIndexStart(): number | undefined;
    getDisplayIndexEnd(): number | undefined;
    getBlockHeightPx(): number;
    getBlockTopPx(): number;
    isGroupLevel(): boolean | undefined;
    getGroupField(): string;
    private prefixId;
    getBlockStateJson(): {
        id: string;
        state: any;
    };
    isAnyNodeOpen(): boolean;
    private forEachNode;
    forEachNodeDeep(callback: (rowNode: RowNode, index: number) => void, sequence?: NumberSequence): void;
    forEachNodeShallow(callback: (rowNode: RowNode) => void, sequence?: NumberSequence): void;
    getLastAccessed(): number;
    getRowUsingLocalIndex(rowIndex: number): RowNode;
    private touchLastAccessed;
    protected processServerFail(): void;
    retryLoads(): void;
    protected processServerResult(params: LoadSuccessParams): void;
    setData(rows?: any[], failedLoad?: boolean): void;
    removeDuplicateNode(id: string): void;
    refresh(): void;
    private destroyRowNodes;
    private setBeans;
    getRowUsingDisplayIndex(displayRowIndex: number): RowNode | null;
    protected loadFromDatasource(): void;
    isPixelInRange(pixel: number): boolean;
    getRowBounds(index: number): RowBounds | undefined;
    getRowIndexAtPixel(pixel: number): number | null;
    clearDisplayIndexes(): void;
    setDisplayIndexes(displayIndexSeq: NumberSequence, nextRowTop: {
        value: number;
    }): void;
}
