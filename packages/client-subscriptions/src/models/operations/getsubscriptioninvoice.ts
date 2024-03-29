/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetSubscriptionInvoiceRequest = {
    /**
     * The unique identifier of the subscription.
     */
    subscriptionUuid: string;
    /**
     * The unique identifier of the invoice.
     */
    invoiceUuid: string;
};

/**
 * Success. An invoice is returned.
 */
export type GetSubscriptionInvoiceResponseBody = {
    data?: components.SubscriptionInvoice | undefined;
};

export type GetSubscriptionInvoiceResponse = {
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
    /**
     * Success. An invoice is returned.
     */
    object?: GetSubscriptionInvoiceResponseBody | undefined;
};

/** @internal */
export namespace GetSubscriptionInvoiceRequest$ {
    export type Inbound = {
        subscription_uuid: string;
        invoice_uuid: string;
    };

    export const inboundSchema: z.ZodType<GetSubscriptionInvoiceRequest, z.ZodTypeDef, Inbound> = z
        .object({
            subscription_uuid: z.string(),
            invoice_uuid: z.string(),
        })
        .transform((v) => {
            return {
                subscriptionUuid: v.subscription_uuid,
                invoiceUuid: v.invoice_uuid,
            };
        });

    export type Outbound = {
        subscription_uuid: string;
        invoice_uuid: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSubscriptionInvoiceRequest> =
        z
            .object({
                subscriptionUuid: z.string(),
                invoiceUuid: z.string(),
            })
            .transform((v) => {
                return {
                    subscription_uuid: v.subscriptionUuid,
                    invoice_uuid: v.invoiceUuid,
                };
            });
}

/** @internal */
export namespace GetSubscriptionInvoiceResponseBody$ {
    export type Inbound = {
        data?: components.SubscriptionInvoice$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetSubscriptionInvoiceResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: components.SubscriptionInvoice$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: components.SubscriptionInvoice$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetSubscriptionInvoiceResponseBody
    > = z
        .object({
            data: components.SubscriptionInvoice$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace GetSubscriptionInvoiceResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetSubscriptionInvoiceResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSubscriptionInvoiceResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetSubscriptionInvoiceResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: GetSubscriptionInvoiceResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSubscriptionInvoiceResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                object: z.lazy(() => GetSubscriptionInvoiceResponseBody$.outboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.object === undefined ? null : { object: v.object }),
                };
            });
}
