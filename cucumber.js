module.exports = {
  default: {
    formatOptions: {
      "snippetInterface": "async-await"
    },
    publishQuiet: true,
    paths: ["features/"],
    require: [
      "steps/**/*.ts",
      "hooks/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    tags: "not @ignore",
  },
};
