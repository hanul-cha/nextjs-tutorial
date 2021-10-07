function Error({ statusCode }) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on sever`
                : "An error occurred on Client"
            }
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  };

  export default Error;

  /* 
  이 로직에서 404 오류까지도 커버가능하다.
  하지만 404같은 경로 에러 메세지는 statc으로 제공하는게 좋아
  커스텀 파일을 유지했음
  */