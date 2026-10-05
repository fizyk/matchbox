window.BENCHMARK_DATA = {
  "lastUpdate": 1791217438960,
  "repoUrl": "https://github.com/fizyk/matchbox",
  "entries": {
    "Matchbox performance benchmarks on Python 3.14": [
      {
        "commit": {
          "author": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "committer": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "distinct": true,
          "id": "f0c7f4059fcd402d72199780baa23ef012602997",
          "message": "Release 2.0.0",
          "timestamp": "2026-10-05T16:23:04Z",
          "tree_id": "178af6ab067045689ebe4bdcc5c556c757f297d1",
          "url": "https://github.com/fizyk/matchbox/commit/f0c7f4059fcd402d72199780baa23ef012602997"
        },
        "date": 1791217422760,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 10.496793370282276,
            "unit": "iter/sec",
            "range": "stddev: 0.00026895682588816986",
            "extra": "mean: 95.26718920000121 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 10.461763701057695,
            "unit": "iter/sec",
            "range": "stddev: 0.0023565814198629144",
            "extra": "mean: 95.58617729999952 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 1.462388824170972,
            "unit": "iter/sec",
            "range": "stddev: 0.0016367039879992946",
            "extra": "mean: 683.8126655999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 1.443084127348965,
            "unit": "iter/sec",
            "range": "stddev: 0.0014149435502744895",
            "extra": "mean: 692.9602931999966 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 11.626789047457832,
            "unit": "iter/sec",
            "range": "stddev: 0.0005413544036280624",
            "extra": "mean: 86.0082689999994 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 635631.8833770315,
            "unit": "iter/sec",
            "range": "stddev: 3.0843579822319586e-7",
            "extra": "mean: 1.573237633529531 usec\nrounds: 100251"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 595147.6729581829,
            "unit": "iter/sec",
            "range": "stddev: 8.597804905211622e-7",
            "extra": "mean: 1.6802552466171927 usec\nrounds: 46077"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 695637.1573290271,
            "unit": "iter/sec",
            "range": "stddev: 4.1176099781433323e-7",
            "extra": "mean: 1.4375310310329115 usec\nrounds: 141423"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 688508.9508667839,
            "unit": "iter/sec",
            "range": "stddev: 3.138829174824737e-7",
            "extra": "mean: 1.4524139428268448 usec\nrounds: 154560"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 662937.7366009282,
            "unit": "iter/sec",
            "range": "stddev: 3.2355922017770555e-7",
            "extra": "mean: 1.508437285720506 usec\nrounds: 159262"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 633849.1138767527,
            "unit": "iter/sec",
            "range": "stddev: 3.4704116499101357e-7",
            "extra": "mean: 1.577662535305591 usec\nrounds: 116104"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 87.88322935409568,
            "unit": "iter/sec",
            "range": "stddev: 0.0002856329848379179",
            "extra": "mean: 11.378735253012144 msec\nrounds: 83"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 21.001118267545518,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868902969493361",
            "extra": "mean: 47.61651199999998 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 33.484444870016794,
            "unit": "iter/sec",
            "range": "stddev: 0.00013299125093788744",
            "extra": "mean: 29.864613371429577 msec\nrounds: 35"
          }
        ]
      }
    ],
    "Matchbox performance benchmarks on Python 3.15": [
      {
        "commit": {
          "author": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "committer": {
            "email": "254007264+actions-release-app[bot]@users.noreply.github.com",
            "name": "actions-release-app[bot]",
            "username": "actions-release-app[bot]"
          },
          "distinct": true,
          "id": "f0c7f4059fcd402d72199780baa23ef012602997",
          "message": "Release 2.0.0",
          "timestamp": "2026-10-05T16:23:04Z",
          "tree_id": "178af6ab067045689ebe4bdcc5c556c757f297d1",
          "url": "https://github.com/fizyk/matchbox/commit/f0c7f4059fcd402d72199780baa23ef012602997"
        },
        "date": 1791217427647,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[colour]",
            "value": 12.78347010623655,
            "unit": "iter/sec",
            "range": "stddev: 0.0010879005386830421",
            "extra": "mean: 78.22602092307781 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[legs]",
            "value": 12.466658298976245,
            "unit": "iter/sec",
            "range": "stddev: 0.0009652732761191453",
            "extra": "mean: 80.21395758333405 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[size]",
            "value": 1.74757224266962,
            "unit": "iter/sec",
            "range": "stddev: 0.006454164815317774",
            "extra": "mean: 572.2224097999998 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[weight]",
            "value": 1.6631550799221422,
            "unit": "iter/sec",
            "range": "stddev: 0.01293427833857733",
            "extra": "mean: 601.2668404000025 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_create[armrest]",
            "value": 13.950160373634318,
            "unit": "iter/sec",
            "range": "stddev: 0.0012384361322376632",
            "extra": "mean: 71.68376371428613 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndMatching]",
            "value": 744718.1171124254,
            "unit": "iter/sec",
            "range": "stddev: 3.3885638268926497e-7",
            "extra": "mean: 1.3427899456473626 usec\nrounds: 116646"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndMatching]",
            "value": 717027.2692877293,
            "unit": "iter/sec",
            "range": "stddev: 2.8851235034089485e-7",
            "extra": "mean: 1.3946470975830059 usec\nrounds: 162365"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndNotMatching]",
            "value": 834500.5647300952,
            "unit": "iter/sec",
            "range": "stddev: 2.9643874599263497e-7",
            "extra": "mean: 1.1983215377732344 usec\nrounds: 143246"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndNotMatching]",
            "value": 768906.0039732514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025121682277303227",
            "extra": "mean: 1.3005490851061008 usec\nrounds: 165865"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsSameValueAndOneMatchingOtherNo]",
            "value": 761418.4476129499,
            "unit": "iter/sec",
            "range": "stddev: 3.987868891917462e-7",
            "extra": "mean: 1.3133382874226442 usec\nrounds: 155764"
          },
          {
            "name": "benchmarks/test_matchbox_add.py::test_add[TwoElementsDifferentValueAndOneMatchingOtherNo]",
            "value": 749941.3010236216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012575617989105095",
            "extra": "mean: 1.333437695237033 usec\nrounds: 171263"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_matchbox",
            "value": 127.12444135147332,
            "unit": "iter/sec",
            "range": "stddev: 0.0005148861905947714",
            "extra": "mean: 7.866307921347734 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_after_another",
            "value": 27.349287091082193,
            "unit": "iter/sec",
            "range": "stddev: 0.0020139859677279844",
            "extra": "mean: 36.564024380952546 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_matchbox_match.py::test_match_one_for_multi_condition",
            "value": 41.366548668361524,
            "unit": "iter/sec",
            "range": "stddev: 0.0037740114847719572",
            "extra": "mean: 24.17412213953523 msec\nrounds: 43"
          }
        ]
      }
    ]
  }
}