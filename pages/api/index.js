export default function julio(request, response) {
    response.status(200).json({
        body:request.body,
        query: request.query,
        cookies:request.cookies,
        index: true,
    })
  }
  