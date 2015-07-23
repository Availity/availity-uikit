{% _.each(contributors, function(person) { %}
**{%= person.name %}**
+ [{%= person.email %}]({%= person.email %})
{% }); %}
