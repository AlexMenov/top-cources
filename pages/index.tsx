import { GetStaticProps } from 'next'
import axios from "axios";
import { withLayOut } from "../components/LayOut/LayOut"
import { RootObject } from '../interfaces/main';
function Home({ mainCourses, firstCategory }: MainData) {
  return (
    <ul>
      {mainCourses?.map((element) => <li key={element._id.secondCategory}>{element._id.secondCategory}</li>)}
    </ul>
  )
}

export default withLayOut(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: mainCourses } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", { firstCategory })

  return {
    props: {
      mainCourses,
      firstCategory
    }
  }
}


export interface MainData extends Record<string, unknown> {
  mainCourses: RootObject[],
  firstCategory: number
}