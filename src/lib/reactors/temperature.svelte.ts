export class Temperature {
	#celcius = $state(0);
	#fahrenheit = $state(0);

	get celcius() {
		return this.#celcius;
	}

	set celcius(value) {
		this.#celcius = value;
		this.#fahrenheit = parseFloat((value * (9 / 5) + 32).toFixed(2));
	}

	get fahrenheit() {
		return this.#fahrenheit;
	}

	set fahrenheit(value) {
		this.#fahrenheit = value;
		this.#celcius = parseFloat(((value - 32) * (5 / 9)).toFixed(2));
	}
}
