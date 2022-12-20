// import React from "react";
// import { useQuery } from "@tanstack/react-query";

// export const Recipes = () => {
//   const fetchRecipes = async () => {
//     const res = await fetch(
//       "https://api.spoonacular.com/recipes/complexSearch?cuisine=french&number=25&apiKey=6bfcade740484778b13cfe18f6e4ffb8"
//     );
//     return res.json();
//   };

//   const { data, isError, isLoading, error } = useQuery(
//     ["recipes"],
//     fetchRecipes
//   );

//   console.log(data);

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p> {error.message} </p>;

//   return (
//     <div>
//       {/* {data?.results.map((el) => {
//         return (
//           <div key={el.id}>
//             <p>{el.title}</p>
//             <img src={el.image} alt="" />
//           </div>
//         );
//       })} */}

//     </div>
//   );
// };
