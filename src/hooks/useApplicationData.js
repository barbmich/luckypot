import { useState, useEffect } from 'react';

export default function useApplicationData() {

  const [state, setState] = useState({

  });
  
  useEffect(() => {
    Promise.all([
      Promise.resolve(db.query(`SELECT * 
                                FROM events
                                WHERE owner_id = $1;
                                `, [userId])),
      Promise.resolve(db.query(`SELECT * 
                                FROM favorites 
                                WHERE user_id = $1;
                                `, [userId])),
      Promise.resolve(db.query(`SELECT *
                                FROM custom_recipes
                                WHERE user_id = $1;`
                                , [userId]))
    ])
      .then(all => {
        user["events"] = all[0].rows[0];
        user["favorites"] = all[1].rows[0];
        user["custom_recipes"] = all[2].rows[0];
        console.log(user);
            })
    })
}
