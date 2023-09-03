const bent = require('bent')
const getJSON = bent('json')
const ADJECTIVES_API_URL = "https://random-word-form.repl.co/random/adjective"
const NOUNS_API_URL = "https://raw.githubusercontent.com/JMoicano/falaportugues/main/res/job-nouns.json"

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

exports.trendAdjective = async (req, res) => {
    try {
        res.setHeader('Content-type', 'application/json')
        const adjectiveRes = await fetch(ADJECTIVES_API_URL)
        const adjective = await adjectiveRes.json()
        res.json(adjective)
      } catch (error) {
        res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
      }
}

exports.trendNoun = async (req, res) => {
    try {
        res.setHeader('Content-type', 'application/json')
        const nouns = await getJSON(NOUNS_API_URL)
        res.json([nouns.random()])
    } catch (error) {
        res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
    }
}

exports.newTrend = async (req, res) => {
    try {
        res.setHeader('Content-type', 'application/json')
        const adjectiveRes = await fetch(ADJECTIVES_API_URL)
        const adjective = await adjectiveRes.json()
        const nouns = await getJSON(NOUNS_API_URL)
        res.json([`${adjective[0]} ${nouns.random()}`])
      } catch (error) {
        res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
      }
}