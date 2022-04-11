import { Flex, Text, Checkbox, useCheckbox, FormControl, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  text: string;
  value: boolean;
  onChange(val: boolean): void;
}

export default function Toggle({ text, value, onChange }: Props) {
  return (
    <FormControl display="flex" justifyContent="center">
      <FormLabel
        htmlFor="toggleNsfw"
        display="flex"
        flexDirection="row"
        px="6"
        py="4"
        width="60"
        backgroundColor="white"
        borderWidth="thin"
        borderColor="gray.300"
        borderStyle="solid"
        borderRadius="md"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
      >
        <Text>{text}</Text>
        <Checkbox id="toggleNsfw" checked={value} onChange={(event) => onChange(event.target.checked)} />
      </FormLabel>
    </FormControl>
  );
}
