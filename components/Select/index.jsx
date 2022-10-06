import { useRouter } from "next/router";

export default function Select() {
  const router = useRouter();

  const onChangeURL = (e) => {
    const { value } = e.target;
    router.push(value);
  };

  return (
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:slate-300 focus:border-slate-300 block w-72 p-2.5 dark:bg-slate-800 dark:border-slate-300 dark:placeholder-slate-300 dark:text-white dark:focus:ring-slate-300 dark:focus:border-slate-300"
      onChange={onChangeURL}
    >
      <option value="/">Selecciona una marca</option>
      <option value="/">Todas</option>
      <option value="xiaomi">xiaomi</option>
      <option value="samsung">Samsung</option>
      <option value="apple">Apple</option>
      <option value="motorola">Motorola</option>
      <option value="huawei">Huawei</option>
    </select>
  );
}
