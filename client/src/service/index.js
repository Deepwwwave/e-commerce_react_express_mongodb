import axios from "axios";

//GET
export const getProducts = () => {
  return new Promise((onSuccess, onFail) => {
    axios.get("api/products").then((response, error) => {
      if (!response || error) {
        return onFail(`Response failure : ${error}`);
      }
      return onSuccess(response);
    });
  });
};

//POST
// export const processPayment = async (order) => {
//   var stripe = Stripe(
//     "pk_test_51KZErmEc4VeEZWJY9oExGncR4pdk7wYY7IbAuNPEJ0QNDe5DvrZRFWkj3Kc6nBavtfY7XWZeuYJrVJYLQMzes8SE00BNj4tZLI"
//   );
//   const stripe = await stripePromise;
//   axios
//   .post('api/create-checkout-session', order)
//   .then(response => {
//     console.dir(response)
//     return stripe.redirectToChekout({ sessionId: response.id });
//   })
// };
