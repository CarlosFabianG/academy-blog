import Link from 'next/link'

export default function Header() {
  return (
    <>
      <nav>
        <h1>My NS internship journey</h1>
        <div>
          <Link href='/'>
            <a>Blog</a>
          </Link>
          <Link href='/'>
            <a>About</a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          width: auto;
          padding: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        h1 {
          color: white;
          margin: 5% 20%;
        }
        nav a {
          margin-right: 2rem;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}







