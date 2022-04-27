import { Box } from "@chakra-ui/react";

export default function MenuToggle({ toggle, children }: any) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {children}
    </Box>
  );
};

