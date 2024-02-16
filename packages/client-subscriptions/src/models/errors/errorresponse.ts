/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

/**
 * Bad request. The request failed validation.
 */
export type ErrorResponseData = {
    errors: Array<components.ErrorT>;
};

/**
 * Bad request. The request failed validation.
 */
export class ErrorResponse extends Error {
    errors: Array<components.ErrorT>;

    /** The original data that was passed to this error instance. */
    data$: ErrorResponseData;

    constructor(err: ErrorResponseData) {
        super("");
        this.data$ = err;

        this.errors = err.errors;

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const content = JSON.stringify(err);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "ErrorResponse";
    }
}

/** @internal */
export namespace ErrorResponse$ {
    export type Inbound = {
        errors: Array<components.ErrorT$.Inbound>;
    };

    export const inboundSchema: z.ZodType<ErrorResponse, z.ZodTypeDef, Inbound> = z
        .object({
            errors: z.array(components.ErrorT$.inboundSchema),
        })
        .transform((v) => {
            return new ErrorResponse({
                errors: v.errors,
            });
        });
    export type Outbound = {
        errors: Array<components.ErrorT$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorResponse> = z
        .instanceof(ErrorResponse)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(components.ErrorT$.outboundSchema),
                })
                .transform((v) => {
                    return {
                        errors: v.errors,
                    };
                })
        );
}