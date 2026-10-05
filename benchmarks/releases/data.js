window.BENCHMARK_DATA = {
  "lastUpdate": 1791217436933,
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
    ]
  }
}