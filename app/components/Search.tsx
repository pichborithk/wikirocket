'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearch('');
    router.push(`/${search}`);
  }

  return (
    <form
      className='w-50 flex justify-center md:justify-between'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={search}
        onChange={event => setSearch(event.target.value)}
        className='bg-white p-2 w-80 text-xl rounded-xl'
        placeholder='Search'
      />
      <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>
        🚀
      </button>
    </form>
  );
};
export default Search;
