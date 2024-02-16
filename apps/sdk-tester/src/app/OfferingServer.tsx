"use client";

import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { withClientCredentialAuthorization } from "@field123/service-subscriptions-sdk/dist/oauth";

const appKeys = {
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
};

export async function OfferingServer() {
  const sdk = new Subscriptions({
    bearerToken: withClientCredentialAuthorization(
      appKeys.clientId,
      appKeys.clientSecret,
    ),
    serverURL: "https://epcc-integration.global.ssl.fastly.net/v2",
  });

  const response = await sdk.offerings.getOffering({
    offeringUuid: "a601ac4d-9482-4672-b385-b69d64032489",
  });

  return (
    <div className="overflow-x-scroll border-2 border-gray-200 rounded-lg p-4">
      <h2 className="text-xl semibold py-2">Offering Server</h2>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
