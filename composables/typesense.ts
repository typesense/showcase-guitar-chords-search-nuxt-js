import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

export const typesenseInstantsearchAdapter = () => {
  const config = useRuntimeConfig();

  return new TypesenseInstantSearchAdapter({
    server: {
      apiKey: config.public.PUBLIC_TYPESENSE_SEARCH_ONLY || 'xyz',
      nodes: [
        {
          host: config.public.PUBLIC_TYPESENSE_HOST || 'localhost',
          port: parseInt(config.public.PUBLIC_TYPESENSE_PORT || '0') || 8108,
          protocol: config.public.PUBLIC_TYPESENSE_PROTOCOL || 'http',
        },
      ],
    },
    additionalSearchParameters: {
      query_by: 'key,suffix',
      num_typos: 0,
    },
  });
};
