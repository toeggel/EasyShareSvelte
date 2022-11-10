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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SharedContent
 */
export interface SharedContent {
    /**
     * 
     * @type {number}
     * @memberof SharedContent
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SharedContent
     */
    content?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof SharedContent
     */
    modified?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SharedContent
     */
    created?: Date;
}

export function SharedContentFromJSON(json: any): SharedContent {
    return SharedContentFromJSONTyped(json, false);
}

export function SharedContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'modified': !exists(json, 'modified') ? undefined : (new Date(json['modified'])),
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
    };
}

export function SharedContentToJSON(value?: SharedContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'content': value.content,
        'modified': value.modified === undefined ? undefined : (value.modified.toISOString()),
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
    };
}


