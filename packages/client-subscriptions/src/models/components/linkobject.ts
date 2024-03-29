/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type LinkObject = {
    href?: string | undefined;
    title?: string | undefined;
    describedby?: string | undefined;
};

/** @internal */
export namespace LinkObject$ {
    export type Inbound = {
        href?: string | undefined;
        title?: string | undefined;
        describedby?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LinkObject, z.ZodTypeDef, Inbound> = z
        .object({
            href: z.string().optional(),
            title: z.string().optional(),
            describedby: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.href === undefined ? null : { href: v.href }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.describedby === undefined ? null : { describedby: v.describedby }),
            };
        });

    export type Outbound = {
        href?: string | undefined;
        title?: string | undefined;
        describedby?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinkObject> = z
        .object({
            href: z.string().optional(),
            title: z.string().optional(),
            describedby: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.href === undefined ? null : { href: v.href }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.describedby === undefined ? null : { describedby: v.describedby }),
            };
        });
}
