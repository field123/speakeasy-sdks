/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type AttachOfferingPlanRequestBody = {
    /**
     * A list of plan IDs to attach to the offering. See [**List Plans**](#tag/Plans/operation/ListPlans).
     */
    data: components.OfferingPlanAttach;
};

export type AttachOfferingPlanRequest = {
    /**
     * The unique identifier of the offering.
     */
    offeringUuid: string;
    requestBody?: AttachOfferingPlanRequestBody | undefined;
};

/**
 * Success. The subscription plan is attached with the offering.
 */
export type AttachOfferingPlanResponseBody = {
    data?: Array<components.OfferingPlan> | undefined;
};

export type AttachOfferingPlanResponse = {
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
     * Success. The subscription plan is attached with the offering.
     */
    object?: AttachOfferingPlanResponseBody | undefined;
};

/** @internal */
export namespace AttachOfferingPlanRequestBody$ {
    export type Inbound = {
        data: components.OfferingPlanAttach$.Inbound;
    };

    export const inboundSchema: z.ZodType<AttachOfferingPlanRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.OfferingPlanAttach$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.OfferingPlanAttach$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AttachOfferingPlanRequestBody> =
        z
            .object({
                data: components.OfferingPlanAttach$.outboundSchema,
            })
            .transform((v) => {
                return {
                    data: v.data,
                };
            });
}

/** @internal */
export namespace AttachOfferingPlanRequest$ {
    export type Inbound = {
        offering_uuid: string;
        RequestBody?: AttachOfferingPlanRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AttachOfferingPlanRequest, z.ZodTypeDef, Inbound> = z
        .object({
            offering_uuid: z.string(),
            RequestBody: z.lazy(() => AttachOfferingPlanRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                offeringUuid: v.offering_uuid,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        offering_uuid: string;
        RequestBody?: AttachOfferingPlanRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AttachOfferingPlanRequest> = z
        .object({
            offeringUuid: z.string(),
            requestBody: z.lazy(() => AttachOfferingPlanRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                offering_uuid: v.offeringUuid,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace AttachOfferingPlanResponseBody$ {
    export type Inbound = {
        data?: Array<components.OfferingPlan$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<AttachOfferingPlanResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(components.OfferingPlan$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.data === undefined ? null : { data: v.data }),
            };
        });

    export type Outbound = {
        data?: Array<components.OfferingPlan$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AttachOfferingPlanResponseBody> =
        z
            .object({
                data: z.array(components.OfferingPlan$.outboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ...(v.data === undefined ? null : { data: v.data }),
                };
            });
}

/** @internal */
export namespace AttachOfferingPlanResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: AttachOfferingPlanResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AttachOfferingPlanResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => AttachOfferingPlanResponseBody$.inboundSchema).optional(),
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
        object?: AttachOfferingPlanResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AttachOfferingPlanResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => AttachOfferingPlanResponseBody$.outboundSchema).optional(),
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
