import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

export const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_ONLY || 'xyz',
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_HOST || 'localhost',
        port: parseInt(process.env.NEXT_PUBLIC_TYPESENSE_PORT || '0') || 8108,
        protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL || 'http',
      },
    ],
  },
  additionalSearchParameters: {
    query_by: 'key,suffix',
    num_typos: 0,
  },
});
