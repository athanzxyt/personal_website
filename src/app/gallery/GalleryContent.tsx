"use client";

import Image from "next/image";
import { MasonryPhotoAlbum, RenderImageProps, RenderImageContext } from "react-photo-album";
import "react-photo-album/masonry.css";
import { useState } from "react";

interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    src: "/gallery/investmentfinals.jpg",
    width: 1600,
    height: 1200,
    alt: "My team and I at the 2023 Wharton Investment Competition finals, where we won 1st place",
    caption: "My team and I at the 2023 Wharton Investment Competition finals, where we won 1st place",
  },
  {
    src: "/gallery/hsgraduation.jpg",
    width: 1200,
    height: 1600,
    alt: "Me and a friend at our high school graduation",
    caption: "Me and a friend at our high school graduation",
  },
  {
    src: "/gallery/temple.jpg",
    width: 1600,
    height: 1200,
    alt: "Me and the Singapore TigerLaunch delegation visiting a buddhist temple",
    caption: "Me and the Singapore TigerLaunch delegation visiting a buddhist temple",
  },
  {
    src: "/gallery/quantumcomputer.jpg",
    width: 1200,
    height: 1600,
    alt: "Me at IBM's quantum computing lab in New York",
    caption: "Me at IBM's quantum computing lab in New York",
  },
  {
    src: "/gallery/majordeclaration.jpg",
    width: 1600,
    height: 1200,
    alt: "My friends and I finally becoming official Computer Science majors",
    caption: "My friends and I finally becoming official Computer Science majors",
  },
  {
    src: "/gallery/moderating.jpg",
    width: 1600,
    height: 1200,
    alt: "Me moderating a startup panel at the 2023 TigerLaunch finals",
    caption: "Me moderating a startup panel at the 2023 TigerLaunch finals",
  },
  {
    src: "/gallery/rainbowvalley.jpg",
    width: 1600,
    height: 1200,
    alt: "Rainbow Valley",
    caption: "Me at the summit of Rainbow Valley",
  },
  {
    src: "/gallery/ycnameplate.jpg",
    width: 1200,
    height: 1600,
    alt: "Y Combinator nameplate",
    caption: "Me and Alex at the start of YC",
  },
  {
    src: "/gallery/princetonpitch.jpg",
    width: 1600,
    height: 1200,
    alt: "Pitch event at Princeton",
    caption: "Winning Princeton Pitch",
  },
];

function ImageWithHover({ photo, width, height, alt, title, index }: {
  photo: Photo;
  width: number;
  height: number;
  alt: string;
  title?: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes="(max-width: 640px) 50vw, 33vw"
        className="object-cover"
        priority={index < 6}
        loading={index < 6 ? "eager" : "lazy"}
      />
      <div
        className={`absolute inset-0 flex justify-center items-center bg-black/60 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="w-3/4 text-xs text-center text-white">{photo.caption}</span>
      </div>
    </div>
  );
}

function renderNextImage(
  { alt = "", title }: RenderImageProps,
  { photo, width, height, index }: RenderImageContext<Photo>
) {
  return (
    <ImageWithHover
      photo={photo}
      width={width}
      height={height}
      alt={alt}
      title={title}
      index={index}
    />
  );
}

export default function GalleryContent() {
  return (
    <MasonryPhotoAlbum
      photos={photos}
      columns={(containerWidth) => {
        if (containerWidth < 640) return 2;
        return 3;
      }}
      spacing={16}
      render={{ image: renderNextImage }}
    />
  );
}
