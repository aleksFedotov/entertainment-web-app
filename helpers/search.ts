import Data from '../data.json';
import { IMovie } from '../@types/types';

export const search = (category: string, serchQuery: string): IMovie[] | [] => {
  let searchRes = [];

  if (category === 'All') {
    searchRes = Data.filter((item) =>
      item.title.toLowerCase().includes(serchQuery.toLowerCase())
    );
  } else if (category !== 'Bookmarked') {
    console.log('other');
    searchRes = Data.filter(
      (item) =>
        item.category === category &&
        item.title.toLowerCase().includes(serchQuery.toLowerCase())
    );
  } else {
    console.log('book');
    searchRes = Data.filter(
      (item) =>
        item.isBookmarked === true &&
        item.title.toLowerCase().includes(serchQuery.toLowerCase())
    );
  }

  return searchRes;
};
