async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    exlimit: 'max',
    format: 'json',
    origin: '*',
  });

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?${searchParams}`
  );

  return response.json();
}

export default getWikiResults;
