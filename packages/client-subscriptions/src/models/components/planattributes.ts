/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Price, Price$ } from "./price";
import { z } from "zod";

/**
 * (*Reserved for future use*) Set all plans to `active`. Only `active` plans are available for use.
 */
export enum PlanAttributesStatus {
    Active = "active",
    Draft = "draft",
    Archive = "archive",
}

/**
 * The unit of time that billing intervals are measured.
 */
export enum BillingIntervalType {
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
}

/**
 * Enables you to specify recurring payments. If `end_behavior` is `roll`, customers pay regularly and repeatedly. If `end_behavior` is `close`, customers pay a total amount in a limited number of partial payments.
 */
export enum EndBehavior {
    Close = "close",
    Roll = "roll",
}

export type PlanAttributes = {
    /**
     * A unique attribute that you could use to contain information from another company system, for example. The maximum length is 2048 characters.
     */
    externalRef?: string | undefined;
    /**
     * A name for the plan.
     */
    name: string;
    /**
     * The plan description to display to customers.
     */
    description?: string | undefined;
    /**
     * (*Reserved for future use*) Set all plans to `active`. Only `active` plans are available for use.
     */
    status: PlanAttributesStatus;
    /**
     * The unit of time that billing intervals are measured.
     */
    billingIntervalType: BillingIntervalType;
    /**
     * The number of intervals between issuing bills.
     */
    billingFrequency: number;
    /**
     * The day of the week when weekly subscriptions are billed.
     */
    billingDay?: number | undefined;
    /**
     * The date of the month when monthly subscriptions are billed.
     */
    billingMonthDay?: number | undefined;
    /**
     * The number of intervals from the start of the subscription before billing starts. Used with `billing_interval_type`. For example, if `billing_interval_type` is `months`, and `trial_period` is `1`, the trial period is 1 month.
     */
    trialPeriod?: number | undefined;
    /**
     * The number of intervals that the subscription runs for.
     */
    planLength: number;
    /**
     * Enables you to specify recurring payments. If `end_behavior` is `roll`, customers pay regularly and repeatedly. If `end_behavior` is `close`, customers pay a total amount in a limited number of partial payments.
     */
    endBehavior: EndBehavior;
    /**
     * The subscriber can pause a subscription.
     */
    canPause: boolean;
    /**
     * The subscriber can resume a paused subscription.
     */
    canResume: boolean;
    /**
     * The subscriber can cancel a subscription.
     */
    canCancel: boolean;
    /**
     * A percentage discount on the total cost of any products within an offering. For example, you can configure a percentage that equates the cost of a plan to the total value of all products within the offering, reduced by a percentage. For example, if you specify `10`, a 10% discount is applied to the total value of all repeat products in an offering.
     */
    basePricePercentage?: number | undefined;
    fixedPrice?: Record<string, Price> | undefined;
};

/** @internal */
export const PlanAttributesStatus$ = z.nativeEnum(PlanAttributesStatus);

/** @internal */
export const BillingIntervalType$ = z.nativeEnum(BillingIntervalType);

/** @internal */
export const EndBehavior$ = z.nativeEnum(EndBehavior);

/** @internal */
export namespace PlanAttributes$ {
    export type Inbound = {
        external_ref?: string | undefined;
        name: string;
        description?: string | undefined;
        status: PlanAttributesStatus;
        billing_interval_type: BillingIntervalType;
        billing_frequency: number;
        billing_day?: number | undefined;
        billing_month_day?: number | undefined;
        trial_period?: number | undefined;
        plan_length: number;
        end_behavior: EndBehavior;
        can_pause: boolean;
        can_resume: boolean;
        can_cancel: boolean;
        base_price_percentage?: number | undefined;
        fixed_price?: Record<string, Price$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<PlanAttributes, z.ZodTypeDef, Inbound> = z
        .object({
            external_ref: z.string().optional(),
            name: z.string(),
            description: z.string().optional(),
            status: PlanAttributesStatus$,
            billing_interval_type: BillingIntervalType$,
            billing_frequency: z.number().int(),
            billing_day: z.number().int().optional(),
            billing_month_day: z.number().int().optional(),
            trial_period: z.number().int().optional(),
            plan_length: z.number().int(),
            end_behavior: EndBehavior$,
            can_pause: z.boolean(),
            can_resume: z.boolean(),
            can_cancel: z.boolean(),
            base_price_percentage: z.number().optional(),
            fixed_price: z.record(Price$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.external_ref === undefined ? null : { externalRef: v.external_ref }),
                name: v.name,
                ...(v.description === undefined ? null : { description: v.description }),
                status: v.status,
                billingIntervalType: v.billing_interval_type,
                billingFrequency: v.billing_frequency,
                ...(v.billing_day === undefined ? null : { billingDay: v.billing_day }),
                ...(v.billing_month_day === undefined
                    ? null
                    : { billingMonthDay: v.billing_month_day }),
                ...(v.trial_period === undefined ? null : { trialPeriod: v.trial_period }),
                planLength: v.plan_length,
                endBehavior: v.end_behavior,
                canPause: v.can_pause,
                canResume: v.can_resume,
                canCancel: v.can_cancel,
                ...(v.base_price_percentage === undefined
                    ? null
                    : { basePricePercentage: v.base_price_percentage }),
                ...(v.fixed_price === undefined ? null : { fixedPrice: v.fixed_price }),
            };
        });

    export type Outbound = {
        external_ref?: string | undefined;
        name: string;
        description?: string | undefined;
        status: PlanAttributesStatus;
        billing_interval_type: BillingIntervalType;
        billing_frequency: number;
        billing_day?: number | undefined;
        billing_month_day?: number | undefined;
        trial_period?: number | undefined;
        plan_length: number;
        end_behavior: EndBehavior;
        can_pause: boolean;
        can_resume: boolean;
        can_cancel: boolean;
        base_price_percentage?: number | undefined;
        fixed_price?: Record<string, Price$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlanAttributes> = z
        .object({
            externalRef: z.string().optional(),
            name: z.string(),
            description: z.string().optional(),
            status: PlanAttributesStatus$,
            billingIntervalType: BillingIntervalType$,
            billingFrequency: z.number().int(),
            billingDay: z.number().int().optional(),
            billingMonthDay: z.number().int().optional(),
            trialPeriod: z.number().int().optional(),
            planLength: z.number().int(),
            endBehavior: EndBehavior$,
            canPause: z.boolean(),
            canResume: z.boolean(),
            canCancel: z.boolean(),
            basePricePercentage: z.number().optional(),
            fixedPrice: z.record(Price$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.externalRef === undefined ? null : { external_ref: v.externalRef }),
                name: v.name,
                ...(v.description === undefined ? null : { description: v.description }),
                status: v.status,
                billing_interval_type: v.billingIntervalType,
                billing_frequency: v.billingFrequency,
                ...(v.billingDay === undefined ? null : { billing_day: v.billingDay }),
                ...(v.billingMonthDay === undefined
                    ? null
                    : { billing_month_day: v.billingMonthDay }),
                ...(v.trialPeriod === undefined ? null : { trial_period: v.trialPeriod }),
                plan_length: v.planLength,
                end_behavior: v.endBehavior,
                can_pause: v.canPause,
                can_resume: v.canResume,
                can_cancel: v.canCancel,
                ...(v.basePricePercentage === undefined
                    ? null
                    : { base_price_percentage: v.basePricePercentage }),
                ...(v.fixedPrice === undefined ? null : { fixed_price: v.fixedPrice }),
            };
        });
}
