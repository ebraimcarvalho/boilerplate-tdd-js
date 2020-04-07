/* eslint-disable no-undef */
import { expect } from 'chai';
import tests from '../src/tests';

describe('Main', () => {
  it('should return 0', () => {
    expect(tests.sum(0, 0)).to.be.equal(0);
  });
});
