import CallToAction from "../../Features/CallToAction/CallToAction";
import NavBar from "../../Features/NavBar/NavBar";

function Home() {
  return (
    <div>
      <h1>
        <NavBar />
        <CallToAction />
        Home Page
      </h1>
    </div>
  );
}

export default Home;
