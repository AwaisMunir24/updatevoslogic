import "./Compareus.css";
import Slidercustomforcompare from "./Slidercustomforcompare/Slidercustomforcompare";
import Faq from "../../components/faq/Faq";
import { Voslogicimages } from "../../feature/Voslogicimages";
import Comparestand from "../../components/comparestand/Comparestand";
import MobileTabs from "../../components/mobiletabs/MobileTabs";
const Compareus = () => {
  return (
    <div className="compare--us--page">
      <Comparestand />
      <MobileTabs />
    </div>
  );
};

export default Compareus;
