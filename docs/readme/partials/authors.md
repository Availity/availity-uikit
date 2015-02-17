{% _.each(authors, function(person) { %}
**{%= person.name %}**
+ [{%= person.email %}]({%= person.email %})
{% }); %}
