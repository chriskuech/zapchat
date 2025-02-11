# zapchat

zapchat is a chatbot that uses ZAP to scan your code and find vulnerabilities. It's built with Next.js and uses the OpenAI API to generate responses.

# Setup

1. Copy `.env.template` to `.env` and set the environment variables.
2. Run `npm install` to install the dependencies.
3. Run `docker compose up` to start the zap container.
4. Run `npm run dev` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to interact with the chatbot. An example input is provided in the app.

# Architecture & Limitations

This is a standard Next.js monolith. Due to time limitations, all logic is synchronously executed within the request-response cycle, rather than suitably architected to support running scans asynchronously and pushing updates back to the client. This also means that the user must prompt for status updates to drive the process forward.

The central data model is `ChatCompletionMessageParam` from OpenAI SDK, which significantly simplifies the implementation. However, it doesn't have a timestamp and is persisted to cookies, which is evidentally flakey and can affect the messages fed to the LLM and subsequent quality of results.

## Other Assumptions

- Currently ranking "top" alerts by risk then confidence.
- Codebase has been annotated with TODOs containing assumptions/limitations.

# Production

This app is publicly accessible at https://zapchat-production.up.railway.app/.
