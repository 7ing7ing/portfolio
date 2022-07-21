export const projects = [
  // {
  //     key:"",
  //     title: "",
  //     description: "",
  //     technologies: "",
  //     image: "",
  //     link: "",
  //     github: "",
  //   },
  {
    key: "28",
    title: "E-commerce shop",
    description:
      "An anime figures shop. Some pages are private and are protected: the user needs to login in order to see them. Is web responsive, you can signin/out and signup as is connected to the database, add products to the cart or wishlist (if you are a user, it will be saved to the database), buy by using a test card (424242...). The orders page contains all the products you have bought. Check the ReadMe in my repo for more information.",
    technologies:
      "React (state, hooks (custom ones as well)), Node.js, Express, API's, Bootstrap, Stripe (for the payment functionality), Firebase (for authentication and database), some npm packages: moment, react-currency-format, dotenv, Heroku for hosting and Photoshop.",
    image: "/images/shopper.png",
    link: "https://shopper-ecom.herokuapp.com/",
    github: "https://github.com/7ing7ing/shopper-ecom",
  },
  {
    key: "1",
    title: "Netflix clone",
    description:
      "Responsive Netflix clone. Has four main pages: home, signin, signout and browse (this one is protected to allow users only). There is one video to play as well.",
    technologies:
      "React (custom hooks, compound components, styled components), Firebase for the database and hosting, React testing library for the tests, Fuse.js for the search bar.",
    image: "/images/netflix.png",
    link: "https://netclone-phi.vercel.app/",
    github: "https://github.com/7ing7ing/netclone",
  },
  {
    key: "2",
    title: "Instagram clone",
    description:
      "Responsive Instagram clone. Has four pages: login, signup, dashboard and profile page.",
    technologies:
      "React(custom hooks), Firebase for the database and vercel for hosting and TaiwindCSS.",
    image: "/images/instagram.png",
    link: "https://insta-clone-liard.vercel.app",
    github: "https://github.com/7ing7ing/insta-clone",
  },
  {
    key: "3",
    title: "Amazon clone",
    description:
      "An amazon clone where we can add and remove products from basket. Create users, login/out, and purchase (with a test card, 424242...).",
    technologies:
      "React, Axios for HTTP requests, Firebase as database and Stripe for payments.",
    image: "/images/amazon.png",
    link: "https://clone-d59c6.web.app/",
    github: "https://github.com/7ing7ing/amazon-clone",
  },
  {
    key: "4",
    title: "Random quote machine",
    description:
      "A website that generates random quotes everytime the 'New quote' button is clicked. The font colour and the background color changes at the same time as the quotes.",
    technologies: "HTML, CSS, Javascript, jQuery.",
    image: "/images/quotes.png",
    link: "https://7ing7ing.github.io/random-quote-machine/",
    github: "https://github.com/7ing7ing/random-quote-machine",
  },
  {
    key: "5",
    title: "Markdown previewer",
    description:
      "A markdown previewer text area where we can write our input and a preview area where the converted text will appear.",
    technologies: "HTML, CSS, Javascript, 'Marked' Npm package.",
    image: "/images/markdown-previewer.png",
    link: "https://7ing7ing.github.io/markdown-previewer/",
    github: "https://github.com/7ing7ing/markdown-previewer",
  },
  {
    key: "6",
    title: "Pomodoro clock",
    description:
      "A pomodoro clock where we can set the work time and the break time. When 'play' is pressed the countdown of the work time starts, when this finishes, the countdown of the break starts. It's a cycle. Everytime a countdown reaches 00:00, it beeps. We can play, pause, stop, increase and decrease the time.",
    technologies: "React (using state hook).",
    image: "/images/pomodoro.png",
    link: "https://7ing7ing.github.io/pomodoro-clock/",
    github: "https://github.com/7ing7ing/pomodoro-clock",
  },
  {
    key: "7",
    title: "Javascript calculator",
    description: "A calculator that sum, deduct, multiply and divide.",
    technologies: "React (class components), Math.js npm package.",
    image: "/images/calculator.png",
    link: "https://7ing7ing.github.io/javascript-calculator/",
    github: "https://github.com/7ing7ing/javascript-calculator",
  },
  {
    key: "8",
    title: "Drum machine",
    description:
      "A drum machine where each button plays a different sound, and shows the name of it at the same time. It also has a volume toggle.",
    technologies: "React (functional components, state hook), Bootstrap.",
    image: "/images/drum-machine.png",
    link: "https://7ing7ing.github.io/drum-machine/",
    github: "https://github.com/7ing7ing/drum-machine",
  },
  {
    key: "9",
    title: "Data Visualization with Bar Chart ",
    description:
      "Data visualization of the United States gross domestic product.",
    technologies: "HTML, CSS, Javascript, D3.js library.",
    image: "/images/barchart.png",
    link: "https://7ing7ing.github.io/data-visualization-with-bar-chart/",
    github: "https://github.com/7ing7ing/data-visualization-with-bar-chart",
  },
  {
    key: "10",
    title: "Data visualization with a scatterplot graph",
    description: "Doping in Professional Bicycle Racing scatterplot graph.",
    technologies: "HTML, CSS, Javascript, D3.js library.",
    image: "/images/scatterplot.png",
    link: "https://7ing7ing.github.io/scatterplot-data-visualization/",
    github: "https://github.com/7ing7ing/scatterplot-data-visualization",
  },
  {
    key: "11",
    title: "Visualize data with a heat map",
    description:
      "Monthly global land-surface temperature (1753 - 2015) data visualization with a heat map.",
    technologies: "HTML, CSS, Javascript, D3.js library.",
    image: "/images/heatmap.png",
    link: "https://7ing7ing.github.io/visualize-data-with-a-heat-map/",
    github: "https://github.com/7ing7ing/visualize-data-with-a-heat-map",
  },
  {
    key: "12",
    title: "Visualize data with a choropleth map",
    description:
      "Choropleth map with the United States Educational Attainment.",
    technologies: "HTML, CSS, Javascript, D3.js library.",
    image: "/images/choropleth.png",
    link: "https://7ing7ing.github.io/visualize-data-with-a-choropleth-map/",
    github: "https://github.com/7ing7ing/visualize-data-with-a-choropleth-map",
  },
  {
    key: "13",
    title: "Visualize data with a treemap diagram",
    description:
      "Treemap diagram with the top 100 most sold video games grouped by platform.",
    technologies: "HTML, CSS, Javascript, D3.js library.",
    image: "/images/treemap.png",
    link: "https://7ing7ing.github.io/visualize-data-with-a-treemap-diagram/",
    github: "https://github.com/7ing7ing/visualize-data-with-a-treemap-diagram",
  },
  {
    key: "14",
    title: "Timestamp Microservice",
    description:
      "A timestamp microservice that can take utc format data or unix and returns both of them as a json.",
    technologies: "HTML, CSS, Javascript, Node.js, Express.",
    image: "/images/timestamp.png",
    link: "https://timestamp-microservice21.herokuapp.com/",
    github: "https://github.com/7ing7ing/timestamp-microservice",
  },
  {
    key: "15",
    title: "File Metadata Microservice",
    description:
      "A file metadata microservice where we can submit a file, and we receive the file name, type, and size in bytes within the JSON response",
    technologies:
      "HTML, CSS, Javascript, Node.js, Express, MongoDB, Multer npm package.",
    image: "/images/file-metadata.png",
    link: "https://file-metadata-microservices-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/file-metadata-microservice",
  },
  {
    key: "16",
    title: "Request Header Parser Microservice",
    description:
      "A headparser that returns a json with our ip address, our system language and the software we are using.",
    technologies: "HTML, CSS, Javascript, Node.js, Express.",
    image: "/images/headparser.png",
    link: "https://headparser-microservices-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/headparser",
  },
  {
    key: "17",
    title: "Url shortener",
    description:
      "A url shortener that validates the link and then creates an ID for this link. This ID would redirect to the desired website.",
    technologies:
      "HTML, CSS, Javascript, Node.js, Express, MongoDB, Mongoose, Url-Validator and Short-Id npm packages.",
    image: "/images/urlshortener.png",
    link: "https://url-shortener-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/url-shortener",
  },
  {
    key: "18",
    title: "Exercise tracker",
    description:
      "An exercise tracker where we can create a user and add exercises with the user id. We can also get the exercises log.",
    technologies: "HTML, CSS, Javascript, Node.js, Express, MongoDB, Mongoose.",
    image: "/images/exercise-tracker.png",
    link: "https://exercise-tracker-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/exercise-tracker",
  },
  {
    key: "19",
    title: "Sudoku solver",
    description:
      "A sudoku solver. Periods are blank spaces and numbers are the sudoku starting numbers. An error will show up if a sudoku cannot be solved, if there is a invalid character/value or the length of the puzze is incorrect.This project was specially difficult. A recursive function and the use of matrix were needed.",
    technologies: "Node.js, API's, Mocha, Chai.",
    image: "/images/sudoku.png",
    link: "https://sudoku-solver-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/sudoku-solver",
  },
  {
    key: "20",
    title: "Metric imperial converter",
    description:
      "A metric imperial converter that converts gallons, liters, miles, kilometers, pounds and kilograms. The aim of this project was more centered in Mocha test framework and Chai assertion library. There is two tests: unit tests (used to test the function that converts the unit measurement) and functional tests (used to test the API's).",
    technologies: "Node.js, Express, Mocha, Chai.",
    image: "/images/mi-converter.png",
    link: "https://metric-imperial-converter-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/metric-imperial-converter",
  },
  {
    key: "21",
    title: "Issue tracker",
    description:
      "A project issue tracker where we can create, update and delete an issue. We can also group them by project name. It returns errors when a required field is empty, when we update/delete and an ID that does not exist, etc.",
    technologies:
      "Node.js, Express, MongoDB, Mongoose, Mocha, Chai, Bson-objectid npm package to generate object ID's.",
    image: "/images/issue-tracker.png",
    link: "https://issue-tracker-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/project-issue-tracker",
  },
  {
    key: "22",
    title: "Personal library",
    description:
      "A personal library where we can create/delete books and add comments.",
    technologies:
      "Node.js, Express, MongoDB, Mongoose, Mocha, Chai, Bson-objectid npm package to generate object ID's.",
    image: "/images/personallibrary.png",
    link: "https://personal-library-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/personal-library",
  },
  {
    key: "23",
    title: "American-British translator",
    description:
      "An american-british translator that returns the translated words highlighted. It also returns error if there is missing fields, or a message if translation is not needed.",
    technologies: "Javascript, Node.js, API's, Mocha, Chai.",
    image: "/images/translator.png",
    link: "https://american-british-translator-21.herokuapp.com/",
    github: "https://github.com/7ing7ing/american-british-english-translator",
  },
  {
    key: "24",
    title: "Tribute page",
    description:
      "A simple tribute page with my cat's photo on it and some funny facts of cats.",
    technologies: "HTML, CSS.",
    image: "/images/tribute.png",
    link: "https://codepen.io/7ing7ing/full/ExNGxev",
    github: "https://github.com/7ing7ing/tribute-page",
  },
  {
    key: "25",
    title: "Survey form",
    description:
      "A simple survey form about our resources if we are learning programming.",
    technologies: "HTML, CSS.",
    image: "/images/form.png",
    link: "https://codepen.io/7ing7ing/full/yLVGRPR",
    github: "https://github.com/7ing7ing/tribute-page",
  },
  {
    key: "26",
    title: "Product landing page",
    description:
      "A product landing page about slaps (yes, slaps, this page was inspired by my mood the day I did it 😂)",
    technologies: "HTML, CSS.",
    image: "/images/product-landing.png",
    link: "https://codepen.io/7ing7ing/full/jOVROYe",
    github: "https://github.com/7ing7ing/product-landing-page",
  },
  {
    key: "27",
    title: "Technical documentation page",
    description: "A basic documentation page that explains some HTML tags.",
    technologies: "HTML, CSS.",
    image: "/images/technical-documentation.png",
    link: "https://codepen.io/7ing7ing/full/mdOgajG",
    github: "https://github.com/7ing7ing/technical-documentation-page",
  },
];
