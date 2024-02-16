/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Timestamps, Timestamps$ } from "./timestamps";
import { z } from "zod";

export type SubscriberMeta = {
    /**
     * The owner of a resource, either `store` or `organization`.
     */
    owner: string;
    timestamps: Timestamps;
};

/** @internal */
export namespace SubscriberMeta$ {
    export type Inbound = {
        owner: string;
        timestamps: Timestamps$.Inbound;
    };

    export const inboundSchema: z.ZodType<SubscriberMeta, z.ZodTypeDef, Inbound> = z
        .object({
            owner: z.string(),
            timestamps: Timestamps$.inboundSchema,
        })
        .transform((v) => {
            return {
                owner: v.owner,
                timestamps: v.timestamps,
            };
        });

    export type Outbound = {
        owner: string;
        timestamps: Timestamps$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriberMeta> = z
        .object({
            owner: z.string(),
            timestamps: Timestamps$.outboundSchema,
        })
        .transform((v) => {
            return {
                owner: v.owner,
                timestamps: v.timestamps,
            };
        });
}