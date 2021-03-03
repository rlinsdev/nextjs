import Link from 'next/link'
const NotFound = () => {
  return ( 
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>hat page can not be found.</h2>
      <p>Go back to <Link href='/'><a>Home page</a></Link> </p>
      
    </div>
   );
}
 
export default NotFound;