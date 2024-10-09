"use server";

import { updateBookingCheckin } from "@/app/_lib/actions";
import CheckinBooking from "../../_components/CheckinBooking";

import { getBookingCheckin, getSettings } from "@/app/_lib/data-service";

export default async function page({ params }) {
  const { bookingId } = params;
  const booking = await getBookingCheckin(bookingId);
  const { numGuests, totalPrice } = booking;

  const settings = await getSettings();
  const { breakfastPrice } = settings;

  return (
    <div>
      <CheckinBooking breakfastPrice={breakfastPrice} booking={booking} />
    </div>
  );
}

export async function Checkin(bookingId, breakfast) {
  const checkin = await updateBookingCheckin(bookingId, {
    status: "checked-in",
    isPaid: true,
    ...breakfast,
  });

  // <CheckinBooking checkin={checkin} />;
  return checkin;
}
export async function CheckOut(bookingId) {
  const checkout = await updateBookingCheckin(bookingId, {
    status: "checked-out",
  });

  // <CheckinBooking checkin={checkin} />;
  return checkout;
}
