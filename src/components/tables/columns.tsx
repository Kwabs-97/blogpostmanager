'use client'
import { ColumnDef } from "@tanstack/react-table"
import { Blog } from "@/types"

const columns: ColumnDef<Blog>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorKey: "body",
        header: "Body",
    }
]


export default columns;