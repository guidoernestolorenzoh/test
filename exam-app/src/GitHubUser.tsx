import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = {
  username: string;
};

function GitHubUser() {
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    // <div className="flex justify-center">
    //   <form>
    //     <div className="absolute inset-0">
    //       <div className="my-10 flex justify-center">
    //         <h1 className="font-[poppins]">Hello world!</h1>
    //       </div>
    //       <div className="bg-gray-200 flex space-x-3 justify-center align-center">
    // <TextField
    //   id="standard-basic"
    //   label="Standard"
    //   variant="outlined"
    //   className="text-blue-500"
    // />
    //         <Button variant="outlined">Ok</Button>
    //       </div>
    //     </div>
    //   </form>
    // </div>

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

            {/* <TextField
              id="standard-basic"
              label="Standard"
              variant="outlined"
            /> */}
          </div>
          <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Accept
          </button>
        </form>
      </div>
    </div>
  );
}

export default GitHubUser;
