# campus-vive (Vue JS + Node Express/Djnago)

It is a campus management system....
like cantine/canteen, department, frinedly-map, political-group...han tan...

Vue.Js Installation:(Frontend)
===============================
# latest stable
$ npm install vue@next

# OR
npm install -g @vue/cli

#Project Create
# npm 6.x
$ npm init vite@latest campus-vive-frontend --template vue

# npm 7+, extra double-dash is needed:
$ npm init vite@latest <project-name> -- --template vue

$ cd <project-name>
$ npm install
$ npm run dev

ExpressJS Installation:(Backend)
=================================

$ npm install express --save

$ express --view=pug campus-vive-backend

$ npm install

$ set DEBUG=myapp:* & npm start

