function gradientCalc(color1, color2, steps) {
	const colors = [];
	color1 = {
		r: parseInt(color1.slice(0, 2), 16),
		g: parseInt(color1.slice(2, 4), 16),
		b: parseInt(color1.slice(4, 6), 16)
	};
	color2 = {
		r: parseInt(color2.slice(0, 2), 16),
		g: parseInt(color2.slice(2, 4), 16),
		b: parseInt(color2.slice(4, 6), 16)
	};

	for (let i = 0; i < steps; i++) {
		const r = Math.round(color1.r + (color2.r - color1.r) * i / (steps - 1));
		const g = Math.round(color1.g + (color2.g - color1.g) * i / (steps - 1));
		const b = Math.round(color1.b + (color2.b - color1.b) * i / (steps - 1));
		colors.push(`${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);
	}
	return colors;
}

console.log(gradientCalc('80C23E', '50B2BE', 3))