import Image from "next/image";

export function ChanhDaiMark(
  props: React.ComponentProps<"svg"> & { imageUrl?: string }
) {
  const { imageUrl, ...svgProps } = props;

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt="MP Logo"
        width={512}
        height={256}
        className={svgProps.className}
        unoptimized
        {...(svgProps as any)}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...svgProps}
    >
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      <path
        fill="url(#blueGradient)"
        d="M64 256H0V0h64v256ZM128 256H96V128h32v128ZM192 256H128V0h64v256ZM224 256H192V128h32v128ZM256 256H224V0h32v256ZM320 256H256V0h64v256ZM384 64H320V0h64v64ZM384 128H320V64h64v64ZM448 128H384V0h64v128Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><defs><linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#1e40af" /></linearGradient></defs><path fill="url(#blueGrad)" d="M32 128H0V0h32v128ZM64 128H48V64h16v64ZM96 128H64V0h32v128ZM112 128H96V64h16v64ZM128 128H112V0h16v128ZM160 128H128V0h32v128ZM192 32H160V0h32v32ZM192 64H160V32h32v32ZM224 64H192V0h32v64Z"/></svg>`;
}
