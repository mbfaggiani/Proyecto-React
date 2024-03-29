import { Flex, Button } from "@chakra-ui/react";

const ItemCount = ({ stock, onAdd, onSubtract, count }) => {
  return (
    <Flex
      justify="space-around"
      align="center"
      w="50%"
      my="2"
      border="1px"
      borderColor="gray.200"
      borderRadius="3xl"
    >
      <Button
        as="button"
        colorScheme="transparent"
        color={"gray.700"}
        mx="4"
        isDisabled={count === 0}
        onClick={() => onSubtract()}
      >
        -
      </Button>
      <p className="text-sm text-gray-700">{count}</p>
      <Button
        as="button"
        colorScheme="transparent"
        color={"gray.700"}
        mx="4"
        isDisabled={stock === 0 || count === stock}
        onClick={() => onAdd()}
      >
        +
      </Button>
    </Flex>
  );
};

export default ItemCount;
