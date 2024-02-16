"use client";

import { SDK } from "service-subscriptions-sdk";
import { useEffect, useState } from "react";
import { GetOfferingResponse } from "service-subscriptions-sdk/models/operations";
import {
  InLocalStorageTokenStore,
  withClientCredentialAuthorization,
} from "service-subscriptions-sdk/oauth";

const appKeys = {
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID!,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
};

export async function OfferingServer() {
  const sdk = new SDK({
    bearerToken: withClientCredentialAuthorization(
      appKeys.clientId,
      appKeys.clientSecret,
      {
        tokenStore: new InLocalStorageTokenStore(),
      },
    ),
    serverURL: "https://epcc-integration.global.ssl.fastly.net/v2",
  });

  const response = await sdk.offerings.getOffering(
    "a601ac4d-9482-4672-b385-b69d64032489",
  );

  return (
    <div className="">
      <h2>Offering Server</h2>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
