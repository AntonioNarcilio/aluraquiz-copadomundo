import db from '../../db.json';

export default function dbHandler(req, resp) {
  if (req.method === 'OPTIONS') {
    resp.status(200).end();
    return;
  }

  resp.setHeader('Access-Control-Allow-Credentials', true);
  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  resp.json(db);
}
