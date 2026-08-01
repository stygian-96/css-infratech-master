"use client";

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Calendar,
  User,
  Clock,
  Filter,
} from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import { blogService } from "@/http/blogs";

// Define Types
interface Author {
  id: string;
  username: string;
  email: string;
  image?: string;
}

interface BlogImage {
  id: string;
  url: string;
  blogId: string;
}

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string;
  published: boolean;
  publishedAt: string | null;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
  author: Author;
  images: BlogImage[];
}

interface BlogCardProps {
  blog: Blog;
  featured?: boolean;
}

interface FeaturedBlogCardProps {
  blog: Blog;
}

// BlogCard component with cleaner design
function BlogCard({ blog, featured = false }: BlogCardProps): JSX.Element {
  const readTime = `${Math.ceil(blog.content.length / 1000)} min read`; // Estimate read time based on content length
  const date = new Date(blog.publishedAt || blog.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <motion.article
      className={`bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-56 overflow-hidden">
        {blog.images && blog.images.length > 0 ? (
          <img
            src={blog.images[0].url}
            alt={blog.title}
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-amber-100 to-amber-200 flex items-center justify-center">
            <span className="text-amber-800 text-lg font-medium">
              CSS Infratech
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex font-sans items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 text-amber-500" />
            <span>{date}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1 text-amber-500" />
            <span>{readTime}</span>
          </div>
        </div>

        <Link href={`/blogs/${blog.id}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-amber-600 transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 font-sans line-clamp-2">
          {blog.summary}
        </p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center">
              {blog.author?.image ? (
                <Image
                  src={blog.author.image}
                  alt={blog.author.username}
                  fill
                  className="object-cover"
                />
              ) : (
                <User size={16} className="text-amber-600" />
              )}
            </div>
            <span className="text-sm text-gray-700">
              {blog.author?.username || "CSS Infratech"}
            </span>
          </div>

          <Link
            href={`/blogs/${blog.id}`}
            className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-all"
          >
            Read more
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// Featured blog card with horizontal layout
function FeaturedBlogCard({ blog }: FeaturedBlogCardProps): JSX.Element {
  const readTime = `${Math.ceil(blog.content.length / 1000)} min read`;
  const date = new Date(blog.publishedAt || blog.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <motion.article
      className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
        {blog.images && blog.images.length > 0 ? (
          <img
            src={blog.images[0].url}
            alt={blog.title}
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-amber-100 to-amber-200 flex items-center justify-center">
            <span className="text-amber-800 text-lg font-medium">
              CSS Infratech
            </span>
          </div>
        )}
      </div>

      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <Link href={`/blogs/${blog.slug}`}>
          <h3 className="text-2xl  md:text-3xl font-semibold text-gray-800 mb-3 hover:text-amber-600 transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-6 font-normal font-sans">
          {blog.summary.slice(0, 180) + "..."}
        </p>

        <div className="flex items-center space-x-4 mb-6">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center">
            {blog.author?.image ? (
              <Image
                src={blog.author.image}
                alt={blog.author.username}
                fill
                className="object-cover"
              />
            ) : (
              <User size={20} className="text-amber-600" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              {blog.author?.username || "CSS Infratech"}
            </p>
            <div className="flex font-sans items-center text-sm text-gray-500">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center font-medium text-amber-600 hover:text-amber-700 transition-all w-max"
        >
          Read full article
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

// Define the shape of API responses
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Main component
export default function BlogPage(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeTag, setActiveTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await blogService.getBlogs();

        // Type guard to ensure we have the right response structure
        if (!response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid response format");
        }

        const fetchedBlogs: Blog[] = response.data as Blog[];

        setBlogs(fetchedBlogs);
        setFilteredBlogs(fetchedBlogs);

        // Extract unique categories based on created dates
        if (fetchedBlogs.length > 0) {
          const uniqueMonths = [
            ...new Set(
              fetchedBlogs.map((blog) =>
                new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                })
              )
            ),
          ];
          setCategories(["All", ...uniqueMonths]);
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on category, tag, and search query
  useEffect(() => {
    if (blogs.length === 0) return;

    let result = [...blogs];

    if (activeCategory !== "All") {
      result = result.filter((blog) => {
        const blogMonth = new Date(blog.createdAt).toLocaleDateString("en-US", {
          month: "long",
        });
        return blogMonth === activeCategory;
      });
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.summary.toLowerCase().includes(query) ||
          (blog.content && blog.content.toLowerCase().includes(query))
      );
    }

    setFilteredBlogs(result);
  }, [activeCategory, activeTag, searchQuery, blogs]);

  // Featured blog is the most recent published one
  const featuredBlog: Blog | undefined =
    blogs.length > 0
      ? [...blogs]
          .filter((blog) => blog.published)
          .sort(
            (a, b) =>
              new Date(b.publishedAt || b.createdAt).getTime() -
              new Date(a.publishedAt || a.createdAt).getTime()
          )[0]
      : undefined;

  // Loading state - only skeleton, no text
  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        {/* Skeleton for Hero Section */}
        <div className="border-b border-gray-100">
          <Wrapper className="max-w-6xl mx-auto px-4 py-20">
            <div className="max-w-3xl mt-16 mx-auto">
              {/* Title skeleton */}
              <div className="bg-gray-200 h-14 w-2/3 mx-auto rounded animate-pulse mb-4"></div>

              {/* Subtitle skeleton */}
              <div className="bg-gray-200 h-6 w-full sm:w-3/4 mx-auto rounded animate-pulse mb-10"></div>

              {/* Search bar skeleton */}
              <div className="max-w-xl mx-auto">
                <div className="bg-gray-200 h-12 w-full rounded-lg animate-pulse"></div>
              </div>
            </div>
          </Wrapper>
        </div>

        <Wrapper className="max-w-6xl mx-auto px-4 py-12">
          {/* Category filters skeleton */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="bg-gray-200 h-10 w-24 rounded-full animate-pulse"
              ></div>
            ))}
          </div>

          {/* Featured Article skeleton */}
          <div className="mb-16">
            {/* Title skeleton */}
            <div className="bg-gray-200 h-8 w-48 rounded animate-pulse mb-8"></div>

            {/* Featured article card skeleton */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
              <div className="flex flex-col md:flex-row">
                {/* Image area */}
                <div className="md:w-1/2 h-64 md:h-auto bg-gray-200 animate-pulse"></div>

                {/* Content area */}
                <div className="md:w-1/2 p-8">
                  <div className="bg-gray-200 h-8 w-5/6 rounded animate-pulse mb-4"></div>
                  <div className="bg-gray-200 h-6 w-full rounded animate-pulse mb-2"></div>
                  <div className="bg-gray-200 h-6 w-5/6 rounded animate-pulse mb-2"></div>
                  <div className="bg-gray-200 h-6 w-4/6 rounded animate-pulse mb-6"></div>

                  {/* Author area */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gray-200 h-10 w-10 rounded-full animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="bg-gray-200 h-4 w-32 rounded animate-pulse"></div>
                      <div className="bg-gray-200 h-3 w-24 rounded animate-pulse"></div>
                    </div>
                  </div>

                  <div className="bg-gray-200 h-10 w-40 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Articles skeleton */}
          <div className="mb-16">
            {/* Title skeleton */}
            <div className="flex justify-between items-center mb-8">
              <div className="bg-gray-200 h-8 w-48 rounded animate-pulse"></div>
              <div className="bg-gray-200 h-6 w-24 rounded animate-pulse"></div>
            </div>

            {/* Blog grid skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-sm h-[420px]"
                >
                  {/* Image skeleton */}
                  <div className="bg-gray-200 h-56 animate-pulse"></div>

                  {/* Content skeleton */}
                  <div className="p-6">
                    {/* Date and read time */}
                    <div className="flex space-x-4 mb-3">
                      <div className="bg-gray-200 h-4 w-20 rounded animate-pulse"></div>
                      <div className="bg-gray-200 h-4 w-20 rounded animate-pulse"></div>
                    </div>

                    {/* Title */}
                    <div className="bg-gray-200 h-7 w-full rounded animate-pulse mb-3"></div>

                    {/* Summary */}
                    <div className="bg-gray-200 h-5 w-full rounded animate-pulse mb-2"></div>
                    <div className="bg-gray-200 h-5 w-5/6 rounded animate-pulse mb-4"></div>

                    {/* Author and read more */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <div className="bg-gray-200 h-8 w-8 rounded-full animate-pulse"></div>
                        <div className="bg-gray-200 h-4 w-24 rounded animate-pulse"></div>
                      </div>
                      <div className="bg-gray-200 h-4 w-20 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section skeleton */}
          <div className="mb-16 border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-10">
                <div className="bg-gray-200 h-8 w-64 rounded animate-pulse mb-4"></div>
                <div className="bg-gray-200 h-5 w-full rounded animate-pulse mb-2"></div>
                <div className="bg-gray-200 h-5 w-5/6 rounded animate-pulse mb-6"></div>

                <div className="flex space-x-2">
                  <div className="bg-gray-200 h-12 flex-grow rounded animate-pulse"></div>
                  <div className="bg-gray-200 h-12 w-32 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="md:w-1/3 h-40 md:h-auto bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <div className="text-amber-500 text-5xl mb-4">!</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Empty state - No blogs
  if (blogs.length === 0) {
    return (
      <div className="bg-white min-h-screen">
        <div className="border-b border-gray-100">
          <Wrapper className="max-w-6xl mx-auto px-4 py-20">
            <div className="max-w-3xl mt-16 mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                CSS INFRATECH
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Insights on luxury living, architecture, and urban lifestyle
              </p>
            </div>
          </Wrapper>
        </div>

        <Wrapper className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-16 text-center">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">
              No articles yet
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We're working on creating amazing content. Check back soon for
              articles about luxury living, architecture, and urban lifestyle.
            </p>
            <div className="w-24 h-24 mx-auto mb-8 opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Minimal Hero Section */}
      <div className="border-b border-gray-100">
        <Wrapper className="max-w-6xl mx-auto px-4 py-20">
          <motion.div
            className="max-w-3xl mt-16 mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              CSS INFRATECH
            </motion.h1>

            <motion.p
              className="text-lg font-sans text-gray-600 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Insights on luxury living, architecture, and urban lifestyle
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-5 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </motion.div>
          </motion.div>
        </Wrapper>
      </div>

      <Wrapper className="max-w-6xl mx-auto px-4 py-12">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredBlog && (
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 inline-block border-b-2 border-amber-500 pb-1">
                Featured Article
              </h2>
            </div>

            <FeaturedBlogCard blog={featuredBlog} />
          </motion.section>
        )}

        {/* Latest Articles */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 inline-block border-b-2 border-amber-500 pb-1">
              Latest Articles
            </h2>

            <div className="text-gray-600">{filteredBlogs.length} articles</div>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-10 text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setActiveTag("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </motion.section>
      </Wrapper>
    </div>
  );
}
