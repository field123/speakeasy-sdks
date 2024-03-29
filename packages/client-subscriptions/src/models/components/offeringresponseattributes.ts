/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type OfferingResponseAttributes = {
    /**
     * A unique attribute that you could use to contain information from another company system, for example. The maximum length is 2048 characters.
     */
    externalRef?: string | undefined;
    /**
     * The name of the offering.
     */
    name: string;
    /**
     * The offering description to display to customers.
     */
    description?: string | undefined;
    /**
     * The date and time a resource was updated.
     */
    updatedAt: string;
    /**
     * The date and time a resource was created.
     */
    createdAt: string;
    /**
     * The date and time a resource was cancelled.
     */
    canceledAt: string | null;
};

/** @internal */
export namespace OfferingResponseAttributes$ {
    export type Inbound = {
        external_ref?: string | undefined;
        name: string;
        description?: string | undefined;
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
    };

    export const inboundSchema: z.ZodType<OfferingResponseAttributes, z.ZodTypeDef, Inbound> = z
        .object({
            external_ref: z.string().optional(),
            name: z.string(),
            description: z.string().optional(),
            updated_at: z.string(),
            created_at: z.string(),
            canceled_at: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.external_ref === undefined ? null : { externalRef: v.external_ref }),
                name: v.name,
                ...(v.description === undefined ? null : { description: v.description }),
                updatedAt: v.updated_at,
                createdAt: v.created_at,
                canceledAt: v.canceled_at,
            };
        });

    export type Outbound = {
        external_ref?: string | undefined;
        name: string;
        description?: string | undefined;
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, OfferingResponseAttributes> = z
        .object({
            externalRef: z.string().optional(),
            name: z.string(),
            description: z.string().optional(),
            updatedAt: z.string(),
            createdAt: z.string(),
            canceledAt: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.externalRef === undefined ? null : { external_ref: v.externalRef }),
                name: v.name,
                ...(v.description === undefined ? null : { description: v.description }),
                updated_at: v.updatedAt,
                created_at: v.createdAt,
                canceled_at: v.canceledAt,
            };
        });
}
