import { createTheme } from '@vanilla-extract/css';



export const [themeClass, themeVars] = createTheme({
  backgroundColors: {
    primary: 'white',
    secondary: 'lightgray',
    brand: '#744ed4',
    good: 'lightgreen',
    bad: 'pink',
  },
  textColors: {
    default: 'black',
    secondary: 'gray',
    white: 'white',
    brand: '#744ed4',
    good: 'green',
    bad: 'red',
  },
  spaces: {
    auto: 'auto',
    '0': '0',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
  },
});