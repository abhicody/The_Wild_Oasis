import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  return (
    <div>
      <div>{children}</div>
      <Toaster />
    </div>
  );
}
