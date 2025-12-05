# devyalchemist Portfolio Site 🚀

## Overview
A dynamic and responsive personal portfolio website showcasing projects, tech stack, and a blog. Built with Next.js 16, TypeScript, and Tailwind CSS, it features internal API routes for seamless integration with GitHub and Google GenAI, offering a modern and interactive user experience.

## Features
- ✨ **Interactive Hero Section**: Engaging introduction with dynamic content switching for "About Me," "Contact Me," "My Projects," and "Gallery."
- 📚 **Dynamic Project Display**: Showcases a curated list of projects with detailed descriptions, technology stacks, and links to GitHub repositories and live demos. Includes an integrated README viewer.
- 💡 **AI-Powered "About Me" Facts**: Leverages Google GenAI to generate personalized facts about the developer based on user prompts, creating an interactive and unique experience.
- 🎨 **Theme Toggling**: Seamless light/dark mode switching for enhanced user experience and accessibility.
- 📱 **Responsive Design**: Optimized for various screen sizes, ensuring a consistent and fluid experience across devices using Tailwind CSS.
- 🌐 **Internal API Routes**: Utilizes Next.js API routes to efficiently fetch GitHub repository READMEs and generate AI-driven facts without exposing API keys directly to the client.
- 📝 **Technical Blog**: A dedicated section for sharing technical articles, insights, and industry trends.

## Technologies Used
| Category       | Technology        | Description                                                          | Link                                                       |
| :------------- | :---------------- | :------------------------------------------------------------------- | :--------------------------------------------------------- |
| **Framework**  | Next.js           | React framework for building production-ready web applications.      | [Next.js](https://nextjs.org/)                             |
| **Language**   | TypeScript        | Statically typed superset of JavaScript for enhanced code quality.   | [TypeScript](https://www.typescriptlang.org/)              |
| **Styling**    | Tailwind CSS      | Utility-first CSS framework for rapid UI development.                | [Tailwind CSS](https://tailwindcss.com/)                   |
|                | ShadCN UI         | Reusable and accessible UI components built on Radix UI and Tailwind.| [ShadCN UI](https://ui.shadcn.com/)                        |
| **UI/UX**      | Ant Design        | UI library providing various components like Tooltip and Divider.    | [Ant Design](https://ant.design/)                          |
| **State Mgmt.**| React Context API | For application-wide state management, including theme preferences.  | [React](https://react.dev/learn/passing-props-with-context) |
| **Animation**  | Embla Carousel    | Highly flexible and lightweight carousel library.                    | [Embla Carousel](https://www.embla-carousel.com/)          |
| **Icons**      | Font Awesome      | Extensive library of vector icons.                                   | [Font Awesome](https://fontawesome.com/)                   |
|                | Lucide React      | Modern, customizable, and tree-shakable open-source icons.           | [Lucide React](https://lucide.dev/)                        |
| **AI/ML**      | Google GenAI      | Generative AI services for dynamic content creation.                 | [Google AI](https://ai.google.dev/)                        |
| **APIs**       | GitHub API        | Programmatic interface for interacting with GitHub data.             | [GitHub API](https://docs.github.com/en/rest)              |

## Getting Started

### Installation
To get a local copy of this project up and running, follow these straightforward steps:

- ⚙️ **Clone the repository**:
  ```bash
  git clone https://github.com/devyalchemist/devyalchemist-portfolio-site.git
  cd devyalchemist-portfolio-site
  ```
- 📦 **Install dependencies**:
  ```bash
  npm install
  # or using Yarn
  yarn install
  ```

### Environment Variables
Before running the application, you need to set up your environment variables. Create a `.env.local` file in the root directory of the project and add the following:

- `GEMINI_KEY`: Your API key for Google GenAI, required for the random facts generator.
  ```
  GEMINI_KEY=YOUR_GOOGLE_GEMINI_API_KEY_HERE
  ```
- (Optional) `GITHUB_TOKEN`: A personal access token for GitHub API. While not strictly required for basic functionality, providing this can help avoid GitHub API rate limits if you plan on fetching many repository READMEs.
  ```
  GITHUB_TOKEN=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN_HERE
  ```

### Usage
- 🚀 **Run the development server**:
  Start the application in development mode:
  ```bash
  npm run dev
  # or using Yarn
  yarn dev
  ```
- 🌐 Once the server starts, open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio site.
- The application features hot-reloading, so changes you make to the source code will automatically reflect in your browser.

## API Reference

### Overview
This project leverages Next.js API routes to create serverless functions that serve as internal APIs. These routes handle server-side logic such as fetching external data from GitHub and interacting with generative AI models, enhancing the dynamic capabilities of the portfolio site.

### Base URL
The base URL for interacting with these API endpoints is `/api`. In a local development environment, this would be `http://localhost:3000/api`. When deployed, it would be `[your-deployed-domain]/api`.

### Endpoints

#### GET /api/github
This endpoint is designed to fetch and optionally summarize the README content of a specified GitHub repository.

**Request**:
Query Parameters:
- `owner`: (string, required) The GitHub username or organization that owns the repository.
- `repo`: (string, required) The name of the GitHub repository.

Example Request:
```
GET /api/github?owner=devyalchemist&repo=devyalchemist-portfolio-site
```

**Response**:
Success (200 OK):
Returns a JSON object containing information about the repository's README.
```json
{
  "repo": "devyalchemist-portfolio-site",
  "owner": "devyalchemist",
  "summary": "# devyalchemist Portfolio Site 🚀\n\nA dynamic and responsive personal portfolio website showcasing projects, tech stack, and a blog. Built with Next.js 16, TypeScript, and Tailwind CSS, it features internal API routes for seamless integration with GitHub and Google GenAI, offering a modern and interactive user experience.",
  "fullReadme": "# devyalchemist Portfolio Site 🚀\n\n## Overview\nA dynamic and responsive personal portfolio website showcasing projects, tech stack, and a blog. Built with Next.js 16, TypeScript, and Tailwind CSS, it features internal API routes for seamless integration with GitHub and Google GenAI, offering a modern and interactive user experience.\n..."
}
```

Errors:
- `400 Bad Request`: Occurs if required query parameters (`owner` or `repo`) are missing.
  ```json
  {
    "error": "Missing repo or owner parameters"
  }
  ```
- `4xx / 5xx`: Indicates an issue with fetching the README from GitHub (e.g., repository not found, rate limit exceeded) or an internal server error.
  ```json
  {
    "error": "Unable to fetch README"
  }
  ```
  ```json
  {
    "error": "Server error",
    "details": "Error details here..."
  }
  ```

#### POST /api/random-facts
This endpoint utilizes Google GenAI to generate a concise "random fact" about the developer. The AI generates the fact based on a user-provided prompt and pre-configured contextual information about the developer.

**Request**:
Payload:
- `prompt`: (string, required) A question or statement used to prompt the AI for a fact.

Example Request:
```
POST /api/random-facts
Content-Type: application/json

{
  "prompt": "What are devyalchemist's primary interests outside of coding?"
}
```

**Response**:
Success (200 OK):
Returns a JSON object containing the AI-generated answer.
```json
{
  "status": 200,
  "message": {
    "answer": "Beyond coding, devyalchemist is passionate about calisthenics, demonstrating discipline and dedication to physical fitness alongside his development work."
  }
}
```

Errors:
- `500 Internal Server Error`: Indicates a failure to communicate with the Google GenAI service or an unexpected error during the fact generation process.
  ```json
  {
    "status": 500,
    "error": "Failed to get response from AI"
  }
  ```
  ```json
  {
    "status": 500,
    "error": "An internal error occured"
  }
  ```

## Author
**Gospel Ugwuja (devyalchemist)**
- LinkedIn: [https://www.linkedin.com/in/gospel-ugwuja-devyalchemist/](https://www.linkedin.com/in/gospel-ugwuja-devyalchemist/)
- Twitter: [https://x.com/devyalchemist](https://x.com/devyalchemist)

---

## Badges
[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)