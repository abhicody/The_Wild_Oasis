import FilterStatus from "@/app/_components/FilterStatus";
import PaginationControls from "@/app/_components/Pagination";

import ReservationList from "@/app/_components/ReservationList";
import SortBy from "@/app/_components/SortBy";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page({ searchParams }) {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);
  const filter = searchParams?.status ?? "all";
  const sortByFilter = searchParams?.sortBy ?? "all";

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

  const entries = bookings.slice(start, end);

  return (
    <>
      <div className="flex justify-between mt-0 ">
        <SortBy />
        <FilterStatus />
      </div>
      <div className="snap-start">
        <h2 className="font-semibold text-2xl text-accent-400 mb-7">
          Your reservations
        </h2>

        {bookings.length === 0 ? (
          <p className="text-lg">
            You have no reservations yet. Check out our{" "}
            <a className="underline text-accent-500" href="/cabins">
              luxury cabins &rarr;
            </a>
          </p>
        ) : (
          <ReservationList
            sortByFilter={sortByFilter}
            filter={filter}
            entries={entries}
          />
        )}
        <footer className="bg-slate-800 flex justify-center p-4">
          <PaginationControls
            hasNextPage={end < bookings.length}
            hasPrevPage={start > 0}
          />
        </footer>
      </div>
    </>
  );
}
