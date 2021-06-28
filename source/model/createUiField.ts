/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V3.2.0
 * Contact: avishay@flexi-core.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface CreateUiField { 
    name?: string;
    description?: string;
    presetId?: string;
    priority?: number;
    visible?: boolean;
    categoryName?: string;
    displayName?: string;
    sortable?: boolean;
    filterable?: boolean;
    defaultTableColumnWidth?:number;
    dynamicField?:boolean;


}