import { Button } from "@/components/ui/button";
import Collection from "@/components/shared/Collection";
import Image from "next/image";
import Link from "next/link";
import { getAllEvents } from "@/lib/actions/event.action";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {

  const page = Number(searchParams?.page) || 1
  const searchText = searchParams?.query || ''
  const category = searchParams?.category || ''


  const events = await getAllEvents({
    query: searchText.toString(),
    category: category.toString(),
    page,
    limit: 6
  })

  // console.log(events)

  return (
    <main>
      <>
        <section className="bg-primary-50 bg-dotted-patternbg-contain py-5 md:py-10">
          <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="h1-bold">
                Host, Connect, Celebrate: Your Events, Our Platform!
              </h1>
              <p className="p-regular-20 md:p-regular-24">
                Event-Ticketing is a platform that connects event organizers
                with attendees. Our platform offers an easy and efficient way to
                host, connect, and celebrate your events.
              </p>
              <Button
                size={"lg"}
                asChild
                className="button w-full sm:w-fit"
              >
                <Link
                  href="#events"
                >
                  Explore Now
                </Link>
              </Button>
            </div>

            <Image
              src="/assets/images/hero.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
        </section>

        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">
            Trusted by <br /> Thousands of Events
          </h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            <Search />
            <CategoryFilter />
          </div>

          <Collection
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
        </section>
      </>
    </main>
  );
}
