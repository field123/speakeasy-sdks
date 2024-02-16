/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type UpdateOfferingRequestBody = {
    data: components.OfferingUpdate;
};

export type UpdateOfferingRequest = {
    /**
     * The unique identifier of the offering.
     */
    offeringUuid: string;
    requestBody?: UpdateOfferingRequestBody | undefined;
};

/**
 * Success. The details of the subscription offering are updated.
 */
export type UpdateOfferingResponseBody = {
    data?: components.Offering | undefined;
};

export type UpdateOfferingResponse = {
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
     * Success. The details of the subscription offering are updated.
     */
    object?: UpdateOfferingResponseBody | undefined;
};

/** @internal */
export namespace UpdateOfferingRequestBody$ {
    export type Inbound = {
        data: components.OfferingUpdate$.Inbound;
    };

    export const inboundSchema: z.ZodType<UpdateOfferingRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.OfferingUpdate$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.OfferingUpdate$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateOfferingRequestBody> = z
        .object({
            data: components.OfferingUpdate$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace UpdateOfferingRequest$ {
    export type Inbound = {
        offering_uuid: string;
        RequestBody?: UpdateOfferingRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateOfferingRequest, z.ZodTypeDef, Inbound> = z
        .object({
            offering_uuid: z.string(),
            RequestBody: z.lazy(() => UpdateOfferingRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                offeringUuid: v.offering_uuid,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        offering_uuid: string;
        RequestBody?: UpdateOfferingRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateOfferingRequest> = z
        .object({
            offeringUuid: z.string(),
            requestBody: z.lazy(() => UpdateOfferingRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                offering_uuid: v.offeringUuid,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace UpdateOfferingResponseBody$ {
    export type Inbound = {
        data?: components.Offering$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateOfferingResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.Offering$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: components.Offering$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateOfferingResponseBody> = z
        .object({
            data: components.Offering$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace UpdateOfferingResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: UpdateOfferingResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateOfferingResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UpdateOfferingResponseBody$.inboundSchema).optional(),
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
        object?: UpdateOfferingResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateOfferingResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => UpdateOfferingResponseBody$.outboundSchema).optional(),
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