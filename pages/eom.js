import styles from '../styles/EOM.module.css'
import { Toolbar } from '../components/toolbar'
import Image from 'next/image'

const EMO = ({ employee }) => {
  console.log(employee)
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee Of The Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <Image src={employee.image} alt='' />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
  )
  const employee = await apiResponse.json()

  return {
    props: {
      employee,
    },
  }
}

export default EMO
