import Link from "next/link";
import getBlogsMetadata from "@/utils/getBlogsMetadata";

export const metadata = {
  title: "Writing | Athan Zhang",
};

const cleanDate = (dateString) =>
  new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, "$1"));

export default function WritingPage() {
  const blogs = getBlogsMetadata().sort(
    (a, b) => cleanDate(b.date) - cleanDate(a.date)
  );

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Writing</p>
        <h1 className="text-3xl font-semibold tracking-tight">Notes, essays, and fragments.</h1>
        <p className="text-base text-neutral-600">
          A running log of experiments, field notes, and things I&apos;m trying to put words to.
        </p>
      </section>

      <ul className="divide-y divide-neutral-200">
        {blogs.map((blog) => (
          <li key={blog.slug} className="py-4">
            <Link
              href={`/writing/${blog.slug}`}
              className="flex flex-col gap-2 transition-colors hover:text-black"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-lg font-medium">{blog.title}</p>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  {blog.date}
                </span>
              </div>
              <p className="text-sm text-neutral-500">{blog.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
