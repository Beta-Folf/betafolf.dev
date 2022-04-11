import { Box } from '@chakra-ui/react';

import { Icons, icons } from '~/constants/icons';

interface IconProps {
  icon: Icons;
  size: string;
  color: string;
}

export default function Icon({ icon, size, color }: IconProps) {
  return (
    <Box width={size} color={color}>
      {icons[icon]}
    </Box>
  );
}
