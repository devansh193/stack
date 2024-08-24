import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex ">
        <p className="text-neutral-700 pb-1 text-lg font-semibold">
          StackTrack
        </p>
      </div>
    </Link>
  );
};
