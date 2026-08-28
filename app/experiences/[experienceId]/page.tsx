import { headers } from "next/headers";
import { whopSdk } from "@/lib/whop-sdk";
import ReelifyApp from "@/components/ReelifyApp";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ experienceId: string }>;
}) {
  const { experienceId } = await params;

  const { userId } = await whopSdk.verifyUserToken(await headers());

  const access = await whopSdk.access.checkIfUserHasAccessToExperience({
    userId,
    experienceId,
  });

  if (!access.hasAccess) {
    return (
      <div style={{ padding: 40, textAlign: "center", fontFamily: "sans-serif" }}>
        <h2>No access</h2>
        <p>You need to join this whop to use Reelify.</p>
      </div>
    );
  }

  const user = await whopSdk.users.getUser({ userId });

  return <ReelifyApp userId={userId} username={user?.username} accessLevel={access.accessLevel} />;
}
