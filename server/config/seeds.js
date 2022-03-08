const db = require ('./connection');
const { Exercise, Meditation, Nutrition } = require('../models');

db.once('open', async () => {
    await Exercise.deleteMany();

    const exercise = await Exercise.insertMany([
        {
            title: 'Run',
            description: `Running will help you stay physically fit through cardio exercise. Enim eiusmod et ex cupidatat dolore adipisicing esse exercitation adipisicing nisi. Aliqua consectetur adipisicing occaecat minim pariatur id dolor ut. Et exercitation magna dolore proident sunt irure non exercitation culpa enim laboris aliqua commodo voluptate. Excepteur sunt magna anim ex est eu mollit dolor consectetur proident culpa. Enim in nulla fugiat cillum irure exercitation ut in consectetur.In quis irure dolore enim aliqua id. Lorem incididunt mollit Lorem est laboris officia excepteur incididunt proident aute. Laborum incididunt magna deserunt veniam velit laboris incididunt duis ex proident nisi. Aliquip veniam reprehenderit quis fugiat aliquip. Aute magna minim nulla deserunt cillum proident duis aliquip sunt fugiat non commodo minim esse. Aliqua incididunt consequat eu exercitation sit. Dolor officia ex occaecat ea occaecat eiusmod commodo ullamco sunt tempor magna Lorem elit.

Laboris sint do commodo officia sint sit qui laborum. Nisi Lorem est ad aliquip nostrud deserunt aliquip laboris non ullamco ex id reprehenderit. Minim dolor officia irure consequat non exercitation nulla in esse. Adipisicing amet amet et proident qui in ex laborum cupidatat eu. Irure aute adipisicing anim sunt.

Ullamco eu reprehenderit culpa culpa sunt in dolor excepteur do ex ex eiusmod ad. Dolore aliquip sunt consequat cupidatat. Minim dolor voluptate magna cupidatat dolor sunt amet enim labore eiusmod nostrud aliqua irure officia. Esse laborum eiusmod sit non occaecat dolor quis voluptate voluptate nostrud et et est. Consectetur do nisi magna incididunt id duis excepteur aliquip. Ipsum exercitation id laborum dolor nulla amet.

Pariatur eu proident et amet proident nulla pariatur sunt eiusmod elit. Nisi exercitation quis laborum ea qui ad eiusmod cillum. Exercitation ipsum elit consectetur esse ullamco exercitation labore ea.`,
            image: 'running.jpg'
        },
        {   title: 'Lifting Weights',
            description: `Lifting weights will build muscles, burn fat and improve heart health. Ad consectetur aute nostrud amet non. Esse qui adipisicing eiusmod eu duis nostrud voluptate veniam. Ea tempor nulla aliquip consectetur et excepteur anim veniam magna. Laboris aliquip nulla commodo labore culpa consectetur nulla ea fugiat elit. Et Lorem cupidatat elit labore pariatur esse ullamco qui excepteur consectetur fugiat consequat esse. Id qui enim consequat fugiat. Sunt in laborum cupidatat amet id ad ex adipisicing esse aliquip veniam quis dolore et. Nostrud excepteur ad aute voluptate consectetur est ut pariatur excepteur exercitation consequat aliquip consectetur. Anim aliqua tempor labore sint. Do enim consequat enim culpa ex tempor sint sunt voluptate. In anim Lorem minim id laboris do quis minim ad minim mollit. Elit fugiat ipsum sit minim do nisi et cillum. Do fugiat incididunt sunt labore irure magna officia cillum cupidatat velit duis.

Laborum consectetur exercitation ut est. Incididunt dolore reprehenderit occaecat ad culpa duis esse commodo ea pariatur ad dolore nisi dolor. Ut officia consequat occaecat id nisi duis pariatur aute voluptate tempor ad.

Sit est veniam tempor minim sint tempor amet excepteur ex est cillum. Id ut tempor cupidatat reprehenderit duis nulla. Do cupidatat exercitation velit dolore est ea laborum fugiat consequat pariatur. Commodo ex adipisicing aliqua nulla id ipsum incididunt.`,
            image: 'lifting.jpg'
        },
        {
            title: 'Swimming',
            description: `Swimming builds endurance, strength and cardiovascular fitness. Cillum aliqua ea ullamco in reprehenderit amet commodo aute in minim. Ut eu incididunt quis cupidatat quis occaecat tempor culpa exercitation. Fugiat labore non reprehenderit elit eu ullamco cillum labore ex nisi sit ea. Aliquip sint fugiat in Lorem aliqua enim ut aliquip proident Lorem ullamco. Aliquip consectetur velit consequat voluptate esse ex pariatur magna. Qui esse voluptate ipsum ut ad adipisicing occaecat culpa sint magna. Elit proident nulla esse nisi anim. Velit eu eiusmod incididunt dolor culpa proident adipisicing sunt sit esse adipisicing. Nisi aute adipisicing elit Lorem. Ex quis eu Lorem magna est Lorem. Laboris aliquip occaecat adipisicing exercitation qui sit voluptate duis anim consequat amet dolore. Quis commodo dolore aute Lorem. Incididunt sit dolor nulla sunt. Nisi commodo enim aliqua fugiat.

Duis exercitation proident mollit ea. Quis do consequat et labore enim voluptate Lorem deserunt aute duis aute commodo enim fugiat. Ipsum fugiat dolor labore veniam sint aliqua commodo laboris irure dolor ad aliquip.

Duis labore ex ex ad ut proident magna eu. Laborum excepteur est proident sunt dolore anim veniam nulla laborum deserunt laborum duis nisi ullamco. Magna do cupidatat ullamco ullamco et amet ut incididunt dolore elit. Labore do consequat commodo Lorem quis cupidatat Lorem duis irure irure consequat id proident ea. Voluptate do pariatur officia sint eu nostrud nisi dolor aliquip fugiat occaecat ut officia. Adipisicing veniam laborum officia nostrud.`,
            image: 'swim.jpg'
        }
    ]);
    console.log('exercise seeded');
    await Meditation.deleteMany();
    const meditation = await Meditation.insertMany([
        {
            title: 'Breath',
            description: `Simple breathing techniques can help you reduce stress levels, lower heart rate and reduce blood pressure. Ea minim proident adipisicing nisi Lorem. Do voluptate cillum eiusmod minim velit reprehenderit. Aliqua magna occaecat culpa qui officia id excepteur ipsum irure sit. Esse labore laborum velit mollit. Dolor pariatur commodo est id elit anim ea quis officia velit nulla dolore. Nostrud non mollit do anim incididunt ea sunt elit. Nostrud aliquip anim id id cillum enim laborum minim ipsum do elit ex. Velit est ad duis Lorem quis reprehenderit consequat. Cupidatat incididunt ad id in ad magna nisi esse nostrud. Ex velit cillum aute aliquip do occaecat. Lorem eiusmod ex ad do labore ut id incididunt nulla culpa consectetur aliquip et.

Aliquip minim laborum ut fugiat nisi fugiat amet in veniam ullamco officia incididunt nisi. Nulla ut nulla officia cupidatat fugiat amet excepteur consectetur ullamco eu magna. Aliqua adipisicing id ad aute minim nostrud culpa.

Veniam Lorem proident ullamco ex consectetur voluptate et pariatur voluptate eiusmod. Ea duis est cillum cillum fugiat eu tempor adipisicing dolore et deserunt. Do consectetur cillum ullamco irure non laboris consequat proident duis proident exercitation. Occaecat excepteur non occaecat labore nostrud ut amet sint ut.

Incididunt esse laborum mollit eu eiusmod quis elit ut consectetur sunt do cupidatat. Veniam cupidatat esse elit reprehenderit. Nisi deserunt ipsum tempor occaecat tempor veniam aliqua do do amet quis quis quis occaecat.`,
            image: 'breathe.jpg'
        },
        {   title: 'Mindfulness',
            description: `Being mindful helps decrease depresssion, increase emotional regulation and improves cognitive functions. Fugiat elit in nostrud in laboris enim aute dolor sunt cillum duis minim eiusmod. Enim sint esse sit ut commodo nulla deserunt et commodo laborum esse. Minim pariatur irure do sint. Aliquip qui sint duis Lorem consectetur fugiat nostrud labore exercitation esse ipsum. Aliquip fugiat consequat sunt quis reprehenderit consectetur excepteur. Nulla excepteur deserunt proident sint aliquip est dolore voluptate sint est sit nisi duis. Ullamco aliquip labore nostrud consequat ea ex laborum sint exercitation nulla sit aute. Anim est incididunt eu nostrud consectetur aliquip duis et do est labore incididunt. Non id do elit id aute anim. Ex ullamco dolor qui proident reprehenderit incididunt deserunt Lorem culpa magna consequat enim. Id fugiat voluptate minim ipsum eu aliqua voluptate amet velit. Ea mollit eiusmod non occaecat pariatur ea. Dolore eu enim occaecat nisi commodo anim enim non qui ex eiusmod consequat aute magna. Nulla nostrud nisi ullamco aute mollit nulla nostrud sint sint elit reprehenderit.

Reprehenderit pariatur est laborum eu mollit dolor enim dolore sit sit consectetur consequat tempor fugiat. Occaecat magna ipsum officia labore laborum labore quis do duis do est culpa sint. Id laboris quis aliquip cillum magna eu ex excepteur minim.`,
            image: 'mindful.jpg'
        },
        {
            title: 'Metta',
            description: `Expressing joy and gratitude for others can bring feelings of trust, love and appreciation to you. Fugiat cupidatat sint aliquip veniam aliqua. Ex nisi minim commodo cupidatat nulla. Ad commodo cillum laborum enim enim ad ipsum laborum veniam nisi dolore tempor exercitation voluptate. Sint velit in incididunt consectetur proident. Elit do esse reprehenderit id cillum ullamco occaecat officia dolore est. Ullamco est in nisi eu. Ut est reprehenderit adipisicing labore adipisicing amet id cillum nisi cillum proident eu. Nulla sit aute irure irure do ex nisi non adipisicing.

Est aute cillum aliqua sint proident aliquip aute excepteur reprehenderit mollit amet. Incididunt adipisicing occaecat aute magna enim amet. Fugiat Lorem magna qui nostrud enim. Occaecat laboris sunt eu pariatur exercitation ea et ut cupidatat reprehenderit amet enim amet. Aliqua adipisicing minim exercitation voluptate non mollit fugiat quis qui aute est. Culpa laboris eu laborum esse. Nulla elit cillum ipsum in.`,
            image: 'metta-practice.jpg'
        }
    ]);

    console.log('meditation seeded')
    await Nutrition.deleteMany();
    const nutrition = await Nutrition.insertMany([
        {
            title: 'Diet',
            description: `Some benefits of dieting include muscle development, digestive system function, and achieving and maintaining a healthy weight. Aliqua incididunt excepteur mollit est adipisicing aliquip fugiat dolore velit aliquip. Mollit nostrud ullamco pariatur dolore nisi qui ipsum tempor aute et consectetur ea. Cillum cupidatat qui anim exercitation laborum incididunt dolor ex consectetur anim enim excepteur deserunt. Qui incididunt magna quis incididunt fugiat deserunt dolor dolore nostrud ex voluptate mollit fugiat. Consectetur cillum est et ex. Lorem velit elit Lorem laborum ipsum culpa id eiusmod sunt incididunt est magna in eu. Cupidatat adipisicing dolor cillum nulla ad duis consequat voluptate culpa duis cillum elit incididunt id. Nulla velit eiusmod cillum fugiat voluptate duis officia exercitation do officia sunt laboris culpa dolor. Enim quis excepteur fugiat ea elit culpa anim consequat id aliqua culpa ut sint labore. Consequat sit laboris Lorem qui dolor mollit non exercitation.

Fugiat laboris nisi cupidatat non in commodo ipsum non. Ipsum ut incididunt deserunt culpa. Duis esse id dolor anim est. Sint tempor in commodo et fugiat id ullamco tempor. Tempor adipisicing dolore velit qui laboris pariatur ea elit sunt irure irure culpa duis duis. Exercitation pariatur ipsum minim eu eiusmod aute pariatur consequat eu elit anim. Irure exercitation consequat veniam cupidatat sit elit.

Proident quis cillum laboris exercitation ex ea cillum cupidatat commodo veniam. Nisi nulla et pariatur aliqua elit est reprehenderit consectetur ex dolore esse do ullamco. Reprehenderit occaecat et et occaecat minim voluptate dolore incididunt enim dolore do excepteur. Exercitation sunt reprehenderit et ea laboris ad consequat. Anim duis minim enim reprehenderit non nisi occaecat eiusmod cillum culpa aute dolor. Quis eu sit nulla ut veniam nulla Lorem. Esse mollit ex et quis voluptate sint. Irure dolor eu cillum reprehenderit dolore quis laborum proident nulla aliqua esse excepteur quis et. Mollit sit minim sit cillum. Nisi aliquip labore dolore duis proident labore ullamco. Qui quis nulla culpa ipsum Lorem est culpa reprehenderit do non amet officia ea ipsum.

Ullamco nostrud nulla proident adipisicing laboris occaecat fugiat reprehenderit proident fugiat. Velit fugiat nulla cupidatat eu nostrud laborum non dolor in irure velit laborum sunt. Enim proident minim Lorem in labore et velit cupidatat non nisi do occaecat labore velit. Aliquip Lorem voluptate quis occaecat nostrud anim magna ex laborum commodo aliquip voluptate anim.

Labore velit consectetur sit consequat. Sunt laborum anim sit enim dolore ipsum. Fugiat aliqua et culpa ut occaecat excepteur sunt irure culpa consectetur.`,
            image: 'diet.jpg'
        },
        {
            title: 'High Protein',
            description: `High protein diets help reduce appetite, build muscle and aid in boosting metabolism. Eiusmod voluptate do irure elit culpa fugiat nulla. Ullamco adipisicing magna mollit magna irure mollit incididunt ea adipisicing enim. Voluptate occaecat esse deserunt consequat anim. Labore ea ad laborum dolore tempor aute fugiat ipsum exercitation nostrud ea ad. Aute duis pariatur commodo laboris cillum mollit qui Lorem ullamco deserunt enim. Tempor nulla labore id esse veniam est occaecat excepteur dolor dolor fugiat pariatur mollit magna. Ut in eiusmod in sunt occaecat nulla in duis aliquip commodo laborum. Quis do qui non duis mollit consequat sunt excepteur officia Lorem aute adipisicing et velit.

Enim ea reprehenderit aliqua culpa nisi ea occaecat ea mollit est qui eu occaecat magna. Sint irure amet nulla nostrud anim commodo velit dolor fugiat. Laboris non excepteur magna cupidatat proident reprehenderit in. Enim labore Lorem dolor quis excepteur sunt irure ut cillum reprehenderit. Esse aliquip culpa eiusmod aliqua anim ipsum commodo ex. Sunt ea tempor aute enim sunt.

Consectetur deserunt enim veniam ullamco non ad cupidatat eiusmod. Velit est Lorem laboris nisi veniam laboris. Nostrud sunt duis exercitation dolor ipsum cupidatat cupidatat voluptate cillum dolore adipisicing ea. Do irure est nulla consectetur ad ullamco ipsum nisi qui. Laboris incididunt duis consequat ad nisi.`,
            image: 'protein.jpg'
        },
        {
            title: 'Elements of Nutriton',
            description: `The seven elements of nutrition are: Protein, Fat, Carbs, Vitamins, Minerals, Fiber, Water. It is important that everyone consumes these seven nutrients on a daily basis to help them build their bodies and maintain their health. Incididunt eiusmod ea Lorem amet ad veniam minim. Laborum proident ad velit magna incididunt aute amet enim aliquip minim ea nisi aliquip anim. Excepteur sit in aute deserunt eu proident magna incididunt ex ea. Eu mollit sint ex in labore ipsum minim tempor. Excepteur aute ut minim id ullamco ea minim officia. Reprehenderit et fugiat officia qui eu proident veniam nisi ad id reprehenderit et. Eu quis sunt veniam in non enim tempor pariatur cillum. Ullamco officia quis nostrud voluptate eiusmod sunt ipsum consectetur sunt. Sint aute sint nostrud tempor eu ex ullamco reprehenderit in. Aliquip consequat ad enim eu eu pariatur quis mollit dolore exercitation.

Aute commodo aute eu exercitation mollit nostrud occaecat ex. Nisi fugiat officia irure tempor cillum in magna. Eu ullamco in ad ea ut aliquip tempor labore Lorem in anim. Ex quis Lorem officia nulla veniam elit deserunt proident duis enim. Occaecat officia qui do proident laborum sint non sunt occaecat. Qui enim nisi dolor aute exercitation consectetur ullamco veniam nostrud ex. Quis aliqua non ea nisi do ipsum nostrud laborum elit magna laboris.

Velit id eiusmod dolor et esse. Qui aliquip reprehenderit laborum velit voluptate eu cillum. Aute sint aliqua irure nostrud amet nisi eu excepteur eu dolor mollit eu non. Ut occaecat pariatur enim mollit laborum labore. Consectetur enim id eu tempor eu ipsum laboris. Nulla qui est magna amet aliquip ex sunt et elit in esse cupidatat aliquip.`,
            image: 'nutrition-elements.jpg'
        }
    ])

    console.log('nutrition seeded');

    process.exit();

});