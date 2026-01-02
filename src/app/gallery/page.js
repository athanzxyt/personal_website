import Image from "next/image";

const galleryItems = [
  {
    src: "/gallery/investmentfinals.jpg",
    alt: "My team and I at the 2023 Wharton Investment Competition finals, where we won 1st place",
    caption:
      "My team and I at the 2023 Wharton Investment Competition finals, where we won 1st place",
    wrapperClass: "relative group h-40",
    imageClass: "rounded-lg object-cover",
  },
  {
    src: "/gallery/hsgraduation.jpg",
    alt: "Me and a friend at our high school graduation",
    caption: "Me and a friend at our high school graduation",
    wrapperClass: "relative group md:row-span-2 row-span-1",
    imageClass: "rounded-lg object-cover object-top sm:object-center",
  },
  {
    src: "/gallery/temple.jpg",
    alt: "Me and the Singapore TigerLaunch delegation visiting a buddhist temple",
    caption: "Me and the Singapore TigerLaunch delegation visiting a buddhist temple",
    wrapperClass: "relative group",
    imageClass: "rounded-lg object-cover",
  },
  {
    src: "/gallery/quantumcomputer.jpg",
    alt: "Me at IBM's quantum computing lab in New York",
    caption: "Me at IBM's quantum computing lab in New York",
    wrapperClass: "relative group row-span-2",
    imageClass: "rounded-lg object-cover sm:object-center",
  },
  {
    src: "/gallery/majordeclaration.jpg",
    alt: "My friends and I finally becoming official Computer Science majors",
    caption: "My friends and I finally becoming official Computer Science majors",
    wrapperClass: "relative group row-span-2",
    imageClass: "rounded-lg object-cover",
  },
  {
    src: "/gallery/moderating.jpg",
    alt: "Me moderating a startup panel at the 2023 TigerLaunch finals",
    caption: "Me moderating a startup panel at the 2023 TigerLaunch finals",
    wrapperClass: "relative group h-40",
    imageClass: "rounded-lg object-cover",
  },
];

export const metadata = {
  title: "Gallery | Athan Zhang",
};

export default function GalleryPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Gallery</p>
        <h1 className="text-3xl font-semibold tracking-tight">Snapshots and little anchors.</h1>
        <p className="text-base text-neutral-600">
          A loose archive of people and places that keep me grounded.
        </p>
      </section>

      <div className="grid grid-cols-2 grid-rows-4 gap-4 md:grid-cols-3 md:grid-rows-3">
        {galleryItems.map((item) => (
          <div key={item.src} className={item.wrapperClass}>
            <Image
              alt={item.alt}
              src={item.src}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className={item.imageClass}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="w-3/4 text-center text-xs text-white">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
