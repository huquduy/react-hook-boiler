const json = [
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "TensorBetter50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/TensorBetter50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/TensorBetter50Hand_en.png",
              "@class": "img-responsive imgpreloader tensorbetter50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "TensorBetter50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Tens or Better 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "JokerPoker50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/JokerPoker50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/JokerPoker50Hand_en.png",
              "@class": "img-responsive imgpreloader jokerpoker50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "JokerPoker50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Joker Poker 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "JacksorBetter50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/JacksorBetter50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/JacksorBetter50Hand_en.png",
              "@class": "img-responsive imgpreloader jacksorbetter50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "JacksorBetter50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Jacks or Better 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "DoubleDoubleBonusPoker50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/DoubleDoubleBonusPoker50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/DoubleDoubleBonusPoker50Hand_en.png",
              "@class": "img-responsive imgpreloader doubledoublebonuspoker50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "DoubleDoubleBonusPoker50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Double Double Bonus Poker 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "DoubleBonusPoker50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/DoubleBonusPoker50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/DoubleBonusPoker50Hand_en.png",
              "@class": "img-responsive imgpreloader doublebonuspoker50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "DoubleBonusPoker50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Double Bonus Poker 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "DuecesWild50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/DuecesWild50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/DuecesWild50Hand_en.png",
              "@class": "img-responsive imgpreloader dueceswild50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "DuecesWild50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Deuces Wild 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "BonusPoker50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/BonusPoker50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/BonusPoker50Hand_en.png",
              "@class": "img-responsive imgpreloader bonuspoker50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "BonusPoker50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Bonus Poker 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "BonusDuecesWild50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/BonusDuecesWild50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/BonusDuecesWild50Hand_en.png",
              "@class": "img-responsive imgpreloader bonusdueceswild50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "BonusDuecesWild50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Bonus Deuces Wild 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "AllAmericanPoker50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/AllAmericanPoker50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/AllAmericanPoker50Hand_en.png",
              "@class": "img-responsive imgpreloader allamericanpoker50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "AllAmericanPoker50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "All American Poker 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  },
  {
    "@class": "gameinfo col-md-3 text-center col-slg-2 ng-scope col-md-5ths",
    "@ng-class": "DesktopClass",
    "@ng-repeat": "item in gamegroups[menuitem.Menu.GameTypeId] = (menuitem.Games | filter: search | filter: filterMore)",
    "@ng-mouseover": "focusOnThisGame($event)",
    "@ng-touch": "revertOpaque($event)",
    "@ng-mouseleave": "focusOut()",
    "@resizer": "",
    "div": {
      "@class": "blockGame",
      "@id": "AcesandEights50Hand",
      "#comment": "",
      "div": {
        "@ng-href": "",
        "@ng-click": "gameLaunch($event, item); $event.stopPropagation();",
        "@class": "game_cont_img",
        "div": [
          {
            "@bind-html-compile": "GenerateImageURL( item.KeyName, 'r')",
            "@class": "game-img",
            "img": {
              "@src": "https://app-test.insvr.com/img/rectangle/425/AcesandEights50Hand_en.png",
              "@lazy-img": "https://app-test.insvr.com/img/rectangle/425/AcesandEights50Hand_en.png",
              "@class": "img-responsive imgpreloader acesandeights50hand ng-scope",
              "@style": "margin:auto; width:100%",
              "@onerror": "this.onerror = null;",
              "@lazy-img-error": "/content/img/preload_rectangle.jpg",
              "@alt": "AcesandEights50Hand"
            }
          },
          {
            "@class": "bold customTitle",
            "div": {
              "@class": "flexcontainer",
              "div": {
                "@class": "item_name_title ng-binding",
                "@ng-href": "{{",
                "@game": "",
                "@preplayapp?brandgameid": " + item.BrandGameId}}",
                "@ng-click": "gameLaunchInInframe($event, item); $event.stopPropagation();",
                "@style": "display:inline",
                "@href": "{{",
                "#text": "Aces and Eights 50 Hand"
              }
            }
          },
          {
            "@class": "newOverlayIcon ng-hide",
            "@ng-show": "checkIfHot(item)",
            "i": {
              "@class": "glyphicon glyphicon-fire"
            },
            "span": {
              "@class": "newlabel",
              "#text": "NEW"
            }
          }
        ]
      }
    }
  }
]

console.log(JSON.stringify(json.map(item => {
  return {
    name: item.div.div.div[1].div.div['#text'],
    code: item.div['@id'],
    group: 'Slots',
    thumbnail: item.div.div.div[0].img['@src']
  }
})))

