import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingSong: false,
  newSongName: '',

  isAddButtonDisabled: empty('newSongName'),

  actions: {
    addSong() {
      this.set('isAddingSong', true);
    },

    cancelAddSong() {
      this.set('isAddingSong', false);
    },

    async saveSong(event) {
      event.preventDefault();
      let band = this.get('model');
      let newSong = this.get('store').createRecord('song', {
        title: this.get('newSongName'),
        band
      });
      await newSong.save();
      this.set('newSongName', '');
    },

    updateRating(song, rating) {
      const currentRating = song.get('rating');
      song.set('rating', currentRating === rating ? 0 : rating);
    }
  }
});
