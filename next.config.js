module.exports = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/articles",
        permanent: true,
      },
      {
        source: "/articles/on_iteration_and_lean_thinking",
        destination: "/articles/a_case_for_procrastination",
        permanent: true,
      },
    ];
  },
  webpack: function (config, options) {
    config.experiments = { asyncWebAssembly: true };

    // TODO: Remove this workaround for Next.js WebAssembly bug
    if (options.isServer) {
      config.output.webassemblyModuleFilename =
        "./../static/wasm/[modulehash].wasm";
    } else {
      config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
    }

    return config;
  },
  output: "standalone",
};
