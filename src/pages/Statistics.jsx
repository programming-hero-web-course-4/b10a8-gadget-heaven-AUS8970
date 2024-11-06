import { Helmet } from "react-helmet-async";
import Haeding from "../components/Haeding";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title> Gadget Heaven | Statistics </title>
      </Helmet>
      <Haeding title={'Statistics'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}/>
    </div>
  );
};

export default Statistics;