import { json } from "@remix-run/node";
// import db from "../db.server";
// import { cors } from 'remix-utils/cors';


// get request: accept request with request: customerId, shop, productId.
// read database and return wishlist items for that customer.
export async function loader() {
return json({
    ok: true,
    message: "hello from api",
});

}


export async function action({ request }) {

const method = request.method;

switch (method) {
    case "POST":
        return json({message: "success", method: "post"});
   

    case "PATCH":
      // Handle PATCH request logic here
      // For example, updating an existing item in the wishlist
      return json({ message: "Success", method: "Patch" });

      default:
        // Optional: handle other methods or return a method not allowed response
        return new Response("Method Not Allowed", { status: 405 });
  
}

}