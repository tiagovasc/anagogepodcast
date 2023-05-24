import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cn from 'classnames'

import { BranchListNavbar, BranchNavbar } from 'components/navbar'
import { useApiContext } from 'components/api-state-provider'
import BranchIgTags from 'components/branch-ig-tags'
import BranchInfo from 'components/branch-info'
import Layout from 'components/layouts/article'

export default function City(): JSX.Element {
  const { city: cityParams = '' } = useParams()
  const { branchesData } = useApiContext()
  const [cityData, setCityData] = useState({})
  const [page, setPage] = useState(0)

  const titleCase = string =>
    string[0]?.toUpperCase() + string.slice(1)?.toLowerCase()

  useEffect(() => {
    const filterBranches = branchesData?.filter(
      cityObj => titleCase(cityObj.city || '') === titleCase(cityParams || '')
    )
    setCityData(filterBranches[0] || {})
  }, [])

  return (
    <Layout title={titleCase(cityParams)}>
      <BranchListNavbar branchesData={branchesData} />
      <BranchNavbar city={cityParams} />
      <div className="mx-auto max-w-[1100px] flex-wrap justify-between pb-5 px-5">
        <div className="flex flex-col md:flex-row mb-3 justify-between">
          <Link
            to={'/'}
            className="text-[0.7em] max-w-[80px] text-stone-500 sm:tracking-1 md:tracking-2 underline underline-offset-4"
          >
            {'< BACK'}
          </Link>
          <div className="flex justify-center w-full md:w-[27.375%]">
            <div className="flex w-full max-w-[150px] justify-between">
              {['INFO', 'IG TAGS'].map((str, i) => (
                <p
                  className={cn(
                    'text-[0.7em] cursor-pointer underline-offset-4',
                    i === page
                      ? 'font-black tracking-2 sm:tracking-4 md:tracking-6 underline'
                      : 'font-normal text-stone-500 sm:tracking-1 md:tracking-2'
                  )}
                  onClick={() => setPage(i)}
                >
                  {str}
                </p>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={page}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            <BranchInfo hidden={page !== 0} cityData={cityData} />
            <BranchIgTags hidden={page !== 1} cityData={cityData} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  )
}
