/* tslint:disable */
/* eslint-disable */
/**
 * EasyShare.WebApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    SharedContent,
    SharedContentFromJSON,
    SharedContentToJSON,
} from '../models';

export interface CreateSharedContentRequest {
    body?: string;
}

export interface GetSharedContentRequest {
    id: number;
}

/**
 * 
 */
export class SharedContentsApi extends runtime.BaseAPI {

    /**
     */
    async createSharedContentRaw(requestParameters: CreateSharedContentRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/shared-contents`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createSharedContent(requestParameters: CreateSharedContentRequest): Promise<void> {
        await this.createSharedContentRaw(requestParameters);
    }

    /**
     */
    async getSharedContentRaw(requestParameters: GetSharedContentRequest): Promise<runtime.ApiResponse<SharedContent>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getSharedContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/shared-contents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SharedContentFromJSON(jsonValue));
    }

    /**
     */
    async getSharedContent(requestParameters: GetSharedContentRequest): Promise<SharedContent> {
        const response = await this.getSharedContentRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getSharedContentsRaw(): Promise<runtime.ApiResponse<Array<SharedContent>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/shared-contents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SharedContentFromJSON));
    }

    /**
     */
    async getSharedContents(): Promise<Array<SharedContent>> {
        const response = await this.getSharedContentsRaw();
        return await response.value();
    }

}
