import { MainCollection } from "./collections";

export const query = MainCollection.createQuery('getMain', {
    _id: 1,
    linkedItems: {
        _id: 1,
        title: 1,
    },
});


if (Meteor.isServer) {
    query.expose();
}
