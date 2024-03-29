/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SingleCurrencyPrice, SingleCurrencyPrice$ } from "./singlecurrencyprice";
import { Timestamps, Timestamps$ } from "./timestamps";
import { z } from "zod";

export type SubscriptionInvoiceMeta = {
    /**
     * The owner of a resource, either `store` or `organization`.
     */
    owner: string;
    /**
     * The unique identifier.
     */
    subscriptionId?: string | undefined;
    /**
     * A price in a single currency.
     */
    price?: SingleCurrencyPrice | undefined;
    timestamps: Timestamps;
};

/** @internal */
export namespace SubscriptionInvoiceMeta$ {
    export type Inbound = {
        owner: string;
        subscription_id?: string | undefined;
        price?: SingleCurrencyPrice$.Inbound | undefined;
        timestamps: Timestamps$.Inbound;
    };

    export const inboundSchema: z.ZodType<SubscriptionInvoiceMeta, z.ZodTypeDef, Inbound> = z
        .object({
            owner: z.string(),
            subscription_id: z.string().optional(),
            price: SingleCurrencyPrice$.inboundSchema.optional(),
            timestamps: Timestamps$.inboundSchema,
        })
        .transform((v) => {
            return {
                owner: v.owner,
                ...(v.subscription_id === undefined ? null : { subscriptionId: v.subscription_id }),
                ...(v.price === undefined ? null : { price: v.price }),
                timestamps: v.timestamps,
            };
        });

    export type Outbound = {
        owner: string;
        subscription_id?: string | undefined;
        price?: SingleCurrencyPrice$.Outbound | undefined;
        timestamps: Timestamps$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionInvoiceMeta> = z
        .object({
            owner: z.string(),
            subscriptionId: z.string().optional(),
            price: SingleCurrencyPrice$.outboundSchema.optional(),
            timestamps: Timestamps$.outboundSchema,
        })
        .transform((v) => {
            return {
                owner: v.owner,
                ...(v.subscriptionId === undefined ? null : { subscription_id: v.subscriptionId }),
                ...(v.price === undefined ? null : { price: v.price }),
                timestamps: v.timestamps,
            };
        });
}
