import { Fragment, useState, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function Select() {
  return (
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:slate-300 focus:border-slate-300 block w-72 p-2.5 dark:bg-slate-800 dark:border-slate-300 dark:placeholder-slate-300 dark:text-white dark:focus:ring-slate-300 dark:focus:border-slate-300"
    >
      <option selected>Marca</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  );
}
