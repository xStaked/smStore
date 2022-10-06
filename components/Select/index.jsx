import { Fragment, useState, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
const people = [
  {
    id: 1,
    name: "Apple",
    avatar: "https://cdn.worldvectorlogo.com/logos/apple.svg",
  },
  {
    id: 2,
    name: "Huawei",
    avatar: "https://cdn.worldvectorlogo.com/logos/huawei.svg",
  },
  {
    id: 3,
    name: "Motorola",
    avatar: "https://cdn.worldvectorlogo.com/logos/motorola-new-logo.svg",
  },
  {
    id: 4,
    name: "Samsung",
    avatar: "https://cdn.worldvectorlogo.com/logos/samsung.svg",
  },
  {
    id: 5,
    name: "Xiaomi",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Select() {
  const [selected, setSelected] = useState(people[3]);
  const [ value, setValue ] = useState("");
  const router = useRouter();



  const handleURL = (e) => {
    setValue(e.target.value);
    router.push(`/${e.target.value}`);
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1 mb-12">
            <Listbox.Button className="relative w-72 cursor-default rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selected.avatar}
                  alt=""
                  className="h-6 w-6 flex-shrink-0"
                />
                <span className="ml-3 block truncate text-gray-700">
                  {selected.name}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"

            >
              
              <Listbox.Options  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-slate-300" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                    onClick={handleURL}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center"
                        >
                          <img
                            src={person.avatar}
                            alt=""
                            className="h-6 w-6 flex-shrink-0"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
              
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
