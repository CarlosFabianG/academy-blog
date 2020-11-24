export const HeadPost = ({ meta, isBlogPost }) => (
    <>
      <h1 className={isBlogPost? 'great-title' :null} >{meta.title}</h1>
      <div className='details'>
      {
          isBlogPost? null: <p>{meta.description}</p>
      }  
        <span>{meta.date}</span>
        <span role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #ffa7c4;
          }
          .great-title {
              font-size: 2rem;
          }
          .details span {
          color: hsla(0, 0%, 100%, 0.88);;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
            color: #bdbdbd;
          }
        `}
      </style>
    </>
  )
  