export const colors = {
  lightGray: '#fcfefe',
  aquaGray: '#8ca1b0',
  mainColor: '#28cc90',
  lightGreen: 'rgba(119, 252, 203, 0.55)',
  darkText: '#101935',
  white: '#ffffff',
}

export const fontSize = {
  small: '14px',
  normal: '16px',
  normalPlus: '20px',
  medium: '23px',
  xMedium: '26px',
  large: '32px',
  superLarge: '45px',
}

export const fontWeight = {
  normal: 300,
  bold: 400,
}

export const animations = {
  moveUp: `
    position: relative;
    top: 0;
    transition: top 0.3s ease;

    &:hover {
      top: -0.2rem;
    }
  `,
}
