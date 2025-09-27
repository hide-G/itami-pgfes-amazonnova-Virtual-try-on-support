# itami-pgfes-amazonnova-Virtual-try-on-support<br>
大阪駆動開発で、「kidsPGフェスいたみ2025 こどもプログラミングまつり」に参加した際に作成した2個のサポート用ミニプログラムです。<br>
These are two support mini-programs created by Osaka Drive Development when they participated in the "kidsPG Fes Itami 2025 Children's Programming Festival." <br>
https://kidspg.net/fes/

その際のAIコーディングは、Bedrock Engineerを使わせていただきました。<br>
For the AI ​​coding, I used Bedrock Engineer. <br>
https://github.com/aws-samples/bedrock-engineer

メインである撮影した画像を仮想試着(Virtual try-on)する機能は、GenAI Design Studioを使わせていただきました。<br>
Amazon Nova CanvasのVirtual try-onを気軽に試せるOSSなのでお勧めします。<br>
The main feature, the virtual try-on of photographed images, was created using GenAI Design Studio. <br>
I recommend this open-source tool, as it allows you to easily try out Amazon Nova Canvas's virtual try-on. <br>
https://github.com/aws-samples/sample-genai-design-studio

なお、AWS Generative AI Solution BoxからだとワンボタンでAWSにデプロイできるので非常に便利でした。<br>
Furthermore, using the AWS Generative AI Solution Box, you can deploy to AWS with just one button, which was extremely convenient.
https://aws-samples.github.io/sample-one-click-generative-ai-solutions/solutions/genai-design-studio/

## WebCameraShooting
<img width="957" height="475" alt="説明_1_Webカメラ撮影アプリ" src="https://github.com/user-attachments/assets/b5a062b2-2a71-44c4-9f47-3a5bfb9c8984" />
<br>
ローカルでこのhtmlをブラウザで開くと、パソコンに接続されているカメラを使うか確認が求められます。<br>
「撮影」ボタンをクリックすると、選択したカメラで撮影できます。<br>
「画像をダウンロード」ボタンをクリックすると、ローカルフォルダを指定して画像を保存できます。<br>

The UI is only available in Japanese.<br>
When you open this HTML page in a local browser, you'll be prompted to confirm whether you want to use a camera connected to your computer. <br>
Clicking the "Take Photo" button will take a photo with the selected camera. <br>
Clicking the "Download Image" button will allow you to specify a local folder to save the image. <br>

## A4SizePrinting
プリクラとして楽しめるように、シール状のA4用紙に印刷できるように指定した画像を並べるミニアプリです。使い方は画像を見ていただければわかると思います。<br>
<b>注意</b>
接続したプリンタとの相性もあるので、印刷ボタンを押した際にA4用紙1枚に収まるように、必ずプログラムの改修が必要です。<br>

This is a mini app that arranges images so that they can be printed on sticker-like A4 paper, allowing you to enjoy them as Purikura. Please take a look at the image to see how to use it. <br>
<b>Note</b>
Since compatibility with the connected printer is important, you must modify the program so that the print output fits onto a single A4 sheet of paper when you press the print button. <br>

<img width="943" height="473" alt="説明_2_A4 4分割シール印刷_1" src="https://github.com/user-attachments/assets/92b77318-14e4-482b-bd1e-5693c742d0f1" />
<br>
<img width="954" height="479" alt="説明_2_A4 4分割シール印刷_2" src="https://github.com/user-attachments/assets/116b4ae0-7500-4049-9434-80954974597d" />
<br>
<img width="950" height="478" alt="説明_2_A4 4分割シール印刷_3" src="https://github.com/user-attachments/assets/79859317-637f-41c9-8470-f1a3604026d9" />
<br>
<img width="951" height="476" alt="説明_2_A4 4分割シール印刷_4" src="https://github.com/user-attachments/assets/a5cfaf4c-fd52-4fad-8f67-cbd0a606fe29" />
<br>

