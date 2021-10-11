export default function isLogin(req, res) {
  res.status(200).json({ name: res.cookies.a_name })
}
