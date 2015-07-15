import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('problem');
  },

  actions: {
    getResults: function() {
      var query;

      function escapeRegExp(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      query = escapeRegExp($('.index-search-input').val());

    //  this.store.findAll('problem').then(function(response) {
    //     return response.map(function(problem) {
    //       return [problem.get('id'), problem.get('name'), problem.get('tags'), problem.get('city'), problem.get('state'), problem.get('country')];
    //     });
    //   }).then(function(response){
    //     console.log("Problem searchables are", response);
    //     console.log("search query was", query);
    //     var matched = _.filter(response, function(problem){
    //       return _.contains(problem, query);
    //     });
    //     console.log(matched);
    //   });

      this.store.findQuery('problem', {
        where: {
          $or: [
            {name: {$regex: query}},
            // {tags: {$regex: query}},
            {city: {$regex: query}},
            {state: {$regex: query}},
            {country: {$regex: query}},
          ]
        }
      }).then(function(response) {
        console.log(response.content);
        response.content.forEach(function(element) {
          console.log(element._data.name);
        });
      });
    }
  }
});
