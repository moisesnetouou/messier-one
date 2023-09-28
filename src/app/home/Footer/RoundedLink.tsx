import { ComponentType } from 'react';

interface RoundedLinkProps {
  href: string;
  icon: ComponentType<any>;
}

export function RoundedLink({ href, icon: Icon }: RoundedLinkProps) {
  return (
    <a
      href={href}
      className="flex rounded-full bg-cyan-400 p-2 transition-colors duration-500 hover:bg-cyan-800"
    >
      <Icon className="text-[1.25rem]" />
    </a>
  );
}
