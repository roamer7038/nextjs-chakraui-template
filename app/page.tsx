import { Button, Flex, Heading, Input } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="grey.100" padding={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="example" variant="filled" mb={3} type="email" />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">
          Log in
        </Button>
      </Flex>
    </Flex>
  );
}
