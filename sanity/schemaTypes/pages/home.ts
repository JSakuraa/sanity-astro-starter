import { defineArrayMember, defineField, defineType } from "sanity";

export const home = defineType({
    name: "home",
    title: "Home",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            readOnly: true,
            initialValue: "Home",
        }),
        defineField({
            name: "content",
            type: "array",
            title: "Content",
            of: [
                defineArrayMember({
                    type: "hero"
                }),
                defineArrayMember({
                    type: "genericSection1"
                }),
                defineArrayMember({
                    type: "genericSection2"
                })
            ]
        })
    ]

})