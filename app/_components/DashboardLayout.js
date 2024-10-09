import { auth } from "../_lib/auth";
import { getGuest } from "../_lib/data-service";
import LastFilter from "./LastFilter";
import Stats from "./Stats";

export default async function DashboardLayout({
  lastfilter,
  bookings,
  confirmedStays,
  cabinCount,
}) {
  const session = await auth();
  const guestName = await getGuest(session.user.email);
  const { fullName } = guestName;

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h1>Welcome, {fullName}</h1>
        <LastFilter />
      </div>

      <Stats
        lastfilter={lastfilter}
        confirmedStays={confirmedStays}
        bookings={bookings}
        cabinCount={cabinCount}
      />
    </>
  );
}
