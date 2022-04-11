import { createRef } from 'react';
import { Box } from '@chakra-ui/react';

import Welcome from '~/components/Welcome';
import Refsheet from '~/components/Refsheet';

function Home() {
  const refSheetContainerRef = createRef<HTMLDivElement>();

  return (
    <Box minHeight="100%" width="100%">
      <Welcome
        onRefSheetLinkClick={() =>
          refSheetContainerRef.current.scrollIntoView({
            behavior: 'smooth',
          })
        }
      />
      <Refsheet ref={refSheetContainerRef} />
    </Box>
  );
}

Home.getInitialProps = () => ({
  title: 'Beta Folf',
});

export default Home;
