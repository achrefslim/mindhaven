# Tutorial: using MindHaven

## Part 1: Open the website

1. Download the project:

```bash
git clone https://github.com/achrefslim/mindhaven.git
```

Or click **Code** then **Download ZIP** on GitHub and unzip it.

2. Open the `website` folder and double click `login.html`. It opens in your browser.

For the best result, use **VS Code** with the **Live Server** extension: right click `login.html` and choose **Open with Live Server**.

## Part 2: Add the relaxation media (optional)

The relaxation page plays `website/media/meditation.mp3` and `website/media/ocean.mp4`. They are not in the repository because of copyright.

1. Download a free meditation track from [Pixabay Music](https://pixabay.com/music/) and a calm nature video from [Pixabay Videos](https://pixabay.com/videos/).
2. Rename them `meditation.mp3` and `ocean.mp4`.
3. Put them in `website/media/`.

## Part 3: Tour of the website

| Step | Page | What to do |
|:---:|---|---|
| 1 | Sign in | Fill the form and click **LOGIN**, or **SIGN UP** to create an account |
| 2 | Welcome | Use the top menu: Tests, Videos, Articles, Podcasts, Chat anonymously, Interactive Tools, Product, Contact |
| 3 | Interactive tools | Play the audio or video relaxation, write in the **Digital Journal** and save it, take a self assessment test |
| 4 | Community support | Write a message in the anonymous chat |
| 5 | Professional assistance | Enter the demo access (name `demo`, access code `12345`), then choose a professional and book an appointment, or find emergency numbers |
| 6 | Doctor dashboard | Add a patient, manage the patient list, add a score and view the patient report |
| 7 | Subscription | Compare the monthly, 3 month and annual plans |
| 8 | Contact | Send a message to the team |

## Part 4: Where the data is stored

The site has no server. The journal entry is saved in the **browser local storage**, so it stays on your computer and is lost if you clear the browser data. To see it: press **F12**, open **Application** then **Local Storage** and look for `journalEntry`.

## Part 5: Customise

| What | Where |
|---|---|
| Colors and fonts | The `.css` file with the same name as the page |
| Texts | The `.html` files |
| Behaviour of a page | The matching `.js` file (for example `interactive.js` for the journal) |
| Professionals list | `profassistant.html` |
| Subscription prices | `subscription.html` |

## Part 6: Troubleshooting

| Problem | Solution |
|---|---|
| Relaxation player is empty | Add the media files (Part 2) |
| Images missing | Keep all files in the `website` folder, do not move pages alone |
| Journal not saved | Do not use private browsing, local storage is cleared when the window closes |
