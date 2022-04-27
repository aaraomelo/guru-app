import { Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const MenuItem = ({ children, isLast, to, ...rest }: any) => {
  const router = useRouter();
  return (
    <Text
      style={{ cursor: "pointer" }}
      display="block"
      onClick={() => router.push(to)} {...rest}
    >
      {children}
    </Text>
  );
};

export default MenuItem;
