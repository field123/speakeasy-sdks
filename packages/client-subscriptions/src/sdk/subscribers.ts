/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Subscribers extends ClientSDK {
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
     * List subscribers
     */
    async listSubscribers(
        input: operations.ListSubscribersRequest,
        options?: RequestOptions
    ): Promise<operations.ListSubscribersResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListSubscribersRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/subscriptions/subscribers")();

        const query$ = [
            enc$.encodeForm("filter", payload$.filter, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page[limit]", payload$["page[limit]"], {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("page[offset]", payload$["page[offset]"], {
                explode: true,
                charEncoding: "percent",
            }),
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
            const result = operations.ListSubscribersResponse$.inboundSchema.parse({
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
     * Create a subscriber
     */
    async createSubscriber(
        input: operations.CreateSubscriberRequest,
        options?: RequestOptions
    ): Promise<operations.CreateSubscriberResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.CreateSubscriberRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/subscriptions/subscribers")();

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
            const result = operations.CreateSubscriberResponse$.inboundSchema.parse({
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
     * Get a subscriber
     */
    async getSubscriber(
        input: operations.GetSubscriberRequest,
        options?: RequestOptions
    ): Promise<operations.GetSubscriberResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetSubscriberRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            subscriber_uuid: enc$.encodeSimple("subscriber_uuid", payload$.subscriber_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/subscribers/{subscriber_uuid}")(
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
            const result = operations.GetSubscriberResponse$.inboundSchema.parse({
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
     * Update a subscriber
     */
    async updateSubscriber(
        input: operations.UpdateSubscriberRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateSubscriberResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateSubscriberRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            subscriber_uuid: enc$.encodeSimple("subscriber_uuid", payload$.subscriber_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/subscribers/{subscriber_uuid}")(
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
            const result = operations.UpdateSubscriberResponse$.inboundSchema.parse({
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
     * Delete subscriber
     */
    async deleteSubscriber(
        input: operations.DeleteSubscriberRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteSubscriberResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteSubscriberRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            subscriber_uuid: enc$.encodeSimple("subscriber_uuid", payload$.subscriber_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/subscribers/{subscriber_uuid}")(
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

        return operations.DeleteSubscriberResponse$.inboundSchema.parse(responseFields$);
    }
}
