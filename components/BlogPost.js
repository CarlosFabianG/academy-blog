import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta}) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article className="blog-p">{children}</article>
      <style jsx>
        {`
          .blog-p {
            color: hsla(0, 0%, 100%, 0.88);
            line-height: 2;
          }
        `}
      </style>
    </>
  )
}
