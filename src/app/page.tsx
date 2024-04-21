import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";

const Boards = dynamic(
  () => {
    return import("@/components/Boards");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Boards />
    </div>
  );
}
