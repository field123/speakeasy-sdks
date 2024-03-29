/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PlanAttributes, PlanAttributes$ } from "./planattributes";
import { SubscriptionPlanType, SubscriptionPlanType$ } from "./subscriptionplantype";
import { z } from "zod";

export type PlanCreate = {
    type?: SubscriptionPlanType | undefined;
    attributes: PlanAttributes;
};

/** @internal */
export namespace PlanCreate$ {
    export type Inbound = {
        type?: SubscriptionPlanType | undefined;
        attributes: PlanAttributes$.Inbound;
    };

    export const inboundSchema: z.ZodType<PlanCreate, z.ZodTypeDef, Inbound> = z
        .object({
            type: SubscriptionPlanType$.default(SubscriptionPlanType.SubscriptionPlan),
            attributes: PlanAttributes$.inboundSchema,
        })
        .transform((v) => {
            return {
                type: v.type,
                attributes: v.attributes,
            };
        });

    export type Outbound = {
        type: SubscriptionPlanType;
        attributes: PlanAttributes$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlanCreate> = z
        .object({
            type: SubscriptionPlanType$.default(SubscriptionPlanType.SubscriptionPlan),
            attributes: PlanAttributes$.outboundSchema,
        })
        .transform((v) => {
            return {
                type: v.type,
                attributes: v.attributes,
            };
        });
}
