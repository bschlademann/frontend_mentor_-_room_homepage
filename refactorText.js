function refactorColors(text) {
    return text.split('\n').map(line => {
        // Remove initial dashes and trim any extra spaces
        const cleanedLine = line.replace(/^- /, '').trim();

        // Split the line into color name and HSL value
        const parts = cleanedLine.split(': ');

        // Format the line into CSS custom property syntax
        return `--${parts[0].toLowerCase().replace(/\s/g, '-')}: ${parts[1]};`;
    }).join('\n');
}

// Example usage:
const inputText = `- Dark Gray: hsl(0, 0%, 63%)
- Black: hsl(0, 0%, 0%)
- White: hsl(0, 0%, 100%)
- Very Dark Gray: hsl(0, 0%, 27%)`;

console.log(refactorColors(inputText));