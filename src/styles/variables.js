export const colors = {
  lightGray: '#fcfefe',
  mainColor: '#28cc90',
  darkText: '#101935',
  white: '#ffffff',
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
