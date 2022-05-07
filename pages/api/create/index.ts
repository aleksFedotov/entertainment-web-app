import dbConnect from '../../../helpers/mongoDB';
import Entertainment from '../../../models/entertainment';

// import Data from '../../../data.json';
// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await dbConnect();

//   Data.forEach(async (item) => {
//     await Entertainment.create({
//       title: item.title,
//       thumbnail: {
//         trending: {
//           small: item.thumbnail.trending?.small,
//           large: item.thumbnail.trending?.large,
//         },
//         regular: {
//           small: item.thumbnail.regular?.small,
//           medium: item.thumbnail.regular?.medium,
//           large: item.thumbnail.regular?.large,
//         },
//       },
//       year: item.year,
//       category: item.category,
//       rating: item.rating,
//       isBookmarked: item.isBookmarked,
//       isTrending: item.isTrending,
//     });
//   });

//   res.status(200).json({ msg: 'DB created' });
// }
