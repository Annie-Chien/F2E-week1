// Styled Components
import { Ticker, TickerItem, Dot } from './NewsTicker.styles';
//Framer motion
import { motion } from 'framer-motion';

//=======================================//

const NewsTicker = ({ msg, bottom, top }) => {
  return (
    <Ticker bottom={bottom} top={top}>
      <motion.div
        whileInView={top ? { x: '415px' } : { x: '-415px' }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        <TickerItem bottom={bottom}>
          <p>{msg}</p>
          <Dot />
          <p>{msg}</p>
          <Dot />
          <p>{msg}</p>
          <Dot />
          <p>{msg}</p>
          <Dot />
          <p>{msg}</p>
          <Dot />
        </TickerItem>
      </motion.div>
    </Ticker>
  );
};

export default NewsTicker;
