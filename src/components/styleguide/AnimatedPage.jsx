import { motion } from 'framer-motion'

const AnimatedPage = ({children}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
      exit={{ opacity: 0, translateY: 20 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
