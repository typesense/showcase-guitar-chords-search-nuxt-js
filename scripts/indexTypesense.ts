import Typesense from 'typesense';
import GuitarChordData from './data/guitar.json';
import 'dotenv/config';

(async () => {
  const typesense = new Typesense.Client({
    apiKey: process.env.TYPESENSE_ADMIN || 'xyz',
    nodes: [
      {
        host: process.env.PUBLIC_TYPESENSE_HOST || 'localhost',
        port: parseInt(process.env.PUBLIC_TYPESENSE_PORT || '8108'),
        protocol: process.env.PUBLIC_TYPESENSE_PROTOCOL || 'http',
      },
    ],
  });

  try {
    await typesense.collections('guitar-chords').retrieve();
    console.log('Found existing collection of guitar-chords');

    console.log('Deleting collection');
    await typesense.collections('guitar-chords').delete();
  } catch (err) {
    console.error(err);
  }

  console.log('Creating schema...');

  await typesense.collections().create({
    name: 'guitar-chords',
    enable_nested_fields: true,
    fields: [
      {
        name: 'key',
        type: 'string',
        facet: true,
      },
      {
        name: 'suffix',
        type: 'string',
        facet: true,
      },
      {
        name: 'positions',
        type: 'object[]',
      },
      {
        name: 'positions.capo',
        type: 'bool[]',
        optional: true,
        facet: true,
      },
    ],
    symbols_to_index: ['#'],
  });

  console.log('Populating collection...');

  try {
    const returnData = await typesense
      .collections('guitar-chords')
      .documents()
      .import(GuitarChordData);

    console.log('Return data: ', returnData);
  } catch (err) {
    console.error(err);
  }
})();
