This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Code Tour

This repo includes a [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour). Start it from the `CODETOUR` item of the `Explorer` tab, or run the VS Code command `CodeTour: Start Tour`.

### Running in Development

As always, start by running the development server:

```bash
npm run dev
```

This development server runs by default at [http://localhost:3000](http://localhost:3000). Navigating to [http://localhost:3000/api/gql](http://localhost:3000/api/gql) will bring you to the Apollo Studio Explorer. Queries and mutations run via `POST` request to the function endpoint - `http://localhost:3000/api/gql`. The body of this request corresponds is a typical GraphQL payload, for example:

```JSON
{
	"query": "query { exampleAuthors { __typename name bio }}"
}
```
