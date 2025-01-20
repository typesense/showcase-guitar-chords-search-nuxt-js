import * as TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

export const typesenseInstantsearchAdapter = () => {
  const config = useRuntimeConfig();
  return new TypesenseInstantSearchAdapter.default({
    server: {
      apiKey: config.public.typesenseSearchOnlyApiKey,
      nodes: [
        {
          url: config.public.typesenseServerUrl,
        },
      ],
    },
    additionalSearchParameters: {
      query_by: 'key,suffix',
      num_typos: 0,
    },
  });
};
