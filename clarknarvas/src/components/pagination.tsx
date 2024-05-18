// components/Pagination.tsx
'use client';

import { useState } from 'react';
import PostPreviews from './PostPreviews';
import { PostMetadata } from '../postMetadata';

interface PaginationProps {
  posts: PostMetadata[];
}

export default function Pagination({ posts }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Calculate the index of the first and last post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Create page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previews = currentPosts.map((post) => (
    <PostPreviews key={post.slug} {...post} />
  ));

  return (
    <div>
      <div>{previews}</div>
      <div className="pagination text-center">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? 'm-1 pl-3 pr-3 pt-1 pb-1  bg-cnprimary font-bold text-white ' : 'm-1 pl-3 pr-3 pt-1 pb-1 '}
          >
            {number}
          </button>
        ))}
      </div>

    </div>
  );
}
