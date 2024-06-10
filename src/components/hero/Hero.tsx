import Slide from "./Slide";
import { slides } from "@/config/slides";

const Hero = () => {
  return (
    <div>
      <Slide {...slides[2]} />
    </div>
  );
};

export default Hero;
