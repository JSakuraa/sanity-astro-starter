import { defineField, defineType } from "sanity";

export const hero = defineType({
    name: "hero",
    title: "Hero",
    type: "object",
    fields: [
        defineField({
            name: "tag",
            title: "Tag",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Hero Image",
            type: "customImage",
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{type: 'block'}]
        })
    ]
})