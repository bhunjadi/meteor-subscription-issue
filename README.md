# meteor-subscription-issue

This repo shows meteor subscription slowdown when upgrading from `1.8.0.2` to `1.8.1`.

There are two branches:
- 1.8.0
- 1.8.1

Testing methodology:
- two collections - `Main` and `Linked`
- 30 documents in Main collection, each has 0..3 documents from Linked collection associated
- using [grapher](https://github.com/cult-of-coders/grapher) and [grapher-react](https://github.com/cult-of-coders/grapher-react). [meteor-publish-composite](https://github.com/Meteor-Community-Packages/meteor-publish-composite) is dependency of `grapher`
- subscribe to whole Main collection and also load all Linked items

### How to test
1. Clone the repo, install npm dependencies and run meteor.
2. Open in browser, open dev console. Hit Retry several times and check the results in the console.

### Results
First load should be ignored. Clicking on Retry we get more representative results.

#### 1.8.0.2.
```
git clone https://github.com/bhunjadi/meteor-subscription-issue.git meteor-subscription-issue
meteor npm i
meteor run
```

Mostly between 90-110ms

#### 1.8.1.
```
git checkout 1.8.1
meteor run
```

Mostly between 180-230ms.

### Conclusion

1. 1.8.1 is around two times slower than 1.8.0.2
2. When running from a checkout I bisected meteor devel branch and it appears that [this commit](https://github.com/meteor/meteor/commit/4a0bf12d0e58f146c6720af7f2f2aacc5d7d2de0) caused the issue.
3. The same issue is present for 1.8.2, too
4. `grapher` and `grapher-react` - the same versions are used for each Meteor version so I would rule them out
