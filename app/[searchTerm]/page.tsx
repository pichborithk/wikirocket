import getWikiResults from '@/lib/getWikiResults';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata(props: Props) {
  const { searchTerm } = props.params;

  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

const SearchResults = async (props: Props) => {
  const { searchTerm } = props.params;

  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  console.log(results);

  return (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {results ? (
        Object.values(results).map(result => {
          return <p key={result.pageid}>{JSON.stringify(result)}</p>;
        })
      ) : (
        <h2 className='p-2 text-xl'>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
};
export default SearchResults;
