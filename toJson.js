const html = {
  "div": {
    "@class": "grid",
    "@id": "gamelist",
    "div": [
      {
        "@class": "game-box gameBoxSizePN",
        "figure": {
          "@class": "snip0018",
          "img": {
            "@class": "imgSizePN",
            "@src": "gamelist/image/pn/english/superwheel.png",
            "@alt": "Super Wheel"
          },
          "figcaption": {
            "div": {
              "h2": {
                "a": {
                  "@href": "#",
                  "@onclick": "launchGame('superwheel')",
                  "@class": "btn",
                  "#text": "PLAY NOW"
                }
              }
            }
          }
        },
        "h4": "Super Wheel"
      },
      {
        "@class": "game-box gameBoxSizePN",
        "figure": {
          "@class": "snip0018",
          "img": {
            "@class": "imgSizePN",
            "@src": "gamelist/image/pn/english/moneywheel.png",
            "@alt": "Money Wheel"
          },
          "figcaption": {
            "div": {
              "h2": {
                "a": {
                  "@href": "#",
                  "@onclick": "launchGame('moneywheel')",
                  "@class": "btn",
                  "#text": "PLAY NOW"
                }
              }
            }
          }
        },
        "h4": "Money Wheel"
      },
      {
        "@class": "game-box gameBoxSizePN",
        "figure": {
          "@class": "snip0018",
          "img": {
            "@class": "imgSizePN",
            "@src": "gamelist/image/pn/english/casinostudpoker.png",
            "@alt": "casinostudpoker"
          },
          "figcaption": {
            "div": {
              "h2": {
                "a": {
                  "@href": "#",
                  "@onclick": "launchGame('casinostudpoker')",
                  "@class": "btn",
                  "#text": "PLAY NOW"
                }
              }
            }
          }
        },
        "h4": "casinostudpoker"
      },
      {
        "@class": "game-box gameBoxSizePN",
        "figure": {
          "@class": "snip0018",
          "img": {
            "@class": "imgSizePN",
            "@src": "gamelist/image/pn/english/casinoholdem.png",
            "@alt": "casinoholdem"
          },
          "figcaption": {
            "div": {
              "h2": {
                "a": {
                  "@href": "#",
                  "@onclick": "launchGame('casinoholdem')",
                  "@class": "btn",
                  "#text": "PLAY NOW"
                }
              }
            }
          }
        },
        "h4": "casinoholdem"
      },
      {
        "@class": "game-box gameBoxSizePN",
        "figure": {
          "@class": "snip0018",
          "img": {
            "@class": "imgSizePN",
            "@src": "gamelist/image/pn/english/minibaccarat.png",
            "@alt": "Mini Baccarat"
          },
          "figcaption": {
            "div": {
              "h2": {
                "a": {
                  "@href": "#",
                  "@onclick": "launchGame('minibaccarat')",
                  "@class": "btn",
                  "#text": "PLAY NOW"
                }
              }
            }
          }
        },
        "h4": "Mini Baccarat"
      }
    ]
  }
}

const data = html.div.div.map((item) => {
  const { figure } = item
  const [,,,,image] = figure.img["@src"].split('/')
  const [code] = image.split('.')
  return {
    name: figure.img["@alt"],
    thumbnail: 'http://gsmd.336699bet.com/Lobby/' + figure.img["@src"],
    group: 'Table Games',
    code
  }
})

console.log(JSON.stringify(data))
