describe('mergesort.js', function() {

	describe('Split Array function', function() {

		it('given one array, returns two arrays', function() {
			expect( split([]) ).toEqual( [[], []] );
		});

		it('handles an array with an even number of elements', function() {
			expect( split([19, 17, 3, 11, 10, 1]) ).toEqual( [[19, 17, 3], [11, 10, 1]] );
		});

		it('handles an array with an odd number of elements', function() {
			expect( split([19, 17, 3, 18, 11, 10, 1]) ).toEqual( [[19, 17, 3], [18, 11, 10, 1]] );
		});

	});

	describe('Merge', function() {

		it('is able to merge two sorted arrays into one sorted array', function() {
			expect(merge([2,4], [1,3])).toEqual( [1,2,3,4] );
		});

		it('is able to deal with arrays of uneven length', function() {
			expect(merge([8], [1,3,9,10])).toEqual( [1,3,8,9,10] );
		});

		it('is able to deal with an empty array', function() {
			expect(merge([], [1,3])).toEqual( [1,3] );
		});

	});


	describe('Merge Sort', function() {

		it('correctly sorts an unordered array', function() {
			expect( mergeSort([19, 17, 3, 18, 11, 10, 1]) ).toEqual( [1, 3, 10, 11, 17, 18, 19] );
		});

	});

});