Sighties.List = DS.Model.extend({
  name: DS.attr('string'),
  canEdit: DS.attr('boolean'),
  cards: DS.hasMany('card', { async: true })
});

Sighties.List.FIXTURES = [
  {
    id: '1',
    name: "All Words",
    canEdit: false,
    cards: ['1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009', '1010']
  },
  {
    id: '2',
    name: "Casey's First",
    canEdit: true,
    cards: ['1001', '1002', '1003']
  },
  {
    id: '3',
    name: "Casey's Second",
    canEdit: true,
    cards: ['1004', '1005', '1006']
  },
  {
    id: '4',
    name: "Casey's Third",
    canEdit: true,
    cards: ['1007', '1008', '1009', '1010']
  }
];


