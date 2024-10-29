import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageHomeHeroSectionRecord } from "../PageHomeHeroSectionRecord";
import { SEOBlock } from "./SeoBlock";

export const cmsSections = {
  CommonSeoBlockRecord: SEOBlock,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: PageHomeHeroSectionRecord,
  CommonFooterRecord: (props) => <Footer {...props} />,
}