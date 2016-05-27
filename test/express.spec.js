import { expect } from 'chai';
import { describe, it } from 'mocha';
import { expressCopycat } from '../lib/expresscopycat';

describe('express function', () => {
  it('should return a function', () => {
    const app = expressCopycat();

    app.listen(8000);
  });
});
