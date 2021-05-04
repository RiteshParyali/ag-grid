import { ExcelOOXMLTemplate, ExcelStyle } from '@ag-grid-community/core';
declare const stylesheetFactory: ExcelOOXMLTemplate;
export declare const getStyleId: (name: string) => number;
export declare const registerStyles: (styles: ExcelStyle[]) => void;
export default stylesheetFactory;
