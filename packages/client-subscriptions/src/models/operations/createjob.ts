/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type CreateJobRequestBody = {
    data: components.JobCreate;
};

export type CreateJobRequest = {
    filter?: string | undefined;
    requestBody?: CreateJobRequestBody | undefined;
};

/**
 * Success. The job was created.
 */
export type CreateJobResponseBody = {
    data?: components.Job | undefined;
};

export type CreateJobResponse = {
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
     * Success. The job was created.
     */
    object?: CreateJobResponseBody | undefined;
};

/** @internal */
export namespace CreateJobRequestBody$ {
    export type Inbound = {
        data: components.JobCreate$.Inbound;
    };

    export const inboundSchema: z.ZodType<CreateJobRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.JobCreate$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.JobCreate$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJobRequestBody> = z
        .object({
            data: components.JobCreate$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace CreateJobRequest$ {
    export type Inbound = {
        filter?: string | undefined;
        RequestBody?: CreateJobRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateJobRequest, z.ZodTypeDef, Inbound> = z
        .object({
            filter: z.string().optional(),
            RequestBody: z.lazy(() => CreateJobRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        filter?: string | undefined;
        RequestBody?: CreateJobRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJobRequest> = z
        .object({
            filter: z.string().optional(),
            requestBody: z.lazy(() => CreateJobRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.filter === undefined ? null : { filter: v.filter }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateJobResponseBody$ {
    export type Inbound = {
        data?: components.Job$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateJobResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.Job$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: components.Job$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJobResponseBody> = z
        .object({
            data: components.Job$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });
}

/** @internal */
export namespace CreateJobResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: CreateJobResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateJobResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateJobResponseBody$.inboundSchema).optional(),
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
        object?: CreateJobResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateJobResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => CreateJobResponseBody$.outboundSchema).optional(),
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
