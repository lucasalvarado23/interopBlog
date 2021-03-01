const settings = {
  "name": "my-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Interop Technology",
      "description": "Check out these technology blogs to expand your business"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Marketing",
              "/category/marketing/"
            ],
            [
              "Recommendations",
              "/category/recommendations/"
            ],
            [
              "Web Security",
              "/category/web-security/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://interoptechnology.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
