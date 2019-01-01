# **Auto-Complete Word Search**

**author:** [@PJSmooth](https://github.com/artysidorenko)

Web application for dynamically looking up user-input words as they are being typed.

---

## **Background**

This node.js project was written as part of shadowing the [Founders and Coders](https://github.com/foundersandcoders) web developer Bootcamp's [online curriculum](https://github.com/foundersandcoders/master-reference/tree/master/coursebook).

#### Project Specification

- Language used: HTML, CSS and JavaScript (with node.js run-time environment).
- Does **not** make use of any external libraries such as CSS Bootstrap, JQuery, etc...
- Development testing done using Jasmine node.js testing framework.

---

## **Features**

- Server can be launched via the script shortcut `npm start` or by running `node ./src/server.js`
- Then access by loading localhost on port 4000.
- Begin typing words in the text box provided which will generate selections below.
- Currently does not support spelling erros/spellcheck.
- Note: words are looked up via a static server-side dictionary file.
