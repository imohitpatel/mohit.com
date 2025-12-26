export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1024 128"
      {...props}
    >
      <defs>
        <linearGradient id="wordmarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      {/* M */}
      <path fill="url(#wordmarkGradient)" d="M16 128H0V0h16v128ZM32 128H16V0h16v128ZM48 128H32V64h16v64ZM64 128H48V0h16v128ZM80 128H64V0h16v128Z" />
      {/* o */}
      <path fill="url(#wordmarkGradient)" d="M112 96H96V32h16v64ZM128 96H112V32h16v64ZM144 96H128V32h16v64ZM128 32H112V0h16v32ZM128 128H112V96h16v32Z" />
      {/* h */}
      <path fill="url(#wordmarkGradient)" d="M160 128H144V0h16v128ZM176 32H160V0h16v32ZM176 64H160V32h16v32ZM192 64H176V32h16v32ZM192 128H176V64h16v64Z" />
      {/* i */}
      <path fill="url(#wordmarkGradient)" d="M208 128H192V16h16v112ZM216 16H208V0h8v16Z" />
      {/* t */}
      <path fill="url(#wordmarkGradient)" d="M240 128H224V32h16v96ZM256 32H240V0h16v32Z" />
      {/* P */}
      <path fill="url(#wordmarkGradient)" d="M272 128H256V0h16v128ZM288 32H272V0h16v32ZM288 64H272V32h16v32ZM304 64H288V0h16v64Z" />
      {/* a */}
      <path fill="url(#wordmarkGradient)" d="M336 96H320V32h16v64ZM352 96H336V32h16v64ZM368 96H352V32h16v64ZM352 32H336V0h16v32ZM352 128H336V96h16v32Z" />
      {/* t */}
      <path fill="url(#wordmarkGradient)" d="M384 128H368V32h16v96ZM400 32H384V0h16v32Z" />
      {/* e */}
      <path fill="url(#wordmarkGradient)" d="M432 96H416V32h16v64ZM448 96H432V32h16v64ZM464 96H448V32h16v64ZM448 32H432V0h16v32Z" />
      {/* l */}
      <path fill="url(#wordmarkGradient)" d="M480 128H464V0h16v128Z" />
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1024 128"><defs><linearGradient id="wordmarkGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#1e40af" /></linearGradient></defs><path fill="url(#wordmarkGrad)" d="M16 128H0V0h16v128ZM32 128H16V0h16v128ZM48 128H32V64h16v64ZM64 128H48V0h16v128ZM80 128H64V0h16v128ZM112 96H96V32h16v64ZM128 96H112V32h16v64ZM144 96H128V32h16v64ZM128 32H112V0h16v32ZM128 128H112V96h16v32ZM160 128H144V0h16v128ZM176 32H160V0h16v32ZM176 64H160V32h16v32ZM192 64H176V32h16v32ZM192 128H176V64h16v64ZM208 128H192V16h16v112ZM216 16H208V0h8v16ZM240 128H224V32h16v96ZM256 32H240V0h16v32ZM272 128H256V0h16v128ZM288 32H272V0h16v32ZM288 64H272V32h16v32ZM304 64H288V0h16v64ZM336 96H320V32h16v64ZM352 96H336V32h16v64ZM368 96H352V32h16v64ZM352 32H336V0h16v32ZM352 128H336V96h16v32ZM384 128H368V32h16v96ZM400 32H384V0h16v32ZM432 96H416V32h16v64ZM448 96H432V32h16v64ZM464 96H448V32h16v64ZM448 32H432V0h16v32ZM480 128H464V0h16v128Z"/></svg>`;
}
