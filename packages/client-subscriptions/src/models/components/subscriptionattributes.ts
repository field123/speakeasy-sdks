/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Offering, Offering$ } from "./offering";
import { z } from "zod";

export type SubscriptionAttributes = {
    /**
     * A unique attribute that you could use to contain information from another company system, for example. The maximum length is 2048 characters.
     */
    externalRef?: string | undefined;
    /**
     * The unique identifier.
     */
    accountId: string;
    offering: Offering;
    /**
     * The unique identifier.
     */
    planId: string;
    /**
     * A currency identifier, usually an ISO 4217 code.
     */
    currency: string;
    updatedAt?: string | undefined;
    createdAt?: string | undefined;
};

/** @internal */
export namespace SubscriptionAttributes$ {
    export type Inbound = {
        external_ref?: string | undefined;
        account_id: string;
        offering: Offering$.Inbound;
        plan_id: string;
        currency: string;
        updated_at?: string | undefined;
        created_at?: string | undefined;
    };

    export const inboundSchema: z.ZodType<SubscriptionAttributes, z.ZodTypeDef, Inbound> = z
        .object({
            external_ref: z.string().optional(),
            account_id: z.string(),
            offering: Offering$.inboundSchema,
            plan_id: z.string(),
            currency: z.string(),
            updated_at: z.string().optional(),
            created_at: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.external_ref === undefined ? null : { externalRef: v.external_ref }),
                accountId: v.account_id,
                offering: v.offering,
                planId: v.plan_id,
                currency: v.currency,
                ...(v.updated_at === undefined ? null : { updatedAt: v.updated_at }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
            };
        });

    export type Outbound = {
        external_ref?: string | undefined;
        account_id: string;
        offering: Offering$.Outbound;
        plan_id: string;
        currency: string;
        updated_at?: string | undefined;
        created_at?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionAttributes> = z
        .object({
            externalRef: z.string().optional(),
            accountId: z.string(),
            offering: Offering$.outboundSchema,
            planId: z.string(),
            currency: z.string(),
            updatedAt: z.string().optional(),
            createdAt: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.externalRef === undefined ? null : { external_ref: v.externalRef }),
                account_id: v.accountId,
                offering: v.offering,
                plan_id: v.planId,
                currency: v.currency,
                ...(v.updatedAt === undefined ? null : { updated_at: v.updatedAt }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
            };
        });
}
