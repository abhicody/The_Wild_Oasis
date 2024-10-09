// import { formatCurrency } from "../utils/helpers";
import {
  BanknotesIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { formatCurrency } from "../utils/helpers";

function Stats({ bookings, confirmedStays, lastfilter, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (lastfilter * cabinCount);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <main className="grid grid-cols-4 grid-flow-row gap-2.5 mb-10 ">
        <div className="bg-slate-500 p-2 rounded flex items-center justify-start self-auto w-auto gap-5">
          <div
            className=" border rounded p-1.5 
          grid grid-cols-2 grid-flow-row items-center justify-center 
          w-16 h-14 bg-slate-800 gap-20 ml-5"
          >
            <svg
              className=" w-14 h-auto  text-lime-500 row-span-full aspect-auto rounded-2xl 
            flex items-center justify-center mb-6 mt-5 ml-3"
            >
              <BriefcaseIcon />
            </svg>
          </div>
          <div
            className="p-1.5 grid grid-cols-1 auto-rows-auto 
            gap-x-6 gap-y-2 "
          >
            <h5
              className="self-end font-semibold text-base uppercase tracking-wide
              text-cyan-400 "
            >
              bookings
            </h5>
            <p className="text-base font-medium">{numBookings}</p>
          </div>
        </div>

        {/* // S A L E S */}

        <div className="bg-slate-500 p-2 rounded flex items-center justify-start self-auto w-auto gap-5">
          <div
            className=" border rounded p-1.5 
          grid grid-cols-2 grid-flow-row items-center justify-center 
          w-16 h-14 bg-slate-800 gap-20 ml-5"
          >
            <svg
              className=" w-14 h-auto  text-red-600 row-span-full aspect-auto rounded-2xl 
            flex items-center justify-center mb-6 mt-5 ml-3"
            >
              <BanknotesIcon />
            </svg>
          </div>
          <div
            className="p-1.5 grid grid-cols-1 auto-rows-auto 
            gap-x-6 gap-y-2 "
          >
            <h5
              className="self-end font-semibold text-base uppercase tracking-wide
              text-cyan-400 "
            >
              sales
            </h5>
            <p className="text-base font-medium">{formatCurrency(sales)}</p>
          </div>
        </div>
        <div className="bg-slate-500 p-2 rounded flex items-center justify-start self-auto w-auto gap-5">
          <div
            className=" border rounded p-1.5 
          grid grid-cols-2 grid-flow-row items-center justify-center 
          w-16 h-14 bg-slate-800 gap-20 ml-5"
          >
            <svg
              className=" w-14 h-auto  text-blue-500 row-span-full aspect-auto rounded-2xl 
            flex items-center justify-center mb-6 mt-5 ml-3"
            >
              <ChartBarIcon />
            </svg>
          </div>
          <div
            className="p-1.5 grid grid-cols-1 auto-rows-auto 
            gap-x-6 gap-y-2 "
          >
            <h5
              className="self-end font-semibold text-base uppercase tracking-wide
              text-cyan-400 "
            >
              check-ins
            </h5>
            <p className="text-base font-medium">{checkins}</p>
          </div>
        </div>
        <div className="bg-slate-500 p-2 rounded flex items-center justify-start self-auto w-auto gap-5">
          <div
            className=" border rounded p-1.5 
          grid grid-cols-2 grid-flow-row items-center justify-center 
          w-16 h-14 bg-slate-800 gap-20 ml-5"
          >
            <svg
              className=" w-14 h-auto  text-amber-400 row-span-full aspect-auto rounded-2xl 
            flex items-center justify-center mb-6 mt-5 ml-3"
            >
              <CalendarDaysIcon />
            </svg>
          </div>
          <div
            className="p-1.5 grid grid-cols-1 auto-rows-auto 
            gap-x-6 gap-y-2 "
          >
            <h5
              className="self-end font-semibold text-base uppercase tracking-wide
              text-cyan-400 "
            >
              occupancy rate
            </h5>
            <p className="text-base font-medium">
              {Math.round(occupation * 100) + "%"}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Stats;
