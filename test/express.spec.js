import { expect } from 'chai';
import { describe, it } from 'mocha';
import http from 'http';


describe('server', () => {
  const hostname = 'http://127.0.0.1:3000';

  it('statusCode return 202 if url exists', () => {
    http.get(`${hostname}/`, (res) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('statusCode return 404 if url not exists', () => {
    http.get(`${hostname}/helo`, (res) => {
      expect(res.statusCode).to.equal(404);
    });
  });
});
