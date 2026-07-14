import HeroGalleryCard from "./HeroGalleryCard";

export default function HeroGallery() {
  return (
    <div className="flex h-[480px] flex-col gap-4">

      <div className="flex-[1.15]">
        <HeroGalleryCard image="/images/hero/hero-side-1.jpg" />
      </div>

      <div className="flex-1">
        <HeroGalleryCard image="/images/hero/hero-side-2.jpg" />
      </div>

      <div className="flex-1">
        <HeroGalleryCard image="/images/hero/hero-side-3.jpg" />
      </div>

    </div>
  );
}