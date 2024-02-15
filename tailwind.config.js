/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-opacity-1': 'rgba(255,255,255, 0.1)',
        'white-opacity-3': 'rgba(255,255,255, 0.3)',
        'white-opacity-95': 'rgba(255,255,255, 0.95)',
        'dark-opacity-1': 'rgba(11, 11, 14, 0.1)',
        'dark-opacity-9': 'rgba(11, 11, 14, 0.9)',
        'dark': 'var(--dark)',
        'red': 'hsl(0, 100%, 80%)',
        'yellow': 'hsl(62, 100%, 80%)',
        'green': 'hsl(122, 100%, 80%)',
        'blue': 'hsl(179, 100%, 80%)',
        'purple': 'hsl(238, 100%, 80%)',
        'pink': 'hsl(302, 100%, 80%)',
      },
      cursor: {
        'pencil': `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style="font-size:28px"><text y="32">🖋️</text></svg>'), auto`,
        'brush': `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style="font-size:28px"><text y="32">🖌️</text></svg>'), auto`,
        'paint': `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style="font-size:28px"><text y="32">💧</text></svg>'), auto`,
        'eraser': `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style="font-size:28px"><text y="32">🧼</text></svg>'), auto`,
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'oleo': ['Oleo Script'],
        'artial': ['Arial']
      }
    },
  },
  plugins: [],
}