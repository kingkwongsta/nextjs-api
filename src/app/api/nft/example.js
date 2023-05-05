import { Headers } from "node-fetch";
import fetch from "node-fetch";

export default function testing() {
  return 1;
}
// export default async function getExamples() {
//   // Add the API key to an header object
//   const meta = {
//     "x-dune-api-key": "g8YVZgY4LmKtF2gW0Afip63lEZK7V9as",
//   };
//   const header = new Headers(meta);

//   //  Call the Dune API
//   const response = await fetch(
//     "https://api.dune.com/api/v1/query/1258228/execute",
//     {
//       method: "POST",
//       headers: header,
//     }
//   );
//   const body = await response.text();

//   // Log the returned response
//   console.log(body);

//   return body;
// }
