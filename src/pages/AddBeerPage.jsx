import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react"; 
import { ThemeContext } from "../theme.context";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const { btnThemeClassName } = useContext(ThemeContext);
  const { titleThemeClassName } = useContext(ThemeContext);
  const { backgroundThemeClassName } = useContext(ThemeContext);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateBeer = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: formData.name,
        tagline: formData.tagline,
        description: formData.description,
        first_brewed: formData.first_brewed,
        brewers_tips: formData.brewers_tips,
        attenuation_level: formData.attenuation_level,
        contributed_by: formData.contributed_by,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={backgroundThemeClassName} p="20px">
      <Box
        as="h1"
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        mb="20px"
        className={titleThemeClassName}
      >
        Add a new beer
      </Box>
      <form onSubmit={handleCreateBeer}>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Tagline:</FormLabel>
          <Input
            type="text"
            id="tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Description:</FormLabel>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>First Brewed:</FormLabel>
          <Input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
            bg="gray.150"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Brewer's Tips:</FormLabel>
          <Input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
            bg="gray.150"
            width="400px"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Attenuation Level:</FormLabel>
          <Input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            bg="gray.150"
            width="400px"
          />
        </FormControl>
        <FormControl mt="10px">
          <FormLabel>Created By:</FormLabel>
          <Input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
            bg="gray.150"
            width="400px"
          />
        </FormControl>
        <Button
          className={btnThemeClassName}
          mt="20px"
          colorScheme="blue"
          type="submit"
          display="inline-block"
          position="relative"
          padding="10px 20px"
          border="2px solid #fda"
          backgroundColor="#222222"
          color="#fda"
          fontFamily="'Dancing Script', serif"
          fontStyle="italic"
          fontSize="17px"
          fontWeight="500px"
          textDecoration="none"
          margin="20px auto"
          transition="color 0.4s"
          _hover={{
            color: "#eee",
          }}
          _after={{
            border: "2px solid rgba(0, 0, 0, 0)",
            display: "inline-block",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            transition: "all 0.4s",
          }}
          _hover:_after={{
            border: "2px solid #fda",
            width: "calc(100% - 10px)",
            height: "calc(100% + 10px)",
          }}
        >
          Add Beer
        </Button  >
      </form>
    </Box>
  );
}

export default AddBeerPage;
