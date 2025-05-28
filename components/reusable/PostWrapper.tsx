import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Banner from './Banner';

const PostWrapper = ({ textContent }: { textContent: string }) => {
  return (
    <div className='min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 xl:px-66'>
      <Banner  />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: props => (
            <h1 className='text-3xl font-bold mt-5 pb-3' {...props} />
          ),
          h2: props => (
            <h2 className='text-2xl font-semibold mt-4 pb-2' {...props} />
          ),
          h3: props => (
            <h3 className='text-xl font-medium mt-4 pb-2' {...props} />
          ),
          p: props => <p className='my-1  leading-relaxed' {...props} />,
          ul: props => <ul className='list-disc list-inside pb-4' {...props} />,
          ol: props => (
            <ol className='list-decimal list-inside pb-4' {...props} />
          ),
          li: props => <li className='mb-1' {...props} />,
          a: props => <a className='underline' {...props} />,

          table: props => (
            <table
              className='border-collapse border border-[var(--border-color)] w-full'
              {...props}
            />
          ),
          th: props => (
            <th
              className='border border-[var(--border-color)] px-2 py-1'
              {...props}
            />
          ),
          td: props => (
            <td
              className='border border-[var(--border-color)] px-2 py-1'
              {...props}
            />
          )
        }}
      >
        {textContent}
      </ReactMarkdown>
    </div>
  );
};

export default PostWrapper;
