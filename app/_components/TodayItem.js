// import Image from "next/image";
// import Button from "./Button";

import Link from "next/link";
import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id: bookingId, status, guests, numNights } = activity;

  return (
    <li className="grid rounded-sm grid-cols-5 gap-5 px-3 items-center text-xl border-t border-y-slate-700">
      {status === "unconfirmed" && (
        <div className="rounded py-8 px-3">
          <span
            className="w-fit  uppercase font-semibold text-base 
          bg-slate-700 text-gray-100 "
          >
            Arriving
          </span>
        </div>
      )}
      {status === "checked-in" && (
        <span
          className="w-fit uppercase font-semibold text-base 
          px-2 py-5 rounded bg-lime-400 text-zinc-950 "
        >
          Departing
        </span>
      )}

      <img
        className=" ml-9 max-w-8 block rounded  border border-orange-600  "
        src={guests.countryFlag}
        alt={`Flag of ${guests.country}`}
      />

      <div className="font-medium">{guests.fullName}</div>
      <div>{numNights} nights</div>
      {status === "unconfirmed" && (
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white 
        font-bold py-2 px-4 border-b-4 border-blue-700
       hover:border-blue-500 rounded"
          href={`/checkin/${bookingId}`}
        >
          Check in
        </Link>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={bookingId} />}
    </li>
  );
}

export default TodayItem;
