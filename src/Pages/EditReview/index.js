// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// export function EditReviewForm() {
//   const [beer, setBeer] = useState({});
//   const [review, setReview] = useState({});
//   const { id } = useParams();
//   useEffect(() => {
//     async function fetchBeer() {
//       try {
//         const response = await axios.get(
//           `https://ironrest.herokuapp.com/mocked-beers/${id}`
//         );
//         setBeer({ ...response.data });
//         console.log({ ...response.data });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchBeer();
//   }, [id]);

//   setReview(
//     beer.reviews.map((currentReview) => {
//       return currentReview.username;
//     })
//   );
//   console.log(review);
//   return (
//     <div>
//       <h1>editando</h1>
//     </div>
//   );
// }
