async function main () {
  try {
    const video = document.querySelector('#video')
    const button = document.querySelector('#button')
    const image = document.querySelector('#image')
    const downloadButton = document.querySelector('#downloadButton')
    const formatSelect = document.querySelector('#formatSelect')

    // カメラのストリームを取得
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user', // フロントカメラ
        // facingMode: 'environment', // バックカメラ（モバイル向け）
      },
      audio: false,
    })

    video.srcObject = stream

    const [track] = stream.getVideoTracks()
    const settings = track.getSettings()
    const {width, height} = settings

    let capturedDataUrl = null // 撮影した画像のDataURLを保存

    // 撮影ボタンのクリックイベント
    button.addEventListener('click', event => {
      const canvas = document.createElement('canvas')
      canvas.setAttribute('width', width)
      canvas.setAttribute('height', height)

      const context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, width, height)

      // 選択された形式で画像を生成
      const format = formatSelect.value
      if (format === 'png') {
        capturedDataUrl = canvas.toDataURL('image/png')
      } else if (format === 'jpeg') {
        // JPEG の場合は品質を指定（0.9 = 90%の品質）
        capturedDataUrl = canvas.toDataURL('image/jpeg', 0.9)
      } else if (format === 'webp') {
        // WebP 形式もサポート（ブラウザによってはサポートされない場合がある）
        capturedDataUrl = canvas.toDataURL('image/webp', 0.9)
      }

      image.setAttribute('src', capturedDataUrl)
      
      // ダウンロードボタンを有効化
      downloadButton.disabled = false
    })

    // ダウンロードボタンのクリックイベント
    downloadButton.addEventListener('click', event => {
      if (!capturedDataUrl) return

      // ダウンロード用のリンクを作成
      const link = document.createElement('a')
      const format = formatSelect.value
      const timestamp = new Date().toISOString().replace(/[:]/g, '-').split('.')[0]
      link.download = `capture_${timestamp}.${format}`
      link.href = capturedDataUrl
      
      // クリックイベントを発火してダウンロード
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })

  } catch (err) {
    console.error('カメラへのアクセスエラー:', err)
    alert('カメラにアクセスできませんでした。ブラウザの設定でカメラへのアクセスを許可してください。')
  }
}

main()