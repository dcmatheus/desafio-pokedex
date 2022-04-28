import {
  Center, Heading, Image,
} from '@chakra-ui/react';

function Header() {
  return (
    <Center bg="primary" borderBottom="8px" borderColor="tertiary" p="4" w="full" flexGrow="inherit" data-testid="header">
      <Image src="/favicon.ico" alt="Pokebola" border="4px" borderColor="tertiary" borderRadius="full" h="10" data-testid="header-icon" />
      <Heading data-testid="header-title">Pokedex</Heading>
    </Center>
  );
}

export default Header;
