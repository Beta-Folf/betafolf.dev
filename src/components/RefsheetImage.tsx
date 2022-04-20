import { useState } from 'react';
import { Image, Skeleton } from '@chakra-ui/react';

import { Colors } from '~/constants/colors';

interface RefsheetImageProps {
  image: StaticImageData;
  imageUri: string;
  onImageError(): void;
}

export default function RefsheetImage({ image, imageUri, onImageError }: RefsheetImageProps) {
  return (
    <Image
      src={image.src}
      alt="Refsheet"
      maxHeight="100%"
      maxWidth="100%"
      height="auto"
      borderWidth="medium"
      borderColor={Colors.BETA_BLUE}
      borderStyle="solid"
      cursor="pointer"
      title="View Ref Sheet"
      onError={onImageError}
      onClick={() => window.open(`${window.location.origin}${imageUri}`, '_blank')}
      fallback={<Skeleton width="96" height="48" />}
    />
  );
}
