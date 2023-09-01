import React, { useState } from "react";
import Styles from "./resetPassword.module.css";
import {
  Heading,
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Input,
  tokenToCSSVar
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { logoutAction } from "../../Redux/Slices/AuthSlice";
import { ResetPassword } from "../../Services/AuthService";
import Done from "../../Components/DoneModal/Done";
const ForgetPasswordEmail = () => {
  const [succsess,Setsuccsess] = useState(false)
    // const handleSendReset = () => {
    //     mutate(mail);
    //   };
      const { mutate:forgetPass } = useMutation((mail) => ForgetPasswordSend(mail), {
        onSuccess: (resp) => {
         Setsuccsess(true);
          console.log(resp);
        },
        onError: (error) => {
          console.log(error);
          Setsuccsess(false);
        },
      });
      const formik = useFormik({
        initialValues:{
          value :""
        },
        onSubmit:(values)=>{
          forgetPass(values)
        }
      })
      return (
        <div>
               <>
             {succsess  && (
          <Done buttonsAndNagivage={buttonsAndRoute} />)}
          <Flex p={"40px 0"} justifyContent={"center"}>
            <Box minW="0rem">
              <Heading color={"#3270fc"} mb={4}>
                Create New Password
              </Heading>
              <Flex p={"20px 0"} gap={5} flexFlow={"column"}>
                <Box>
                  <Input
                    borderColor={"black"}
                    variant="flushed"
                    pr="4.5rem"
                    size="lg"
                    placeholder="mail or username"
                    onChange={formik.handleChange}
                    name="value"
                    value={formik.values.value}
                  />
                </Box>
              </Flex>
              <Flex className={Styles.ButtonContainer} gap={10} flexFlow={"row"}>
                <Button
                  className={Styles.Button}
                  size="md"
                  backgroundColor={"white !important"}
                  mt="24px"
                >
                  Return to menu
                </Button>
                <Button
                  onClick={formik.handleSubmit}
                  className={Styles.Button}
                  size="md"
                  mt="24px"
                >
                  Send Request
                </Button>
              </Flex>
            </Box>
          </Flex>
        </>
        </div>
    );
}

export default ForgetPasswordEmail;
