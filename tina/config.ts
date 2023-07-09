import { defineConfig } from "tinacms";
import { photographiesFields } from "./templates";
import { prestationsFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "24ac0a06-99a0-49b6-9356-c3789e4a7a67", // Get this from tina.io
  token: "4e8c7b533441b63a422912c6fecc42d783de5dd6", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Ajouter une photographie",
        name: "ajouter_une_photographie",
        path: "src/content/photographies",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...photographiesFields(),
        ],
      },
      {
        format: "md",
        label: "Ajouter une prestation",
        name: "ajouter_une_prestation",
        path: "src/content/prestations",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...prestationsFields(),
        ],
      },
    ],
  },
});
