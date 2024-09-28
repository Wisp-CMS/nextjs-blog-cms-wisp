
import { GetTagsResult } from "@wisp-cms/client";
import Link from "next/link";


export const ListTags = (tags: {tags: GetTagsResult}) => {
  return (
      <section className="antialiased">
        <div className="mx-auto max-w-screen-xl 2xl:px-0">
          <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">List tags: <strong>{tags.tags.pagination.totalTags}</strong></h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              tags.tags.tags.map(tag => (
                <Link key={tag.id} href={`/tag/${tag.name}`} className="flex items-center rounded-lg border transition-all duration-300 hover:translate-y-[-5px] border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{(tag.name).charAt(0).toUpperCase() + (tag.name).slice(1)}</span>
                </Link>
              ))
            }
            
          </div>
        </div>
      </section>
  );
};
