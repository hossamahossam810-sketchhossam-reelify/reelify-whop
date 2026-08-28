import { WhopServerSdk } from "@whop/api";

// Initializes the Whop SDK using environment variables.
// These come from your app's page on the Whop developer dashboard.
export const whopSdk = WhopServerSdk({
  appId: process.env.NEXT_PUBLIC_WHOP_APP_ID!,
  appApiKey: process.env.WHOP_API_KEY!,
  onBehalfOfUserId: process.env.NEXT_PUBLIC_WHOP_AGENT_USER_ID,
  companyId: process.env.NEXT_PUBLIC_WHOP_COMPANY_ID,
});
