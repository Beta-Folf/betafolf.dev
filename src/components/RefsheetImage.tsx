import { Image } from '@chakra-ui/react';

import { Colors } from '~/constants/colors';

interface RefsheetImageProps {
  image: StaticImageData;
  title: string;
  onImageError(): void;
  onClick(): void;
}

export default function RefsheetImage({ image, title, onImageError, onClick }: RefsheetImageProps) {
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
      title={title}
      onError={onImageError}
      onClick={onClick}
    />
  );
}
