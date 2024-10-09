"use client";

import { useFormStatus } from "react-dom";
import { updateFeedback } from "../_lib/actions";

export async function Feedback({ guest }) {
  const { fullName, email } = guest;

  return (
    <form
      action={updateFeedback}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div class="mb-4">
        <label for="feedback" class="block text-gray-300">
          Feedback
        </label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          maxlength="200"
          className="text-primary-950 mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl"
          required
        ></textarea>
      </div>
      <Button />
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
         disabled:text-gray-300 flex justify-end ml-auto"
      disabled={pending}
    >
      {pending ? "Updating..." : "Submit Feedback"}
    </button>
  );
}
