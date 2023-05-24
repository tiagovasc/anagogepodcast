import { motion } from 'framer-motion'

import { useApiContext } from 'components/api-state-provider'
import { CoffeeDojoLogo } from 'components/logo'

export default function Main({ children }): JSX.Element {
  const { isLoading } = useApiContext()

  return isLoading ? (
    <main className="flex justify-center items-center min-h-screen w-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'mirror'
        }}
      >
        <CoffeeDojoLogo />
      </motion.div>
    </main>
  ) : (
    <main className="pb-8 text-gray-900">{children}</main>
  )
}
