export const colors = {
  lightGray: '#fcfefe',
  aquaGray: '#9fb5c4',
  mainColor: '#28cc90',
  lightGreen: 'rgba(119, 252, 203, 0.55)',
  darkText: '#101935',
  white: '#ffffff',
}

export const fontSize = {
  small: '14px',
  normal: '16px',
}

export const fontWeight = {
  normal: 300,
  bold: 600,
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
