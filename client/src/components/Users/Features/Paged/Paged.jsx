import {
  chakra,
  Button,
  Flex,
  Center,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

const Paged = ({ TicketsPerPage, total, paginate, currentPage }) => {
  const numberPage = [];

  for (let i = 1; i <= Math.ceil(total / TicketsPerPage); i++) {
    numberPage.push(i);
  }

  return (
    <Flex
      flex={{ base: 1 }}
      justify={{ base: "center", md: "center" }}
      direction={{ md: "row" }}
    >
      {" "}
      {numberPage?.length <= 1 ? (
        <></>
      ) : (
        numberPage?.map((num) => {
          if (currentPage - num >= -3 && currentPage - num <= 3) {
            return (
              <div key={num}>
                <Button
                marginLeft={"5px"}
                marginBottom={"5px"}
                  colorScheme="teal"
                  spacing="6"
                  variant="outline"
                  boxShadow={"xl"}
                  onClick={() => {
                    paginate(num);
                  }}
                >
                  {num}
                </Button>
              </div>
            );
          }
        })
      )}
    </Flex>
  );
};

export default Paged;
