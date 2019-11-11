export const MainCollection = new Mongo.Collection('main');
export const LinkedColletion = new Mongo.Collection('linked');

MainCollection.addLinks({
    linkedItems: {
        collection: LinkedColletion,
        type: 'many',
        field: 'linkIds',
    },
});
