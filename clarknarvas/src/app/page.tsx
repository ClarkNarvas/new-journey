import { Suspense } from 'react';
import Link from "next/link";
import getPosts from "../components/getPosts";
import PostPreviews from "../components/PostPreviews";
import Pagination from '@/components/pagination';
import Image from 'next/image';

export default async function Home() {

  
  const posts = await getPosts();

  return (
    <div class="container mx-auto">




    <div className="container-narrow">
      <Suspense fallback={<div>Loading...</div>}>
        <Pagination posts={posts} />
      </Suspense>
    </div>

    </div>
  );
}