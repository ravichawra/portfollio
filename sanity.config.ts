import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import post from "./sanity/schema/post";
import caseStudy from "./sanity/schema/caseStudy";
import { projectId, dataset } from "./lib/sanity";

export default defineConfig({
  name: "ravi-dev-portfolio",
  title: "RAVI CHAWRA // CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Case Studies")
              .child(S.documentTypeList("caseStudy").title("Case Studies")),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("post").title("Blog Posts")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [caseStudy, post],
  },
});
