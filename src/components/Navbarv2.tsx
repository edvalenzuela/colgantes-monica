"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { PiPottedPlant } from 'react-icons/pi'

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Quien soy', href: 'quien-soy', current: false },
  { name: 'Galería', href: 'galería', current: false },
  { name: 'Contacto', href: 'contacto', current: false },
]

export default function Navbarv2() {
  const [isOpen, setIsOpen] = useState(false)

  function isCurrentMenu(...classes:string[]):string {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton  onClick={() => setIsOpen(!isOpen)} className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-orange-400 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="fill-orange-400 block size-6 group-data-open:hidden" />
              <FaTimes aria-hidden="true" className="fill-orange-400 hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href='/' className='group' title="Colgantes Mónica">
                <PiPottedPlant 
                  className="fill-orange-400 group-hover:fill-orange-600" 
                  size={30} 
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map(({name, href, current}) => (
                  <Link
                    key={name}
                    href={href === "inicio" ? "/" : `/#${href}`}
                    aria-current={current ? 'page' : undefined}
                    className={isCurrentMenu(
                      current ? 'bg-gray-900 text-white' : 'text-orange-400 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className={`absolute left-0 w-full sm:invisible bg-gray-800 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map(({name, href, current}) => (
            <DisclosureButton
              key={name}
              as="a"
              href={href === "inicio" ? "/" : `/#${href}`}
              aria-current={current ? 'page' : undefined}
              className={isCurrentMenu(
                current ? 'bg-gray-950 text-white' : 'text-orange-400 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
