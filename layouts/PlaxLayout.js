// Server component: static wrapper markup renders with zero hydration cost.
// Client behavior lives in small islands: PlaxEffects (GSAP scroll effects)
// and EmbedPopup (video popup). Pages that are themselves client components
// can still import this — it simply renders as part of their client tree.
import EmbedPopup from "@/components/EmbedPopup";
import { Fragment } from "react";
import Footer from "./Footer";
import PlaxEffects from "./PlaxEffects";
import ScrollProgress from "./ScrollProgress";

const PlaxLayout = ({ children, bg, margin, noFooter, dark, footer }) => {
  return (
    <Fragment>
      <PlaxEffects />
      <EmbedPopup />
      <div id="smooth-wrapper" className="mil-wrapper">
        {/* scroll progress */}
        <ScrollProgress />
        {/* scroll progress end */}
        {/* back to top */}
        <a href="#" className="progress-wrap active-progress" />
        {/* top panel end */}
        {/* content */}
        <div id="smooth-content">
          {children}
          {/* footer */}
          {!noFooter && <Footer footer={footer} bg={bg} margin={margin} dark />}
          {/* footer end */}
        </div>
        {/* content end */}
      </div>
    </Fragment>
  );
};
export default PlaxLayout;
