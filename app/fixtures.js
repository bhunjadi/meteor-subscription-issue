import {MainCollection, LinkedColletion} from './collections';

export function createFixtures() {
    MainCollection.remove({});
    LinkedColletion.remove({});

    const linkIds = [];
    _.times(10, (n) => {
        linkIds.push(LinkedColletion.insert({
            title: `Link #${n + 1}`,
        }));
    });

    _.times(30, () => {
        const linkNumber = _.random(0, 4);
        const ids = _.sample(linkIds, linkNumber);

        MainCollection.insert({
            linkIds: ids,
        });
    });
}
