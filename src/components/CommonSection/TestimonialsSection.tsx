import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
      <div>
        <div className="flex gap-0.5 text-green-500">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
            {quote}
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">{author}</p>
        </div>
      </div>

      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
        &mdash; Michael Scott
      </footer>
    </blockquote>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Read trusted reviews from our customers
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi. Aliquid sunt
              tempore iste repellendus explicabo dignissimos placeat, autem
              harum dolore reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>

          <a
            href="#"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-600 px-5 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white md:mt-0"
          >
            <span className="font-medium"> Read all reviews </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Testimonial quote="Stayin' Alive" author="Michael Scott" />
          <Testimonial quote="Stayin' Alive" author="Michael Scott" />
          <Testimonial quote="Stayin' Alive" author="Michael Scott" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
