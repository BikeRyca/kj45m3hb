"use strict"

const SteamAccount = require("./steamaccount")

const manageDB = require("./database")

const database = manageDB.read()

database.map(credentials => {
  const { name, password, games, beOnline } = credentials

  const account = new SteamAccount(name, password, games, beOnline)
  console.log("[=] Start boosting")
  account
    .login()
    .then(() => account.boost())
    .finally(() => account.logoff())
})
