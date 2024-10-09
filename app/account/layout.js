import SideNavigation from "@/app/_components/SideNavigation";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <Toaster />
      <div className="py-1">{children}</div>
    </div>
  );
}
