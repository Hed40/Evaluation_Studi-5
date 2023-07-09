import type { TinaField } from "tinacms";
export function photographiesFields() {
  return [
    {
      type: "image",
      name: "photographie",
      label: "Photographie",
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: [
        "Mariage",
        "Grossesse",
        "Bébé",
        "Famille",
        "Baptème",
        "Couple",
        "Portrait",
        "Photo d'art",
      ],
    },
  ] as TinaField[];
}
export function prestationsFields() {
  return [
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "string",
      name: "titre",
      label: "Titre",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "string",
      name: "prix",
      label: "Prix",
    },
    {
      type: "string",
      name: "toast_title",
      label: "Toast_Title",
    },
    {
      type: "string",
      name: "toast_sub_title",
      label: "Toast_Sub_title",
    },
    {
      type: "string",
      name: "toast_body",
      label: "Toast_body",
    },
  ] as TinaField[];
}
