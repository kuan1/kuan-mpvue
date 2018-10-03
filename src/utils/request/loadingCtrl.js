export default {
  count: 0,
  show() {
    this.count += 1
    if (!count) {
      my.showLoading()
    }
  },
  close() {
    this.count -= 1
    if (this.count <= 0) {
      my.hideLoading()
    }
  }
}