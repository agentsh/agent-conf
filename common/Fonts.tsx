import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,700';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const font = new FontFaceObserver('Open Sans');

  font.load().then(() => {
    document.documentElement.classList.add('OpenSans');
  });
};

export default Fonts;
