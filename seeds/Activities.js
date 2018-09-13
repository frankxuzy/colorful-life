exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('Activities').insert([
        {id: 1001, date: 20180412, hour: 21, activity: 'activity1', tag: 3},
        {id: 1002, date: 20180422, hour: 22, activity: 'activity2', tag: 4},
        {id: 1003, date: 20180423, hour: 1, activity: 'activity3', tag: 2},
        {id: 1004, date: 20180412, hour: 4, activity: 'activity1', tag: 3},
        {id: 1005, date: 20180422, hour: 3, activity: 'activity2', tag: 4},
        {id: 1006, date: 20180423, hour: 5, activity: 'activity3', tag: 2},
        {id: 1007, date: 20180412, hour: 7, activity: 'activity1', tag: 3},
        {id: 1008, date: 20180422, hour: 9, activity: 'activity2', tag: 4},
        {id: 1009, date: 20180423, hour: 11, activity: 'activity3', tag: 2},
        {id: 1010, date: 20180412, hour: 13, activity: 'activity1', tag: 3},
        {id: 1011, date: 20180422, hour: 14, activity: 'activity2', tag: 4},
        {id: 1012, date: 20180423, hour: 20, activity: 'activity3', tag: 2},
        {id: 1013, date: 20180412, hour: 15, activity: 'activity1', tag: 3},
        {id: 1014, date: 20180422, hour: 17, activity: 'activity2', tag: 4},
        {id: 1015, date: 20180423, hour: 18, activity: 'activity3', tag: 2},
        {id: 1016, date: 20180412, hour: 10, activity: 'activity1', tag: 3},
        {id: 1017, date: 20180422, hour: 19, activity: 'activity2', tag: 4},
        {id: 1018, date: 20180423, hour: 23, activity: 'activity3', tag: 2}
      ])
    })
}
