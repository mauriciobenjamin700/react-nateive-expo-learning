/** @type {import (tailwindcss).Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your components file
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presentes: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: {},
}
