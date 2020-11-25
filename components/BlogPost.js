import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta}) {
  return (
    <div className="wrapper">
      <HeadPost meta={meta} isBlogPost />
      <article className="blog-p">{children}</article>
      <style jsx>
        {`
          .blog-p {
            color: hsla(0, 0%, 100%, 0.88);
            line-height: 2;
            font-size: 18px;
          }
          .wrapper {
            margin: 0 14%;
          }
        `}
      </style>
    </div>
  )
}
