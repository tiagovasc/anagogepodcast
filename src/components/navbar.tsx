import {
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Divider
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import cn from 'classnames'

import { SecondaryTitle } from 'components/title'

export function BranchNavbar({ city }): JSX.Element {
  return (
    <nav className="w-full">
      <div className="max-w-[1100px] flex flex-wrap items-center justify-center md:justify-start mx-auto px-5">
        <SecondaryTitle city={city || ''} />
      </div>
    </nav>
  )
}

export function BranchListNavbar({ branchesData }): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <div
        className={cn('fixed w-full h-full z-[100]', 'translate-y-[-88888px]')}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex w-full justify-end">
            <div className="md:flex justify-center md:w-[28.375%]">
              <Button
                bg="#cc990050"
                borderRadius="none"
                transition="none"
                transform={{
                  base: 'rotate(-90deg) translate3d(calc(-88888px - 75vh), 63px, 0px)',
                  md: 'rotate(0deg) translate3d(0px, 88888px, 0px)'
                }}
                css={`
                  backdrop-filter: blur(10px);

                  &:hover {
                    text-decoration: underline;
                    text-underline-offset: 6px;
                  }
                `}
                onClick={() => setModalIsOpen(true)}
              >
                <p className="text-[0.7em] font-black tracking-2 sm:tracking-4 md:tracking-6">
                  BRANCH LIST
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        blockScrollOnMount={false}
        onClose={() => setModalIsOpen(false)}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent bg="none" boxShadow="none">
          <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              {branchesData
                ?.map(({ city }) => city)
                ?.sort()
                ?.map((city, i) => (
                  <Link
                    color="#fff"
                    as={RouterLink}
                    to={'/' + city?.toLowerCase()}
                    key={`branch-navlink-${i}`}
                  >
                    {city?.toUpperCase()} <ExternalLinkIcon mx="2px" />
                  </Link>
                ))}
              <Divider />
              <Link color="#fff" onClick={() => setModalIsOpen(false)}>
                Close
              </Link>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}
