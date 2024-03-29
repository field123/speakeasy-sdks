/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteSubscriptionRequest = {
    /**
     * The unique identifier of the subscription.
     */
    subscriptionUuid: string;
};

export type DeleteSubscriptionResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace DeleteSubscriptionRequest$ {
    export type Inbound = {
        subscription_uuid: string;
    };

    export const inboundSchema: z.ZodType<DeleteSubscriptionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            subscription_uuid: z.string(),
        })
        .transform((v) => {
            return {
                subscriptionUuid: v.subscription_uuid,
            };
        });

    export type Outbound = {
        subscription_uuid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSubscriptionRequest> = z
        .object({
            subscriptionUuid: z.string(),
        })
        .transform((v) => {
            return {
                subscription_uuid: v.subscriptionUuid,
            };
        });
}

/** @internal */
export namespace DeleteSubscriptionResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteSubscriptionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSubscriptionResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
