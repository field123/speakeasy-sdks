/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type CreateOfferingRequestBody = {
    data: components.OfferingCreate;
};

export type CreateOfferingRequest = {
    filter?: string | undefined;
    requestBody?: CreateOfferingRequestBody | undefined;
};

/**
 * Success. The offering is created.
 */
export type CreateOfferingResponseBody = {
    data?: components.Offering | undefined;
};

export type CreateOfferingResponse = {
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
     * Success. The offering is created.
     */
    object?: CreateOfferingResponseBody | undefined;
};

/** @internal */
export namespace CreateOfferingRequestBody$ {
    export type Inbound = {
        data: components.OfferingCreate$.Inbound;
    };

    export const inboundSchema: z.ZodType<CreateOfferingRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.OfferingCreate$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.OfferingCreate$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOfferingRequestBody> = z
        .object({
            data: components.OfferingCreate$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace CreateOfferingRequest$ {
    export type Inbound = {
        filter?: string | undefined;
        RequestBody?: CreateOfferingRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateOfferingRequest, z.ZodTypeDef, Inbound> = z
        .object({
            filter: z.string().optional(),
            RequestBody: z.lazy(() => CreateOfferingRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        filter?: string | undefined;
        RequestBody?: CreateOfferingRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOfferingRequest> = z
        .object({
            filter: z.string().optional(),
            requestBody: z.lazy(() => CreateOfferingRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateOfferingResponseBody$ {
    export type Inbound = {
        data?: components.Offering$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateOfferingResponseBody, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOfferingResponseBody> = z
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
export namespace CreateOfferingResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: CreateOfferingResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateOfferingResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateOfferingResponseBody$.inboundSchema).optional(),
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
        object?: CreateOfferingResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOfferingResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => CreateOfferingResponseBody$.outboundSchema).optional(),
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
