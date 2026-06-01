import { Anchor } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-navy-dark px-4 pt-16 text-center text-white">
      <div className="not-found-anchor mb-8 text-orange" aria-hidden>
        <Anchor className="mx-auto h-16 w-16 opacity-90" strokeWidth={1.25} />
      </div>
      <p className="text-7xl font-light text-orange sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-light tracking-tight sm:text-3xl">
        This page has drifted off course.
      </h1>
      <p className="mt-3 max-w-md text-sm text-white/65">
        The route you requested is not available. Verify the URL or return to
        the home page.
      </p>
      <ButtonLink href="/" variant="primary" className="mt-10">
        Back to Home
      </ButtonLink>
    </div>
  );
}
