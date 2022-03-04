const db = require ('./connection');
const { Exercise, Meditation, Nutrition } = require('../models');

db.once('open', async () => {
    await Exercise.deleteMany();

    const exercise = await Exercise.insertMany([
        {
            title: 'Run',
            description: 'Run Faster',
            image: 'running.jpg'
        },
        {   title: 'Lifting',
            description: 'Lift more',
            image: 'lifting.jpg'
        },
        {
            title: 'Swimming',
            description: 'Swim farther',
            image: 'swim.jpg'
        }
    ]);
    console.log('exercise seeded');
    await Meditation.deleteMany();
    const meditation = await Meditation.insertMany([
        {
            title: 'Breathe',
            description: 'Focus on breathing',
            image: 'breathe.jpg'
        },
        {   title: 'Mindfulness',
            description: 'Be mindful of thoughts',
            image: 'mindful.jpg'
        },
        {
            title: 'Metta',
            description: 'Mindful of others',
            image: 'metta-practice.jpg'
        }
    ]);

    console.log('meditation seeded')
    await Nutrition.deleteMany();
    const nutrition = await Nutrition.insertMany([
        {
            title: 'Diet',
            description: 'Loose weight',
            image: 'diet.jpg'
        },
        {
            title: 'High Protein',
            description: 'Build muscle',
            image: 'protein.jpg'
        },
        {
            title: 'Seven Elements of nutriton',
            description: 'Protein, Fat, Carbs, Vitamins, Minerals, Fiber, Water',
            image: 'nutrition-elements.jpg'
        }
    ])

    console.log('nutrition seeded');

    process.exit();

});