"use client";

import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";
import { useOptimistic } from "react";

function ReservationList({ entries, filter, sortByFilter }) {
  let [optimisticBookings, optimisticDelete] = useOptimistic(
    entries,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  optimisticBookings;
  if (
    filter === "all" &&
    entries.sort((a, b) => {
      if (sortByFilter === "startDate-desc") return a.startDate - b.startDate;
      if (sortByFilter === "startDate-asc") return b.startDate - a.startDate;
      if (sortByFilter === "totalPrice-desc")
        return b.totalPrice - a.totalPrice;
      if (sortByFilter === "totalPrice-asc") return a.totalPrice - b.totalPrice;
    })
  )
    optimisticBookings = entries;

  if (
    filter === "checked-out" &&
    entries.sort((a, b) => {
      if (sortByFilter === "startDate-desc") return a.startDate - b.startDate;
      if (sortByFilter === "startDate-asc") return b.startDate - a.startDate;
      if (sortByFilter === "totalPrice-desc")
        return b.totalPrice - a.totalPrice;
      if (sortByFilter === "totalPrice-asc") return a.totalPrice - b.totalPrice;
    })
  )
    optimisticBookings = entries.filter((booking) => booking.status === filter);
  if (
    filter === "checked-in" &&
    entries.sort((a, b) => {
      if (sortByFilter === "startDate-desc") return a.startDate - b.startDate;
      if (sortByFilter === "startDate-asc") return b.startDate - a.startDate;
      if (sortByFilter === "totalPrice-desc")
        return b.totalPrice - a.totalPrice;
      if (sortByFilter === "totalPrice-asc") return a.totalPrice - b.totalPrice;
    })
  )
    optimisticBookings = entries.filter((booking) => booking.status === filter);
  if (
    filter === "unconfirmed" &&
    entries.sort((a, b) => {
      if (sortByFilter === "startDate-desc") return a.startDate - b.startDate;
      if (sortByFilter === "startDate-asc") return b.startDate - a.startDate;
      if (sortByFilter === "totalPrice-desc")
        return b.totalPrice - a.totalPrice;
      if (sortByFilter === "totalPrice-asc") return a.totalPrice - b.totalPrice;
    })
  )
    optimisticBookings = entries.filter((booking) => booking.status === filter);

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
