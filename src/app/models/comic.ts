export interface IComic {
  id: number,
  title: string,
  issueNumber: number,
  variantDescription: string,
  description: string,
  resourceURI: string,
  modified: string,
  creators: {
    items: [
      {
        resourceURI: string,
        name: string,
        role: string
      }
    ],
  },
  stories: {
    available: number,
    collectionURI: string,
    items: [
      {
        resourceURI: string,
        name: string,
        type: string
      }
    ],
    returned: number,
  },
  thumbnail: {
    path: string,
    extension: string,
  },
  thumbnailURL?: string
}
