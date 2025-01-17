# 🌐 LinkLite - URL Shortener

LinkLite is a simple and efficient URL shortener web app, built with Node.js, Express, MongoDB, and vanilla HTML, CSS, and JavaScript. It allows users to shorten long URLs and provides an option to copy the shortened URL to the clipboard. The application supports generating unique short links and tracking visit history.

## ✨ Features

- 🔗 **Shorten URLs**: Convert long URLs into short, easy-to-share links.
- 📋 **Copy to Clipboard**: One-click button to copy the shortened URL to your clipboard.
- 📊 **Visit Tracking**: Tracks and stores the history of visits for each shortened URL.
- ⚙️ **Backend**: Built with Node.js, Express, and MongoDB for efficient data management.

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **URL Shortening**: Custom ID generation using the `shortid` package

## 🚀 Installation

Follow these steps to set up the LinkLite URL shortener locally.

### Prerequisites

- **Node.js** (>= v18.0.0)
- **MongoDB** installed locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database.

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/LinkLite.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd LinkLite
   ```

3. **Install the required dependencies:**
   ```bash
   npm install
   ```

4. **Set up the database connection:**
   - Open `connection.js` and set the correct MongoDB URI.
   - If using MongoDB Atlas, replace the default URI with your Atlas connection string.

5. **Start the development server:**
   ```bash
   npm start
   ```

   The application should now be running at [http://localhost:3000](http://localhost:3000).

## 📖 Usage

### Shorten a URL

1. Enter the long URL in the input field and click the **Shorten** button.
2. The application will generate a unique short URL that redirects to the long URL.

### Copy the Short URL

- After generating the short URL, click the **Copy** button to copy the shortened URL to your clipboard.

## 🤝 Contributing

If you would like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Any contributions are welcome!

## 📜 License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.

---
