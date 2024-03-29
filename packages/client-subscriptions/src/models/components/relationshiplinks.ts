/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Links are used to allow you, as an API consumer, to move between requests. Single entities use a self parameter with a link to that specific resource. Sometimes, there aren’t enough entities for a project to fill multiple pages. In this situation, we return some defaults, instead of expecting you to check for these special cases.
 *
 * @remarks
 *
 *  - current - Always the current page.
 *  - first - Always the first page.
 *  - last - always `null`.
 *  - next - `null` if the user is on the first page.
 *  - previous - `null` if there is only one page.
 *
 */
export type RelationshipLinks = {
    related?: string | undefined;
};

/** @internal */
export namespace RelationshipLinks$ {
    export type Inbound = {
        related?: string | undefined;
    };

    export const inboundSchema: z.ZodType<RelationshipLinks, z.ZodTypeDef, Inbound> = z
        .object({
            related: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.related === undefined ? null : { related: v.related }),
            };
        });

    export type Outbound = {
        related?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RelationshipLinks> = z
        .object({
            related: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.related === undefined ? null : { related: v.related }),
            };
        });
}
