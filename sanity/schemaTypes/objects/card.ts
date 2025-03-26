import { defineField, defineType } from "sanity";

export const card = defineType({
    name: "card",
    title: "Card",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "customImage"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string"
        }),
        defineField({
            name: "link",
            title: "link",
            type: "url"
        })
    ]
})