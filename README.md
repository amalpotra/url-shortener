<div id="top"></div>

<!-- PROJECT BANNER -->

![UrlShortener](https://user-images.githubusercontent.com/97591166/208233846-eb1d3d8e-c83e-4e9a-a663-df501ac21f8a.png)

<!-- PROJECT HEADING -->

<div align="center">
    <h1 align="center">URL Shortener</h1>
    <p align="center">
        <h4>Shortens your long links into more manageable and useable URLs.</h4>
        <!-- PROJECT SHIELDS -->
        <a href="https://github.com/amalpotra/url-shortener">
            <img src="https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20VSCode&labelColor=2c2c32&color=007acc&logoColor=007acc" alt="VS Code"></img>
        </a><br />
        <a href="https://github.com/amalpotra/url-shortener/issues">Report Bug</a> ·
        <a href="https://github.com/amalpotra/url-shortener/issues">Request Feature</a>
    </p>
</div>

<!-- ABOUT -->

## About

A RESTful API for shortening long links into more manageable and useable URLs.
For a URL, a 10 digit code is provided instead and the same is used to redirect back to the original one
and uses MongoDB for storing details.

### Made with
- [Express JS](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nano ID](https://github.com/ai/nanoid)

Look `package.json` for complete set of dependencies. 

### Prerequisites

Before getting started, make sure you have.

- Node.js along with yarn package manager. If you do not have yarn, here is the official [guide](https://yarnpkg.com/getting-started/install) for that.
- A MongoDB connection string. (see MongoDB [Atlas](https://www.mongodb.com/atlas/database))
- VS Code or any other code editor/IDE in place.

### Setup

So, this is how to set things up at local environment.

1. Clone the repo.

   ```sh
   git clone https://github.com/amalpotra/url-shortener.git
   ```

2. Open with VS Code and navigate to `/configs` and create a new file named `config.env` and add these properties.
   ```env
   PORT = 3000
   BASE_URI = (optional)
   MONGO_URI = (your connection string)
   ```

4. Open terminal and run.

   ```sh
   yarn install
   yarn run dev
   ```

5. If everything went right, service would be available at `localhost:3000`.

<!-- DOCUMENTATION -->

## API Documentation

All endpoints have been documented using Swagger with [OpenAPI](https://swagger.io/specification/) v3 specifications.

Navigate to `http://localhost:3000/docs/api-docs` to access Swggaer UI and view detailed API doc.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project.
2. Create your Feature Branch `git checkout -b feature/AmazingFeature`.
3. Commit your Changes `git commit -m 'Add some AmazingFeature'`.
4. Push to the Branch `git push origin feature/AmazingFeature`.
5. Open a Pull Request.

<!-- LICENSE -->

## License

Distributed under the GPL-v3.0 License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Amarjeet Malpotra - [amalpotra.github.io](https://amalpotra.github.io)

Repository link: [https://github.com/amalpotra/url-shortener](https://github.com/amalpotra/url-shortener)

<p align="right">(<a href="#top">back to top</a>)</p>
