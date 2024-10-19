# cookie-api-hook

## Overview

`cookie-api-hook` is a Fastify-based API that integrates with the [clipboard-curl-cookie](https://github.com/stembrino/clipboard-curl-cookie) Chrome plugin. This application allows users to easily extract cookies from their browser and send them to the API, making it a powerful tool for integration with API testing tools like Insomnia or Postman.

## Features

- **Fastify API**: Built on the Fastify framework for high performance and low overhead.
- **Cookie Extraction**: Utilizes the clipboard-curl-cookie Chrome plugin to retrieve cookies from the browser.
- **Seamless Integration**: Designed to work seamlessly with Insomnia and other API tools for easy cookie management.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or Yarn
- Access to the [clipboard-curl-cookie](https://github.com/stembrino/clipboard-curl-cookie) Chrome plugin

### Installation

1. Start the Fastify server Container:

   ```bash
   docker-compose up
   ```

   or for dev

   ```bash
   yarn install
   yarn dev
   ```

2. Your API will be running at `http://localhost:3000`.

## Usage

### Sending Cookies

Once the API is running, you can send cookies from the browser using the clipboard-curl-cookie plugin.

1. Install the [clipboard-curl-cookie](https://github.com/stembrino/clipboard-curl-cookie) Chrome plugin.
2. Use the plugin to copy cookies to your clipboard in the appropriate format.
3. Use your preferred API tool (like Insomnia or Postman) to send a POST request to the Fastify API with the copied cookies.

Example of a POST request to the API:

```http
[TBD]
```

### API Endpoints

- `POST /your-endpoint`: Send cookies to the API.

### Documentation

For detailed information on the API's functionality and available endpoints, refer to the [API Documentation](https://github.com/stembrino/cookie-api-hook/blob/main/docs/API.md).

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](https://github.com/stembrino/cookie-api-hook/blob/main/CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/stembrino/cookie-api-hook/blob/main/LICENSE.md) file for details.

## Acknowledgments

- [Fastify](https://www.fastify.io) - The web framework that powers this API.
- [clipboard-curl-cookie](https://github.com/stembrino/clipboard-curl-cookie) - The Chrome plugin for cookie extraction.
