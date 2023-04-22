import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export default function EventBar({ data }) {
  const url = `${process.env.NEXT_PUBLIC_HOST}/community/post/${data.slug}`;
  const text = `Check out this event from VietQ: ${data.title}`;

  return (
    <div className="z-10 bg-blue-900 text-white hover:text-white/75 transition-colors border-b pt-24 pb-3 top-0 sticky border-blue-900">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between space-x-24">
        {/* <Link href="/events">
          <div className="inline-flex items-center text-xs font-semibold uppercase tracking-widest">
            <ChevronLeftIcon className="inline-block w-5 h-t mr-2 shrink-0" />
            Back to Events
          </div>
        </Link> */}
        <Link href="/events">
          <div className="inline-flex items-center text-sm font-medium">
            <ChevronLeftIcon className="inline-block w-5 h-5 mr-1 shrink-0" />
            Back to Events
          </div>
        </Link>
        <div className="space-x-4 flex items-center justify-end">
          <a href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}>
            Twitter
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            facebook
          </a>
        </div>
      </div>
    </div>
  );
}
