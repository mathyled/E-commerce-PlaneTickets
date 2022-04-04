import { chakra,Button, Flex,Center, useColorModeValue, Icon } from "@chakra-ui/react";



const Paged = ({ TicketsPerPage, total, paginate }) => {
  const numberPage = [];

  for (let i = 1; i <= Math.ceil(total / TicketsPerPage); i++) {
    numberPage.push(i);
  }

  const scroll = () => {
    window.scrollTo(0, 0);
  };
  console.log(total)
  return (
      <Flex 
         flex={{ base: 1 }}
          justify={{ base: 'center', md: 'center' }}
          direction={{md:"row"}}
          >
      {" "}
      {numberPage?.map((num) => (
        <div key={num}>
    
       <Button  colorScheme='teal' spacing='6' variant='outline'  boxShadow={'xl'}
            onClick={() => {
              paginate(num);
              scroll();
            }}>

            {num}
          </Button>
        </div>
      ))}
      </Flex>
  );
};

export default Paged;
