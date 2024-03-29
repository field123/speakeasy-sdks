/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type SubscriberResponseAttributes = {
    /**
     * The unique identifier.
     */
    accountId: string;
    /**
     * The name of the subscriber.
     */
    name: string;
    /**
     * The email of the subscriber.
     */
    email: string;
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
export namespace SubscriberResponseAttributes$ {
    export type Inbound = {
        account_id: string;
        name: string;
        email: string;
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
    };

    export const inboundSchema: z.ZodType<SubscriberResponseAttributes, z.ZodTypeDef, Inbound> = z
        .object({
            account_id: z.string(),
            name: z.string(),
            email: z.string(),
            updated_at: z.string(),
            created_at: z.string(),
            canceled_at: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                accountId: v.account_id,
                name: v.name,
                email: v.email,
                updatedAt: v.updated_at,
                createdAt: v.created_at,
                canceledAt: v.canceled_at,
            };
        });

    export type Outbound = {
        account_id: string;
        name: string;
        email: string;
        updated_at: string;
        created_at: string;
        canceled_at: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberResponseAttributes> = z
        .object({
            accountId: z.string(),
            name: z.string(),
            email: z.string(),
            updatedAt: z.string(),
            createdAt: z.string(),
            canceledAt: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                account_id: v.accountId,
                name: v.name,
                email: v.email,
                updated_at: v.updatedAt,
                created_at: v.createdAt,
                canceled_at: v.canceledAt,
            };
        });
}
