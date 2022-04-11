import { Text } from '@chakra-ui/react';

interface DescriptionItemProps {
  text: string;
}

export default function DescriptionItem({ text }: DescriptionItemProps) {
  return (
    <Text fontSize="xl" fontWeight="medium" color="gray.100" textAlign="center" px="5">
      {text}
    </Text>
  );
}
