# MERN Boilerplate

This is a simple boilerplate using React, Express, Node, Mongoose
Please make a copy of the `.env.sample` file rename to `.env` and update the information with your mongo url and the port you wish to use if you need a different port.

## Errors you might see

You might encounter an issue where it does not recognize the module, specially those inside of routes, please make sure the extension of your files is `.mjs` (module) and not just `.js` this should solve the problem.

# How to Run this app

simple `npm install` then you can either make a build by going into the client and running `npm run build` or you can just run `npm run start:dev` to begin, this should render the simple app with a button, that hits the server.
