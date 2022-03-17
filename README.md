# GramCam

## Description

GramCam is an application that provides a user with the ability to post, comment, and like photos with other users.

### User Story

- As a user, I want to be able to use a social platform to add, like, and comment Posts
- When you are NOT logged in, you should just be able to see the Post, caption and comments
- When you are logged in, you should be able to add comments, add a new post, like/dislike post.
- When you click on "My Profile", you should be able to see all the posts that you have created and delete the post

Repo: https://github.com/andrewyu22/GramCam

Link: https://gramcam1.herokuapp.com/

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Resources](#resources)

---

## Installation

1. "npm i" to install all required dependency on root folder
2. "npm run develop" to run the code on root folder

---

## Usage

### HomePage - Not Login

![Home](/client/src/Image/allpost.JPG)

### HomePage - Logged In

![Home-Loggedin](/client/src/Image/gramcam.JPG)

### Add a new post

Select an Image and add a caption and click "Add Post"

![newpost](/client/src/Image//newpost.JPG)

### Change Profile Picture

Choose a new image, by click "Choose File", Once you select the image you want to upload, click "Submit"

![changeProfilePicutre](/client/src/Image/update.JPG)

---

## License

No Licenses for this project!

---

## Contributing

No contribution information for this project!

---

## Tests

No Test for this project!

---

## Credits

- [Andrew Yu](https://www.github.com/andrewyu22)
- [Brady Libby](https://github.com/wyattlibby)
- [Mario Villaquiran](https://github.com/mariovillaquiran)

---

## Resources

### Front End

- HTML
- Material & Design Bootstrap v5
- React.js
- Firebase (Google Storage Only)
- UUID (Random ID to upload photo to Google Storage)

### Back End

- Node.js
- Javascript
- [express.js](https://www.npmjs.com/package/express)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express)
- [graphql](https://www.npmjs.com/package/graphql)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Mongoose](https://www.npmjs.com/package/mongoose)
