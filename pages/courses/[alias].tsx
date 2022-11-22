import { GetStaticProps, GetStaticPropsContext } from 'next'
import axios from "axios";
import { withLayOut } from '../../components/LayOut/LayOut';
import { TopPageModel } from '../../interfaces/product';
import { RootObject } from '../../interfaces/main';
import { ParsedUrlQuery } from 'querystring';
function Home({ mainCourses, firstCategory }: MainData) {
    return (
        <ul>
            {mainCourses?.map((element) => <li key={element._id.secondCategory}>{element._id.secondCategory}</li>)}
        </ul>
    )
}

export default withLayOut(Home);

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    const firstCategory = 0;
    const { data: mainCourses } = await axios.post<RootObject[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", { firstCategory })
    const { data: coursePage } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias)

    return {
        props: {
            mainCourses,
            firstCategory,
            coursePage
        }
    }
}

export interface MainData extends Record<string, unknown> {
    mainCourses: RootObject[],
    firstCategory: number
}

