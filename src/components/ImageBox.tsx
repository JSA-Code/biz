import Image from "next/image";
import { urlForImage } from "@/lib/utils";

interface ImageBoxProps {
  image?: { asset?: any };
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  classesWrapper?: string;
  "data-sanity"?: string;
}

export default function ImageBox({
  image,
  alt = "Cover image",
  width = 3500,
  height = 2000,
  sizes = "100vw",
  classesWrapper,
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit("crop").url();
  // console.log("IMAGE URL", imageUrl);
  return (
    <div
      // className={`w-full overflow-hidden rounded-[3px] bg-gray-50 ${classesWrapper}`}
      className={`relative w-full overflow-hidden rounded-[3px] bg-gray-50 ${classesWrapper}`}
      data-sanity={props["data-sanity"]}
    >
      {imageUrl && (
        <Image
          // className="absolute h-full w-full"
          className="h-full w-full object-cover object-center"
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          src={imageUrl}
        />
      )}
    </div>
  );
}
