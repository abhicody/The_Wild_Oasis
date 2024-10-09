import { subDays } from "date-fns";
import DashboardLayout from "../_components/DashboardLayout";
import { auth } from "../_lib/auth";
import {
  getBookingsAfterDate,
  getCabins,
  getStaysAfterDate,
} from "../_lib/data-service";

import TodayActivity from "../_components/TodayActivity";
import DurationChart from "../_components/DurationChart";
import { DarkModeProvider } from "../_components/DarkModeContext";
import SalesChart from "../_components/SalesChart";
import { redirect } from "next/navigation";

export default async function Dashboard({ searchParams }) {
  const session = await auth();
  if (!session) {
    redirect("/account");
  }

  const lastfilter = searchParams?.last ?? "7";
  const queryDate = subDays(new Date(), lastfilter).toISOString();
  const bookings = await getBookingsAfterDate(queryDate);
  const stays = await getStaysAfterDate(queryDate);
  const cabins = await getCabins();

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <h2 className="mb-3 font-semibold text-4xl text-teal-400  ">
          Dashboard
        </h2>
        <p className="text-2xl">Welcome to your dashboard</p>
      </div>

      <DashboardLayout
        lastfilter={lastfilter}
        confirmedStays={confirmedStays}
        bookings={bookings}
        cabinCount={cabins.length}
      />
      <div className="mt-6 p-3.5 gap-8 grid grid-cols-2 col-span-2 pt-5 bg-gray-800 ">
        <TodayActivity confirmedStays={confirmedStays} />
        <DarkModeProvider>
          <DurationChart confirmedStays={confirmedStays} />
          <SalesChart bookings={bookings} numDays={lastfilter} />
        </DarkModeProvider>
      </div>
    </>
  );
}
