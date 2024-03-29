/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ProductUpdateAttributes, ProductUpdateAttributes$ } from "./productupdateattributes";
import { SubscriptionProductType, SubscriptionProductType$ } from "./subscriptionproducttype";
import { z } from "zod";

export type ProductUpdate = {
    /**
     * The unique identifier.
     */
    id: string;
    type?: SubscriptionProductType | undefined;
    attributes: ProductUpdateAttributes;
};

/** @internal */
export namespace ProductUpdate$ {
    export type Inbound = {
        id: string;
        type?: SubscriptionProductType | undefined;
        attributes: ProductUpdateAttributes$.Inbound;
    };

    export const inboundSchema: z.ZodType<ProductUpdate, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            type: SubscriptionProductType$.default(SubscriptionProductType.SubscriptionProduct),
            attributes: ProductUpdateAttributes$.inboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                type: v.type,
                attributes: v.attributes,
            };
        });

    export type Outbound = {
        id: string;
        type: SubscriptionProductType;
        attributes: ProductUpdateAttributes$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProductUpdate> = z
        .object({
            id: z.string(),
            type: SubscriptionProductType$.default(SubscriptionProductType.SubscriptionProduct),
            attributes: ProductUpdateAttributes$.outboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                type: v.type,
                attributes: v.attributes,
            };
        });
}
