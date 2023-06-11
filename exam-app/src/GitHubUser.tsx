


import React, { SetStateAction, useState } from "react";
// import { useForm } from "react-hook-form";
// import { TypeOf, date, z } from "zod";
// import ProfileCard from "./ProfileCard";
// import { zodResolver } from "@hookform/resolvers/zod";



function GitHubUser() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormValues>({
  //   resolver: zodResolver(formSchema),
  // });

  // const onFormSubmit = (data: FormValues) => {
  //   alert(data.username);
  // };

  const [recentRepos, setRecentRepos] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  //     .then((response) => response.json())
  //     .then((data) => setRecentRepos(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubm = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setUserData(data);

    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    const repoJson = await repoResponse.json();
    setRecentRepos(repoJson);
  };

  return (
    <div className="bg-gray-100 w-screen">
      <div
        // onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col absolute inset-0 py-8"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-600 text-center dark:text-white">
          GitHub User
        </h1>

        <div className="flex flex-wrap">
          <div className="flex flex-col max-w-sm gap-2 lg:max-w-lg mx-auto space-y-4">
            <form
              onSubmit={handleSubm}
              className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md dark:bg-gray-800"
            >
              <div className="mb-4">
                <label className="text-gray-700 flex justify-center mb-6 text-sm font-bold dark:text-white">
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 border text-gray-600 bg-gray-100 border-gray-300 rounded-md focus:outline-none  focus:bg-gray-200 focus:border-indigo-500"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e: { target: { value: SetStateAction<string>; }; }) => setUsername(e.target.value)}
                  placeholder="Username"
                  // {...register("username")}
                />
                {/* <p className="text-red-500 mt-2">{errors?.username?.message}</p> */}
              </div>
              <button
                className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                type="submit"
                // onClick={handleClickOpen}
              >
                Accept
              </button>
            </form>

            {userData && recentRepos &&(
              <>
                <div className="bg-white text-left rounded-lg overflow-hidden transition-all transform shadow-lg sm:my-8 sm:align-middle sm:max-w-sm sm:w-full dark:bg-gray-800">
                  <div className="items-center w-full mr-auto ml-auto relative max-w-7xl ">
                    <div className="grid grid-cols-1">
                      <div className="mt-4 bg-white mr-auto mb-4 ml-auto dark:bg-gray-800 max-w-lg">
                        <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                          <img
                            src={
                              userData
                                ? userData.avatar_url
                                : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            }
                            // src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            className="flex-shrink-0 object-cover object-center btn- flex w-16 mb-3 h-16 mr-auto ml-auto rounded-full"
                          />
                          <div className="flex flex-col space-y-5">
                            <p className="mt-8 font-semibold flex justify-center leading-none text-gray-600 dark:text-white">
                              {userData.name}
                            </p>
                            <p className="mt-3 text-base leading-relaxed flex justify-center text-center text-gray-600 dark:text-white">
                              {userData.bio}
                            </p>
                          </div>
                          {/* <div className="w-full mt-6">
<a
className="flex text-center items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base
                          font-medium text-white bg-indigo-600 rounded-xl transition duration-500 ease-in-out transform
                          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
Hire me
</a>
</div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white to-white/5 px-2 py-2 border-indigo-500 border-r-8 w-full sm:w-80 shadow-md rounded-lg overflow-hidden dark:bg-gray-800">
                  <div className="flex flex-row space-x-4 justify-between items-center">
                    <div className="flex gap-3 justify-between items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-indigo-500 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex">
                        <p className="text-indigo-500 text-sm font-medium uppercase leading-4">
                          Followers
                        </p>
                      </div>
                    </div>
                    <p className="text-indigo-500 text-sm font-medium uppercase leading-4">
                      {userData.followers}
                    </p>
                  </div>
                </div>
                {/* card 2 */}
                <div className="bg-white to-white/5 px-2 py-2 border-amber-500 border-r-8 w-full sm:w-80 shadow-md rounded-lg overflow-hidden dark:bg-gray-800">
                  <div className="flex flex-row space-x-4 justify-between items-center">
                    <div className="flex gap-3 justify-between items-center">
                      <div className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-amber-500 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                          />
                        </svg>
                      </div>
                      <div className="flex">
                        <p className="text-amber-500 text-sm font-medium uppercase leading-4">
                          Public Repositories
                        </p>
                      </div>
                    </div>
                    <p className="text-amber-500 text-sm font-medium uppercase leading-4">
                      {userData.public_repos}
                    </p>
                  </div>
                </div>
              </>
            )}
            {/* <ProfileCard userData={userData} username={username} /> */}
          </div>
          {/* Table */}          
          <div className="w-full max-w-xl mx-auto mt-3 bg-white shadow-lg rounded-sm border border-gray-200 dark:bg-gray-800">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-gray-800 dark:text-white">
                Recents Repositories
              </div>
            </header>

            <div className="overflow-x-auto p-3">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:text-white dark:bg-gray-800">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">
                        Repositorie Name
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Description</div>
                    </th>
                  </tr>
                </thead>

                {/* <h3>Recent Repositories:</h3>
          <ul>
            {repoData.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>: {repo.description}
              </li>
            ))}
          </ul> */}
                
                <tbody className="text-sm divide-y divide-gray-100 ">
                 {recentRepos.map((list) => (
                  <tr key={list.id}>
                    <td className="p-2">
                      <div className="font-medium text-gray-800 dark:text-white">                       
                        {list.name}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="font-medium text-gray-800 dark:text-white">
                      {list.description}
                      </div>
                    </td>
                  </tr> 
                  ))} 
                </tbody>
                
              </table>
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default GitHubUser;
