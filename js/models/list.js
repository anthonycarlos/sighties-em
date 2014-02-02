Sighties.List = DS.Model.extend({
  name: DS.attr('string'),
  isSelected: DS.attr('boolean'),
  canEdit: DS.attr('boolean')
});

Sighties.List.FIXTURES = [
  {
    id: 1,
    name: "All Words",
    isSelected: true,
    canEdit: false
  },
  {
    id: 2,
    name: "Casey's First",
    isSelected: false,
    canEdit: true
  },
  {
    id: 3,
    name: "Casey's Second",
    isSelected: false,
    canEdit: true
  },
  {
    id: 4,
    name: "Casey's Third",
    isSelected: false,
    canEdit: true
  }
];


