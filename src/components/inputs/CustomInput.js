import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Flex, Spacer } from "@chakra-ui/react";

const CustomInput = (props) => {
  useEffect(() => {});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => load(data);
  const [name, load] = props.mode;
  const inputs = props.inputParams.map((el) => {
    const [name, placeholder, props] = el;
    return (
      <Input mb="10px" {...register(name, props)} placeholder={placeholder} />
    );
  });

  return (
    <Flex maxW={"300px"} bg="#EDF5E1" borderRadius={7} m="10px" p="10px">
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs}
        <Input type="submit" value={name} />
      </form>
    </Flex>
  );
};

export default CustomInput;
