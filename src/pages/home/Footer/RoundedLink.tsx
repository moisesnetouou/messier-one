import { Icon, Link } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface RoundedLinkProps {
  href: string;
  icon: IconType;
}

export function RoundedLink({ href, icon }: RoundedLinkProps) {
  return (
    <Link
      href={href}
      bg="cyan.400"
      p="2"
      borderRadius="full"
      transition="background 0.6s"
      _hover={{ bg: 'cyan.800' }}
      display="flex"
      isExternal
    >
      <Icon as={icon} fontSize="20" />
    </Link>
  );
}
