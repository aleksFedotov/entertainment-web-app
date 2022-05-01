import dbConnect from '../../../helpers/mongoDB';
import Entertainment from '../../../models/entertainment';

import Data from '../../../data.json';
import { IMovie } from '../../../@types/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const uploadData = async (item: IMovie) => {
  const entertainment = await Entertainment.create({
    item,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(Entertainment);
  await dbConnect();

  Data.forEach(async (item) => {
    console.log(item.thumbnail.trending?.small);
    await Entertainment.create({
      title: item.title,
      thumbnail: {
        trending: {
          small: item.thumbnail.trending?.small,
          large: item.thumbnail.trending?.large,
        },
        regular: {
          small: item.thumbnail.regular?.small,
          medium: item.thumbnail.regular?.medium,
          large: item.thumbnail.regular?.large,
        },
      },
      year: item.year,
      category: item.category,
      rating: item.rating,
      isBookmarked: item.isBookmarked,
      isTrending: item.isTrending,
    });
  });

  res.status(200).json({ name: 'John Doe' });
}
