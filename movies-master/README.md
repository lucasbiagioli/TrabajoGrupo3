# Movies

## Description
Dataset used in Ni et al. (2019).

## Availability and License

The dataset (and other rating datasets) are available at their [website](https://nijianmo.github.io/amazon/index.html) with no explicit license given ('Please cite the following paper if you use the data in any way'). Cite as follows:

```
@inproceedings{ni2019justifying,
  title={Justifying recommendations using distantly-labeled reviews and fine-grained aspects},
  author={Ni, Jianmo and Li, Jiacheng and McAuley, Julian},
  booktitle={Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP)},
  pages={188--197},
  year={2019}
}
```

## Datasets

### movies.json (5.18GB)
This dataset contains 8,7 million movie and tv ratings from Amazon.

#### Statistics
```
#record: 8765568
#nodes per record: [15, 729]  -  avg = 23.13

TYPE distribution:
objects: [1, 2]  -  avg = 1.95
 arrays: [0, 1]  -  avg = 0.0
   keys: [7, 13]  -  avg = 11.06
 values: [7, 714]  -  avg = 10.11

DEPTH distribution:
maximum: [2, 4]  -  avg = 3.9

OUTDEGREE distribution OBJECT:
minimum: [1, 11]  -  avg = 1.42
average: [4.5, 11.0]  -  avg = 5.76
maximum: [7, 12]  -  avg = 10.11

OUTDEGREE distribution ARRAY:
minimum: [0, 704]  -  avg = 0.0
average: [0, 704.0]  -  avg = 0.0
maximum: [0, 704]  -  avg = 0.0
```

#### Example
```
{
  "overall": 5.0,
  "verified": true,
  "reviewTime": "03 11, 2013",
  "reviewerID": "A3478QRKQDOPQ2",
  "asin": "0001527665",
  "style": {
    "Format:": " VHS Tape"
  },
  "reviewerName": "jacki",
  "reviewText": "really happy they got evangelised .. spoiler alert==happy ending liked that..since started bit worrisome... but yeah great stories these missionary movies, really short only half hour but still great",
  "summary": "great",
  "unixReviewTime": 1362960000
}
```
