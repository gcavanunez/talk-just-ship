import { defineAppSetup } from '@slidev/types';

export default defineAppSetup(({ app, router }) => {
  // Vue App
  // app.
  const new_font = new FontFace('Virgil', 'url("/fonts/virgil.woff2")');
  new_font.display = 'swap';
  new_font.load().then(function (loaded_face) {
    // use font here
    document.fonts.add(loaded_face);
  });
});
