import Dialog from "@material-tailwind/react/components/Dialog";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { useForm } from "react-hook-form";
import { TypeOf, z } from "zod";
import ProfileCard from "./ProfileCard";
import { zodResolver } from "@hookform/resolvers/zod";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const formSchema = z.object({
  username: z.string().min(1, "This Field is required"),
});

type FormValues = z.infer<typeof formSchema>;

function GitHubUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onFormSubmit = (data: FormValues) => {
    console.log(data);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-gray-100 w-screen">
      <div
        onSubmit={handleSubmit(onFormSubmit)}
        className="container mx-auto absolute inset-0 py-8"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-600 text-center dark:text-white">
          GitHub User
        </h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md dark:bg-gray-800">
          <div className="mb-4">
            <label className="text-gray-700 flex justify-center mb-6 text-sm font-bold dark:text-white">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border text-gray-600 bg-gray-100 border-gray-300 rounded-md focus:outline-none  focus:bg-gray-200 focus:border-indigo-500"
              type="text"
              id="username"
              placeholder="Username"
              {...register("username")}
            />
            <p className="text-red-500 mt-2">{errors?.username?.message}</p>
          </div>
          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
            onClick={handleClickOpen}
          >
            Accept
          </button>

          {/* <Dialog
            open={open}
            // TransitionComponent={Transition}
            keepMounted
            // onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
          </Dialog> */}
        </form>
      </div>
    </div>
  );
}

export default GitHubUser;
// function setOpen(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
