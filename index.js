const a = "Kiran Parajuli"

/**
 * @description: The replaceAll function is only available from node v15
 * we're currently using node v14.x for the project, see package.json -> engines
 * but still the linter is not complaining about the usage of replaceAll
 */
console.log(a.replaceAll(" ", "_"))
