// Images
import dialogue1 from '../../assets/images/ProblemBanner/dialogue1.svg';
import dialogue2 from '../../assets/images/ProblemBanner/dialogue2.svg';
import dialogue3 from '../../assets/images/ProblemBanner/dialogue3.svg';
//Styled Components
import { ProblemBannerContainer } from './ProblemBanner.styles';
//Framer Motion
import { motion } from 'framer-motion';
import { animations } from '../../utils/animate';

//=======================================//

const ProblemBanner = () => {
  const { popUp } = animations;

  return (
    <ProblemBannerContainer>
      <motion.div
        variants={popUp}
        whileInView="animate"
        initial="initial"
        viewport={{ once: 'true', margin: '-100px' }}
      >
        <img src={dialogue1} alt="" />
      </motion.div>
      <motion.div
        variants={popUp}
        whileInView="animate"
        initial="initial"
        viewport={{ once: 'true', margin: '-100px' }}
      >
        <img src={dialogue2} alt="" />
      </motion.div>
      <motion.div
        variants={popUp}
        whileInView="animate"
        initial="initial"
        viewport={{ once: 'true', margin: '-100px' }}
      >
        <img src={dialogue3} alt="" />
      </motion.div>
    </ProblemBannerContainer>
  );
};

export default ProblemBanner;
