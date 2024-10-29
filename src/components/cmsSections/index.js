import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageFAQDisplayQuestionsSection } from "./PageFAQDisplayQuestionsSection";
import { PageHomeHeroSectionRecord } from "./PageHomeHeroSectionRecord";
import { SEOBlock } from "./SeoBlock";

export const cmsSections = {
  PagefaqDisplayquestionSectionRecord: PageFAQDisplayQuestionsSection,
  CommonSeoBlockRecord: SEOBlock,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: PageHomeHeroSectionRecord,
  CommonFooterRecord: (props) => <Footer {...props} />,
}