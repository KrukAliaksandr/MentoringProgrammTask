
class Happiness {
    constructor(physiologicNecessities = 10, safetyAndComfort = 9, familyAndFriends = 9, achievments = 5, selfExpression = 3) {
        this.physiologicNecessities = physiologicNecessities;
        this.safetyAndComfort = safetyAndComfort;
        this.familyAndFriends = familyAndFriends;
        this.achievments = achievments;
        this.selfExpression = selfExpression;
    }
    static getPrioritiesList(object) {
        const result = Object.entries(object).sort((a, b) => b[1] - a[1]);
        return result;
    }
}

const ourHappiness = new Happiness(1, 3, 6, 7, 1)
console.log(Happiness.getPrioritiesList(ourHappiness));
