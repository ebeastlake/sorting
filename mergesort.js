function mergeSort(array) {
	
	if (array.length < 2) {
		return array;
	} else {
		var [firstHalf, secondHalf] = split(array);
		return merge(mergeSort(firstHalf), mergeSort(secondHalf));
	}
}

function split(wholeArray) {
	var center = wholeArray.length / 2;
	var firstHalf = wholeArray.slice(0, center);
	var secondHalf = wholeArray.slice(center);
	
	return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
	var sortedArray = [];

	while (firstHalf.length > 0 && secondHalf.length > 0) {
		if (firstHalf[0] < secondHalf[0]) {
			sortedArray.push(firstHalf[0]);
			firstHalf = firstHalf.slice(1);
		} else {
			sortedArray.push(secondHalf[0]);
			secondHalf = secondHalf.slice(1);
		}
	}

	return (firstHalf[0] === undefined) ? sortedArray.concat(secondHalf) : sortedArray.concat(firstHalf);

	/*
	while (firstHalf.length > 0 || secondHalf.length > 0) {
		if(firstHalf[0] !== undefined && secondHalf[0] !== undefined) {
			if (firstHalf[0] < secondHalf[0]) {
				sortedArray.push(firstHalf[0]);
				firstHalf = firstHalf.slice(1);
			} else {
				sortedArray.push(secondHalf[0]);
				secondHalf = secondHalf.slice(1);
			}
		} else {
			if(firstHalf[0] === undefined) {
				sortedArray.push(secondHalf[0]);
				secondHalf = secondHalf.slice(1);
			} else {
				sortedArray.push(firstHalf[0]);
				firstHalf = firstHalf.slice(1);
			}
		}
	}

	return sortedArray;
	*/
}