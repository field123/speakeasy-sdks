/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { JobTimestamps, JobTimestamps$ } from "./jobtimestamps";
import { z } from "zod";

export type JobMeta = {
    /**
     * The owner of a resource, either `store` or `organization`.
     */
    owner: string;
    timestamps: JobTimestamps;
};

/** @internal */
export namespace JobMeta$ {
    export type Inbound = {
        owner: string;
        timestamps: JobTimestamps$.Inbound;
    };

    export const inboundSchema: z.ZodType<JobMeta, z.ZodTypeDef, Inbound> = z
        .object({
            owner: z.string(),
            timestamps: JobTimestamps$.inboundSchema,
        })
        .transform((v) => {
            return {
                owner: v.owner,
                timestamps: v.timestamps,
            };
        });

    export type Outbound = {
        owner: string;
        timestamps: JobTimestamps$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JobMeta> = z
        .object({
            owner: z.string(),
            timestamps: JobTimestamps$.outboundSchema,
        })
        .transform((v) => {
            return {
                owner: v.owner,
                timestamps: v.timestamps,
            };
        });
}