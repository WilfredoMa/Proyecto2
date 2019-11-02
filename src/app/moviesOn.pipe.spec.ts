import { MoviesPipe } from './moviesOn.pipe';

describe('MoviesPipe', () => {
  it('create an instance', () => {
    const pipe = new MoviesPipe();
    expect(pipe).toBeTruthy();
  });
});
