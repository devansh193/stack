import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-lg p-4 bg-zinc-50 text-zinc-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-3" />
          Manage your task efficiently.
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Stacktrack help team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-700 to-blue-400 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-wd-2xl text-center mx-auto">
        Streamline workflows, boost collaboration, and achieve project success
        with ease
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href={"/sign-up"}>Get Stacktrack for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
