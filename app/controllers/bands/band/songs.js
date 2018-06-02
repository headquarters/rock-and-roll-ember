import Controller from '@ember/controller';
import Song from 'rock-and-roll-ember/models/song';
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

    saveSong(event) {
      event.preventDefault();
      let newSong = Song.create({ title: this.get('newSongName') });
      this.get('model.songs').pushObject(newSong);
      this.set('newSongName', '');
    },

    updateRating(song, rating) {
      const currentRating = song.get('rating');
      song.set('rating', currentRating === rating ? 0 : rating);
    }
  }
});
