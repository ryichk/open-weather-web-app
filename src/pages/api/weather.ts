// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  const url = 'https://api.openweathermap.org/data/2.5/weather?lang=ja';
  const response = await axios.get(`${url}&appid=${API_KEY}&q=tokyo&units=metric`);
  res.status(200).json(response.data);
}
