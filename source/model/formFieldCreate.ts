import { Baseclass, Category } from "@flexicore/flexicore-client";
import { GridPreset } from "./gridPreset";
import { UiField } from "./uiField";
import { CreateUiField } from "./createUiField";

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


export interface FormFieldCreate extends CreateUiField { 
    editable?: boolean;
    creatable?: boolean;
    anchorLeft?: number;
    anchorRight?:number;
    anchorTop?: number;
    anchorBottom?:number;
}