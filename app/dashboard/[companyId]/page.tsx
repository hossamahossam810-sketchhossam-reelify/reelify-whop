import { headers } from "next/headers";
import { whopSdk } from "@/lib/whop-sdk";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ companyId: string }>;
}) {
  const { companyId } = await params;
  const { userId } = await whopSdk.verifyUserToken(await headers());

  return (
    <div style={{ padding: 32, fontFamily: "sans-serif" }}>
      <h2>Reelify — Admin dashboard</h2>
      <p>Company: {companyId}</p>
      <p>Signed in as: {userId}</p>
      <p style={{ color: "#888" }}>
        Add settings here later — e.g. how many free videos members get per month,
        or which templates are enabled for this whop.
      </p>
    </div>
  );
}
