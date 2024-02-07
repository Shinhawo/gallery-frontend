module.exports = {
  devServer: {
    proxy: {
      // api라는 주소로 시작할 시 target의 주소로 이동한다.
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
}