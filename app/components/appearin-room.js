import Ember from 'ember';
import AppearInSDK from "npm:appearin-sdk";

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['problem-room-container'],
  isRoomTriggered: null,
  addRoomToDom : function() {
    if (this.get('isRoomTriggered')) {
      $('.problem-room-container').addClass('problem-room-container-show');
      var appearin = new AppearInSDK();
      var isWebRtcCompatible = appearin.isWebRtcCompatible();
      if (isWebRtcCompatible) {
        // this.set('isVisible', true);
        var iframe = document.getElementById("appearin-room");
        var roomName = "cross-pollinate-" + this.get('problem.name');
        appearin.addRoomToIframe(iframe, roomName);
        document.getElementById('appearin-room').scrollIntoView();
      }
    }
  }.observes('isRoomTriggered')
});
