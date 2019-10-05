import { NextPage } from "next";
import axios from "axios";

interface HomeProps {
  message: string;
}

const Home: NextPage<HomeProps> = ({ message }) => {
  return <h1>{message}</h1>;
};

Home.getInitialProps = async () => {
  const message = await axios
    .get("http://localhost:3000/api/colors")
    .then(res => res.data);
  return { message };
};

export default Home;
