import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import useIsMobile from '~/hooks/useIsMobile';

const MOBILE_IMAGE_SIZE = '150px';
const DESKTOP_IMAGE_SIZE = '200px';

export default function Headshot() {
  const isMobile = useIsMobile();

  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null;
  }

  return (
    <Box borderRadius="full" overflow="hidden">
      <NextImage
        src="/headshot.png"
        onError={() => setImageError(true)}
        width={isMobile ? MOBILE_IMAGE_SIZE : DESKTOP_IMAGE_SIZE}
        height={isMobile ? MOBILE_IMAGE_SIZE : DESKTOP_IMAGE_SIZE}
      />
    </Box>
  );
}
