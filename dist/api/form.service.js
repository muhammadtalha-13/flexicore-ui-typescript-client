"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const configuration_1 = require("../configuration");
const flexicore_client_1 = require("@flexicore/flexicore-client");
let FormService = class FormService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = '/FlexiCore';
        this.defaultHeaders = new http_1.HttpHeaders();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    createForm(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/Forms/createForm`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    copyForm(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/Forms/copyForm`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    getAllForms(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.basePath}/plugins/Forms/getAllForms`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
    updateForm(body, authenticationKey, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        if (authenticationKey !== undefined && authenticationKey !== null) {
            headers = headers.set('authenticationKey', String(authenticationKey));
        }
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put(`${this.basePath}/plugins/Forms/updateForm`, body, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }).map(o => flexicore_client_1.FlexiCoreDecycle.retrocycle(o));
    }
};
FormService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Optional()), __param(1, core_1.Inject(flexicore_client_1.BASE_PATH)), __param(2, core_1.Optional())
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map