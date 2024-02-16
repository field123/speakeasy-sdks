import { OfferingClient } from "@/app/OfferingClient";
import { OfferingServer } from "@/app/OfferingServer";

export default async function SDK() {
  return (
    <div className="grid grid-cols-2 p-8">
      <OfferingClient />
      <OfferingServer />
    </div>
  );
}
