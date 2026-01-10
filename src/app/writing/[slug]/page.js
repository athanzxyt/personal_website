import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { notFound } from "next/navigation";

function getBlogsMetadata() {
  const blogsDirectory = path.join(process.cwd(), "src/content/blogs");
  const filenames = fs.readdirSync(blogsDirectory);
  const markdownBlogs = filenames.filter((file) => file.endsWith(".md"));

  return markdownBlogs.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
    };
  });
}

function timeAgo(dateString) {
  const cleanDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const date = new Date(cleanDateString);
  const now = new Date();

  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 30) {
    return `${diffInDays}d ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}mo ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
}

function getBlogContent(slug) {
  const filePath = `src/content/blogs/${slug}.md`;

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}

export const generateStaticParams = async () => {
  const blogs = getBlogsMetadata();
  return blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));
};

export async function generateMetadata({ params }) {
  const post = getBlogContent(params.slug);
  const title = post?.title ? `${post.title}` : "Writing";

  return {
    title: `${title} | Athan Zhang`,
  };
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getBlogContent(slug);

  if (!post) {
    notFound();
  }

  const timeAgoString = timeAgo(post.date);

  const formatting = {
    overrides: {
      h1: {
        props: {
          className: "blog-h1",
        },
      },
      h2: {
        props: {
          className: "blog-h2",
        },
      },
      p: {
        props: {
          className: "blog-text",
        },
      },
      a: {
        component: Link,
        props: {
          className: "blog-a",
        },
      },
    },
  };

  return (
    <article className="space-y-6">
      <Link href="/writing" className="text-xs uppercase tracking-[0.3em] text-neutral-400">
        ← Back to writing
      </Link>
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold leading-snug">{post.title}</h1>
        <p className="text-sm text-neutral-500">
          {post.date} · {timeAgoString}
        </p>
      </div>
      <Markdown options={formatting}>{post.content}</Markdown>
    </article>
  );
}
