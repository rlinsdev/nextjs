import style from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await result.json();
  return {
    props:{ ninjas: data }
  }
}

const Ninja = ({ ninjas }) => {
  return ( 
    <div>
      <h1>Ninjas!</h1>
      { ninjas.map(ninja => (        
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={ style.single }>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      )) }
    </div>
   );
}
 
export default Ninja;