# Mike Oxlong's Credit Card Security™

<img src="./readmeAssets/app.png" />

Do you suspect that your credit card details have been stolen by a hacker? Well look no further, because this piece of generic software will solve all your questions - from whether life is a simulation to where you want to eat tonight.

## Features

-   **Dark theme**: Because even this shady piece of software has some standards.
-   **Accessible**: We, here at Mike Oxlong Technology (not a real company), leave no stone unturned.
-   **Made with Tauri**: Should be fast (fast enough)
-   **Detail verification**: So that you don't send any fake data (harmful for our business)
-   **Cross-Platform?**: Yes.
-   **Safe and Secure?**: Absolutely.
-   **Easter Eggs**

## Tech Stack

-   [React](https://reactjs.org)
-   [Tauri](https://tauri.studio)
-   [CSS modules](https://github.com/css-modules/css-modules)

## On a Serious note

-   This software is neither sending any data anywhere nor is it storing any data (exception is the data stored in state. Refer to the [Privacy Concerns](#privacy-concerns) section for more info).
-   Data verification:
    -   Credit card number is being checked with the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).
    -   Expiry date is being checked via regex.
-   Unfortunately, the Mike Oxlong company does not exist (yet).
-   Although it is not sending or storing any data, it is just a joke application and should only be taken as a joke. This is not meant to be a commercial product.
-   For further privacy related concerns, refer [here](#privacy-concerns).

## How to Use

Download the executable files (`.msi` for Windows; `.deb`, `.AppImage` for Linux and `.app`, `.dmg` for Apple) from the releases section and launch the app.

## Clone and install

```sh
git clone https://github.com/AdityaBhattacharya1/totally-legit-card-checker.git

cd ./totally-legit-card-checker
npm install

# Run in dev mode

# start the react frontend
npm start
# start the tauri webview app
npm run tauri dev

# Run in prod mode
npm run tauri build
```

## Privacy Concerns

**Data Stored**\
For the error page, the data is being stored in [state](https://reactjs.org/docs/state-and-lifecycle.html). This state data will be cleared as soon as the page is refreshed or the app is closed. Apart from that, there is no database which the app is connected to. The database referred to in the app is **fictional**.

**Data Sent**\
None. No data is being sent anywhere. The app works offline just as well.

**Is this app really checking my credit card number for vulnerabilities?**\
Nope. This app is neither affiliated with any organisation nor is it consuming any API.

## Contributing

All contributions are welcome.

## License: MIT

MIT License

Copyright (c) 2021 Aditya Bhattacharya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Inspiration

[Inspired by this post](https://i.redd.it/l36rh43s9s061.jpg) and this [comment](https://www.reddit.com/r/ProgrammerHumor/comments/jyur11/nice_way_to_steal_credit_card/gd8ho5j/?utm_source=reddit&utm_medium=web2x&context=3).
