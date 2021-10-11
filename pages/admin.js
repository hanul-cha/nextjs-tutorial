import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Admin() {
    const router = useRouter();
    function checkLogin() {
        Axios.get("/api/isLogin").then(res => {
            if(res.status === 200 && res.data.name) {
                //로그인이 되어있다면
            } else {
                //로그인이 안되어 있다면
                router.push("/login")
            }
        })
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return <>admin</>;
}