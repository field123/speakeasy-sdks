/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    SubscriptionInvoiceAttributes,
    SubscriptionInvoiceAttributes$,
} from "./subscriptioninvoiceattributes";
import { SubscriptionInvoiceMeta, SubscriptionInvoiceMeta$ } from "./subscriptioninvoicemeta";
import { SubscriptionInvoiceType, SubscriptionInvoiceType$ } from "./subscriptioninvoicetype";
import { z } from "zod";

export type SubscriptionInvoice = {
    /**
     * The unique identifier.
     */
    id?: string | undefined;
    /**
     * This represents the type of resource object being returned. Always `subscription_invoice`.
     */
    type?: SubscriptionInvoiceType | undefined;
    attributes: SubscriptionInvoiceAttributes;
    meta: SubscriptionInvoiceMeta;
};

/** @internal */
export namespace SubscriptionInvoice$ {
    export type Inbound = {
        id?: string | undefined;
        type?: SubscriptionInvoiceType | undefined;
        attributes: SubscriptionInvoiceAttributes$.Inbound;
        meta: SubscriptionInvoiceMeta$.Inbound;
    };

    export const inboundSchema: z.ZodType<SubscriptionInvoice, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            type: SubscriptionInvoiceType$.default(SubscriptionInvoiceType.SubscriptionInvoice),
            attributes: SubscriptionInvoiceAttributes$.inboundSchema,
            meta: SubscriptionInvoiceMeta$.inboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                type: v.type,
                attributes: v.attributes,
                meta: v.meta,
            };
        });

    export type Outbound = {
        id?: string | undefined;
        type: SubscriptionInvoiceType;
        attributes: SubscriptionInvoiceAttributes$.Outbound;
        meta: SubscriptionInvoiceMeta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionInvoice> = z
        .object({
            id: z.string().optional(),
            type: SubscriptionInvoiceType$.default(SubscriptionInvoiceType.SubscriptionInvoice),
            attributes: SubscriptionInvoiceAttributes$.outboundSchema,
            meta: SubscriptionInvoiceMeta$.outboundSchema,
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                type: v.type,
                attributes: v.attributes,
                meta: v.meta,
            };
        });
}
