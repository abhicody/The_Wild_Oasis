"use client";

import { updateSetting } from "../_lib/actions";
import FormRow from "./FormRow";
import { useFormStatus } from "react-dom";
// import SpinnerMini from "./SpinnerMini";

function UpdateSettingsForm({ bookingSettings }) {
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = bookingSettings;

  // if (!bookingSettings) return <SpinnerMini />;

  return (
    <form
      action={updateSetting}
      className="py-10 px-16 bg-slate-800 border border-gray-100 rounded-md"
    >
      <FormRow label="Minimum nights/booking">
        <input
          className="border text-black border-gray-300 bg-gray-300 rounded-sm p-2 shadow-sm"
          type="number"
          defaultValue={minBookingLength}
          name="minBookingLength"
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <input
          className="border  text-black border-gray-300 bg-gray-300 rounded-sm p-2 shadow-sm"
          type="number"
          defaultValue={maxBookingLength}
          name="maxBookingLength"
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <input
          className="border  text-black border-gray-300 bg-gray-300 rounded-sm p-2 shadow-sm"
          type="number"
          defaultValue={maxGuestsPerBooking}
          name="maxGuestsPerBooking"
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <input
          className="border  text-black border-gray-300 bg-gray-300 rounded-sm p-2 shadow-sm"
          type="number"
          defaultValue={breakfastPrice}
          name="breakfastPrice"
        />
      </FormRow>
      <div className="mt-14  flex justify-end items-center gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4
       text-primary-800 font-semibold
       hover:bg-accent-600 transition-all
       disabled:bg-gray-500
       disabled:text-gray-300 rounded-md"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update Profile"}
    </button>
  );
}

export default UpdateSettingsForm;
