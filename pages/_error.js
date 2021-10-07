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