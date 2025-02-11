# zapchat

zapchat is a chatbot that uses ZAP to scan your code and find vulnerabilities. It's built with Next.js and uses the OpenAI API to generate responses.

# Setup

1. Copy `.env.template` to `.env` and set the environment variables.
2. Run `npm install` to install the dependencies.
3. Run `docker compose up` to start the zap container.
4. Run `npm run dev` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to interact with the chatbot. An example input is provided in the app.

# Architecture

This is a standard Next.js monolith. Due to time limitations, all logic is synchronously executed within the request-response cycle, rather than suitably architected to support running scans asynchronously and pushing updates back to the client.

# Assumptions/Limitations

- Aforementioned architecture limitations.
- I have been using https://juice-shop.herokuapp.com to test the chatbot.
- Currently ranking alerts by risk then confidence.
