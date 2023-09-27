# LightningChart<sup>&#174;</sup> JS Next.js usage example

This repository showcases how to integrate LightingChart<sup>&#174;</sup> JS charting library to a [Next.js](https://nextjs.org/) application. The chart component is located in `app/chart.js`
The Next.js application fetches data from a WebSocket server (`server.js`) and updates the chart in real-time.

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) using the following settings:

- What is your project named? **lcjs-nextjs-template**
- Would you like to use TypeScript? **No**
- Would you like to use ESLint? **Yes**
- Would you like to use Tailwind CSS? **Yes**
- Would you like to use `src/` directory? **No**
- Would you like to use App Router? (recommended) **Yes**
- Would you like to customize the default import alias (@/\*)? **No**

## How to run

First, install the dependencies:

```bash
npm install
```

Then you can run the Next.js application:

```bash
npm run dev
```

To open the WebSocket server, run:

```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the chart in action.
