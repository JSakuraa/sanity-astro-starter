import { defineField, defineType } from "sanity";

export const genericSection2 = defineType({
    name: "genericSection2",
    title: "Generic Section 2",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "cards",
            title: "Cards",
            type: "array",
            of: [{ type: "card" }]
        })
    ]
})