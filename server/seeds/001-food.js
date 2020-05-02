
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {
          food: 'chocolate',
          safe: false,
          img: 'http://safefurdogs.com/img/chocolate.svg',
          summary: 'Chocolate is toxic to dogs and could cause a medical emergency depending on the amount ingested.',
          resources: [
            ['What to Do if Your Dog Eats Chocolate', 'https://www.akc.org/expert-advice/health/what-to-do-if-your-dog-ate-chocolate/', 'Chocolate is toxic to dogs, and depending on the type and amount of chocolate consumed and the weight of your dog, it could cause a serious medical emergency. If you know your dog has eaten chocolate, it’s important to monitor him for signs of toxicity'],
            ['4 Types of Chocolate, and How They Impact Dogs', 'https://www.petmd.com/dog/nutrition/4-types-chocolate-and-how-they-impact-dogs', 'While chocolate is a sweet treat that humans can enjoy, it’s something dogs should never have. Depending on body weight, even a small bite of chocolate can make a dog sick—in a large enough quantity, death is a possibility.'],
            ['Chocolate Poisoning in Dogs', 'https://vcahospitals.com/know-your-pet/chocolate-poisoning-in-dogs', 'Yes, chocolate is toxic to dogs (and cats!). While rarely fatal, chocolate ingestion can result in significant illness. Chocolate is toxic because it contains a chemical called theobromine, as well as caffeine. Theobromine is the predominant toxin in chocolate and is very similar to caffeine.'],
            ['What to do if Your Dog Eats Chocolate', 'https://www.vets-now.com/pet-care-advice/dog-eaten-chocolate/', 'No, dogs should not eat chocolate as it contains a chemical called theobromine, which is poisonous to dogs. Darker, purer varieties of chocolate tend to have the highest levels but it’s also found in milk chocolate. Is chocolate bad for dogs is a common question but the bottom line is dogs and chocolate don’t mix.']
          ]
        },
        {
          food: 'chicken',
          safe: true,
          img: 'http://safefurdogs.com/img/chicken.svg',
          summary: 'Chicken can be a great source of protein for dogs, and can even be substituted for or added to his or her regular meal.',
          resources: [
            ['Can Dogs Eat Chicken', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-chicken/', 'Considering how many dog foods contain it, it’s a safe bet that you can feed your dog chicken. In fact, it’s a good source of protein, and cooked chicken can even be substituted for or added to his regular meal.'],
            ['Healthy Food Checklist: Chicken for Dogs', 'https://www.petmd.com/dog/nutrition/healthy-foods-checklist-chicken-dogs', 'Chicken is considered a lean meat and it provides many benefits to our canine companions. Dogs need protein as a main energy source, and chicken provides that boost without a big calorie count.'],
            ['28 Foods Not To Feed Your Dog (And A List Of Those You Can)', 'https://www.caninejournal.com/foods-not-to-feed-dog/', 'https://www.caninejournal.com/foods-not-to-feed-dog/']
          ]
        },
        {
          food: 'eggs',
          safe: true,
          img: 'http://safefurdogs.com/img/eggs.svg',
          summary: 'The high protein content, essential amino acids, and fatty acids in eggs make them an excellent treat or dietary supplement for dogs.',
          resources: [
            ['Can Dogs Eat Eggs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-eggs/', 'In the past, dogs stole eggs from birds’ nests and ate them raw, shell and all. Today, most of us don’t let our dogs wander far and wide in search of unguarded nests, but eggs are still a good source of food for dogs, especially in homemade diets.'],
            ['Can Dogs Eat Eggs?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-eggs', 'Dogs can have eggs. In fact, they are a wonderful source of protein. And protein is essential for dogs. “Eggs are considered a gold standard because they’re almost the closest you can get to 100 percent complete, as far as protein goes.”']
          ]
        },
        {
          food: 'grapes',
          safe: false,
          img: 'http://safefurdogs.com/img/grapes.svg',
          summary: 'Grapes and their raisin counterpart are highly toxic to dogs.',
          resources: [
            ['Are Grapes Bad for Dogs?', 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-grapes/', 'Can dogs eat grapes? The answer (and this goes for raisins, too, which are just dried grapes) is easy: No. Grapes and raisins are known to be highly toxic to dogs, though research has yet to pinpoint exactly which substance in the fruit causes this reaction.'],
            ['Can Dogs Eat Grapes?', 'https://www.purina.com/articles/dog/nutrition/can-dogs-eat-grapes', 'If you’re wondering “Can dogs eat grapes?” the answer is a resounding no. Both grapes and raisins are bad for dogs. They can cause severe reactions and may even be fatal. Keep reading to find out why grapes and raisins aren’t good for dogs, learn the signs of toxicity and explore alternative treats for your pup.'],
            ['Grape and Raisin Poisoning in Dogs', 'https://www.petmd.com/dog/emergency/digestive/e_dg_grape_raisin_toxicity', 'Grape and raisin (dried grapes) toxicity is well documented in dogs.* Although the exact substance that causes the toxic reaction is not yet known, dogs should not eat grapes and raisins because even small amounts can prove to be fatally toxic for a dog.'],
            ['How Toxic Are Grapes for Dogs', 'https://www.petful.com/pet-health/how-toxic-are-grapes-for-dogs/', 'The type of grape doesn’t matter. It can be green, red, commercially grown or from your backyard. The source of the toxicity is unknown, but what is known is that dogs have become ill and died from ingesting grapes and raisins (dried grapes).']
          ]
        }
      ]);
    });
};
