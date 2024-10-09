import UpdateSettingsForm from "../../_components/UpdateSettingsForm";
import { auth } from "../../_lib/auth";
import { getSettings } from "../../_lib/data-service";

export default async function Settings() {
  const session = await auth();
  if (!session) return;
  const bookingSettings = await getSettings();
  return (
    <div className="flex flex-col font-semibold text-2xl">
      <h1 className="mb-2 font-semibold text-5xl">Update hotel settings</h1>
      <UpdateSettingsForm bookingSettings={bookingSettings} />
    </div>
  );
}
