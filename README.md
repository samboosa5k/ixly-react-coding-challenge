# React Developer Coding Challenge

This is a coding challenge for prospective front-end and full-stack developer applicants applying to Ixly. If you're unfamiliar with React, Facebook has put together a helpful tutorial that provides a quick introduction to the basics: https://reactjs.org/docs/hello-world.html

## Goal:

#### Build a simple React app that allows viewing and interacting with a grid of photos from Unsplash

- [ ] Fork this repo into your GitHub account. Keep it public until we have been able to review it.
- [ ] Use `create-react-app` to set up a basic single-page React application as shown here: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app. (NOTE: We will only focus on creating a single-page React application, so don't worry about the other sections on that page such as Next.js).
- [ ] Refer to the Unsplash API docs here to set up a developer account: https://unsplash.com/documentation.
- [ ] Display a grid of photos in your React app. Use the `GET /photos` endpoint from the Unsplash API to get a set of images.
- [ ] The grid must be responsive and adhere to the following layout:

  - 2 columns on small size screens (< 720px)
  - 3 columns on medium size screens (< 960px)
  - 4 columns on large size screens (> 960px)

- [ ] On the bottom of the page, more images can be requested with a `load more` button. This results in more images being added to the grid.
- [ ] When the user taps on a photo on the grid it should show the full photo in a full width lightbox popup with more information about the photo.
- [ ] The lightbox popup should be dismissible with a close button.

### Evaluation:

- [ ] The React app should build without errors (typically using `npm run build`). If there are necessary steps required to get it to compile, those should be covered in README.md.
- [ ] No crashes or bugs.
- [ ] App should operate as a single-page application, without the need for a custom back-end.
- [ ] Code is easily understood and communicative (eg. comments, variable names, etc).
- [ ] GitHub commit history is consistent, easy to follow and understand.
