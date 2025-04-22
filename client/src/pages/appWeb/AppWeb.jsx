import "./appWeb.css";
import HeroWeb from "../../components/heroWeb/HeroWeb";
import Header from "../../components/header/Header";
const AppWeb = () => {
  return (
    <>
      <div className="appweb">
        <div>
          <HeroWeb />
        </div>
        <Header />
      </div>
    </>
  );
};

export default AppWeb;
