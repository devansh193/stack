import { Footer } from "./_components/footer";
import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-zinc-100">
        <Navbar />
      <main className=" pt-40 pb-80 bg-zinc-50">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
