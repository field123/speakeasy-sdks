/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { LinkObject, LinkObject$ } from "./linkobject";
import { z } from "zod";

export type Link = LinkObject | string;

/** @internal */
export namespace Link$ {
    export type Inbound = LinkObject$.Inbound | string;

    export type Outbound = LinkObject$.Outbound | string;

    export const inboundSchema: z.ZodType<Link, z.ZodTypeDef, Inbound> = z.union([
        LinkObject$.inboundSchema,
        z.string(),
    ]);

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Link> = z.union([
        LinkObject$.outboundSchema,
        z.string(),
    ]);
}