export function getColorClasses(color: string) {
	const colorMap = {
		purple: "from-purple-600 to-blue-600",
		blue: "from-blue-600 to-cyan-600",
		green: "from-green-600 to-teal-600",
		orange: "from-orange-600 to-red-600",
	};
	return colorMap[color as keyof typeof colorMap] || colorMap.purple;
}
