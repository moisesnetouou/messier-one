import Image from 'next/image';

export function SupportedPlatforms() {
  return (
    <div className=" my-10 flex items-center gap-2 rounded-[0.625rem] bg-gray-900 p-5">
      <span className="rounded-[10px] p-2 text-lg font-semibold xs:text-sm">
        Serviços disponíveis para:
      </span>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/windows.png"
          alt="windows blue logo"
          width={48}
          height={48}
        />
        <span className="text-blue-200">Windows</span>
      </div>
    </div>
  );
}
