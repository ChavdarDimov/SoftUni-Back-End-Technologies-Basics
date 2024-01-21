function calculateFruitCost(fruit, weightInGrams, pricePerKilogram) {

    const weightInKilograms = weightInGrams / 1000;
    const totalCost = weightInKilograms * pricePerKilogram;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}