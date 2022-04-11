import { forwardRef, useState } from 'react';
import { Box, Flex, Text, VStack, Link } from '@chakra-ui/react';

import shadedNSFWRefSheet from '@public/refsheets/compressed_nsfw.png';
import shadedSFWRefSheet from '@public/refsheets/compressed_sfw.png';
import useIsMobile from '~/hooks/useIsMobile';
import RefsheetImage from './RefsheetImage';
import Toggle from './Toggle';

const NSFW_REF_SHEET_URI = '/refsheets/compressed_nsfw.png';
const SFW_REF_SHEET_URI = '/refsheets/compressed_sfw.png';
const VALLHOUND_URL = 'https://vallhound.weebly.com/';

export default forwardRef<HTMLDivElement>((props, ref) => {
  const isMobile = useIsMobile();

  const [nsfwRefSheetVisible, setNsfwRefSheetVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  const visibleRefSheet = nsfwRefSheetVisible ? shadedNSFWRefSheet : shadedSFWRefSheet;
  const refSheetUrl = nsfwRefSheetVisible ? NSFW_REF_SHEET_URI : SFW_REF_SHEET_URI;

  return (
    <>
      <div ref={ref} />
      <Flex height="100vh" flexDirection="column" alignItems="center">
        {imageError ? (
          <Text>Failed to load ref sheet!</Text>
        ) : (
          <>
            {/* Title */}
            <Text fontSize="2xl" py="6" px="2" width="100%" textAlign="center">
              My Ref Sheet!
            </Text>
            {/* Image */}
            <Box height={isMobile ? 'auto' : '65%'}>
              <RefsheetImage
                image={visibleRefSheet}
                title="View Ref Sheet"
                onImageError={() => setImageError(true)}
                onClick={() => window.open(`${window.location.origin}/${refSheetUrl}`, '_blank')}
              />
            </Box>
            {/* Click note */}
            <Text fontSize="sm" py="2" color="gray.600">
              (Click image to view full screen version)
            </Text>
            {/* Credit */}
            <VStack spacing="4" width="100%" justifyContent="center" alignItems="center" mt="6">
              <Text fontSize="xl">
                Art by{' '}
                <Link href={VALLHOUND_URL} isExternal color="brand">
                  Vallhound
                </Link>
                !
              </Text>
              {/* Toggle */}
              <Toggle value={nsfwRefSheetVisible} text="NSFW Version" onChange={(val) => setNsfwRefSheetVisible(val)} />
            </VStack>
          </>
        )}
      </Flex>
    </>
  );
});
