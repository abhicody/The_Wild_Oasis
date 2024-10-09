import { Feedback } from "@/app/_components/Feedback";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export default async function page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">Feedback</h2>
      <Feedback guest={guest} />
    </div>
  );
}
