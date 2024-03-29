/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ScheduleMeta, ScheduleMeta$ } from "./schedulemeta";
import {
    ScheduleResponseAttributes,
    ScheduleResponseAttributes$,
} from "./scheduleresponseattributes";
import { SubscriptionScheduleType, SubscriptionScheduleType$ } from "./subscriptionscheduletype";
import { z } from "zod";

export type Schedule = {
    /**
     * The unique identifier.
     */
    id?: string | undefined;
    type?: SubscriptionScheduleType | undefined;
    attributes: ScheduleResponseAttributes;
    meta: ScheduleMeta;
};

/** @internal */
export namespace Schedule$ {
    export type Inbound = {
        id?: string | undefined;
        type?: SubscriptionScheduleType | undefined;
        attributes: ScheduleResponseAttributes$.Inbound;
        meta: ScheduleMeta$.Inbound;
    };

    export const inboundSchema: z.ZodType<Schedule, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            type: SubscriptionScheduleType$.default(SubscriptionScheduleType.SubscriptionSchedule),
            attributes: ScheduleResponseAttributes$.inboundSchema,
            meta: ScheduleMeta$.inboundSchema,
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
        type: SubscriptionScheduleType;
        attributes: ScheduleResponseAttributes$.Outbound;
        meta: ScheduleMeta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Schedule> = z
        .object({
            id: z.string().optional(),
            type: SubscriptionScheduleType$.default(SubscriptionScheduleType.SubscriptionSchedule),
            attributes: ScheduleResponseAttributes$.outboundSchema,
            meta: ScheduleMeta$.outboundSchema,
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
