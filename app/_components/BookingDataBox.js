import DataItem from "./DataItem";
import {
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { formatCurrency, formatDistanceFromNow } from "../utils/helpers";
import { format, isToday } from "date-fns";

// A purely presentational component
function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="bg-slate-500 mt-6  border border-gray-200 rounded-md overflow-hidden">
      <header
        className="bg-blue-900 p-8 text-[#e0e7ff] text-[1.8rem] 
      font-medium flex items-center justify-between"
      >
        <div className="flex items-center gap-6 font-semibold text-[1.8rem]">
          <svg className="h-12 w-12">
            <HomeModernIcon />
          </svg>

          <p>
            {numNights} nights in Cabin
            <span className="font-['Sono'] text-[2rem] ml-1">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <section className="p-10 pt-12 pb-2">
        <div className="flex items-center gap-3 mb-4 text-white">
          {countryFlag && (
            <img
              className="max-w-8 rounded-sm block border border-gray-100"
              src={countryFlag}
              alt={`Flag of ${country}`}
            />
          )}
          <p className="font-medium text-white">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {observations && (
          <DataItem
            icon={<ChatBubbleBottomCenterTextIcon />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<CheckCircleIcon />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <div
          className={`flex items-center justify-between p-4 rounded-sm mt-6 ${
            isPaid
              ? "bg-lime-500 text-green-700"
              : "bg-gray-800 text-yellow-700"
          }`}
          $isPaid={isPaid}
        >
          <DataItem
            icon={
              <svg className="h-8 w-8 text-current">
                <CurrencyDollarIcon />
              </svg>
            }
            label={`Total price`}
          >
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p className=" uppercase text-sm font-semibold">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </section>

      <footer className="p-4 md:p-16 text-lg text-right text-gray-50">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
