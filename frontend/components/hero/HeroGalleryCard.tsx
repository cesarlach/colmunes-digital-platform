import Image from "next/image";

interface Props {
  image: string;
}

export default function HeroGalleryCard({ image }: Props) {
  return (
    <div
      className="
        relative
        h-[150px]
        overflow-hidden
        rounded-2xl
        border-4
        border-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-[1.02]
      "
    >
      <Image
        src={image}
        alt="Galería COLMUNES"
        fill
        className="object-cover"
        sizes="350px"
      />
    </div>
  );
}