"use client";

import toast from "react-hot-toast";
import { CheckOut } from "../checkin/[bookingId]/page";
import Button from "./Button";

export default function CheckoutButton({ bookingId }) {
  return (
    <Button
      $variation="primary"
      size="small"
      onClick={() => {
        CheckOut(bookingId);
        toast(`✅Successfully #${bookingId} checking-Out 😎`);
      }}
    >
      Check out
    </Button>
  );
}
