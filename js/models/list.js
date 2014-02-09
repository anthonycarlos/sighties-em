Sighties.List = DS.Model.extend({
  name: DS.attr('string'),
  canEdit: DS.attr('boolean')
});

Sighties.List.FIXTURES = [
  {
    id: 1,
    name: "All Words",
    canEdit: false
  },
  {
    id: 2,
    name: "Casey's First",
    canEdit: true
  },
  {
    id: 3,
    name: "Casey's Second",
    canEdit: true
  },
  {
    id: 4,
    name: "Casey's Third",
    canEdit: true
  }
];


