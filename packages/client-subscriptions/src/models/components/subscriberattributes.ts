/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type SubscriberAttributes = {
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
};

/** @internal */
export namespace SubscriberAttributes$ {
    export type Inbound = {
        account_id: string;
        name: string;
        email: string;
    };

    export const inboundSchema: z.ZodType<SubscriberAttributes, z.ZodTypeDef, Inbound> = z
        .object({
            account_id: z.string(),
            name: z.string(),
            email: z.string(),
        })
        .transform((v) => {
            return {
                accountId: v.account_id,
                name: v.name,
                email: v.email,
            };
        });

    export type Outbound = {
        account_id: string;
        name: string;
        email: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberAttributes> = z
        .object({
            accountId: z.string(),
            name: z.string(),
            email: z.string(),
        })
        .transform((v) => {
            return {
                account_id: v.accountId,
                name: v.name,
                email: v.email,
            };
        });
}