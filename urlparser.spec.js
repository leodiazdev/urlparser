const { urlParse } = require("./urlparser");
const format = '/:version/api/:collection/:id';

describe('urlParse', () => {
    it('test 1', () => {
      const url = '/6/api/listings/3?sort=desc&limit=10';
      const result = urlParse(format, url);
      expect(result).toEqual({
        sort: 'desc',
        limit: '10',
        version: '6',
        collection: 'listings',
        id: '3'
      });
    });

    it('test 2', () => {
        const url = '/1/api/products/23?sort=asc&limit=33';
        const result = urlParse(format, url);
        expect(result).toEqual({
          sort: 'asc',
          limit: '33',
          version: '1',
          collection: 'products',
          id: '23'
        });
      });
  });
  