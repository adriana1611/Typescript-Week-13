//API endpoint for fetching dog data

export const ENDPOINT = 'http://localhost:3000/dogs';

 //Typescript type for the dog object
export type Dogs = {
  id: number
  breed: string
  name: string
}