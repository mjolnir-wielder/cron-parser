const displayErrorAndExit = (error) => {
    console.error(error);
    process.exit(1);
}

module.exports = {
    displayErrorAndExit: displayErrorAndExit
}