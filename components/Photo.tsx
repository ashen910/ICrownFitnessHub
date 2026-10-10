import Image from "next/image";
import { photoSize, photoSrc, type Photo } from "@/data/site";

/** Real gym photo with correct intrinsic size (no layout shift) and lazy loading. */
export function GymPhoto({ photo, sizes, className = "", priority = false }: { photo: Photo; sizes: string; className?: string; priority?: boolean }) {
  return <Image src={photoSrc(photo)} alt={photo.alt} {...photoSize(photo)} sizes={sizes} priority={priority} className={className} />;
}
