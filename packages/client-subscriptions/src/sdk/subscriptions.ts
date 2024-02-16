/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Subscriptions extends ClientSDK {
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
     * Create a subscription
     */
    async createSubscription(
        filter?: string | undefined,
        requestBody?: operations.CreateSubscriptionRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.CreateSubscriptionResponse> {
        const input$: operations.CreateSubscriptionRequest = {
            filter: filter,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.CreateSubscriptionRequest$.outboundSchema.parse(input$);

        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const path$ = this.templateURLComponent("/subscriptions/subscriptions")();

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
            const result = operations.CreateSubscriptionResponse$.inboundSchema.parse({
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
     * List subscriptions
     */
    async listSubscriptions(
        filter?: string | undefined,
        pageOffset?: number | undefined,
        pageLimit?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.ListSubscriptionsResponse> {
        const input$: operations.ListSubscriptionsRequest = {
            filter: filter,
            pageOffset: pageOffset,
            pageLimit: pageLimit,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListSubscriptionsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/subscriptions/subscriptions")();

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
            const result = operations.ListSubscriptionsResponse$.inboundSchema.parse({
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
     * Get subscription
     */
    async getSubscription(
        subscriptionUuid: string,
        options?: RequestOptions
    ): Promise<operations.GetSubscriptionResponse> {
        const input$: operations.GetSubscriptionRequest = {
            subscriptionUuid: subscriptionUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetSubscriptionRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            subscription_uuid: enc$.encodeSimple("subscription_uuid", payload$.subscription_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/subscriptions/{subscription_uuid}")(
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
            const result = operations.GetSubscriptionResponse$.inboundSchema.parse({
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
     * Delete subscription
     */
    async deleteSubscription(
        subscriptionUuid: string,
        options?: RequestOptions
    ): Promise<operations.DeleteSubscriptionResponse> {
        const input$: operations.DeleteSubscriptionRequest = {
            subscriptionUuid: subscriptionUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteSubscriptionRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            subscription_uuid: enc$.encodeSimple("subscription_uuid", payload$.subscription_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/subscriptions/subscriptions/{subscription_uuid}")(
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
        } else if (this.matchResponse(response, 500, "application/json")) {
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

        return operations.DeleteSubscriptionResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * List subscription invoices
     */
    async listSubscriptionInvoices(
        subscriptionUuid: string,
        options?: RequestOptions
    ): Promise<operations.ListSubscriptionInvoicesResponse> {
        const input$: operations.ListSubscriptionInvoicesRequest = {
            subscriptionUuid: subscriptionUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.ListSubscriptionInvoicesRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            subscription_uuid: enc$.encodeSimple("subscription_uuid", payload$.subscription_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/subscriptions/subscriptions/{subscription_uuid}/invoices"
        )(pathParams$);

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
            const result = operations.ListSubscriptionInvoicesResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 500, "application/json")) {
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
     * Cancels subscription
     *
     * @remarks
     * Cancels a customer's subscription. It depends on the subscription cycle when a subscription is cancelled. For example, if a customer cancels a subscription, the subscription is still active for the rest of the subscription cycle because the customer has paid for it. Once the billing run processes the subscription at the end of the subscription cycle, the billing run detects that the subscription is cancelled and then sets the status of the subscription to `inactive`. No further invoices are generated for the subscription.
     *
     * You cannot reactivate a subscription once it has been cancelled.
     *
     */
    async cancelSubscription(
        subscriptionUuid: string,
        options?: RequestOptions
    ): Promise<operations.CancelSubscriptionResponse> {
        const input$: operations.CancelSubscriptionRequest = {
            subscriptionUuid: subscriptionUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.CancelSubscriptionRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            subscription_uuid: enc$.encodeSimple("subscription_uuid", payload$.subscription_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/subscriptions/subscriptions/{subscription_uuid}/cancel"
        )(pathParams$);

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

        return operations.CancelSubscriptionResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * List subscription invoice payments
     */
    async listSubscriptionInvoicePayments(
        subscriptionUuid: string,
        invoiceUuid: string,
        options?: RequestOptions
    ): Promise<operations.ListSubscriptionInvoicePaymentsResponse> {
        const input$: operations.ListSubscriptionInvoicePaymentsRequest = {
            subscriptionUuid: subscriptionUuid,
            invoiceUuid: invoiceUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.ListSubscriptionInvoicePaymentsRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            invoice_uuid: enc$.encodeSimple("invoice_uuid", payload$.invoice_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
            subscription_uuid: enc$.encodeSimple("subscription_uuid", payload$.subscription_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/subscriptions/subscriptions/{subscription_uuid}/invoices/{invoice_uuid}/payments"
        )(pathParams$);

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
            const result = operations.ListSubscriptionInvoicePaymentsResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get subscription invoice payment
     */
    async getSubscriptionInvoicePayment(
        subscriptionUuid: string,
        invoiceUuid: string,
        paymentUuid: string,
        options?: RequestOptions
    ): Promise<operations.GetSubscriptionInvoicePaymentResponse> {
        const input$: operations.GetSubscriptionInvoicePaymentRequest = {
            subscriptionUuid: subscriptionUuid,
            invoiceUuid: invoiceUuid,
            paymentUuid: paymentUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ =
            operations.GetSubscriptionInvoicePaymentRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            invoice_uuid: enc$.encodeSimple("invoice_uuid", payload$.invoice_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
            payment_uuid: enc$.encodeSimple("payment_uuid", payload$.payment_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
            subscription_uuid: enc$.encodeSimple("subscription_uuid", payload$.subscription_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/subscriptions/subscriptions/{subscription_uuid}/invoices/{invoice_uuid}/payments/{payment_uuid}"
        )(pathParams$);

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
            const result = operations.GetSubscriptionInvoicePaymentResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 404, "application/json")) {
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
     * Get subscription invoice
     */
    async getSubscriptionInvoice(
        subscriptionUuid: string,
        invoiceUuid: string,
        options?: RequestOptions
    ): Promise<operations.GetSubscriptionInvoiceResponse> {
        const input$: operations.GetSubscriptionInvoiceRequest = {
            subscriptionUuid: subscriptionUuid,
            invoiceUuid: invoiceUuid,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetSubscriptionInvoiceRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            invoice_uuid: enc$.encodeSimple("invoice_uuid", payload$.invoice_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
            subscription_uuid: enc$.encodeSimple("subscription_uuid", payload$.subscription_uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent(
            "/subscriptions/subscriptions/{subscription_uuid}/invoices/{invoice_uuid}"
        )(pathParams$);

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
            const result = operations.GetSubscriptionInvoiceResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [404, 500], "application/json")) {
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
}