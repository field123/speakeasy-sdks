/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InvoiceTimestamps, InvoiceTimestamps$ } from "./invoicetimestamps";
import { z } from "zod";

export type SubscriptionInvoicePaymentMeta = {
    /**
     * The owner of a resource, either `store` or `organization`.
     */
    owner: string;
    /**
     * The unique identifier.
     */
    subscriptionId: string;
    /**
     * The unique identifier.
     */
    invoiceId: string;
    /**
     * The unique identifier.
     */
    jobId: string;
    timestamps: InvoiceTimestamps;
};

/** @internal */
export namespace SubscriptionInvoicePaymentMeta$ {
    export type Inbound = {
        owner: string;
        subscription_id: string;
        invoice_id: string;
        job_id: string;
        timestamps: InvoiceTimestamps$.Inbound;
    };

    export const inboundSchema: z.ZodType<SubscriptionInvoicePaymentMeta, z.ZodTypeDef, Inbound> = z
        .object({
            owner: z.string(),
            subscription_id: z.string(),
            invoice_id: z.string(),
            job_id: z.string(),
            timestamps: InvoiceTimestamps$.inboundSchema,
        })
        .transform((v) => {
            return {
                owner: v.owner,
                subscriptionId: v.subscription_id,
                invoiceId: v.invoice_id,
                jobId: v.job_id,
                timestamps: v.timestamps,
            };
        });

    export type Outbound = {
        owner: string;
        subscription_id: string;
        invoice_id: string;
        job_id: string;
        timestamps: InvoiceTimestamps$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubscriptionInvoicePaymentMeta> =
        z
            .object({
                owner: z.string(),
                subscriptionId: z.string(),
                invoiceId: z.string(),
                jobId: z.string(),
                timestamps: InvoiceTimestamps$.outboundSchema,
            })
            .transform((v) => {
                return {
                    owner: v.owner,
                    subscription_id: v.subscriptionId,
                    invoice_id: v.invoiceId,
                    job_id: v.jobId,
                    timestamps: v.timestamps,
                };
            });
}
