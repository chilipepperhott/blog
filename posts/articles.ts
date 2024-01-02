import { clone } from "lodash";

export type PartialPost = {
  keywords: string[];
  image?: string;
  pubDate: string;
  description: string;
};

export type FullPost = {
  author: string;
  description_html: string;
  content_html: string;
} & PartialPost;

const partialPosts: Record<string, PartialPost> = {
  markov_chains_are_the_original_language_models: {
    description: "Back in my day, we used math for autocomplete.",
    pubDate: new Date(2024, 0, 1).toUTCString(),
    image: "/images/andrei_markov.jpg",
    keywords: [
      "linear algebra",
      "linear",
      "algebra",
      "rust",
      "mathematics",
      "college",
      "high school",
      "artificial intelligence",
      "autocomplete",
      "llm",
      "large language models",
      "chatgpt",
    ],
  },
  building_a_software_renderer_from_scratch: {
    description:
      "How I built a software renderer from scratch, and you can too.",
    pubDate: new Date(2024, 0, 1).toUTCString(),
    image: "/images/star_fox.png",
    keywords: [
      "computer graphics",
      "computer",
      "graphics",
      "linear algebra",
      "linear",
      "algebra",
      "rust",
      "mathematics",
      "college",
      "high school",
    ],
  },
  the_easiest_way_to_run_llms_locally: {
    description: "It saved me enough time, I had some to share about it.",
    keywords: ["arch", "linux", "llama", "chatgpt", "academia"],
    pubDate: new Date(2023, 11, 18).toUTCString(),
    image: "/images/llama.webp",
  },
  do_not_type_your_notes: {
    description:
      "It didn't work for me, and if you reading this, it probably won't work for you either.",
    keywords: [
      "neovim",
      "nvim",
      "notes",
      "notetaking",
      "latex",
      "markdown",
      "handwriting",
      "college",
      "colorado school of mines",
    ],
    pubDate: new Date(2023, 9, 29).toUTCString(),
    image: "/images/pen_paper.webp",
  },
  quantifying_hope_on_a_global_scale: {
    description: "An experiment on how to live in a seemingly hopeless world.",
    keywords: [
      "hope",
      "experiment",
      "design",
      "makerspace",
      "colorado school of mines",
      "web scraping",
      "asp.net core",
      "python",
      "rust",
    ],
    image: "/images/hope_sketch.webp",
    pubDate: new Date(2023, 9, 20).toUTCString(),
  },
  the_climate_change_progress_bar: {
    description: "A proposal.",
    keywords: [
      "climate change",
      "indonesia",
      "idea",
      "pitch",
      "startup",
      "feedback",
    ],
    image: "/images/blue_marble.jpg",
    pubDate: new Date(2023, 9, 12).toUTCString(),
  },
  a_case_for_procrastination: {
    description:
      "Or: why doing things at the last minute actually saves time. I talk about the importance of shockingly fast iteration cycles and lean manufacturing.",
    keywords: [
      "lean",
      "lean startup",
      "lean manufacturing",
      "iteration",
      "entrepreneurship",
    ],
    image: "/images/model_t.jpg",
    pubDate: new Date(2023, 8, 27).toUTCString(),
  },
  "3_awesome_ways_computers_generate_randomness": {
    description:
      "We look at several interesting ways computers generate random numbers. It may fascinate you to know that some methods are not *truly* random, but only an approximate.",
    keywords: ["random", "nuclear", "intel", "amd", "generation", "rng"],
    image: "/images/numbers_on_a_screen.jpg",
    pubDate: new Date(2022, 2, 4).toUTCString(),
  },
  build_a_wordle_solver_using_rust: {
    description:
      "I built a Wordle solver in Rust to beat my grandma. Follow the journey of how I did, and how I failed.",
    keywords: [
      "wordle",
      "rust",
      "information",
      "theory",
      "elimination",
      "fast",
      "blazing",
    ],
    image: "/images/wordle_example.png",
    pubDate: new Date(2022, 2, 1).toUTCString(),
  },
  //  followup_to_my_previous_post: {
  //    author: "Elijah Potter",
  //    description:
  //      "I received a bit of a backlash from my previous post. I hope to clear up my intentions and a deeper meaning behind what I said.",
  //    keywords: [
  //      "apology",
  //      "growth",
  //      "understanding",
  //      "collaboration",
  //      "learning",
  //      "reflection",
  //    ],
  //  },
  how_to_write_a_discord_bot_in_rust: {
    description:
      "We go through step-by-step how to build a Discord bot using the Rust Serenity Framework.",
    keywords: [
      "discord",
      "rust",
      "internet",
      "communication",
      "bot",
      "chatbot",
      "interactive",
      "tutorial",
    ],
    image: "/images/flat_ferris.png",
    pubDate: new Date(2021, 5, 2).toUTCString(),
  },
  why_rust_may_be_more_attractive_than_javascript: {
    description:
      "A key part of Rust is far better that what JavaScript has to offer.",
    keywords: ["cargo", "rust", "npm", "nodejs", "learning", "ease-of-use"],
    pubDate: new Date(2022, 1, 25).toUTCString(),
  },
  //  you_need_to_stop_idolizing_programming_languages: {
  //    author: "Elijah Potter",
  //    description: "I am tired of it.",
  //    keywords: ["rust", "c++", "javascript"],
  //  },
  i_designed_my_own_pen_plotter: {
    description:
      "In which I go through the process of designing, building, and testing a vector graphic pen plotter.",
    keywords: [
      "pen",
      "plotter",
      "rust",
      "arduino",
      "design",
      "learn",
      "engineering",
    ],
    image: "/images/pen_plotter_drawing_hilbert2.jpeg",
    pubDate: new Date(2022, 9, 18).toUTCString(),
  },
};

export function generatePartialPosts(): Record<string, PartialPost> {
  return clone(partialPosts);
}

export async function generateFullPosts(): Promise<Record<string, FullPost>> {
  const { processMarkdown } = await import("../src/processMarkdown");
  const fs = await import("fs/promises");

  const fullPosts: Record<string, FullPost> = {};

  for (const [key, value] of Object.entries(partialPosts)) {
    // Someone told me adding this to everything enhances SEO?
    value.keywords.push("reddit");

    const fileContent = await fs.readFile(`./posts/${key}.md`, "utf8");

    const content_html = await processMarkdown(fileContent);
    const description_html = await processMarkdown(value.description);

    fullPosts[key] = {
      author: "Elijah Potter",
      content_html,
      description_html,
      ...value,
    };
  }

  return fullPosts;
}
