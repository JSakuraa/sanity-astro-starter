import { defineField, defineType } from "sanity";

export const genericSection1 = defineType({
    name: "genericSection1",
    title: "Generic Section 1",
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
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }]
        })
    ]
})