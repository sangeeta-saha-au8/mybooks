import { setupWorker, rest } from 'msw'

interface IRequestBody {
  email: string
  password: string
}

interface IResponseBody {
  token: string
}

const worker = setupWorker(
  rest.post<IRequestBody, IResponseBody>('/login', (req, res, ctx) => {
    const { email, password } = req.body
    console.log(req.body)
    const user = { email, password }

    switch (user.email + user.password) {
      case 'admin@gmail.comsimple': {
        return res(
          ctx.status(200),
          ctx.json({
            token: 'admin'
          })
        )
      }

      default: {
        return res(
          ctx.status(403),
          ctx.json({
            token: null
          })
        )
      }
    }
  })
)

worker.start()
  .catch(err => { console.log(err) })
  .then(() => { console.log('this will succeed') })
