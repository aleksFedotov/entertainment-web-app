import dbConnect from '../../../helpers/mongoDB';
import Entertainment from '../../../models/entertainment';

import Data from '../../../data.json';
import { IMovie } from '../../../@types/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const uploadData = async (item: IMovie) => {
  const entertainment = await new Entertainment({
    item,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  Data.forEach(async (item) => {
    console.log(item);
  });

  res.status(200).json({ name: 'John Doe' });
}
