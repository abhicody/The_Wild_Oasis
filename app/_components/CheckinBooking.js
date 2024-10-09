"use client";

import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import SpinnerMini from "./SpinnerMini";
import Button from "./Button";
import { formatCurrency } from "../utils/helpers";
import { Checkin } from "../checkin/[bookingId]/page";
import Link from "next/link";
import toast from "react-hot-toast";
import BookingDataBox from "./BookingDataBox";
// import MoveBack from "./MoveBack";

export default function CheckinBooking({ booking, breakfastPrice, checkin }) {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakFast, setAddBreakfast] = useState(false);

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  if (!booking) return <SpinnerMini />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice = breakfastPrice * numNights * numGuests;
  // const moveBack = MoveBack();

  function handleCheckin() {
    if (!confirmPaid) return;
    checkin = Checkin(bookingId);

    if (addBreakFast) {
      checkin = Checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin = Checkin({ bookingId, breakfast: {} });
    }
    return checkin;
  }

  return (
    <>
      <div className="flex justify-between items-center" type="horizontal">
        <h1 className="text-5xl font-semibold">
          Check in booking #{bookingId}
        </h1>
        <Link
          className="
          bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/dashboard"
        >
          &larr; Back
        </Link>
      </div>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <div className=" flex border mt-14 text-left  text-xl border-gray-100 rounded-md px-5 py-5 ">
          <Checkbox
            checked={addBreakFast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </div>
      )}

      <div className="flex  text-xl text-left border mt-5 border-gray-100 rounded-md px-10 py-5 mb-4 ">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || checkin}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakFast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </div>

      <div className="flex gap-3 justify-end">
        <Button
          onClick={() => {
            handleCheckin();
            toast(`👉Booking #${bookingId}successfully checked-in🎉`);

            // toast.error("There was an error while checking in");
          }}
          disabled={!confirmPaid || checkin}
        >
          Check in booking #{bookingId}
        </Button>
        <Link
          className="bg-transparent hover:bg-blue-500
         text-blue-700 font-semibold hover:text-white
          py-5 px-4 border border-blue-500
           hover:border-transparent rounded"
          href="/dashboard"
        >
          Back
        </Link>
      </div>
    </>
  );
}
