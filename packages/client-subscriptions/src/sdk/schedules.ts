/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Schedules extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }

    /**
     * List schedules
     */
    async listSchedules(
        filter?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.ListSchedulesResponse> {
        const input$: operations.ListSchedulesRequest = {
            filter: filter,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListSchedulesRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/subscriptions/schedules")();

        const query$ = [
            enc$.encodeForm("filter", payload$.filter, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.ListSchedulesResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorResponse$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Create a schedule
     */
    async createSchedule(
        filter?: string | undefined,
        requestBody?: operations.CreateScheduleRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateScheduleResponse> {
        const input$: operations.CreateScheduleRequest = {
            filter: filter,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.CreateScheduleRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/subscriptions/schedules")();

        const query$ = [
            enc$.encodeForm("filter", payload$.filter, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateScheduleResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorResponse$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get a schedule
     */
    async getSchedule(
        scheduleUuid: string,
        options?: RequestOptions
    ): Promise<operations.GetScheduleResponse> {
        const input$: operations.GetScheduleRequest = {
            scheduleUuid: scheduleUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetScheduleRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            schedule_uuid: enc$.encodeSimple("schedule_uuid", payload$.schedule_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/schedules/{schedule_uuid}")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetScheduleResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 404, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorResponse$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Update a schedule
     */
    async updateSchedule(
        scheduleUuid: string,
        requestBody?: operations.UpdateScheduleRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.UpdateScheduleResponse> {
        const input$: operations.UpdateScheduleRequest = {
            scheduleUuid: scheduleUuid,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateScheduleRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            schedule_uuid: enc$.encodeSimple("schedule_uuid", payload$.schedule_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/schedules/{schedule_uuid}")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.UpdateScheduleResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 403, 404, 409, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorResponse$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete schedule
     */
    async deleteSchedule(
        scheduleUuid: string,
        options?: RequestOptions
    ): Promise<operations.DeleteScheduleResponse> {
        const input$: operations.DeleteScheduleRequest = {
            scheduleUuid: scheduleUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteScheduleRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            schedule_uuid: enc$.encodeSimple("schedule_uuid", payload$.schedule_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/schedules/{schedule_uuid}")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.bearerToken === "function") {
            security$ = { bearerToken: await this.options$.bearerToken() };
        } else if (this.options$.bearerToken) {
            security$ = { bearerToken: this.options$.bearerToken };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else if (this.matchResponse(response, [400, 500], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorResponse$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.DeleteScheduleResponse$.inboundSchema.parse(responseFields$);
    }
}