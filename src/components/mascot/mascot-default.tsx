import Image from "next/image";

export default function MascotDefault() {
  return (
    <div className="relative mx-auto flex h-auto w-72 bg-red-100">
      <Image
        src="/images/mascot/hand-left-default.svg"
        alt="mascot-left-hand"
        height={60}
        width={60}
        className="object-contain"
      />
      <Image
        src="/images/mascot/hand-right-default.svg"
        alt="mascot-right-hand"
        height={60}
        width={60}
        className="object-contain absolute right-0 top-0"
      />
      <Image
        src="/images/mascot/foot.svg"
        alt="mascot-foot"
        height={60}
        width={60}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 object-contain"
      />

      <Image
        src="/images/mascot/body-default.svg"
        alt="mascot-body"
        height={100}
        width={100}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 object-contain"
      />

      <Image
        src="/images/mascot/face-dumb.svg"
        alt="mascot-face"
        height={60}
        width={60}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-0.5 object-contain"
      />
    </div>
  );
}
