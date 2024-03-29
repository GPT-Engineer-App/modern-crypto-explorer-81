import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const CTASection = ({ topic, title, buttonName, buttonRoute, children }) => {
  return (
    <Box bg="#5A4FCF" width="full" py={{ base: 10, md: 20 }} px={4} align="center" color="white">
      <Heading textAlign="center" fontWeight="bold" mb={4} fontSize="xl">{topic}</Heading>
      <Box maxWidth="640px">
        <Heading textAlign="center" fontWeight="bold" mb={2} fontSize={{ base: "2xl", md: "3xl" }}>
          {title}
        </Heading>
        <Text textAlign="center" color="white" mb={4} fontSize={{ base: "md", md: "lg" }}>
          {children}
        </Text>
      </Box>
      <Button bg="white" color="#5A4FCF" fontWeight="bold" px="4" _hover={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.4)" }} onClick={() => window.location.href = buttonRoute}>
        {buttonName}
      </Button>
    </Box>
  );
};

export default CTASection;