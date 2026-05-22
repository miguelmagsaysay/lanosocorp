import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
