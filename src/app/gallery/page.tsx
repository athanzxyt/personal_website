import type { Metadata } from "next";
import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  wrapperClass: string;
  imageClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/investmentfinals.jpg",
    alt: "My team and I at the 2023 Wharton Investment Competition finals, where we won 1st place",
    caption:
      "My team and I at the 2023 Wharton Investment Competition finals, where we won 1st place",
    wrapperClass: "relative group",
    imageClass: "object-cover",
  },
  {
    src: "/gallery/hsgraduation.jpg",
    alt: "Me and a friend at our high school graduation",
    caption: "Me and a friend at our high school graduation",
    wrapperClass: "relative group row-span-2",
    imageClass: "object-cover object-top sm:object-center",
  },
  {
    src: "/gallery/temple.jpg",
    alt: "Me and the Singapore TigerLaunch delegation visiting a buddhist temple",
    caption: "Me and the Singapore TigerLaunch delegation visiting a buddhist temple",
    wrapperClass: "relative group",
    imageClass: "object-cover",
  },
  {
    src: "/gallery/quantumcomputer.jpg",
    alt: "Me at IBM's quantum computing lab in New York",
    caption: "Me at IBM's quantum computing lab in New York",
    wrapperClass: "relative group row-span-2",
    imageClass: "object-cover sm:object-center",
  },
  {
    src: "/gallery/majordeclaration.jpg",
    alt: "My friends and I finally becoming official Computer Science majors",
    caption: "My friends and I finally becoming official Computer Science majors",
    wrapperClass: "relative group row-span-2",
    imageClass: "object-cover",
  },
  {
    src: "/gallery/moderating.jpg",
    alt: "Me moderating a startup panel at the 2023 TigerLaunch finals",
    caption: "Me moderating a startup panel at the 2023 TigerLaunch finals",
    wrapperClass: "relative group",
    imageClass: "object-cover",
  },
  {
    src: "/gallery/rainbowvalley.jpg",
    alt: "Rainbow Valley",
    caption: "Me at the summit of Rainbow Valley",
    wrapperClass: "relative group",
    imageClass: "object-cover",
  },
  {
    src: "/gallery/ycnameplate.jpg",
    alt: "Y Combinator nameplate",
    caption: "Me and Alex at the start of YC",
    wrapperClass: "relative group row-span-2 md:col-start-2",
    imageClass: "object-cover",
  },
  {
    src: "/gallery/princetonpitch.jpg",
    alt: "Pitch event at Princeton",
    caption: "Winning Princeton Pitch",
    wrapperClass: "relative group",
    imageClass: "object-cover",
  },
];

export const metadata: Metadata = {
  title: "Gallery | Athan Zhang",
};

export default function GalleryPage() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3" style={{ gridAutoRows: "160px" }}>
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
          <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/60 group-hover:opacity-100">
            <span className="w-3/4 text-xs text-center text-white">{item.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
