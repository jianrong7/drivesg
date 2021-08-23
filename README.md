<h1 align="center">
  <img src="assets/icon.png" alt="DriveSG logo" title="DriveSG" align="center" height="100" />
  <br/>
  Welcome to DriveSG 👋
</h1>
<p align="center">Practice for your driving theory tests here! We offer up to <b>6 Basic Theory Tests</b> and <b>10 Final Theory Tests.</b> All done through a mobile application you can download on Google Play Store!
<br/><br/>
<a>
  <img alt="GooglePlay" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" width="150px"/>
</a>
</p>

## ⚡️ Quick start
1. [Download]() and install **DriveSG**.
2. Practice.
3. ?
4. Pass!

---
# Reflections 📝
> This is unrelated to how the app works but rather talks about how this app came about and what I used to build it.

## Why I started building this app

Simply put, I wanted to work on a project using my newly learnt React Native skills. At that time, I was also practicing for theory tests in Singapore. However, I realised that the current solutions were pretty limited. Therefore, I thought that this app would be a great combination of both worlds. I get to practice my frontend skills while helping out others who wanted to get their driving license.

## How I built it

I built this using React Native, through the Expo CLI. I have been learning frontend development for almost half a year now. When I heard that I could use my React skills to create a mobile app, I got very excited. However, after going through some tutorials, I realise the limitations of that but I decided that it was still good enough for my app, which was not going to be very complicated. I wanted to use it to showcase my skills after going through [The Odin Project](https://www.theodinproject.com/) and [Full Stack Open](https://fullstackopen.com/en/).

As for the backend, my knowledge was still pretty limited. I am quite confident using Firebase but I knew that I wanted to showcase other skills like building my own REST API using Express and MongoDB. At one point, I even considered GraphQL. However, I took a step back and I realised that they were not the right tools for the job. GraphQL was definitely overkill because I did not need to worry about over or underfetching. I only needed to fetch 50 questions and answers every time the user attempts a test. This gave me a huge dilemma because I could not decide whether to use a BaaS or create my own REST API. In the end, I chose Firebase mainly because of its simplicity but also because I realised this project could not showcase how I implemented CRUD into my own REST API.

## Problems I faced

One of the biggest problems I faced was extracting the text from images. Originally all my questions are in image format. This meant that I had to find a way to extract text from images. Naturally, Google told me to use some Optical Character Recognition (OCR) technology. Okay, my first thought was to go find a JS library that do just that. In the end, I used [Tesseract.js](https://tesseract.projectnaptha.com/). I thought the magical AI tools can help me extract my text perfectly. Boy, how wrong was I.

The text extracted had lots of empty spaces and gibberish because the text were sparse and their fonts were also inconsistent. I went to search up on how to improve the accuracy of my results and several suggestions pointed my to using OpenCV. I thought about diving down the rabbit hole of Artifical Intelligence, but I realised that was not my goal. My goal was to create a working prototype quickly and it did not need to be 100% accurate.

In the end, I used a very crude method of dividing all the images into several rectangles and used Tesseract.js to extract the text for me. The results, though not perfect, were much better.

Another problem I faced was trying to get the images from the questions. As some questions had images, I had to do a mass cropping of the images. I thought about using CropperJS but in the end I found a shorter workaround of using Photoshop's Automate Batch jobs. It did the trick after watching a tutorial video.

The final problem I faced was linking the images from Firebase Storage to my questions in Cloud Firestore. Unfortunately, Firebase Storage did not support NodeJS therefore, I could not easily link up both services. In the end, I found a workaround whereby I listed all the files in Firebase Storage and then used NodeJS to update the documents in Firestore with the image links.

## What I learnt

Using technology in real life isn't as straightforward as I thought. There are many problems that will pop up unexpectedly along the way. As much as possible, plan out the architecture of the project, but be mentally ready and flexible enough to learn new technologies (need not be libraries - could be Photoshop) to solve the problems at hand.

This project also taught me that one developer alone can actually complete a lot but it is also not the most ideal because I kept finding out that I needed a second opinion.

Lastly, the last 10% of the project took up 90% of my time. Things like gestures, making animations smooth, making the CSS perfect. These things take up the most time. Although they do not add to the core functionality of the app, they are still important because they massively improve user experience.

## What's next?

DriveSG is definitely not a complete product. There are still certain places that I will touch up here and there. But it is mostly usable and can be considered a Minimum Viable Product (MVP).

Like what Sheryl Sandberg said, "Done is better than perfect."

I am glad to be able to ship the app to production. The job is done, but it is far from perfect.