function bubbleSort(inputArray) {

	for (var end = inputArray.length - 1; end > 0; end--) {
		for (var i = 0; i < end; i++) {
			var currEl = inputArray[i];
			var nextEl = inputArray[i + 1];
			if (currEl > nextEl) {
				inputArray[i] = nextEl;
				inputArray[i + 1] = currEl;
			}
		}
	}

	return inputArray;
}