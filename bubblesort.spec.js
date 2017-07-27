describe('bubblesort.js', function() {
	describe('Bubble Sort', function() {
		it('handles an empty array', function() {
			expect( bubbleSort([]) ).toEqual( [] );
		});
	});

	describe('Bubble Sort', function() {
		it('handles an array with one elements', function() {
			expect( bubbleSort([12]) ).toEqual( [12] );
		});
	});

	describe('Bubble Sort', function() {
		it('handles an array with two elements', function() {
			expect( bubbleSort([12, 8]) ).toEqual( [8, 12] );
		});
	});


	describe('Bubble Sort', function() {

		for (var i = 2; i < 103; i+= 10) {
			it('sorts an array of ' + i + ' random items', function() {
				var arr = generateArray(i, 0, 100);
				var sorted = arr.slice(0).sort(numerically);
				expect( bubbleSort(arr) ).toEqual( sorted );
			});

		}

	});

	function generateArray(size, lower, upper) {
		var randomArray = [];
		while (size--) {
			var randomNum = Math.floor(lower + Math.random() * upper);
			randomArray.push(randomNum);
		}
		return randomArray;
	}

	function numerically (a, b) { return a - b; }
});