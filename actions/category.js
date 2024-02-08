import { db } from "@/lib/db";

export const getCategories = () => {
    try {
        const categories = db.category.findMany({});
        return categories;
    } catch(err) {
        return {error: err}
    }
}