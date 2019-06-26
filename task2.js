function getSecondsFromDayStart(date) {
    return Math.imul(date.getHours(), 3600) + Math.imul(date.getMinutes(), 60) + date.getSeconds();
}
