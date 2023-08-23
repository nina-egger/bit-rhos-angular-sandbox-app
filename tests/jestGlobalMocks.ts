const mock = () => {
	let storage: {[key: string]: string} = {};
	return {
		getItem: (key: string) => (key in storage ? storage[key] : null),
		setItem: (key: string, value: string) => (storage[key] = value || ''),
		removeItem: (key: string) => delete storage[key],
		clear: () => (storage = {})
	};
};

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'scrollIntoView', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
	value: () => ['-webkit-appearance']
});
(window as any).HTMLElement.prototype.scrollIntoView = function () {
	// nothing to do, this is only to satisfy SonarQube until we can exclude this file from the analysis.
};
Object.defineProperty(document.body.style, 'transform', {
	value: () => {
		return {
			enumerable: true,
			configurable: true
		};
	}
});
