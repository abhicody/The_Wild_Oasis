import TodayItem from "./TodayItem";
import { getStaysTodayActivity } from "../_lib/data-service";
// import SpinnerMini from "./SpinnerMini";
import LoadingDashboard from "../dashboard/loading";

export default async function TodayActivity({ confirmedStays }) {
  const activities = await getStaysTodayActivity();
  console.log(activities);

  if (!activities) return <LoadingDashboard />;

  // return (
  // <div className="mt-6 p-3.5 grid grid-cols-2 col-span-2 pt-5 bg-gray-800 ">
  return (
    <div className=" border border-gray-200 flex flex-col">
      <h2 className="font-semibold text-4xl mt-3 mb-3">Today</h2>
      {activities?.length > 0 ? (
        <ul className="overflow-auto overscroll-auto ">
          {activities.map((activity) => (
            <TodayItem activity={activity} key={activity.id} />
          ))}
        </ul>
      ) : (
        <p className="items-center font-medium mt-3 text-3xl">
          No activity today...
        </p>
      )}
    </div>
  );
  {
  }
}
