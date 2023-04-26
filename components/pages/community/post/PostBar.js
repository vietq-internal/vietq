import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export default function PostBar({ data }) {
  const url = `${process.env.NEXT_PUBLIC_HOST}/community/post/${data.slug}`;
  const text = `Check out this blog post from VietQ: ${data.title}`;

  return (
    <div className="z-10 bg-blue-900 text-white  transition-colors border-b pt-24 pb-3 top-0 sticky border-blue-900">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between space-x-24 hover:text-white/75">
        <Link href="/community">
          <div className="inline-flex items-center text-sm font-medium">
            <ChevronLeftIcon className="inline-block w-5 h-5 mr-2 shrink-0" />
            Back to Community
          </div>
        </Link>
        <div className="space-x-4 flex items-center justify-end">
          <a
            href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
            className="hover:text-white/75"
          >
            Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            className="hover:text-white/75"
          >
            facebook
          </a>
        </div>
      </div>
    </div>
  );
}
