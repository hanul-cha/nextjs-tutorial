import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
    const router = useRouter();

    if(router.isFallback) {
        return(
            <div style={{ padding: "100px 0" }}>
                <Loader active inline="centered">
                    Loading
                </Loader>
            </div>
        )
    }


    return (
        <>
        {item && (
            <>
            <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description}></meta>
            </Head>
            {name} 환경입니다
            <Item item={item} />
            </>
        )}
        </>
    );
};

export default Post;

export function getStaticPaths() {
    return {
        paths: [
            { params: { id: "740" } }, //정적으로 생성해줄 라우터들을 나열
            { params: { id: "730" } },
            { params: { id: "729" } },
        ],
        fallback: true, // 이부분에 false가 들어가면  params에 할당 안된것들은 연결을 안시켜줌(404 error)
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
        item: data,
        name: process.env.name
        },
    };
}

/*
fallback 이 true일때
params외에 경로에선 처음에 ssr처럼 빈화면으로 빌드되고 json 형식으로 
페이지를 빌드해줌 이후 같은경로로 진입하면 html이 미리 생성되 있던것처럼 
빠르게 보여진다
 */