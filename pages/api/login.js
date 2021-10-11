export default function login(req, res) {
  if(req.method === "POST") {
    //쿠키생성
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "ok" })
  }
}
