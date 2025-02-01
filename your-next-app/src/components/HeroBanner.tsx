import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="position-relative w-100 bg-light d-flex align-items-center justify-content-center" style={{ height: "527px"}}>
      <Image
        src="/images/banner.webp"
        alt="Hero Banner"
        width={16}
        height={9}
        layout="responsive"
        // fill
        priority
        loading="eager"
        decoding="async"
        className="position-absolute top-0 start-0 "
        // style={{ objectFit: "cover", color: "transparent" }}
      />
    </div>
  );
}
