import { Disclosure} from '@headlessui/react'
import {HiOutlineChevronUp} from 'react-icons/hi'

export default function MyDisclosure() {
  return (
    <>
      <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 lg:text-lg">
                <span>One Stop Solution</span>
                <HiOutlineChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 lg:text-base 2xl:text-lg">
                We believe in simplicity by providing a wide variety of professional services, All under one roof.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 lg:text-lg">
                <span>30 years experience</span>
                <HiOutlineChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 lg:text-base 2xl:text-lg">
                With over 30 years in the industry, you know you will be in good hands
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-md font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 lg:text-lg">
                <span>Specialized Services</span>
                <HiOutlineChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 lg:text-base 2xl:text-lg">
                Rest assured, We will always have the right specialist in place for you. Have a team of experts by your side.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </>
  )
}