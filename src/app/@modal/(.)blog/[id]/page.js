import BlogShort from "@/components/blog-short";
import Modal from "@/components/modal";
import { getBlogBySlug } from "../../../../../actions/blogs";

export default async function EditBlog(props) {
    const {params: {id}} = props;

    const blog = await getBlogBySlug(id);
    
    return (
        <Modal>
            <BlogShort blog={blog}/>
        </Modal>
    )
}