type Post = {
  author: string;
  description: string;
  keywords: string[];
};

const Posts: { [name: string]: Post } = {
  "3_awesome_ways_computers_generate_randomness": {
    author: "Elijah Potter",
    description:
      "We look at several interesting ways computers generate random numbers. It may fascinate you to know that some methods are not *truly* random, but only an approximate.",
    keywords: ["random", "nuclear", "intel", "amd", "generation", "rng"],
  },
  build_a_wordle_solver_using_rust: {
    author: "Elijah Potter",
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
  },
  followup_to_my_previous_post: {
    author: "Elijah Potter",
    description:
      "I received a bit of a backlash from my previous post. I hope to clear up my intentions and a deeper meaning behind what I said.",
    keywords: [
      "apology",
      "growth",
      "understanding",
      "collaboration",
      "learning",
      "reflection",
    ],
  },
  how_to_write_a_discord_bot_in_rust: {
    author: "Elijah Potter",
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
  },
  why_rust_may_be_more_attractive_than_javascript: {
    author: "Elijah Potter",
    description:
      "A key part of Rust is far better that what JavaScript has to offer.",
    keywords: ["cargo", "rust", "npm", "nodejs", "learning", "ease-of-use"],
  },
  you_need_to_stop_idolizing_programming_languages: {
    author: "Elijah Potter",
    description: "I am tired of it.",
    keywords: ["rust", "c++", "javascript"],
  },
  i_designed_my_own_pen_plotter: {
    author: "Elijah Potter",
    description: "",
    keywords: [
      "pen",
      "plotter",
      "rust",
      "arduino",
      "design",
      "learn",
      "engineering",
    ],
  },
};

export default Posts;
