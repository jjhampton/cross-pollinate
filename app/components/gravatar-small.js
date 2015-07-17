import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  size: 145,
  email: '',

  gravatarUrl: function() {
    // var email = "john_j_hampton@yahoo.com";
    var email = this.get('email');
    var size = this.get('size');

    var hash = CryptoJS.MD5(email).toString();
    console.log(hash);
    var imgURL = "http://gravatar.com/avatar/" + hash;
    return imgURL  + '?s=' + size;
  }.property('email', 'size')
});
