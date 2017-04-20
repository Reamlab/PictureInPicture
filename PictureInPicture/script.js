(function(){

function handleDOMContentLoaded(event) {
  if (document && document.body && document.body.children.length > 0)
    safari.self.addEventListener("message", handleMessage, true);
};

function handleMessage(event) {
  picInPic.setPictureInPicture();
}

class PictureInPicture {

  setPictureInPicture() {
    let video = this.getPlaingVideo()[0];
    video && this.toggleVideoMode(video);
  }

  toggleVideoMode(video) {
    if (video.webkitSupportsPresentationMode &&
        typeof video.webkitSetPresentationMode === "function")
      video.webkitSetPresentationMode(video.webkitPresentationMode ===
          'picture-in-picture' ? 'inline' : 'picture-in-picture');
  }

  isPlaying(video) {
    return !video.paused;
  }

  getPlaingVideo() {
    return this.items.filter(this.isPlaying);
  }

  get items() {
    return [...document.body.querySelectorAll('video')];
  }
}

let picInPic = new PictureInPicture();
document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
 
})();
