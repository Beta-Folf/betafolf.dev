import { Flex, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { Icons } from '~/constants/icons';
import Icon from './Icon';
import { Colors } from '~/constants/colors';
import useIsMobile from '~/hooks/useIsMobile';

interface Props {
  icon: Icons;
  text: string;
  onClick(): void;
}

export default function Account({ icon, text, onClick }: Props) {
  const isMobile = useIsMobile();

  return (
    <Flex
      backgroundColor="white"
      height={isMobile ? '24' : '16'}
      width={isMobile ? '24' : '72'}
      shadow="md"
      px="4"
      alignItems="center"
      borderRadius="sm"
      cursor="pointer"
      transition="all"
      transitionDuration="200ms"
      _hover={{
        shadow: '2xl',
        marginTop: '-0.5',
      }}
      title={text}
      onClick={onClick}
      {...(isMobile && { justifyContent: 'center', alignItems: 'center' })}
      {...(isMobile ? { mx: '3', my: '3' } : { mx: '2', my: '2' })}
    >
      <Icon icon={icon} color={Colors.GREEN} size={isMobile ? '80px' : '40px'} />
      {!isMobile && (
        <Text fontSize="xl" px="4">
          {text}
        </Text>
      )}
    </Flex>
  );
}
