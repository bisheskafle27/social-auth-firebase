import {
  Container,
  Text,
  Heading,
  chakra,
  Input,
  Image,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { FacebookLogin } from "../authprovider/facebook";
import { GithubLogin } from "../authprovider/github";
import { GoogleLogin } from "../authprovider/google";
import { TwitterLogin } from "../authprovider/twitter";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
export default function Home() {
  const { user, isLoggedIn } = useAuth();

  const bg = {
    facebook: "facebook.400",
    github: "blackAlpha.500",
    google: "red.400",
    twitter: "twitter.500",
  };

  console.log(user);
  return (
    <Container mt={5}>
      <Heading fontSize={"2xl"} mb={10}>
        Hey welcome to Social Auth{" "}
      </Heading>
      <Text mb={10}>
        {user == null && "Login Via One of The Provider"}
        {user && (
          <chakra.span>
            User Logged In as:
            {
              <chakra.span
                bg="green.500"
                p={2}
                color="white"
                borderRadius={3}
                m={2}
              >
                {user.displayName}
              </chakra.span>
            }{" "}
            via{" "}
            <chakra.span
              bg={bg[user.providerData[0].providerId.split(".com")[0]]}
              color="white"
              p={3}
              borderRadius={4}
            >
              {user.providerData[0].providerId}
            </chakra.span>
          </chakra.span>
        )}
      </Text>
      {user == null && (
        <Stack>
          <Button
            bg="twitter.500"
            leftIcon={<FaTwitter />}
            onClick={() => TwitterLogin()}
          >
            Sign In With Twitter
          </Button>

          <Button
            bg="github"
            leftIcon={<FaGithub />}
            onClick={() => GithubLogin()}
          >
            Sign In With Github
          </Button>

          <Button
            bg="red.400"
            leftIcon={<FaGoogle />}
            onClick={() => GoogleLogin()}
          >
            Sign In With Google
          </Button>

          <Button
            bg="facebook.400"
            leftIcon={<FaFacebook />}
            onClick={() => FacebookLogin()}
          >
            Sign In With Facebook
          </Button>
        </Stack>
      )}

      {user && <Button onClick={() => auth.signOut()}>Logout</Button>}
    </Container>
  );
}
