import experiences from "@/content/experiences.json";

const generateDescriptionSegments = (text = "") => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const segments = [];
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        value: text.slice(lastIndex, match.index),
      });
    }
    segments.push({ type: "link", value: match[1], href: match[2] });
    lastIndex = linkPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }

  if (!segments.length) {
    return [{ type: "text", value: text }];
  }

  return segments;
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="space-y-4" id="about">
        <h1 className="text-4xl font-semibold tracking-tight">Athan Zhang</h1>
        <div className="space-y-4 text-base leading-relaxed text-neutral-600">
          <p>
            I'm a Founder and the CEO of Coevolved, a small, technical team
            backed by Y Combinator working to redefine agentic systems.
          </p>
          <p>
            I'm an effectual, pragmatic engineer with an eye for design. I
            studied Computer Science at Princeton and was the only one in my
            class to skip a grade. I've been coding since I was 12, and I'm
            still obsessed with building things that make a tangible difference
            for the people who use them.
          </p>
          <p>
            I've been fortunate to have a strong upbringing and education. I try
            to pay it forward by treating that privilege as responsibility, and
            meeting it with the tenacity to build and the resolve to contribute.
          </p>
          <p>
            Outside of work, I love cooking, training for triathlons, and
            mentoring wherever I can.
          </p>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="mb-4 text-lg font-semibold">Meaningful Experience</h2>

        <ol className="relative border-gray-300 border-s">
          {experiences.map((role, index) => {
            const segments = generateDescriptionSegments(role.description);

            return (
              <li key={`${role.date}-${index}`} className="mb-4 ms-4 last:mb-0">
                <div
                  className={[
                    "absolute w-3 h-3 rounded-full mt-2 -start-1.5 border border-white",
                    role.current ? "bg-orange-600" : "bg-gray-200",
                  ].join(" ")}
                />

                <time
                  className={[
                    "mb-1 text-xs leading-none",
                    role.current ? "text-orange-600" : "text-gray-500",
                  ].join(" ")}
                >
                  {role.current ? "Today" : role.date}
                </time>

                <p className="text-base text-gray-900">
                  {segments.map((segment, segmentIndex) =>
                    segment.type === "link" ? (
                      <a
                        key={`${role.date}-${segmentIndex}`}
                        href={segment.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline transition-colors underline-offset-4 hover:text-gray-600"
                      >
                        {segment.value}
                      </a>
                    ) : (
                      <span key={`${role.date}-${segmentIndex}`}>
                        {segment.value}
                      </span>
                    )
                  )}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="mb-4 text-lg font-semibold">Contact</h2>
        <div className="space-y-3 text-base text-neutral-600">
          <p>
            For professional inquires, you can reach me at
            <span className="block px-1.5 py-0.5 mt-1 text-sm rounded w-fit bg-neutral-200 text-neutral-900">
              athan [at] coevolved [dot] ai
            </span>
          </p>
          <p>
            For anything more personal or reflective, send a note to
            <span className="block px-1.5 py-0.5 mt-1 text-sm rounded w-fit bg-neutral-200 text-neutral-900">
              proc [at] athan [dot] sh
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-900">
          <a
            href="https://www.linkedin.com/in/athanzhang/"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/athanzxyt"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://x.com/athanzxyt"
            className="underline underline-offset-4"
          >
            X (Twitter)
          </a>
        </div>
      </section>
    </div>
  );
}
