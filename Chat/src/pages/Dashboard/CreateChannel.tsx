import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import FormProvider from "../../components/hook-form/FormProvider";
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";
// import { Stack } from "phosphor-react";
import { RHFTextField } from "../../components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MEMBERS = ["name 1", "name 2", "name 3", "name 4", "name 4"];

const CreateChannelForm = ({ handleClose }:any) => {
  const NewChannelSchema = Yup.object().shape({
    title: Yup.string().required("Title is Required!!"),
    members: Yup.array().min(2, "Must have at least 2 Members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewChannelSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit = async (data:any) => {
    try {
      // call api
      console.log("DATA", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {/* NEED TO CREATE A FORM DATA */}
      {/* hellow */}
      {/* {console.log("from console ====> ")} */}
      <Stack spacing={3}>
        <RHFTextField name="title" label="Title" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
        <Stack
          spacing={2}
          direction={"row"}
          alignContent={"center"}
          justifyContent={"end"}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create Chennel
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateChannel = ({open, handleClose}:any) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{ p: 5 }}
    >
      {console.log(handleClose)}
      <DialogTitle sx={{mb: 4}}>Create a New Channel</DialogTitle>
      <DialogContent>
        {/* jellow */}
        <CreateChannelForm handleClose={handleClose} />
        {/* jellow */}
      </DialogContent>
    </Dialog>
  );
};

export default CreateChannel;
