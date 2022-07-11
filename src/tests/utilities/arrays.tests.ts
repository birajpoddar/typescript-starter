import { cut3 } from '../../utilities/arrays';

describe('Arrays Tests', () => {
  describe('cat3 function', () => {
    it('expect 3rd element to be removed', () => {
      expect(cut3([1, 2, 3, 4])).toEqual([1, 2, 4]);
    });

    it('expect same array to be returned as 3rd element does not exists', () => {
      expect(cut3([1, 2])).toEqual([1, 2]);
    });

    it('expect the empty Array to be returned when empty Array is passed', () => {
      expect(cut3([])).toEqual([]);
    });
  });
});
