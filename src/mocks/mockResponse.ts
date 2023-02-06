import { setupWorker, rest } from 'msw'
import { members } from './data'

interface ILoginRequestBody {
  email: string
  password: string
}

interface ILoginResponseBody {
  token: string
}

const worker = setupWorker(
  rest.post<ILoginRequestBody, ILoginResponseBody>('api/login', (req, res, ctx) => {
    const { email, password } = req.body    
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
  }),
  rest.get('/api/member/list', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json([...members])
    )
  }),
  rest.get('/api/member/filter', (req, res, ctx) => {    
    const filterBy = req.url.searchParams.get('query')   

    switch (filterBy) {
      case 'amit': {
        const filteredMembers = members.filter(obj => {
          return obj.cardNo === 145
        })
        return res(
          ctx.status(200),
          ctx.json([...filteredMembers])
        )
      }
      case 'biren': {
        const filteredMembers = members.filter(obj => {
          return obj.cardNo === 147
        })
        return res(
          ctx.status(200),
          ctx.json([...filteredMembers])
        )
      }
      case 'shriya': {
        const filteredMembers = members.filter(obj => {
          return obj.cardNo === 150
        })
        return res(
          ctx.status(200),
          ctx.json([...filteredMembers])
        )
      }
      case 'meena': {
        const filteredMembers = members.filter(obj => {
          return obj.cardNo === 155
        })
        return res(
          ctx.status(200),
          ctx.json([...filteredMembers])
        )
      }
      case 'uday': {
        const filteredMembers = members.filter(obj => {
          return obj.cardNo === 160
        })
        return res(
          ctx.status(200),
          ctx.json([...filteredMembers])
        )
      }
      default: {
        return res(
          ctx.delay(1000),
          ctx.status(200),
          ctx.json([...members])
        )
      }
    }
  })
)

worker.start()
  .catch(err => { console.log(err) })
  .then(() => { console.log('this will succeed') })
