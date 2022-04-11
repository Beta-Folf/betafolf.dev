import { ChevronDownIcon } from '@chakra-ui/icons';
import { StyleProps } from '@chakra-ui/react';

interface ChevronLinkProps {
  onClick(): void;
  size: number;
}

const TEXT_COLOR = 'gray.100';
const HOVER_COLOR = 'gray.300';
const ANIMATION_CSS: StyleProps = {
  transition: 'color 0.05s linear',
};

export default function ChevronLink({ onClick, size }: ChevronLinkProps) {
  return (
    <ChevronDownIcon
      w={size}
      h={size}
      cursor="pointer"
      color={TEXT_COLOR}
      _hover={{
        color: HOVER_COLOR,
      }}
      onClick={onClick}
      {...ANIMATION_CSS}
    />
  );
}
