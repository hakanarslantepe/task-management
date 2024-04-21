import Boards from "@/components/Boards";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Boards />
    </div>
  );
}
