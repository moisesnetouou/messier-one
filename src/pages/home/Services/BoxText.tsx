interface BoxTextProps {
  text: string;
}

export function BoxText({ text }: BoxTextProps) {
  return (
    <div className="flex h-[7.5rem] w-[25rem] items-center justify-center rounded-[0.625rem] border border-[#eaeaea] p-6 text-center xl:lg:w-full">
      <span>{text}</span>
    </div>
  );
}
