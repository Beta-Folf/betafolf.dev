import { VStack, Text, StyleProps, Flex, Grid, GridItem, useToast } from '@chakra-ui/react';
import { DateTime } from 'luxon';

import useIsMobile from '~/hooks/useIsMobile';
import Headshot from './Headshot';
import Account from './Account';
import DescriptionItem from './DescriptionItem';
import { Icons } from '~/constants/icons';
import { ExternalLinks } from '~/constants/externalLinks';
import ChevronLink from './ChevronLink';

const BIRTHDAY = DateTime.local(2002, 2, 28, 18, 55, 0);
const YEARS_SINCE_BIRTHDAY = Math.floor(DateTime.now().diff(BIRTHDAY, 'years').years);
const DISCORD_TAG = 'Beta Folf#6969';

const openExternalUrl = (link: ExternalLinks) => {
  window.open(link);
};
const copyTextToClipboard = async (link: string) => {
  await navigator.clipboard.writeText(link);
};

interface WelcomeProps {
  onRefSheetLinkClick(): void;
}

export default function Welcome({ onRefSheetLinkClick }: WelcomeProps) {
  const isMobile = useIsMobile();
  const toast = useToast();

  const handleCopyDiscordTag = () => {
    copyTextToClipboard(DISCORD_TAG);
    toast({
      title: 'Discord tag copied to clipboard!',
      status: 'success',
      duration: 1000,
    });
  };

  return (
    <VStack height="100vh" width="100%" spacing="8" backgroundColor="brand.100" py="8">
      <Flex flex={1} flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing="6">
          <Headshot />
          <Text fontSize="5xl" fontWeight="semibold" fontStyle="italic" color="gray.100" textAlign="center" px="5">
            Beta Folf
          </Text>
          <VStack spacing="1">
            <DescriptionItem text="Full Stack Web Developer" />
            <DescriptionItem text="Gay Furry" />
            <DescriptionItem text={`${YEARS_SINCE_BIRTHDAY} rotations around the sun`} />
          </VStack>
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem>
              <Account icon={Icons.GITHUB} text="GitHub" onClick={() => openExternalUrl(ExternalLinks.GITHUB)} />
            </GridItem>
            <GridItem>
              <Account icon={Icons.DISCORD} text={DISCORD_TAG} onClick={handleCopyDiscordTag} />
            </GridItem>
            <GridItem>
              <Account icon={Icons.SPOTIFY} text="Spotify" onClick={() => openExternalUrl(ExternalLinks.SPOTIFY)} />
            </GridItem>
            <GridItem>
              <Account icon={Icons.E621} text="e621" onClick={() => openExternalUrl(ExternalLinks.E621)} />
            </GridItem>
          </Grid>
          <ChevronLink size={10} onClick={onRefSheetLinkClick} />
        </VStack>
      </Flex>
    </VStack>
  );
}
