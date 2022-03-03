const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { json } = require("body-parser");
const app = express();
const routes = express.Router();

app.use("/api", routes);
app.use(express.static("public"));

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
const jsonParser = bodyParser.json();
//dotenv config constante connexion
env.config();

//cors
routes.use(cors());

//MongoDB client
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.t2zq5.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Connect to server
app.listen(process.env.PORT, () => {
  console.log(`Server up and running on http://localhost:${process.env.PORT}`);
});

//connect to DB
client.connect((err) => {
  if (err) {
    throw Error(err);
  }
  !err && console.log("successfully connected to database");
  const products = client
    .db(process.env.DB_DATABASE)
    .collection(process.env.DB_COLLECTION);

  // perform actions on the collection object

  routes.get("/products", (req, res) => {
    products
      .find()
      .toArray()
      .then((error, results) => {
        if (error) {
          return res.send(error);
        }
        res.status(200).send({ results });
      })
      .catch((err) => res.send(error));
  });
});


// Stripe
const stripe = require("stripe")(process.env.PRIVATE_API_KEY_STRIPE);

routes.post("/create-checkout-session", jsonParser, async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:${process.env.PORT_FRONT}?success=true`,
      cancel_url: `http://localhost:${process.env.PORT_FRONT}?canceled=true`,
    });

    res.json({ id: session.id });
  } catch (err) {
    return res.status(500).send(`faild to process payment ${err}`);
  }
});

// routes
routes.get("/", (req, res) => {
  res.send("Hello World!");
});
