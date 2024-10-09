"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import toast from "react-hot-toast";

function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(() => onDelete(bookingId));
  }

  return (
    <Modal>
      <Modal.Open opens="delete">
        <button className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900">
          {!isPending ? (
            <>
              <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Delete</span>
            </>
          ) : (
            <span className="mx-auto">
              <SpinnerMini />
            </span>
          )}
        </button>
      </Modal.Open>
      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName="Booking"
          disabled={isPending}
          onClick={() => {
            handleDelete();
            toast("✅Booking Successfully Deleted 😕");
          }}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteReservation;
