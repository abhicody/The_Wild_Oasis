function BookingStatus({ status }) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <div
      className="flex flex-col justify-center content-center mb-auto w-fit uppercase font-normal text-center px-2 pt-2 rounded bg-red-600 hover:bg-sky-700 "
      type={statusToTagName[status]}
    >
      {status.replace("-", " ")}
    </div>
  );
}
export default BookingStatus;
