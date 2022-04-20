export default interface ICast {
  character: {
    id: number
    image?: string
    name: string
    url: string
    _links: {
      self: {
        href: string
      }
    }
  }
  person: {
    birthday: string
    country: {
      code: string
      name: string
      timezone: string
    }
    deathday?: string
    gender: string
    id: 39258
    image: {
      medium: string
      original: string
    }
    name: string
    updated: number
    url: string
    _links: {
      self: {
        href: string
      }
    }
  }
  self: boolean
  voice: boolean
}
