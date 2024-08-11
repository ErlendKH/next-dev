/** @type {import('tailwindcss').Config} */
/* 
Erlend: Well, I think tailwind.config.js took precedence over the TypeScript config file,
since Tailwind CSS got properly applied after adding to content here.
*/
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}