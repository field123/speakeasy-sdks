"use client";

import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { useEffect, useState } from "react";
import { GetOfferingResponse } from "@field123/service-subscriptions-sdk/dist/models/operations";
import {
  InLocalStorageTokenStore,
  withClientCredentialAuthorization,
} from "@field123/service-subscriptions-sdk/dist/oauth";

const appKeys = {
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
};

export function OfferingClient() {
  const [offering, setOffering] = useState<GetOfferingResponse | null>(null);

  const sdk = new Subscriptions({
    bearerToken: withClientCredentialAuthorization(
      appKeys.clientId,
      appKeys.clientSecret,
      {
        tokenStore: new InLocalStorageTokenStore(),
      },
    ),
    serverURL: "https://epcc-integration.global.ssl.fastly.net/v2",
  });

  async function resolveOffering() {
    const response = await sdk.offerings.getOffering({
      offeringUuid: "a601ac4d-9482-4672-b385-b69d64032489",
    });
    setOffering(response);
  }

  useEffect(() => {
    resolveOffering();
  }, []);

  return (
    <div className="overflow-x-scroll border-2 border-gray-200 rounded-lg p-4">
      <h2 className="text-xl semibold py-2">Offering Client</h2>
      {offering ? (
        <pre>{JSON.stringify(offering, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
