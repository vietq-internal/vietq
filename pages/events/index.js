import client from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/sanity/lib/preview";
import ExitPreview from "@/components/sanity/ExitPreview";
import PreviewLoading from "@/components/sanity/PreviewLoading";
import RootLayout from "@/components/global/RootLayout";

import EventTypes from "@/components/pages/events/EventTypes";
import Header from "@/components/pages/events/Header";
import PastEvents from "@/components/pages/events/PastEvents";

import dynamic from "next/dynamic";
const UpcomingEvents = dynamic(() =>
  import("@/components/pages/events/UpcomingEvents")
);

const query = groq`*[_type == "eventPage"][0]`;

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return {
    props: { preview, data },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REVALIDATE),
  };
}

export default function Events({ preview, data }) {
  return (
    <RootLayout navTransparent={true} preview={preview}>
      {preview ? (
        <PreviewSuspense fallback={<PreviewLoading />}>
          <PreviewEvents query={query} />
        </PreviewSuspense>
      ) : (
        <EventsPage data={data} />
      )}
    </RootLayout>
  );
}

function EventsPage({ data }) {
  return (
    <>
      <Header />
      <EventTypes />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}

function PreviewEvents({ query }) {
  const data = usePreview(null, query);

  return (
    <>
      <EventsPage data={data} />
      <ExitPreview />
    </>
  );
}
