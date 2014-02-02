Sighties.List = DS.Model.extend({
  name: DS.attr('string'),
  isSelected: DS.attr('boolean')
});

Sighties.List.FIXTURES = [
  {
    id: 1,
    name: "All Words",
    isSelected: true
  },
  {
    id: 2,
    name: "Casey's First",
    isSelected: false
  },
  {
    id: 3,
    name: "Casey's Second",
    isSelected: false
  },
  {
    id: 4,
    name: "Casey's Third",
    isSelected: false
  }
];


