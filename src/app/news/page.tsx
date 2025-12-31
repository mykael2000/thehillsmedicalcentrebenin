'use client';

import Link from 'next/link';
import CTA from '@/components/sections/CTA';
import { newsArticles } from '@/lib/dummy-data';
import { formatDate } from '@/lib/utils';

export default function News() {
  return (
    <div>
      <section className="relative bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-gray-600 mb-6">• NEWS & ARTICLES</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Insights and updates from Hills Medical Centre
            </h1>
            <p className="text-lg leading-8 text-gray-600">
              Explore expert perspectives, health tips, and centre updates designed to help you stay informed and healthy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => {
              return (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = '/assets/hospital-front.jpg';
                      }}
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-green-100 text-green-700 text-xs font-medium px-3 py-1">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div>
                        <span>{article.author}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="text-gray-400">{article.readTime}</div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="#"
                        className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                      >
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}