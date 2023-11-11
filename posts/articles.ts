type Post = {
  author: string;
  description: string;
  keywords: string[];
  image?: string;
  pubDate: Date;
};

const Posts: { [name: string]: Post } = {
  do_not_type_your_notes: {
    author: "Elijah Potter",
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
    pubDate: new Date(2023, 9, 29),
    image: "/images/pen_paper.webp",
  },
  quantifying_hope_on_a_global_scale: {
    author: "Elijah Potter",
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
    pubDate: new Date(2023, 9, 20),
  },
  the_climate_change_progress_bar: {
    author: "Elijah Potter",
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
    pubDate: new Date(2023, 9, 12),
  },
  a_case_for_procrastination: {
    author: "Elijah Potter",
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
    pubDate: new Date(2023, 8, 27),
  },
  "3_awesome_ways_computers_generate_randomness": {
    author: "Elijah Potter",
    description:
      "We look at several interesting ways computers generate random numbers. It may fascinate you to know that some methods are not *truly* random, but only an approximate.",
    keywords: ["random", "nuclear", "intel", "amd", "generation", "rng"],
    image: "/images/numbers_on_a_screen.jpg",
    pubDate: new Date(2022, 2, 4),
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
    image: "/images/wordle_example.png",
    pubDate: new Date(2022, 2, 1),
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
    image: "/images/flat_ferris.png",
    pubDate: new Date(2021, 5, 2),
  },
  why_rust_may_be_more_attractive_than_javascript: {
    author: "Elijah Potter",
    description:
      "A key part of Rust is far better that what JavaScript has to offer.",
    keywords: ["cargo", "rust", "npm", "nodejs", "learning", "ease-of-use"],
    pubDate: new Date(2022, 1, 25),
  },
  //  you_need_to_stop_idolizing_programming_languages: {
  //    author: "Elijah Potter",
  //    description: "I am tired of it.",
  //    keywords: ["rust", "c++", "javascript"],
  //  },
  i_designed_my_own_pen_plotter: {
    author: "Elijah Potter",
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
    pubDate: new Date(2022, 9, 18),
  },
};

// Someone told me adding this to everything enhances SEO?
for (const value of Object.values(Posts)) {
  value.keywords.push("reddit");
}

export default Posts;
