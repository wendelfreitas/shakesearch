// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getTitles } from 'utils/helpers/get-titles';
import { getSonnets } from 'utils/helpers/get-sonnets';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    fs.readFile(
      path.resolve(__dirname, '../../../../completeworks.txt'),
      'utf8',
      (err, data) => {
        const lines = getContentsSanitized({ data });
        const titles = getTitles({ lines });
        const sonnets = getSonnets({ lines });

        res.status(200).json({
          titles,
          sonnets,
        });
      }
    );

    // console.log(data);
  } catch (err) {
    console.error(err);

    res.status(400).json({ error: 'Something went wrong' });
  }
}
