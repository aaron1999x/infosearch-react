import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ServicesTab() {

  return (
    <div className="w-full max-w-md px-2 pb-16 mx-auto sm:px-0 lg:max-w-[800px] 2xl:max-w-[1000px]">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5  text-blue-900 lg:text-lg',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-900 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Company Formation
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-900 lg:text-lg',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-900 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Secretarial Appointment
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-900 lg:text-lg',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-900 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              Trademark Registration
            </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
    
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2  shadow-lg'
            )}
          >
            <div className='p-1 lg:text-lg lg:p-3'>
              <h2 className='font-bold'>Private Limited Company (Sdn. Bhd.)</h2>
              <p>Our Goal is to guide you on everything you need when setting up your Company.</p>
              <p>Incorporation Package includes the following value added services:</p>
              <div className='mt-2'>
                <ol className='list-decimal pl-5'>
                  <li>5 Sets of Certified True Copies for:</li>
                  <ul class="list-disc pl-5">
                    <li>Section 14</li>
                    <li>Section 15</li>
                    <li>Section 17</li>
                    <li>Section 58</li>
                    <li>Corporate Information</li>
                  </ul>

                  <li>Director&apos;s Resolution:</li>
                  <ul class="list-disc pl-5">
                    <li>First Board Resolution</li>
                    <li>Opening of First Bank Account</li>
                    <li>Allotment of Shares up to RM1,000</li>
                  </ul>

                  <li>Issuance of Share Certificate(s)</li>
                  <li>Obtain Company Tax Number (C) and Employer&apos;s Tax Number (E)</li>
                  <li>Provision of Registered Address</li>
                  <li>Maintenance of Company Records & Registers</li>
                  <li>Appointment of 2 MAICSA Certified Company Secretaries</li>
                  <li>Three Months Retainer Fees included</li>

                </ol>
              </div>

            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2  shadow-lg'
            )}
          >
            <div className='p-1 lg:text-lg lg:p-3'>
              <p>To provide you with flexibility, we work on a fixed monthly retainer. Our scope of work are inclusive but not limited to the following:</p>
              <div className='mt-2'>
                <ol className='list-decimal pl-5'>
                  <li>Appointment of 2 MAICSA Certified Professional Secretaries</li>
                  <li>Use of our Office Address as your Company&apos;s Registered Address</li>
                  <li>Filing of Yearly Annual Returns & Financial Statements</li>
                  <li>Drafting of Directors & Members Resolutions</li>
                  <li>Certification of Statutory Documents</li>
                  <li>Receive Updates on the latest Regulations of the Companies Act 2016.</li>
                </ol>
              </div>

            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2  shadow-lg'
            )}
          >
            <div className='p-1 lg:text-lg lg:p-3'>
              <p>Have you created a logo or a brand that you are proud of?
                Register your Trademark to protect your assets.
                Get in touch with us to enquire.
              </p>
              <p>
                Trademark registration is the process of legally protecting a unique brand name, logo, slogan, or design from being used by others without permission. Registering a trademark can provide legal rights and protections for a business or individual&apos;s intellectual property, including the exclusive right to use the mark in connection with their goods or services.
              </p>
            </div>
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
